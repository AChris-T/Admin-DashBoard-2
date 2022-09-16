import "./navbar.scss"
import "./nav.css"
import HomeIcon from '@mui/icons-material/Home';
import { Settings } from "@material-ui/icons";
import Person from "@mui/icons-material/Person";
import Notifications from "@mui/icons-material/Notifications";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = (e) => {
    const contain = document.querySelector('.navContainer');
    const scrollTop = window.scrollY;
    scrollTop >= 2 ? contain.classList.add('is-sticky') : contain.classList.remove('is-sticky');
    };


  return (
    <div className="navbar">
       <div className="navContainer">
          <div className="navLinks">
            <span><HomeIcon className="navIcon"/> / Dashboard</span>
            <h3>Dashboard</h3>
          </div>
          <div className="navSearch">
          <input type="text" placeholder="Search here" className="navInput" />
          <div className="navIcons">
            <Person className="navIcon"/>
            <Settings className="navIcon"/>
            <Notifications className="navIcon"/>
          </div>
          </div>
       </div>
      </div>
  )
}

export default Navbar