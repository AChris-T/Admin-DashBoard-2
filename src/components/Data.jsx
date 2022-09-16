import "./data.scss"
import WeekendIcon from '@mui/icons-material/Weekend';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Data =({type}) => {
    let data;
    switch (type){
        case"banking":
        data ={
            title:"Booking",
            amount:200,
            percentage:"+55%",
            date:"than last week",
            icon:<WeekendIcon/>,
    
        };
        break;
        case"Users":
        data ={
            title:"Today Users",
            amount:2300,
            percentage:"+3%",
            date:"than last month",
            icon:<EqualizerIcon/>,
            color:{backgroundColor:"rgb(73, 163, 241)"}
        };
        break;
        case"Revenue":
        data ={
            title:"Revenue",
            amount:"20k",
            istrue:true,
            icon:<StoreMallDirectoryIcon/>,
            percentage:"+1%",
            date:"than yesterday",
            color:{backgroundColor:"rgb(102, 187, 106)"}
        };
        break;
        case"Follow":
        data ={
            title:"Following",
            amount:"+91",
            icon:<AccountCircleIcon/>,
            percentage:"",
            date:"Just Update",
            color:{backgroundColor:"rgb(216, 27, 96)"}
        };
        break;
        default:
        break;
    }
    return(
        <div className="DataBg">
        <div className="Data">
        <div className="containerData">
                <div className="icon" style={data.color}>
                <span >{data.icon}</span>
                </div>
                <div className="title">
                <h5>{data.title}</h5>
                    <h3>{data.amount}</h3>
                    </div>
                    </div>
                    <hr/>
                    <div className="income">
                    <span className="percentage">{data.percentage}</span>
                    <span className="date">{data.date}</span>
                    </div>
                    </div>
                    </div>

    )
}
export default Data