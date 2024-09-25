
const Board = () => {
  return (
    <section className="bg-white dark:bg-bg w-full bg-gradient-to-r from-gray-600 py-5">
        <div className="padding-x max-xl:padding-xyz mx-auto">
        <div className="flex justify-between items-center flex-wrap max-xl:items-start max-xl:flex-col gap-8">
        <div className="flex flex-col">
            <h1 className="dark:text-white font-Urbanist font-semibold xl:text-[48px] sm:text-[35px] md:text-[40] max-sm:text-[28px] pb-5">Start Your Real Estate Journey Today</h1>
            <p className="dark:text-[#e4e2e2] max-w-screen-lg max-sm:max-w-lg pb-5">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
         </div>
         <div className="max-sm:w-full">
            <button className="dark:text-white bg-[#703BF7] px-2 py-3 rounded-[8px] font-Urbanist font-medium max-sm:w-full text-center">Explore Properties</button>
         </div>
        </div>
        </div>
    </section>
  )
}

export default Board