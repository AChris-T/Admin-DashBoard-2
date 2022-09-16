import React from 'react'
import "./stepForm.scss"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AllInboxOutlinedIcon from '@material-ui/icons/AllInboxOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const StepForm = () => {
  return (
    <div className='step'>
    <Box className="box"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 300,
        height: 558,
      },
    }}
    >
    <Paper elevation={3} className="stepTitle">
        <div className="order">
            <h4>Orders overview</h4>
            <span className="orderInfo"><ArrowUpwardOutlinedIcon className="orderIcon"/><span className='specialorder'>24% </span>this month</span>
        </div>
        <div className="stepdetails">
            <div className="stepdetail">
                <div className="specialLine"></div>
                <div className="details">
                    <div className="detail">
                        <span className="detailsicon"><NotificationsIcon className='icon'/></span>
                        <h5>$2400, Design changes <p>21 DEC 11 PM</p></h5>
                    </div>
                </div>
                <div className="details">
                    <div className="detail">
                        <span className="detailsicon" style={{background: "rgb(244, 67, 53)"}}><AllInboxOutlinedIcon className='icon'/></span>
                        <h5>New order #1832412 <p>22 DEC 7:20 PM</p></h5>
                    </div>
                </div>
                <div className="details">
                    <div className="detail">
                        <span className="detailsicon" style={{background:"rgb(26, 115, 232)"}}><ShoppingCartOutlinedIcon className='icon'/></span>
                        <h5>Server payments for April <p>5 DEC 7:10 PM</p></h5>
                    </div>
                </div>
                <div className="details">
                    <div className="detail">
                        <span className="detailsicon" style={{background:"rgb(251, 140, 0)"}}><CreditCardOutlinedIcon className='icon'/></span>
                        <h5>New card added for order #4397133<p>2 DEC 6:20 PM</p></h5>
                    </div>
                </div>
                <div className="details">
                    <div className="detail">
                        <span className="detailsicon" style={{background:"rgb(233, 30, 99)"}}><VpnKeyOutlinedIcon className='icon'/></span>
                        <h5>New card added for order #4395133 <p>20 DEC 6:20 PM</p></h5>
                    </div>
                </div>
            </div>
        </div>
    </Paper>
    </Box>
    </div>
  )
}

export default StepForm