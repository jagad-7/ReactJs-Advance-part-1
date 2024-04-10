import './App.css';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Success from './Components/Success';
import NotFound from './Components/NotFound';
import Projects from './Components/Projects';
import FetureProjects from './Components/FetureProjects';
import NewProjects from './Components/NewProjects';
import Users from './Components/Users';
import UsersDetails from './Components/UsersDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/success' element={<Success />} />
        <Route path='/projects' element={<Projects />}>
          <Route index element={<NewProjects />} />
          <Route path='featureProjects' element={<FetureProjects />}/>
          <Route path='newProjects' element={<NewProjects />} />
        </Route>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UsersDetails />}/>

        <Route path='*' element={<NotFound />} />


      </Routes>
    </div>
  );
}

export default App;
