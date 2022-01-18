import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Showcase from "./pages/Showcase";
import HomePrivat from "./pages/HomePrivat";
import ProfilePage from "./pages/ProfilePage";
import ProfilePageUsers from "./pages/ProfilePageUsers";
import ShowcasePre from "./pages/ShowcasePre";
import Chat from "./pages/Chat";
import Scroll from "./components/Scroll";

function App() {

  return (
    <div className="body">   
    <Scroll/> 
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
          <Route
          path="/profilePageUsers/:id"
          exact
          render={() => (      
            <ProfilePageUsers/>     
          )}
        />
           <Route
          path="/showcasepre/:id/:token"
          exact
          render={() => (      
            <ShowcasePre />     
          )}
        />
        <Route
          path="/chat/:id"
          exact
          render={() => (      
            <Chat />     
          )}
        />
        </Switch>  
      </Router> 
    </div> 
  );
}

export default App;
