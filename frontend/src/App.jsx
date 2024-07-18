import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Create from "./pages/Create/Create"
import Detail from "./pages/Detail/Detail"
import Header from "./components/Header/Header"



const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/admin/create" element={<Create/>}/>
    <Route path="/place/:id" element={<Detail/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App