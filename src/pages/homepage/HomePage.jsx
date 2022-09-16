import "./homepage.scss"
import Sidebar from '../../components/Sidebar'
import Navbar from "../../components/Navbar"
import Data from "../../components/Data"
import Chart from "../../components/Chart"
import TableList from "../../components/TableList"
import StepForm from "../../components/StepForm"
import Footer from "../../components/Footer"

const HomePage = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homeContainer">
      <Navbar/>
      <div className="dataContainer">
        <Data type="banking"/>
        <Data type="Users"/>
        <Data type="Revenue"/>
        <Data type="Follow"/>
      </div>
      <Chart/>
      <div className="tables">
        <div className="tableslist">
          <TableList/>
        </div>
        <div className="stepForm">
          <StepForm/>
        </div>
        </div>
        <Footer/>
    </div>
    </div>
  )
}

export default HomePage

