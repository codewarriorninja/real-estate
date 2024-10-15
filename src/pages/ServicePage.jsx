import { Investments, Management, Servicess } from "../constants/constant"
import { Serviced } from "../constants/constant"

const ServicePage = () => {
  return (
    <section className="bg-white dark:bg-bg pt-16 w-full min-h-screen">
    <div className="padding-x max-xl:padding-xyz mx-auto">
      <div className="w-full pb-8">
         <h1 className="dark:text-white font-semibold font-Urbanist sm:text-[28px] xl:text-[48px] md:text-[38px] leading-relaxed pb-5 max-w-screen-lg">Elevate Your Real Estate Experience</h1>
         <p className="dark:text-[#999999] font-Urbanist font-medium leading-8 max-w-screen-xl xl:text-[16px]">Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
      </div>
      </div>
      <div className="grid max-md:grid-cols-1 md:grid-cols-4 gap-6 w-full padding-xyz">
        {Servicess.map((service) => (
         <div key={service.text} className="flex flex-col items-center text-center justify-center bg-slate-200 shadow-lg dark:bg-[#1A1A1A] py-3 px-4 leading-relaxed rounded-[8px] ">
            <img src={service.imgUrl} width={60} height={60} className="object-contain block" />
            <p className="text-[14px] dark:text-white font-semibold font-Urbanist pt-3">{service.text}</p>
            </div>
        ))}
       </div>
       <div className="padding-x max-xl:padding-xyz mx-auto pt-16">
       <div className="w-full pb-8">
         <h1 className="dark:text-white font-semibold font-Urbanist sm:text-[28px] xl:text-[48px] md:text-[38px] leading-relaxed pb-5 max-w-screen-lg">Unlock Property Value</h1>
         <p className="dark:text-[#999999] font-Urbanist font-medium leading-8 max-w-screen-xl xl:text-[16px]">Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Serviced.map((section,index) => (
            <div key={index} className="px-5 py-3 rounded-lg shadow-md bg-slate-200 dark:bg-[#1a1a1a]">
              <div className="flex items-center gap-3 pb-5">
                 <img src={section.icon}
                  alt={section.title}
                  width={82}
                  height={82}
                  className="object-contain"
                  />
                  <h1 className="dark:text-white font-Urbanist font-medium max-w-lg text-[14px]">{section.title}</h1>
              </div>
              <p className="dark:text-[#999999] font-Urbanist font-medium max-w-xl leading-7">{section.description}</p>
            </div>
        ))}
          <div className="md:col-span-2 lg:col-span-2 px-5 py-3 bg-slate-200 dark:bg-[#1a1a1a] shadow-md rounded-lg">
            <div className="flex justify-between items-center">
            <h1 className="dark:text-white font-Urbanist font-medium lg:text-[30px] md:text-[20px] sm:text-[15px]">Unlock the Value of Your Property Today</h1>
            <button className="dark:text-white font-Urbanist font-medium dark:bg-bg px-2 py-2 rounded-lg text-sm whitespace-nowrap bg-gray-600 text-white">Learn More</button>
            </div>
            <p className="dark:text-[#999999] font-Urbanist font-medium leading-8 max-w-screen-xl xl:text-[16px]">Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
        </div>
       </div>
       <div className="w-full pb-8 pt-16">
         <h1 className="dark:text-white font-semibold font-Urbanist sm:text-[28px] xl:text-[48px] md:text-[38px] leading-relaxed pb-5 max-w-screen-lg">Effortless Property Management</h1>
         <p className="dark:text-[#999999] font-Urbanist font-medium leading-8 max-w-screen-xl xl:text-[16px]">Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Management.map((section,index) => (
            <div key={index} className="px-5 py-3 rounded-lg shadow-md bg-slate-200 dark:bg-[#1a1a1a]">
              <div className="flex items-center gap-3 pb-5">
                 <img src={section.icon}
                  alt={section.title}
                  width={82}
                  height={82}
                  className="object-contain"
                  />
                  <h1 className="dark:text-white font-Urbanist font-medium max-w-lg text-[14px]">{section.title}</h1>
              </div>
              <p className="dark:text-[#999999] font-Urbanist font-medium max-w-xl leading-7">{section.description}</p>
            </div>
        ))}
          <div className="md:col-span-2 lg:col-span-2 px-5 py-3 bg-slate-200 dark:bg-[#1a1a1a] shadow-md rounded-lg">
            <div className="flex justify-between items-center">
            <h1 className="dark:text-white font-Urbanist font-medium lg:text-[30px] md:text-[20px] sm:text-[15px]">Experience Effortless Property Management</h1>
            <button className="dark:text-white font-Urbanist font-medium dark:bg-bg px-2 py-2 rounded-lg text-sm whitespace-nowrap bg-gray-600 text-white">Learn More</button>
            </div>
            <p className="dark:text-[#999999] font-Urbanist font-medium leading-8 max-w-screen-xl xl:text-[16px]">Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
        </div>
       </div>
         <div className="flex flex-col lg:flex-row lg:items-center gap-10 pt-16 pb-16">
           <div className="lg:w-1/3 space-y-4">
              <h1 className="dark:text-white font-Urbanist font-semibold lg:text-[38px] md:max-w-sm lg:max-w-md">Smart Investments, Informed Decisions</h1>
              <p className="dark:text-[#9999] font-Urbanist font-medium lg:max-w-sm">Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
              <div className="p-6 dark:bg-[#1a1a1a] bg-slate-200  rounded-lg space-y-4">
                <h2 className="dark:text-white font-Urbanist font-semibold text-xl">Unlock Your Investment Potential</h2>
                <p className="dark:text-[#9999] font-Urbanist font-medium max-w-xs">Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                <button className="px-4 bg-bg py-2 rounded text-white whitespace-nowrap">Learn More</button>
              </div>
           </div>
           <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
             {Investments.map((investment) => (
                <div key={investment.title} className="border dark:bg-transparent border-[#9999] rounded-lg px-10 py-4 bg-slate-200">
                   <div className="flex items-center gap-3">
                     <img src={investment.icon}
                       alt={investment.title}
                       className="object-contain w-16 h-16"
                     />
                     <p className="dark:text-white font-Urbanist font-semibold lg:text-[20px]">{investment.title}</p>
                   </div>
                   <p className="dark:text-[#9999] font-Urbanist font-medium leading-7 pt-4">{investment.description}</p>
                </div>
             ))}
           </div>
         </div>
       </div>
      </section>
  )
}

export default ServicePage