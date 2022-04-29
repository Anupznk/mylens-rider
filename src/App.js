import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import Login from "./components/auth/Login";
import RiderCardDetails from "./components/rider/RiderCardDetails";
import RiderOrder from "./components/rider/RiderOrder";

var showToast

function App() {

  showToast=message=>{
    toast.dark(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div>
      <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
          <Route path="/card-details" exact element={<RiderCardDetails/>}/>
        <Route path="/order" exact element={<RiderOrder/>}/>

      </Routes>

    </div>
  );
}

export default App;
export {showToast}
