// Fonts
import '../fonts/fonts.css';

// Modules
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components
import { Header } from '../components/Header/Header.jsx';

// Pages
import { Home } from '../pages/Home/Home.jsx';
import { About } from '../pages/About/About.jsx';
import { Rooms } from '../pages/Rooms/Rooms.jsx';
import { Territory } from '../pages/Territory/Territory.jsx';
import { Contacts } from '../pages/Contacts/Contacts.jsx';
import { NotFound } from '../pages/NotFound/NotFound.jsx';


function App() {

  return (
    <div className="content">
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/about" exact element={<About/>}></Route>
          <Route path="/rooms" exact element={<Rooms/>}></Route>
          <Route path="/territory" exact element={<Territory/>}></Route>
          <Route path="/contacts" exact element={<Contacts/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
