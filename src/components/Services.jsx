import { Servicess } from "../constants/constant"
const Services = () => {
  return (
    <section className="bg-white dark:bg-bg w-full border dark:border-[#262626] py-4">
       <div className="grid max-md:grid-cols-1 md:grid-cols-4 gap-6 w-full padding-xyz">
        {Servicess.map((service) => (
         <div key={service.text} className="flex flex-col items-center text-center justify-center bg-slate-200 shadow-lg dark:bg-[#1A1A1A] py-3 px-4 leading-relaxed rounded-[8px] ">
            <img src={service.imgUrl} width={60} height={60} className="object-contain block" />
            <p className="text-[14px] dark:text-white font-semibold font-Urbanist pt-3">{service.text}</p>
            </div>
        ))}
       </div>
    </section>
  )
}

export default Services