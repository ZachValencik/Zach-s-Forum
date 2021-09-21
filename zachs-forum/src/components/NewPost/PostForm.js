//test
import React, { useState } from "react";
const PostForm = () => {
  const [enteredPost, setEnteredPost] = useState("");

  const postChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPost(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let d = new Date();
    d = new Date(d);
    console.log(`YOu have posted ${enteredPost}`);
    const postData ={
      post: enteredPost,
      date: d.toString()

    }
    console.log(postData)
    setEnteredPost("");
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Post a new Message</label>
      <div>
        <input type="text" value={enteredPost} onChange={postChangeHandler} />
      </div>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PostForm;
