import "./app.css"
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Bills from "./pages/bills/Bills";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile";
import TablesPage from "./pages/tablespage/TablesPage";
import Notifications from "./pages/notifications/Notifications";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/bills" element={<Bills/>}/>
        <Route path="/tables" element={<TablesPage/>}/>
        <Route  path="/profile" element={<Profile/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/Signin" element={<SignIn/>}/>
        <Route path="Signup" element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
