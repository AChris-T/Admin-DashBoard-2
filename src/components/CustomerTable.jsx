import "./customertable.scss"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


  
  const rows = [
    {
    id:1,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg",
    name:"John Michael",
    userName:"john@creative-tim.com",
    post:"Manager",
    section:"Organization",
    status:"ONLINE",
    date:"23/04/18",
    edit:"",
    isTrue:"true",   
    },
    {
    id:2,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
    name:"Alexa Liras",
    userName:"alexa@creative-tim.com",
    post:"Programator",
    section:"Developer",
    status:"OFFLINE",
    date:"11/01/19",
    edit:"",
    isTrue:"true",   
    },
    {
    id:3,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
    name:"Laurent Perrier",
    userName:"laurent@creative-tim.com",
    post:"Executive",
    section:"Projects",
    status:"ONLINE",
    date:"19/09/17",
    edit:"",
    isTrue:"true",   
    },
    {
    id:4,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
    name:"Michael Levi",
    userName:"michael@creative-tim.com",
    post:"Programator",
    section:"Developer",
    status:"ONLINE",
    date:"04/10/21",
    edit:"",
    isTrue:"true",   
    },
    {
    id:5,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
    name:"Richard Gran",
    userName:"richard@creative-tim.com",
    post:"Manager",
    section:"Executive",
    status:"OFFLINE",
    date:"24/12/08",
    edit:"",
    isTrue:"true",   
    },
    {
    id:6,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
    name:"Miriam Eric",
    userName:"miriam@creative-tim.com",
    post:"Programator",
    section:"Developer",
    status:"ONLINE",
    date:"14/09/20",
    edit:"",
    isTrue:"true",   
    },
  ];

const CustomerTable = () => {
  return (
    <div className='customer'>
    <Box className="box"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 910,
        height: 492,
      },
    }}
    >
    <Paper elevation={3} style={{borderRadius:"15px"}} className="paperBoxs">
        <Paper elevation={1} style={{borderRadius:"10px"}} className="paperBox">
        <h6> Authors Table</h6>
        </Paper>    
        
     <TableContainer className="tableDetails" >
      <Table className="table" size="small" aria-label="a dense table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">AUTHOR</TableCell>
            <TableCell className="tableCell">FUNCTION</TableCell>
            <TableCell className="tableCell">STATUS</TableCell>
            <TableCell className="tableCell">EMPLOYED</TableCell>
            <TableCell className="tableCell">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {rows.map((row) => (
            <TableRow key={row.id} className="tablerow">
              <TableCell className="tablesub">
                <div className="cell">
                    <img src={row.image} alt="" />
                    <span className="mail">
                        {row.name}
                        <p>
                        {row.userName}
                        </p>
                    </span>
                </div>
              </TableCell>
              <TableCell className="tablesub">
              <div className="function">
                  {row.post}
                  <p>{row.section}</p>
                </div>
              </TableCell>
              <TableCell className="tablesub">
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tablesub">
              <div className="date">
                <a href="/">{row.date}</a>
              </div>
              </TableCell>
              <TableCell className="tablesub">
                <div className="edit">
                  <a href="/">Edit</a>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
    </Paper>
    </Box>
    </div>
  )
}

export default CustomerTable