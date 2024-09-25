import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Board from "../components/Board"
const MainLayout = () => {
  return (
    <div className="min-h-screen">
    <NavBar />
    <Outlet />
    <Board />
    <Footer />
    </div>
  )
}

export default MainLayout