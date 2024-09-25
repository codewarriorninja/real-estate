import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import HomePage from "./pages/HomePage"
import { Properties } from "./constants/constant"
import ProductDetails from "./pages/ProductDetails"
import AboutPage from "./pages/AboutPage"
import PropertyPage from "./pages/PropertyPage"
import ServicePage from "./pages/ServicePage"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Properties" element={<PropertyPage />} />
      <Route path="/Services" element={<ServicePage />} />
      <Route path="/property/:id" element={<ProductDetails properties={Properties} />} />
    </Route>
  )
)
const App = () => {
  return (
    
    <RouterProvider router={router} />
      
  )
}

export default App
