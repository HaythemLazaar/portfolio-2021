import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import Hero from './components/Hero'
import ProjectsNav from './components/ProjectsNav';
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout text="HELLO !" />
      <Hero />
      <ProjectsNav />
      <Router>
        <button className="cnt-btn">
          <Link to="/contact">
            Let's Chat !
          </Link>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </button>
      </Router>
    </div>
  );
}

export default App;
