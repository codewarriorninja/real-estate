import { useEffect, useState } from "react"
import { Properties } from "../constants/constant";
import PropertyCard from "./PropertyCard";
import { RightArrow } from "../assets/Icons/icons";
import { LeftArrow } from "../assets/Icons/icons";
import { Testimoniales } from "../constants/constant";
import TestimonialCard from "./TestimonialCard";
const Property = ({isTestimonial}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3);
     
    useEffect(() => {
        const handleResize = () => {
            setCardsPerPage(window.innerWidth < 768 ? 1: 3 );
        };
        window.addEventListener('resize',handleResize)
        handleResize();
        return () => {
            window.removeEventListener('resize',handleResize)
        };
    },[]);

    const nextProperty = () => {
       const nextIndex = currentIndex + cardsPerPage;
       if(nextIndex >= Testimoniales.length){
        setCurrentIndex(0);
       }else{
        setCurrentIndex(nextIndex)
       }
    };

    const prevProperty = () => {
       const prevIndex = currentIndex - cardsPerPage;
       if(prevIndex < 0){
        setCurrentIndex(Testimoniales.length-cardsPerPage)
       }else{
        setCurrentIndex(prevIndex)
       }
    };
  return (
    <section className="bg-white dark:bg-bg  pt-16 w-full">
     <div className="padding-x max-xl:padding-xyz mx-auto">
       <div className="flex flex-col w-full">
         <h1 className="dark:text-white font-Urbanist font-semibold xl:text-[48px] sm:text-[35px] md:text-[40] max-sm:text-[28px] pb-5">{isTestimonial ? 'What Our Clients Say' : 'Featured Properties'}</h1>
         <p className="dark:text-[#999999] max-w-screen-lg max-sm:max-w-lg pb-5">{isTestimonial ? 'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.' : 'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'}</p>
        </div> 
        <div className="relative">
            <div className="overflow-x-hidden">
                {isTestimonial ? <div className="flex justify-between items-center transition-transform duration-500">
                {Testimoniales.slice(currentIndex,currentIndex + cardsPerPage).map((testimonial) => (
                    <div key={testimonial.index} className="w-full md:w-1/3 p-2">
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                ))}
              </div> : <div className="flex justify-between items-center transition-transform duration-500">
                {Properties.slice(currentIndex,currentIndex + cardsPerPage).map((property) => (
                    <div key={property.id} className="w-full md:w-1/3 p-2">
                        <PropertyCard property={property} />
                    </div>
                ))}
              </div>}
              {isTestimonial ? '' : <hr></hr>}
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="text-center mt-5 dark:text-white font-Urbanist font-medium">
                <p>{`0 ${Math.floor(currentIndex / cardsPerPage) + 1} of ${Math.ceil(
                    Properties.length / cardsPerPage
                )}`}</p>
            </div>
            <div className="flex gap-4 items-center">
                <button onClick={prevProperty}><img src={RightArrow} alt="rightArrow" className="h-6 w-6 object-contain rounded-full bg-bg dark:bg-[#262626] mx-auto p-4" /></button>
                <button onClick={nextProperty}><img src={LeftArrow} alt="leftArrow" className="h-6 w-6 object-contain rounded-full bg-bg dark:bg-[#262626] mx-auto p-4" /></button>
            </div>
        </div>
     </div>   
    </section>
  )
}

export default Property