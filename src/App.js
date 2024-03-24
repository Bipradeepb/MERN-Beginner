import './App.css';
import Allpost from './Components/Allpost';
import CreatePost from './Components/CreatePost';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UpdatePost from './Components/UpdatePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<CreatePost/>}/>
          <Route path="/all" element={<Allpost/>}/>
          <Route path="/:id" element={<UpdatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
