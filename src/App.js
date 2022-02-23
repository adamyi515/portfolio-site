import './App.css';

// Components
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home-page.component';
import AboutPage from './pages/about-page.component';
import ProjectPage from './pages/project-page.component';
import BlogPage from './pages/blog-page.component';

// react-router-dom
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
