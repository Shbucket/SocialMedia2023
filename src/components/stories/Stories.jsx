import "./stories.scss";
import { useContext } from "react";
import {AuthContext} from '../../context/authContext'
const Stories = () => {

  const {currentUser} = useContext(AuthContext)
  const stories = [
    {
      id: 1,
      name: "john doe",
      img: "https://images.pexels.com/photos/12320506/pexels-photo-12320506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "john doe",
      img: "https://images.pexels.com/photos/12320506/pexels-photo-12320506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "john doe",
      img: "https://images.pexels.com/photos/12320506/pexels-photo-12320506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "john doe",
      img: "https://images.pexels.com/photos/12320506/pexels-photo-12320506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.img} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
