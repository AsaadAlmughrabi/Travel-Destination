
import TourDetails from './components/TourDetails/TourDetails.js';
import Home from './components/home/Home.js';
import {Routes,Route}  from 'react-router-dom';



function App() {
  return (
    <>
    <Routes>
            <Route  path="/" element={<Home/>}></Route>
            <Route path='/city/:id' element= {<TourDetails/>} ></Route>
        </Routes>
    </>
  );
}

export default App;
