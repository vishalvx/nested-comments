import React, { useState } from "react";
import Employee from "./pages/Employee";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/styles.scss";
import axios from "axios";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://scplayground.com/api/getpromodata")
      .then((res) => console.log(res));
  }, []);

  // console.log(data);

  return (
    <div className="App">
      {/* <Employee />
       */}
      {/* { data!== null &&  } */}
    </div>
  );
}

export default App;
