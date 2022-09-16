import "./customerprogress.scss"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const rows = [
    {
    id:1,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-asana.d758f410d82760a61d1eabcb03409de6.svg",
    name:"Asana",
    post:"Manager",
    section:"Organization",
    status:"working",
    progress:"",
    percentage:"80%",   
    },
    {
    id:2,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/github.067f80f311bc16bd0d1216457d09bdb3.svg",
    name:"Github",
    post:"Programator",
    section:"Developer",
    status:'done',
    date:"11/01/19",
    progress:""
    ,
    percentage:"50%",      
    },
    {
    id:3,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg",
    name:"Atlassian",
    post:"Executive",
    section:"Projects",
    status:"canceled",
    date:"19/09/17",
    progress:""
    ,
    percentage:"20%",      
    },
    {
    id:4,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg",
    name:"Spotify",
    post:"Programator",
    section:"Developer",
    status:"canceled",
    date:"04/10/21",
    progress:"",
    percentage:"50%",      
    },
    {
    id:5,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg",
    name:"Slack",
    post:"Manager",
    section:"Executive",
    status:"working",
    date:"24/12/08",
    progress:"",
    percentage:"30%",      
    },
    {
    id:6,
    image:"https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg",
    name:"Invesion",
    post:"Programator",
    section:"Developer",
    status:"done",
    date:"14/09/20",
    progress:""
    ,
    percentage:"80%",      
    },
  ];

const CustomerProgress = () => {
  return (
    <div className='progressCust'>
    <Box className="box"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 5,
        width: 910,
        height: 500,
      },
    }}
    >
    <Paper elevation={3} style={{borderRadius:"15px"}} className="custpaper">
        <Paper elevation={1} className="custHead" style={{borderRadius:"10px"}}>
            <h6> Projects Table</h6>
        </Paper>
        <TableContainer className="tableDetails">
        <Table className="table" size="small" aria-label="a dense table">
          <TableHead className="tableHead">
            <TableRow className="tableRow">
              <TableCell className="tableCell">PROJECT</TableCell>
              <TableCell className="tableCell">BUDGET</TableCell>
              <TableCell className="tableCell">STATUS</TableCell>
              <TableCell className="tableCell">COMPLETION</TableCell>
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
                    <span className="status">{row.status}</span>
                </TableCell>
                <TableCell className="tablesub">
                <div className="date">
                  {row.percentage}
                  <a href="/">{row.progress}</a>
                </div>
                </TableCell>
                <TableCell className="tablesub">
                  <div className="edit">
                    <a href="/"><MoreVertIcon/></a>
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

export default CustomerProgress
