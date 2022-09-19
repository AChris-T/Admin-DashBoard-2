import "./bills.scss"
import Sidebar from '../../components/Sidebar'
import Navbar from "../../components/Navbar"
import CardDetails from "../../components/CardDetails"
import Footer from "../../components/Footer"

const Bills = () => {
  return (
    <div className='bills'>
        <Sidebar/>
        <div className="billsider">
          <h2 style={{color:"rgb(43, 79, 141)", marginLeft:"20px", fontFamily:`Arial, Helvetica, sans-serif`, marginBottom:"20px"}}>Bills</h2>
        <div className="conbill">
        <CardDetails/>
        <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Bills