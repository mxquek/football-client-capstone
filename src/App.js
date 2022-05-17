import Landing from './pages/Landing'
import ViewRoster from './pages/ViewRoster'
import Login from './pages/login'
import ViewSchedule from './pages/ViewSchedule'
import Statistics  from './pages/Statistics'
import AddGame from './pages/AddGame'
import DeleteGame from './pages/DeleteGame'
import EditGame from './pages/EditGame'
import MasterView from './pages/MasterView'
import EditPlayer from './pages/EditPlayer'
import AddPlayer from './pages/AddPlayer'
import AddTeam from './pages/AddTeam'
import EditClub from './pages/EditClub'
import './styles/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Login/>} />
          <Route path = "/Home" element = {<Landing />}/>
          <Route path = "/Roster" element = {<ViewRoster />}/>
          <Route path = "/Schedule" element = {<ViewSchedule />}/>
          <Route path = "/Statistics" element = {<Statistics />}/>
          <Route path = "/EditGame" element = {<EditGame />}/>
          <Route path = "/AddGame" element = {<AddGame />}/>
          <Route path = "/DeleteGame" element = {<DeleteGame />}/>
          <Route path = "/Admin" element = {<MasterView/>}/>
          <Route path = "/EditPlayer" element = {<EditPlayer />}/>
          <Route path = "/AddPlayer" element = {<AddPlayer />}/>
          <Route path = "/AddTeam" element = {<AddTeam />}/>
          <Route path = "/EditClub" element = {<EditClub/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
