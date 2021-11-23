import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePublic from "./pages/HomePublic";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="body">    
      <Router>
        <Switch>
        <Route exact
          path="/login"
          render={() => (
              <Login />
           )}/>
            
         <Route
          path="/home"
          exact
          render={() => (      
            <HomePublic/>     
          )}
        />
          <Route
          path="/register"
          exact
          render={() => (      
            <Register/>     
          )}
        />
        </Switch>  
      </Router> 
    </div> 
  );
}

export default App;
