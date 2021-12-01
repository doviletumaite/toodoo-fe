import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Showcase from "./pages/Showcase";
import HomePrivat from "./pages/HomePrivat";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/ProfilePage";

function App() {

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
        <Route
          path="/profilePage/:id"
          exact
          render={() => (      
            <ProfilePage/>     
          )}
        />
        </Switch>  
      </Router> 
    </div> 
  );
}

export default App;
