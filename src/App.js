import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import Filter from './components/Filter';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/*' element={<Page404 />} />

          {/* <Route path='/*' element={<Navigate to='/' />} />  */}              {/*Redirect to Home Page if Page Not Found  */}

        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
