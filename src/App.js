import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Showcase from "./pages/Showcase";
import HomePrivat from "./pages/HomePrivat";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(s=>s.userInfo)
  console.log(state)
  return (
    <div className="body">    
      <Router>
        <Switch>
        <Route exact
          path="/"
          render={() => (
              <Login />
           )}/>
            
         <Route
          path="/home"
          exact
          render={() => (      
            <HomePrivat/>     
          )}
        />
          <Route
          path="/register"
          exact
          render={() => (      
            <Register/>     
          )}
        />
           <Route
          path="/showcase/:id"
          exact
          render={() => (      
            <Showcase/>     
          )}
        />
        </Switch>  
      </Router> 
    </div> 
  );
}

export default App;
