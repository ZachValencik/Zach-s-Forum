import Posts from "./components/Posts/Posts";
import PostForm from "./components/NewPost/PostForm";
import React, { useState } from "react";
const DUMMY_POSTS = [
  {
    id: 1,
    post: "Dummy Data",
    date: new Date(2020, 7, 14),
  },
  {
    id: 2,
    post: "Dummy Data #2",
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [posts, SetPosts] = useState(DUMMY_POSTS);

  const addPostHandler = (post) => {
    console.log(`This is data from PostForm.js in App.js ${post}`);
    console.log(posts);
    //console.log("in APp.js")
    // console.log(expense); // this data started from expenseForm then went to New Expenses then finally here to app.js
    SetPosts((prevPosts) => {
      return [post, ...prevPosts];
    });

  };
  return (
    <div>
      <h2>Zachs Posts!</h2>
      <Posts post={posts} />
      <PostForm onAddPost={addPostHandler} />
    </div>
  );
};

export default App;
