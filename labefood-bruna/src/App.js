import { ToastContainer } from "react-toastify";
import { GlobalState } from "./Global/GlobalState";
import { GlobalStyled } from "./Pages/GlobalStyled";
import { Router } from "./Routes/Routes";
import 'react-toastify/dist/ReactToastify.min.css'

function App() {

  return (
    <GlobalState>
      <GlobalStyled />
      <Router/>
      <ToastContainer/>
    </GlobalState>

  );
}

export default App;
