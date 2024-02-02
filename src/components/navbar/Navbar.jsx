import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./navbar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode.context";
import { AuthContext } from "../../context/auth.context";


import { Link } from "react-router-dom";



const Navbar = () => {
    const { darkMode,toggle } = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

    return(
        <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Social</span>
          </Link>
            {darkMode ? (
                <WbSunnyOutlinedIcon onClick={toggle} />
            ) : (
                <DarkModeOutlinedIcon onClick={toggle} />
            )}


          <GridViewOutlinedIcon />
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="right">
          <EmailOutlinedIcon />
          <NotificationsOutlinedIcon />
          <div className="user">
            <img src={currentUser.profilePicture} alt="" />
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
    )
}

export default Navbar