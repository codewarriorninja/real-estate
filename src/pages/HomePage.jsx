import Hero from "../components/Hero"
import Property from "../components/Property"
import Questions from "../components/Questions"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
// import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <>
    <Hero />
    <Services />
    <Property isTestimonial={false} />
    <Testimonials isTestimonial={true}  />
    <Questions />
    </> 
  )
}

export default HomePage