import "./tablelist.scss"
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import {ResponsiveContainer}  from 'recharts';







const rows = [
  {
    id:1,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg",
    name:"Material UI XD Version",
    people:
      <AvatarGroup max={4} style={{ display:"flex"}}>
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
        <Avatar alt="Agnes Walker" src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" style={{width:"25px", height:"25px",cursor:"pointer"}}/>
      </Tooltip>
      </AvatarGroup>,
      amount:"$14,000",
      progress: ""
    },
  {
    id:2,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg",
    name:"Add Progress Track",
    people:
    <AvatarGroup max={2} style={{display:"flex",alignItems:"center", marginRight:"40px"}}>
      <Tooltip title="Remy Sharp" arrow>
        <Avatar alt="Remy Sharp" src= "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg" style={{width:"25px", height:"25px", cursor:"pointer", marginLeft:"-30px"}}/>
      </Tooltip>
      <Tooltip title="Travis Howard" arrow>
        <Avatar alt="Travis Howard" src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg" style={{width:"25px", height:"25px", cursor:"pointer", backgroundColor:"red"}} />
      </Tooltip>,
    </AvatarGroup>,
    amount:"$3,000",
    progress:""
  
  },
  {
    id:3,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg",
    name:"Fix Platform Errors",
    people:
      <AvatarGroup max={2} style={{ display:"flex",alignItems:"center",marginRight:"40px" }}>
        <Tooltip title="Remy Sharp" arrow>
        <Avatar alt="Remy Sharp" src= "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg" style={{width:"25px", height:"25px", cursor:"pointer", marginLeft:"-30px"}}/>
        </Tooltip>
      <Tooltip title="Travis Howard" arrow>
        <Avatar alt="Travis Howard" src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg" style={{width:"25px", height:"25px", cursor:"pointer", backgroundColor:"red"}} />
      </Tooltip>,
    </AvatarGroup>,
    amount:"Not set",
    progress:""
  },
  {
    id:4,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg",
    name:"Launch our Mobile App",
    people:
    <AvatarGroup max={4} style={{ display:"flex"}}>
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
        <Avatar alt="Agnes Walker" src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" style={{width:"25px", height:"25px",cursor:"pointer"}}/>
      </Tooltip>
      </AvatarGroup>,
    amount:"$20,500",
    progress:""
  },
  {
    id:5,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-jira.c19fd4e416babfbd0fdb0a794188c601.svg",
    name:"Add the New Pricing Page",
    people:
    <AvatarGroup max={2} style={{display:"flex",alignItems:"center", marginRight:"60px" }}>
    <Tooltip title="Remy Sharp" arrow>
    <Avatar alt="Remy Sharp" src= "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg" style={{width:"25px", height:"25px", cursor:"pointer", marginLeft:"-30px"}}/>
    </Tooltip>
    </AvatarGroup>
    ,
    amount:"$500",
    progress:""
  },
  {
    id:6,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg",
    name:"Redesign New Online Shop",
    people:
    <ResponsiveContainer>
    <AvatarGroup max={2} style={{display:"flex",alignItems:"center", marginRight:"40px"}}>
        <Tooltip title="Remy Sharp" arrow>
        <Avatar alt="Remy Sharp" src= "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg" style={{width:"25px", height:"25px", cursor:"pointer", marginLeft:"-30px"}}/>
        </Tooltip>
      <Tooltip title="Travis Howard" arrow>
        <Avatar alt="Travis Howard" src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg" style={{width:"25px", height:"25px", cursor:"pointer", backgroundColor:"red"}} />
      </Tooltip>
    </AvatarGroup>
    </ResponsiveContainer>,
    amount:"$2,000",
    progress:""
  }
];



const options = [
  'Action',
  'Another Action',
  'Something else',
];

const ITEM_HEIGHT = 48;

const TableList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="tableList">
    <Box className="box"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 610,
        height: 558,
      },
    }}
    >
     <Paper elevation={3} className="boxTitle">
        <div className="tablehead">
            <div className="tableTitle">
              <div className="subTitle">
                <h5>Projects</h5>
                <span><DoneIcon className="specialIcon" /><span className="special">30 done </span> this month</span>
              </div>
              <div className="subdrop">
                <IconButton className="subdropIcon"
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                  'aria-labelledby': 'long-button',
                   }}
                    anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                  style: {
                    position:"relative",
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                  marginLeft:"-170px",
                  marginTop:"-30px",
                  },
                   }}
                  >
                  {options.map((option) => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                  </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
            <TableContainer  className="tableBig">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tablecontainer">COMPANIES </TableCell>
                  <TableCell className="tablecontainer">MEMBERS</TableCell>
                  <TableCell className="tablecontainer">BUDGET</TableCell>
                  <TableCell className="tablecontainer">COMPLETION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody classNaame="tablebody">
                {rows.map((row) => (
                  <TableRow 
                    key={row.id} 
                    >
                    <TableCell className="tablecontainer">
                    <div className="containertable" style={{width:"230px"}}>
                    <img src={row.image} alt="jkaf"  className="tableImage"/>
                    {row.name} 
                    </div>
                    </TableCell>
                    <TableCell className="tablePeople">{row.people}</TableCell>
                    <TableCell className="tablecontainer">{row.amount}</TableCell>
                    <TableCell className="tablecontainer">{row.progress}</TableCell>
                  </TableRow>
                ))}
              </TableBody> 
            </Table>
          </TableContainer>
        </div>
    </Paper>
    </Box>
    </div>
  )
}

export default TableList

//884-790