import './App.css';
import Layout from './components/Layout'
import Hero from './components/Hero'
import ProjectsNav from './components/ProjectsNav';
import Contact from './components/Contact'
import back from './images/back.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import styled from 'styled-components'



function App() {
  let location = useLocation();

  return (
    <Router>
      <div className="App">
        <img src={back} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      </div>
    </Router>
  );
}

const Home = () =>{
  return(
    <div>
      <Layout text="HELLO !" />
      <Hero />
      <ProjectsNav />
      <Link to="/contact">
        <button className="cnt-btn">Let's Chat !</button>
      </Link>
    </div>
  )
}

const Button = () => {
  return(
    styled.a`
    
    `)
}

export default App;
