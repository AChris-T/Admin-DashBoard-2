import "./chart.scss"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';


const Chart = () => {
    const data = [
        {
          "name": "M",
          "pv": 24
        },
        {
          "name": "T",
          "pv": 50
        },
        {
          "name": "W",
          "pv": 60
        },
        {
          "name": "Th",
          "pv": 38
        },
        {
          "name": "F",
          "pv": 48
        },
        {
          "name": "S",
          "pv": 30
        },
        {
          "name": "S",
          "pv": 40
        }
      ]
  return (
    <div className="chart" >
        <Box className="boxcont"
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
        m: 1,
        width: 300,
        height: 330,
         },
        }}
        >
        <Paper elevation={4} className="chartPaper">
            <Paper elevation={4} className="chartCont">
            <ResponsiveContainer height={150} className="chartCon">
            <BarChart width={250}  height={150} data={data} className="chartSmall">
                <CartesianGrid strokeDasharray=" 3 3 3"/>
                <XAxis dataKey="name" className="Chartgrid" strokeDasharray="3 3 3"/>
                <YAxis  strokeDasharray="3 3 3"/>
                <Tooltip />
                <Bar dataKey="pv" fill="#f2f2ff"  barSize={10} radius={10} />
                </BarChart>
                </ResponsiveContainer>
            </Paper>
            <div className="chartInfo">
              <h4>Website Views</h4>
              <span>Last Campaign Performance</span>
            </div>
            <hr />
            <span className="time"><AccessTimeIcon className="timeIcon"/>campaign sent 2 days ago</span>
        </Paper>

        </Box>
        <Box className="boxcont"
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
        m: 1,
        width: 300,
        height: 330,
         },
        }}
        >
        <Paper elevation={4} className="chartPaper">
        <Paper elevation={4} className="chartCont">
        <ResponsiveContainer height={150} className="chartCon">
        <BarChart width={250}  height={150} data={data} className="chartSmall">
            <CartesianGrid strokeDasharray=" 3 3 3"/>
            <XAxis dataKey="name" className="Chartgrid" strokeDasharray="3 3 3"/>
            <YAxis  strokeDasharray="3 3 3"/>
            <Tooltip />
            <Bar dataKey="pv" fill="#f2f2ff"  barSize={10} radius={10} />
            </BarChart>
            </ResponsiveContainer>
        </Paper>
            <div className="chartInfo">
              <h4>Website Views</h4>
              <span>(+15%) increase in today sales.</span>
            </div>
            <hr />
            <span className="time"><AccessTimeIcon className="timeIcon"/>updated 4 min ago</span>
        </Paper>

        </Box>
        <Box className="boxcont"
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
        m: 1,
        width: 300,
        height: 330,
         },
        }}
        >
        <Paper elevation={4} className="chartPaper">
        <Paper elevation={4} className="chartCont">
        <ResponsiveContainer height={150} className="chartCon">
        <BarChart width={250}  height={150} data={data} className="chartSmall">
            <CartesianGrid strokeDasharray=" 3 3 3"/>
            <XAxis dataKey="name" className="Chartgrid" strokeDasharray="3 3 3"/>
            <YAxis  strokeDasharray="3 3 3"/>
            <Tooltip />
            <Bar dataKey="pv" fill="#f2f2ff"  barSize={10} radius={10} />
            </BarChart>
            </ResponsiveContainer>
        </Paper>
            <div className="chartInfo">
              <h4>Website Views</h4>
              <span>Last Campaign Performance</span>
            </div>
            <hr />
            <span className="time"><AccessTimeIcon className="timeIcon"/>just updated</span>
        </Paper>

        </Box>
    </div>
  )
}

export default Chart