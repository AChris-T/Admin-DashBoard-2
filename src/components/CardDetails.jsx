import React from 'react';
import "./cardDetail.scss";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import WifiIcon from '@material-ui/icons/Wifi';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import pay from "../images/pay.png"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import trans from "../images/trans.pdf"
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DateRangeIcon from '@material-ui/icons/DateRange';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
//import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const info=[
  {
    id:1,
    name:"Oliver Liam",
    company:"Company Name",
    ansewrC:"Viking Burrito",
    email:"Email Address",
    answerE:"oliver@burrito.com",
    Number:"VAT Number",
    answerB:"  FRB1235476",
  },
  {
    id:2,
    name:"Lucas Harper",
    company:"Company Name",
    ansewrC:" Stone Tech Zone",
    email:"Email Address",
    answerE:"lucas@stone-tech.com",
    Number:"VAT Number",
    answerB:"FRB1235476"
  },
  {
    id:3,
    name:"Ethan James",
    company:"Company Name",
    ansewrC:" Fiber Notion",
    email:"Email Address",
    answerE:"ethan@fiber.com",
    Number:"VAT Number",
    answerB:" FRB1235476"
  },
]

const datas=[
  {
    id:1,
    name:"March, 01, 2020",
    transid:"#MS-415646",
    amount:'$180',
    file:{trans}
  },
  {
    id:2,
    name:"February, 10, 2021",
    transid:"#RV-126749",
    amount:"$250",
    file:""
  },
  {
    id:3,
    name:"April, 05, 2020",
    transid:"#QW-103578",
    amount:"$120",
    file:""
  },
  {
    id:4,
    name:"March, 01, 2019",
    transid:"#AR-803481",
    amount:"$300",
    file:""
  },
  {
    id:5,
    name:"June, 25, 2019",
    transid:"#MS-415646",
    amount:"$180",
    file:""
  },
]
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CardDetails = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='cardDetails'>
    <Box className="cardbox"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': 
      {
        m: 1,
        width:200,
      },
    }}
    >
    <div className="boxsms">
       <div className="boxSmss">
          <div className="boxpop">
            <Paper elevation={3} className="cardPaper">
              <span><WifiIcon className="icon"/></span>
              <h5>4562 &nbsp; 1122 &nbsp; 4594 &nbsp;  7852</h5>
              <div className="cardinfo">
                <div className="name">
                    <h6>Card holder</h6>
                    <h4>Akinfenwa Taiwo</h4>
                </div>
                <div className="exp">
                    <h6>Expires</h6>
                    <h4>11/04</h4>
                </div>
                <div className="imagecont">
                    <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png" alt="img" />
                </div>
              </div>
            </Paper>
            <div className="cad">
            <Paper elevation={3} className="cardSms">
              <span><AccountBalanceIcon className="icon"/></span>
              <h4>Salary</h4>
              <h6>Belong Interactive</h6>
              <hr/>
              <h2>+$2000</h2>
            </Paper>
            <Paper elevation={3} className="cardSmsS">
              <span className="icon"><img src={pay} alt="pay" style={{width:"50px"}}/> </span>
              <h4>Paypal</h4>
              <h6>Freelance Payment</h6>
              <hr/>
              <h2>$455.00</h2>
            </Paper>
            </div>
            </div>
            <Paper elevation={3} className="cardfex">
              <div className="paymethod">
                  <h3>Payment Method</h3>
                  <button><AddIcon className="payIcon"/>ADD NEW CARD</button>
              </div>
              <div className="card">
                <span className="Atm">
                  <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png" alt="atm" />
                  <h4>****&nbsp;****&nbsp;****&nbsp;7852</h4>
                  <EditIcon className='atmIcon'/>
                </span>
                <span className="Atm">
                  <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/visa.71c0d5e9e2aaee42e4c3.png" alt="atm" />
                  <h4>****&nbsp;****&nbsp;****&nbsp;5248</h4>
                  <EditIcon className='atmIcon'/>
                </span>
              </div>
            </Paper>
            </div>
            </div>
            {/*-------------------------------flex------------------------------ */}
          <div className="bgsms">
          <Paper elevation={3} className="cardSmsDetails">
               <div className="detailsInfo">
                <h4>Invoice</h4>
                <button className="view" onClick={handleOpen}>View All</button>
               </div>
               {datas.map((data)=>(
                 <div key={data.id} className="dateDetail">
                 <span className="date">
                 <h4>{data.name}</h4>
                 <h6>{data.transid}</h6>
                 </span>
                 <span className="amount">{data.amount}</span>
                 <span className="pdf"> <a href={data.file}><PictureAsPdfIcon/>PDF</a></span>
                 </div>
                 ))}
              </Paper>
          </div>
          </Box>
          
          <div className="billingInfos">
            <Paper elevation={3} className="billingInfo">     
                  <h3>Billing Information</h3>
                  {info.map((infos)=>(
                    <div className="billingsms" key={infos.id}>
                    <div className="details">
                    <h5>{infos.name}</h5>
                    <div className="edit">
                    <DeleteIcon className='detailsIcon'/>
                    <h6>Delete</h6>
                    </div>
                    <span className="detailsEd"><EditIcon className="EditIcon"/>Edit</span>
                    </div>
                      <div className="companyDet">
                          <span className="company">{infos.company}:&nbsp;<h6>{infos.ansewrC}</h6></span>
                          <span className="company">{infos.email}:&nbsp;<h6>{infos.answerE}</h6></span>
                          <span className="company">{infos.Number}:&nbsp;<h6>{infos.answerB}</h6></span>
                      </div>
                    </div>
                    ))}
             </Paper>
             <Paper elevation={3} className="billingtrans">
                    <div className="trans">
                      <h4>Your Transaction's</h4>
                      <span className='transDate'>
                        <DateRangeIcon className='transIcon'/>
                        23 - 30 March 2020
                      </span>
                    </div>
                    <div className="transDay">
                      <h4>NEWEST</h4>
                      <div className="transDayDetails">
                        <span className="transDayDetailsIcon">
                          <KeyboardArrowUpIcon className="transIcon"/>
                        </span>
                        <div className="transaccount">
                        <h3>Netflix</h3>
                        <h5>27 March 2020, at 12:30 PM
                        </h5>
                        </div>
                        <span className="transamount">- $ 2,500</span>
                      </div>
                      <div className="transDayDetails">
                        <span className="transDayDetailsIcon" styles={{border:"green"}}>
                          <KeyboardArrowUpIcon className="transIcon" />
                        </span>
                        <div className="transaccount">
                        <h3>Netflix</h3>
                        <h5>27 March 2020, at 12:30 PM
                        </h5>
                        </div>
                        <span className="transamount">- $ 2,500</span>
                      </div>
                    </div>
                    <div className="transDay">
                    <h4>YESTERDAY</h4>
                    <div className="transDayDetails">
                      <span className="transDayDetailsIcon">
                        <KeyboardArrowUpIcon className="transIcon"/>
                      </span>
                      <div className="transaccount">
                      <h3>Netflix</h3>
                      <h5>27 March 2020, at 12:30 PM
                      </h5>
                      </div>
                      <span className="transamount">- $ 2,500</span>
                    </div>
                    <div className="transDayDetails">
                      <span className="transDayDetailsIcon" styles={{border:"green"}}>
                        <KeyboardArrowUpIcon className="transIcon" />
                      </span>
                      <div className="transaccount">
                      <h3>Netflix</h3>
                      <h5>27 March 2020, at 12:30 PM
                      </h5>
                      </div>
                      <span className="transamount">- $ 2,500</span>
                    </div>
                  </div>
             </Paper>
          </div>
        
        
        {/*--------------------Modal Box -----------------------*/}  
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Transition modal</h2>
              <p id="transition-modal-description">react-transition-group animates me.</p>
            </div>
          </Fade>
        </Modal>
        {/*----------------------Do Not Touch-------------------------- */}
    </div>

  )
}

export default CardDetails
