import { useState } from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import ProjectsController from './components/controllers/ProjectsController/ProjectsController';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    {/* header */}

      <main>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}/>
          <Route path='/home' element={<HomePage/>} ></Route>
          <Route path='/projects' element={<ProjectsController/>} ></Route>
          <Route path='/css-library' element={<LibraryPage/>} ></Route>
        </Routes>
      </main>

      {/* footer */}
    </BrowserRouter>
  )
}

export default App
