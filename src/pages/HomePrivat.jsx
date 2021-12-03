import { useState } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import "../style/HomePrivat.css"

  const HomePrivat = () => {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
      setActive(!isActive);}
  return (
    <div>
        <NavBar/>
     ciao
      <div className={isActive ? "show" : null}>  </div>
      <h1>Hello react</h1>
      <button onClick={handleToggle}>Toggle class</button>
  
   </div>
  );
};
  

    export default HomePrivat
