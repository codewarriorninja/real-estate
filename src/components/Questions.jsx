import { useEffect, useState } from "react"
import { RightArrow } from "../assets/Icons/icons";
import { LeftArrow } from "../assets/Icons/icons";
import QuestionsCard from "./QuestionsCard";
import { Questionss } from "../constants/constant";
const Questions = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3);
     
    useEffect(() => {
        const handleResize = () => {
            setCardsPerPage(window.innerWidth < 768 ? 1: 3 );
        };
        window.addEventListener('resize',handleResize)
        handleResize();
        return() => {
            window.removeEventListener('resize',handleResize)
        };
    },[]);

    const nextProperty = () => {
       const nextIndex = currentIndex + cardsPerPage;
       if(nextIndex >= Questionss.length){
        setCurrentIndex(0);
       }else{
        setCurrentIndex(nextIndex)
       }
    };

    const prevProperty = () => {
       const prevIndex = currentIndex - cardsPerPage;
       if(prevIndex < 0){
        setCurrentIndex(Questionss.length-cardsPerPage)
       }else{
        setCurrentIndex(prevIndex)
       }
    };
  return (
    <section className="bg-white dark:bg-bg  pt-8 w-full">
    <div className="padding-x max-xl:padding-xyz mx-auto">
      <div className="flex flex-col w-full">
        <h1 className="dark:text-white font-Urbanist font-semibold xl:text-[48px] sm:text-[35px] md:text-[40] max-sm:text-[28px] pb-5">Frequently Asked Questions</h1>
        <p className="dark:text-[#999999] max-w-screen-lg max-sm:max-w-lg pb-5">Find answers to common questions about Estatein s services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
       </div> 
       <div className="relative">
           <div className="overflow-x-hidden">
               <div className="flex justify-between items-center transition-transform duration-500">
               {Questionss.slice(currentIndex,currentIndex + cardsPerPage).map((Question,index) => (
                   <div key={Questionss.index} className="w-full md:w-1/3 p-2">
                       <QuestionsCard Question={Question} />
                   </div>
               ))}
             </div>
           </div>
       </div>
       <div className="flex items-center justify-between pb-16">
           <div className="text-center mt-5 dark:text-white font-Urbanist font-medium">
               <p>{`0 ${Math.floor(currentIndex / cardsPerPage) + 1} of ${Math.ceil(
                   Questionss.length / cardsPerPage
               )}`}</p>
           </div>
           <div className="flex gap-4 items-center">
               <button onClick={nextProperty}><img src={LeftArrow} className="h-6 w-6 object-contain rounded-full bg-bg dark:bg-[#262626] mx-auto p-4" /></button>
               <button onClick={prevProperty}><img src={RightArrow} alt="rightArrow" className="h-6 w-6 object-contain rounded-full bg-bg dark:bg-[#262626] mx-auto p-4" /></button>
           </div>
       </div>
    </div>   
   </section>
  )
}

export default Questions