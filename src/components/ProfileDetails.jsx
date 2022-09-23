import React from "react"
import "./profiledetails.scss"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {NavLink} from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';


const settings=[
    {
        id:1,
        label:"Email me when somenone follows me",
        status:<Switch/>,
        new:"New launches and projects",
    },
    {
        id:2,
        label:"Email me when someone answer on my post",
        status:<Switch/>,
        new:"Monthly product updates",
    },
    {
        id:3,
        label:"Email me when someone mention me ",
        status:<Switch/>,
        new:"Subscribe to newsletter",
    },
]
const prof=[
    {
        id:1,
        name:"Full Name:",
        info:" Alec M. Thompson"
    },
    {
        id:2,
        name:"Mobile:",
        info:"(44) 123 1234 123"
    },
    {
        id:3,
        name:"Email:",
        info:"alecthompson@mail.com"
    },
    {
        id:4,
        name:"Location:",
        info:"USA"
    },
    {
        id:5,
        name:"Social:",
        info:<div>
            <FacebookIcon style={{color:"#4267B2", fontSize:"18px"}}/> 
            <TwitterIcon style={{color:"#1DA1F2", fontSize:"18px"}}/>
            <InstagramIcon style={{fontSize:"18px",color:"rgb(52, 71, 103)"}}/>
        </div>
    },
   
]
const conver=[
    {
        id:1,
        image:"https://demos.creative-tim.com/material-dashboard-react/static/media/kal-visuals-square.3210e28a48ff572ae88b.jpg",
        details:"",
        name:"Sophie B.",
        reply:"Hi! I need more information..",
        
    },
    {
        id:2,
        image:"https://demos.creative-tim.com/material-dashboard-react/static/media/marie.c28f32663b6432b46f78.jpg",
        details:"",
        name:"Anne Marie",
        reply:"Awesome work, can you..",
    },
    {
        id:3,
        image:"https://demos.creative-tim.com/material-dashboard-react/static/media/ivana-square.f7bc23b269d1d2509c82.jpg",
        details:"",
        name:"Ivanna",
        reply:"About files I can..",
        
    },
    {
        id:4,
        image:"https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
        details:"",
        name:"Peterson",
        reply:"Have a great afternoon..",
        
    },
    {
        id:5,
        image:"https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
        details:"",
        name:"Nick Daniel",
        reply:"Hi! I need more information..",
        
    }
]
const project=[
    {
        id:1,
        img:"https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg",
        name:"Project #1",
        title:"Modern",
        details:"As Uber works through a huge amount of internal management turmoil.",
        people:"",
    },
    {
        id:2,
        img:"https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-2.b4e5397c9846645ba275.jpg",
        name:"Project #2",
        title:"Scandinavian",
        details:"Music is something that everyone has their own specific opinion about.",
        people:"",
    },
    {
        id:3,
        img:"https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-3.74d13fcbd3c631fc7908.jpg",
        name:"Project #3",
        title:"Minimalist",
        details:"Different people have different taste, and various types of music.",
        people:"",
    },
    {
        id:4,
        img:"https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-4.5b448fd339a14695f6aa.jpeg",
        name:"Project #4",
        title:"Gothic",
        details:"Why would anyone pick blue over pink? Pink is obviously a better color.",
        people:"",
    },
]

const ProfileDetails = () => {
  return (
  <div className="profile">
    <Box className="profilebox"
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 900,
            height: "auto",
            },
            }}
        >
       <div elevation={3} className="boxTitle">
       </div>
       <Paper elevation={3} className="profileBg">
            <div className="profileHead">
                <div className="imgCont">
                    <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg" alt="profile" />
                    <div className="imgSMs">
                        <h4>Richard Davids</h4>
                        <h6>CEO / Co-Founder</h6>
                    </div>
                </div>
                <div className="profileMenu">
                    <div className="menudetails">
                        <li  className="menulist"><NavLink to="/profile" className="menulink" activeclassname="menuactive"><HomeIcon/>APP</NavLink></li>
                        <li className="menulist"><NavLink to="/" className="menulink" activeclassname="menuactive"><MailOutlineIcon/>Message</NavLink></li>
                        <li className="menulist"><NavLink to="/profile" className="menulink" activeclassname="menuactive"><SettingsIcon/>Settings</NavLink></li>
                    </div>
                </div>
            </div>
            <div className="profileFtf">
                <div className="profilesms">
                    <div className="profiles">
                        <h4>Platform Settings</h4> 
                        <h3>Account</h3>
                        {settings.map((setting)=>(
                        <div className="switchDetails" key={setting.id}>
                            <FormControl component="fieldset">
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                    value="top"
                                    control={<Switch color="primary" />}
                                    labelPlacement="top"
                                    
                                    />
                                    <h5>{setting.label}</h5>
                                </FormGroup>
                            </FormControl>
                        </div>
                        ))}
                        <h3>Application</h3>
                        {settings.map((setting)=>(
                            <div className="switchDetails" key={setting.id}>
                            <FormControl component="fieldset">
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                    value="top"
                                    control={<Switch color="primary" />}
                                    labelPlacement="top"
                                    className="switch"
                                    
                                    />
                                <h5>{setting.new}</h5>
                            </FormGroup>
                            </FormControl>
                            </div>
                            ))}
                    </div>
                    <div className="profileInformation">
                    <span className="headprof">
                    <h4>Profile Information</h4>
                    <EditIcon className="headIcon"/>
                    </span>
                    <div className="profInfo" >
                        <h6>Hi, I’m Alec Thompson, Decisions: If you can’t decide, 
                            the answer is no. If two equally difficult paths,
                            choose the one more painful in the short term
                            (pain avoidance is creating an illusion of equality).
                        </h6>
                        {prof.map((profs)=>(
                            <div className="profInfoDet" key={profs.id}>
                                <span className="Name">
                                    <h4>{profs.name}</h4>
                                    <h6>{profs.info}</h6>
                                </span>
                            </div>
                         ))}


                     </div>
                    </div>
                </div>
                <div className="conversation">
                <div className="conversations">
                    <h4>Conversations</h4>
                    {conver.map((convers)=>(
                        <div className="convescont" key={convers.id}>
                            <div className="conversms" style={{display:"flex"}}>
                                <img src={convers.image} alt="in"  className="converImage"/>
                                <div className="convdetails">
                                    <h4>{convers.name}</h4>
                                    <h6>{convers.reply}</h6>
                                </div>
                            </div>
                            <h5>Reply</h5>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            <div className="projects">
                    <div className="project">
                    <h4>Projects</h4>
                    <h6>Architects design houses</h6>
                    </div>
                    <div className="projectdisplays">
                     {project.map((projects)=>(
                         <div className="projectdisplay" key={projects.id}>
                         <img src={projects.img} alt="proje" className="imgproject" />
                         <h5>{projects.name}</h5>
                         
                         <h4>{projects.title}</h4>
                         <p>{projects.details}</p>
                         <span className="btn">
                         <button>View Project</button>
                         <AvatarGroup max={4} style={{ display:"flex", marginLeft:"-20px"}}>
                         <Tooltip title="Remy Sharp" arrow>
                         <Avatar alt="Remy Sharp" src= "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg" style={{width:"25px", height:"25px", cursor:"pointer"}}/>
                         </Tooltip>
                         <Tooltip title="Travis Howard" arrow>
                         <Avatar alt="Travis Howard" src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg" style={{width:"25px", height:"25px", cursor:"pointer"}} />
                         </Tooltip>
                         <Tooltip title="Cindy Baker" arrow>
                         <Avatar alt="Cindy Baker" src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"  style={{width:"25px", height:"25px", cursor:"pointer"}}/>
                         </Tooltip>
                         <Tooltip title="Agnes Walker" arrow>
                         <Avatar alt="Agnes Walke r" src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" style={{width:"25px", height:"25px",cursor:"pointer"}}/>
                         </Tooltip>
                         </AvatarGroup>
                         </span>
                         </div>
                         ))}
                    </div>
            </div>
       </Paper>
    </Box>
    </div>
  )
}

export default ProfileDetails
