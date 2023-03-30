import "./comments.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //temp
  const comments = [
    {
      id: 1,
      desc: "This is a comment",
      name: "John Smith",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/15173121/pexels-photo-15173121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      desc: "This is a comment",
      name: "John Smith",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/15173121/pexels-photo-15173121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      desc: "This is a comment",
      name: "John Smith",
      userId: 3,
      profilePicture:
        "https://images.pexels.com/photos/15173121/pexels-photo-15173121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
