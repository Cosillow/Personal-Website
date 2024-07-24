import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import ProjectsController from './components/controllers/ProjectsController';
import Modal from './components/Modal';
import ThemeController from './components/controllers/ThemeController';
import Header from './components/Header';

function App() {
  

  return (
    
    <BrowserRouter>
      <Header></Header>
    
      <main>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/home' element={<HomePage />} ></Route>
          <Route path='/projects' element={<ProjectsController />} ></Route>
          <Route path='/css-library' element={<LibraryPage />} ></Route>
        </Routes>
      </main>
      {/* footer */}
    </BrowserRouter>
  )
}

export default App
