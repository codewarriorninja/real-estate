import { useEffect, useState } from "react"
import { Properties } from "../constants/constant";
import PropertyCard from "../components/PropertyCard";
import { RightArrow } from "../assets/Icons/icons";
import { LeftArrow } from "../assets/Icons/icons";
import Form from "../components/Form";
const PropertyPage = () => {
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
       if(nextIndex >= Properties.length){
        setCurrentIndex(0);
       }else{
        setCurrentIndex(nextIndex)
       }
    };

    const prevProperty = () => {
       const prevIndex = currentIndex - cardsPerPage;
       if(prevIndex < 0){
        setCurrentIndex(Properties.length-cardsPerPage)
       }else{
        setCurrentIndex(prevIndex)
       }
    };
  return (
    <section className="bg-white dark:bg-bg pt-16 w-full">
      <div className="padding-x max-xl:padding-xyz mx-auto">
        <div className="w-full pb-8">
           <h1 className="dark:text-white font-semibold font-Urbanist sm:text-[28px] xl:text-[48px] md:text-[38px] leading-relaxed pb-5 max-w-screen-lg">Find Your Dream Property</h1>
           <p className="dark:text-[#999999] font-Urbanist font-medium leading-8 max-w-screen-xl xl:text-[16px]">Welcome to Estateln, where your dream property awaits in every corner of our beautiful world. 
          Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. 
          With categories to suit every dreamer, your journey.</p>
        </div>
        {/*searchBar */}
        <div className="relative max-w-5xl mx-auto pb-10">
            <input type="text"
             placeholder="Search For A Property"
             className="w-full px-4 py-5 rounded-full bg-transparent border border-slate-500 dark:bg-[#262626] focus:outline-none focus:ring-purple-500"
            />
            <button className="absolute right-2 top-2 px-6 py-3 bg-purple-600 rounded-full dark:text-white hover:bg-purple-700"><i className="fas fa-search"></i>Find Property</button>
        </div>
        <div className="dark:bg-[#1a1a1a] bg-slate-200 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-5 px-4">
            <select className="w-full px-4 py-3 rounded-full dark:bg-gray-800 text-gray-500">
                <option>Location</option>
            </select>
            <select className="w-full px-4 py-3 rounded-full dark:bg-gray-800 text-gray-500">
                <option>Property Type</option>
            </select>
            <select className="w-full px-4 py-3 rounded-full dark:bg-gray-800 text-gray-500">
                <option>Pricing Range</option>
            </select>
            <select className="w-full px-4 py-3 rounded-full dark:bg-gray-800 text-gray-500">
                <option>Property Size</option>
            </select>
            <select className="w-full px-4 py-3 rounded-full dark:bg-gray-800 text-gray-500">
                <option>Build Year</option>
            </select>
            </div>
        </div>
        <div className="flex flex-col w-full pt-16">
        <h1 className="dark:text-white font-Urbanist font-semibold xl:text-[48px] sm:text-[35px] md:text-[40] max-sm:text-[28px] pb-5">Discover a World of Possibilities</h1>
        <p className="dark:text-[#999999] max-w-screen-lg max-sm:max-w-lg pb-5">Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home</p>
       </div> 
       <div className="flex flex-wrap justify-between items-center transition-transform duration-500">
          {Properties.slice(currentIndex,currentIndex + cardsPerPage).map((property,index) => (
            <div key={property.id} className="w-full md:w-1/3 p-2">
              <PropertyCard property={property} />
                </div>
                ))}
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
        <div>
          <div className="flex flex-col w-full pt-16">
                <h1 className="dark:text-white font-Urbanist font-semibold xl:text-[48px] sm:text-[35px] md:text-[40] max-sm:text-[28px] pb-5">Let's Make it Happen</h1>
                <p className="dark:text-[#999999] max-w-screen-lg max-sm:max-w-lg pb-5">Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.</p>
          </div> 
          <Form />
       </div>
      </div>
     </section>
  )
}

export default PropertyPage