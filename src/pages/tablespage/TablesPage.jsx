import "./tablepage.scss"

import Sidebar from '../../components/Sidebar'
import Navbar from "../../components/Navbar"
import CustomerTable from "../../components/CustomerTable"
import CustomerProgress from "../../components/CustomerProgress"
import Footer from "../../components/Footer"

const TablesPage = () => {
  return (
    <div className="tablePage">
        <div className="tableinfo">
          <Sidebar/>
          </div>
          <div className="tablecontent">
            <div className="nav">
              <Navbar/>
            </div>
            <CustomerTable/>
            <CustomerProgress/>
            <Footer/>
          </div>
    </div>
  )
}

export default TablesPage
