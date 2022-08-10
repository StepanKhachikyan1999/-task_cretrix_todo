import './App.css';
import { Route, Routes } from 'react-router-dom';
import SingleTodo from './components/SingleTodo';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="singleTodo/:id" element={ <SingleTodo /> } />
    </Routes>
  );
}

export default App;