import './navbar.scss';
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="NavBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>naples social</span>
        </Link>
        <HomeIcon />
        <DarkModeIcon />
        <GridViewIcon />
        <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      </div>
      <div className="right">
        <PersonOutlineIcon/>
        <EmailIcon/>
        <NotificationsIcon/>
        <div className="user">
            <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar