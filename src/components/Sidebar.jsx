import "./sidebar.scss"
import wew from "../images/wew.jpg"
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableViewIcon from '@mui/icons-material/TableView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { useState } from "react";


const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div className="sidebar">
      <button className="HamBugger" onClick={()=> setIsMobile(!isMobile)}>{isMobile ?(<MenuIcon/>):(<MenuOpenIcon/>)}</button>
      <div className={isMobile ?"container" : "containerSub"}>
      <div className="title">
        <img src={wew} alt="jkaf" />
        <h3>MaterialDashboard 2</h3>
      </div>
      <hr/>
      <div className="list" >
        <ul>
          <li className="listsub"><NavLink to="/" exact className="linklist" activeclassname="active"><DashboardIcon className="icons" /> Dashboard</NavLink></li>
          <li className="listsub"> <NavLink to="/tables" className="linklist" activeclassname="active"><TableViewIcon className="icons"/> Tables</NavLink></li>
          <li className="listsub"><NavLink to="/bills" className="linklist" activeclassname="active"><ReceiptLongIcon className="icons"/> Billings</NavLink></li>
          <li className="listsub"><NavLink to="/RTL" className="linklist" activeclassname="active"><FormatTextdirectionRToLIcon className="icons"/> RTL</NavLink></li>
          {/*<li className="listsub"><NavLink to="/notifications" className="linklist" activeclassname="active"><NotificationsIcon className="icons"/> Notifications</NavLink></li>*/}
          <li className="listsub"><NavLink to="/profile" className="linklist" activeclassname="active"><PersonIcon className="icons"/> Profile</NavLink></li>
          <li className="listsub"><NavLink to="/Signin" className="linklist" activeclassname="active"><LoginIcon className="icons"/> Sign In</NavLink></li>
          <li className="listsub"><Link to="/Signup" className="linklist"><AssignmentIcon classname="icons"/> Sign Up</Link></li>
        </ul>
        <button>UPGRADE TO PRO</button>
      </div>
      </div>
    </div>
  )
}

export default Sidebar