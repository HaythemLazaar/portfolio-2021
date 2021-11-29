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
import styled, {css} from 'styled-components'



function App() {
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
        <Button primary>Let's Chat !</Button>
      </Link>
    </div>
  )
}

const Button = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;

    ${props => props.primary && css`
      background: white;
      color: black;
    `}
    `

export default App;
