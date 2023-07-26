import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import LogoPage from "./Preloader/logopg";
import Navbar from "./Navbar";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/about";
import Killing from "./pages/Killing Stalking"; 
import Policy from "./pages/policy"
import Faq from "./pages/faq";
import Library from "./pages/Library";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/home";
import Footer from "./pages/footer";
import Landingpage from "./pages/landingpage";
import Alogin from "./pages/alogin";
import Asignup from "./pages/asignup";
import Anavbar from "./pages/anavbar";
import Add from "./pages/addbk";
import Update from "./pages/editbk";
import Delete from "./pages/deletebk";
import View from "./pages/view";
import Bluelock from "./pages/Bluelock";
import Feedback from "./Feedback";
import Bookdetails from "./pages/bookdetails";



function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/alogin" element={<Alogin />} />
        <Route path="/asignup" element={<Asignup />} />
        <Route path="/anavbar" element={<Anavbar />} />
        <Route path="/addbk" element={<Add />} />
        <Route path="/editbk" element={<Update />} />
        <Route path="/deletebk" element={<Delete />} />
        <Route path="/view" element={<View />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Library" element={<Library/>}/>
        <Route path="/killing" element={<Killing Stalking/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/Bluelock" element={<Bluelock />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/bookdetails/:bookid" element={<Bookdetails />} />

      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
