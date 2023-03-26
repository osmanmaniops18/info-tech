
import './App.css';
import AppBar from './appBar/AppBar';
import { Routes , Route} from 'react-router-dom'
import Schedule from './components/Schedule';
import LeadershipBoard from "./components/LeadershipBoard"
import PageNotFound from './components/PageNotFound';

function App() {
  return (
   <>
   <AppBar />
   <Routes>
   <Route path='/' element={<Schedule/>} />
    <Route path='/schedule' element={<Schedule/>} />
    <Route path='/leadershipboard' element={<LeadershipBoard/>} />
    <Route path='*' element={<PageNotFound/>} />
   </Routes>
  
   </>
  );
}

export default App;
