
import { HeroContainer } from "../assets/Images/images"
import { statistics } from "../constants/constant"



// import { statistics } from "../constants/constant"
const Hero = () => {
  return (
    <section className="bg-white dark:bg-bg w-full">
      <div className="xl:padding-l max-xl:padding-xyz max-lg:padding-y mx-auto">
       <div className="flex justify-between flex-col-reverse max-sm:py-4 lg:flex-row items-center gap-[80px] mx-auto">
         <div className="w-full flex flex-col xl:w-4/5">
          <h1 className="font-Urbanist font-semibold dark:text-white xl:text-[55px] sm:text-[40px] md:text-[45px] max-sm:text-[35px]">Discover Your Dream Property with Estatein</h1>
          <p className="max-w-lg font-Urbanist dark:text-[#999999] font-medium leading-[150%] py-8">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          <div className="flex items-center max-sm:flex-col gap-4 md:flex-row">
             <button className="border border-[#262626] rounded-[8px] px-2 py-3 dark:text-white font-Urbanist font-medium text-[14px] w-full md:w-56">Learn More</button>
             <button className="bg-[#703BF7] dark:text-white rounded-[8px] px-2 py-3 w-full md:w-56">Browse Properties</button>
          </div>
          <div className="grid max-md:grid-cols-2 md:grid-cols-3 gap-6 my-10 w-full">
            {statistics.map((statistic) => (
              <div key={statistic.Label} className="font-Urbanist bg-slate-200 shadow-lg dark:bg-[#1A1A1A] max-sm:text-center rounded-lg px-5 py-3">
                <h1 className="dark:text-white text-[30px] font-Urbanist font-bold">{statistic.value}</h1>
                <p className="text-[14px] text-[#999999] font-medium font-Urbanist">{statistic.Label}</p>
                </div>
            ))}
          </div>
         </div>
         <div className="flex items-center w-full">
          <img src={HeroContainer} className="object-contain rounded" />
         </div>
       </div>
      </div>
    </section>
  )
}

export default Hero