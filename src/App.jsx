import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import BookingPage from "./pages/BookingPage"
import Home from "./pages/home"
import RoomDetails from "./pages/RoomDetails"


function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
    </>
  )
}

export default App
