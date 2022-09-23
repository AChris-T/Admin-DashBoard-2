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
  const [isMobile, setIsMobile] = useState(true)
  return (
    <div className="sidebar">
      <button className="HamBugger" onClick={()=> setIsMobile(!isMobile)}>{isMobile ?(<MenuOpenIcon/>):(<MenuIcon/>)}</button>
      <div className={isMobile ?"container" : "containerSub"}>
      <div className="title">
        <img src={wew} alt="jkaf" />
        <h3>MaterialDashboard 2</h3>
      </div>
      <hr/>
      <div className="list" >
        <ul>
          <li className="listsub"><NavLink to="/home" exact="true" className="linklist" activeclassname="active"><DashboardIcon className="icons" /> Dashboard</NavLink></li>
          <li className="listsub"> <NavLink to="/tables" exact="true" className="linklist" activeclassname="active"><TableViewIcon className="icons"/> Tables</NavLink></li>
          <li className="listsub"><NavLink to="/bills" exact="true" className="linklist" activeclassname="active"><ReceiptLongIcon className="icons"/> Billings</NavLink></li>
          <li className="listsub"><NavLink to="/RTL" exact="true" className="linklist" activeclassname="active"><FormatTextdirectionRToLIcon className="icons"/> RTL</NavLink></li>
          {/*<li className="listsub"><NavLink to="/notifications" className="linklist" activeclassname="active"><NotificationsIcon className="icons"/> Notifications</NavLink></li>*/}
          <li className="listsub"><NavLink to="/profile"  exact="true" className="linklist" activeclassname="active"><PersonIcon className="icons"/> Profile</NavLink></li>
          <li className="listsub"><NavLink to="/Signin" exact="true" className="linklist" activeclassname="active"><LoginIcon className="icons"/> Sign In</NavLink></li>
          <li className="listsub"><NavLink to="/Signup" exact="true" className="linklist"><AssignmentIcon className="icons"/> Sign Up</NavLink></li>
        </ul>
        <button>UPGRADE TO PRO</button>
      </div>
      </div>
    </div>
  )
}

export default Sidebar