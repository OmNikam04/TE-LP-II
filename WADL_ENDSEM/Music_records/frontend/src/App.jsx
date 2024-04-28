import DataTable from './components/TableView/DataTable'
import Home from "./components/Home"

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Router>
      <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/table' element={<DataTable/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
