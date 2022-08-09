import { Route, Routes } from 'react-router-dom';
import Home from './projects/Home';
import Todo from './projects/Todo';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
