import Context from "@mui/base/TabsUnstyled/TabsContext";
import { useState } from "react";
import { GlobalState } from "./Global/GlobalState";
import { GlobalStyled } from "./Pages/GlobalStyled";
import { Router } from "./Routes/Routes";


function App() {

  return (
    <GlobalState>
      <GlobalStyled />
      <Router/>
    </GlobalState>

  );
}

export default App;
