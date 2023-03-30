import "./posts.scss";
import Post from '../post/Post'
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "john",
      userId: 1,
      profilePic: "",
      desc: "dfsphgkdofhdofhd",
      img: "https://images.pexels.com/photos/12320506/pexels-photo-12320506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "john",
      userId: 2,
      profilePic: "",
      desc: "dfsphgkdofhdofhd",
      img: "https://images.pexels.com/photos/12320506/pexels-photo-12320506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "john",
      userId: 3,
      profilePic: "",
      desc: "dfsphgkdofhdofhd",
      img: "https://images.pexels.com/photos/12320506/pexels-photo-12320506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return <div className="posts">
    {posts.map(post =>(
      <Post post={post} key={post.id} />
    ))}
  </div>
};

export default Posts;
