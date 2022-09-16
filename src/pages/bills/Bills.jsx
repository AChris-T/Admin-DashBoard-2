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
        <div className="conbill">
        <CardDetails/>
        <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Bills