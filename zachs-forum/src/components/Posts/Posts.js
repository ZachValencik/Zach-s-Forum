import PostItem from './PostItem'
const Posts = (props) => {
  return (
    <div>
     <ul className="expenses-list">
      {props.post.map((p) => (
        <PostItem
          key={p.id}
          post={p.post}
          date={p.date}
        />
      ))}
    </ul>
      
    </div>
  );
};

export default Posts;
