import React, { useEffect, useState } from 'react';
import './UserReview.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function UserReview(props) {
  const r1=props.r1;
  const r2=props.r2;
  const r3=props.r3;
  const r4=props.r4;
  const [comments, setComments] = useState([
    { id: 1, author: "Santhosh Krishna", body:r1},
    { id: 2, author: "Tamil Selvan", body:r2 },
    { id: 3, author: "Velmurugan", body: r3},
    { id: 3, author: "Varun", body:r4},
  ]);
  const handleDelete=(id)=>{
    setComments(comments.filter(task=>(task.id!==id)))
  }
  const [open, setOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const author = event.target.elements.author.value;
    const body = event.target.elements.body.value;
    addComment(author, body);
    event.target.reset();
    setOpen(false);
  };
  const addComment = (author, body) => {
    const newComment = { id: comments.length + 1, author, body };
    setComments([...comments, newComment]);
  };

  const getCommentsTitle = (count) => {
    return (
        <div style={{ color: 'white', marginLeft: '-750px' }}>
            {count === 0 ? 'No reviews yet' : count === 1 ? '1 review' : `${count} reviews`}
        </div>
    );
}


  return (
    <div className="containeru">
    <div className="comment-box">
<h2 className='text'>User Review!</h2>
      {open?<CloseOutlinedIcon className='post-button1'sx={{height:"40px",width:"40px"}} onClick={()=>setOpen(false)}/>:<Button
        variant="outlined"
        size="small"
        style={{ color: 'goldenrod', border: 'none', float: 'right' }}
        onClick={()=>setOpen(true)}
        sx={{ "&:hover": { backgroundColor: 'transparent', border: 'none' } }}
      >
        <span className='text1'>+ Review</span>
      </Button>}
      <div>
      {open && (
        <form className="comment-form" onSubmit={handleSubmit}>
          <div className="comment-form-fields">
            <input placeholder="Name" required name="author" />
            <br />
            <textarea placeholder="Comment" rows="4" required name="body" />
          </div>
          <div className="comment-form-actions">
            <button className='post-button' type="submit">Post</button>
          </div>
        </form>
      )}
    </div>
      <h4 className="comment-count">{getCommentsTitle(comments.length)}</h4>
           <div className="comment-list">
          {comments.map((comment) => (     
               <div className="comment">
                   <div className='border'>
      <div style={{display:"flex"}}>
      <Avatar sx={{ height: "30px", width: "30px", position: "relative", top: "10px", left:"10px"}}/>

        <h6 className="comment-header" >{comment.author} </h6>
        </div>
        <p className="comment-body">- {comment.body}</p>
        <div className="comment-footer">
         <DeleteIcon className="comment-footer-delete" onClick={()=>handleDelete(comment.id)} sx={{float:"right",cursor:'pointer'}}/>
        </div>
      </div></div>
          ))}
        </div>
    </div></div>
  );
}

export default UserReview;