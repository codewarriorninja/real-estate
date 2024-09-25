import { About } from "../assets/Images/images"
import { Achivement, Experiences, statistics, Values,teamMembers } from "../constants/constant"
import { FaTwitter, FaPaperPlane } from "react-icons/fa"

const AboutPage = () => {
  return (
    <section className="bg-white dark:bg-bg pt-16 w-full">
     <div className="padding-x max-xl:padding-xyz mx-auto">
       <div className="flex justify-between max-lg:flex-col items-center gap-[80px]">
         <div className="flex flex-col w-full flex-1">
           <h1 className="dark:text-white font-semibold font-Urbanist sm:text-[28px] xl:text-[48px] md:text-[38px] leading-relaxed pb-5">Our Journey</h1>
           <p className="dark:text-[#999999] font-Urbanist font-medium leading-8">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
           <div className="grid max-md:grid-cols-2 md:grid-cols-3 gap-6 my-10 w-full">
            {statistics.map((statistic) => (
                <div key={statistic.Label} className="font-Urbanist bg-slate-200 shadow-lg dark:bg-[#1A1A1A] max-sm:text-center rounded-lg px-5 py-3">
                  <h1 className="dark:text-white text-[30px] font-Urbanist font-bold">{statistic.value}</h1>
                  <p className="text-[14px] text-[#999999] font-medium font-Urbanist">{statistic.Label}</p>
                </div>
              ))}
           </div>
         </div>
         <div className="w-full flex-1">
          <img src={About}
          alt="About-image" 
          className="w-full h-auto object-contain" />
         </div>
       </div>
        <div className="flex justify-between flex-wrap items-center gap-10 py-10">
          <div className="flex flex-1 flex-col justify-start xl:w-1/2 md:w-1/3">
             <h1 className="dark:text-white text-[28px] font-semibold font-Urbanist max-w-lg">Our Values</h1>
             <p className="dark:text-[#999999] leading-6 text-[14px] md:max-w-sm xl:max-w-md">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
          </div>
           <div className="border dark:border-[#262626] shadow-lg rounded-[8px] md:w-3/5 xl:w-3/4 px-5 py-10">
            <div className="flex max-md:justify-start md:justify-evenly xl:justify-evenly flex-wrap items-center gap-5 w-full">
              {Values.map((value) => (
                <div key={value.title} className="md:w-1/3 mx-auto max-sm:m-0">
                  <div className="flex items-center gap-3 py-2">
                   <img src={value.imgUrl}
                   alt={value.title}
                   className="object-contain"
                    />
                    <p className="dark:text-white font-Urbanist font-semibold">{value.title}</p>
                  </div>
                  <p className="dark:text-[#999999] font-Urbanist font-medium max-w-60 leading-6 max-sm:max-w-lg">{value.description}</p>
                </div>
              ))}
            </div>
           </div>
        </div>
        <div className="flex flex-col w-full pt-5">
         <h1 className="dark:text-white font-Urbanist font-semibold xl:text-[48px] sm:text-[35px] md:text-[40] max-sm:text-[28px] pb-5">Our Achievements</h1>
         <p className="dark:text-[#999999] max-w-screen-lg max-sm:max-w-lg pb-5">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div> 
        <div className="flex justify-between items-center flex-wrap gap-10 py-10 overflow-hidden">
           {Achivement.map((achive) => (
            <div key={achive.title} className="flex-1 min-w-[230px] max-sm:w-full bg-slate-200 dark:bg-[#1A1A1A] shadow-lg rounded-[8px] p-4">
              <h1 className="dark:text-white font-Urbanist font-semibold text-[20px] px-2 py-2">{achive.title}</h1>
              <p className="dark:text-[#999999] font-Urbanist font-medium leading-6 px-2 py-2">{achive.description}</p>
            </div>
           ))}
        </div>
        <div className="flex flex-col w-full pt-5">
         <h1 className="dark:text-white font-Urbanist font-semibold xl:text-[48px] sm:text-[35px] md:text-[40] max-sm:text-[28px] pb-5">Navigating the Estatein Experience</h1>
         <p className="dark:text-[#999999] max-w-screen-lg max-sm:max-w-lg pb-5">At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
        </div> 
        <div className="flex justify-between items-center flex-wrap gap-10 py-10 overflow-hidden">
           {Experiences.map((experience) => (
            <div key={experience.title} className="flex-1 min-w-[230px] max-sm:w-full bg-slate-200 dark:bg-[#1A1A1A] shadow-lg rounded-[8px] p-4">
              <h1 className="dark:text-white font-Urbanist font-semibold text-[20px] px-2 py-2">{experience.title}</h1>
              <p className="dark:text-[#999999] font-Urbanist font-medium leading-6 px-2 py-2 max-w-xs">{experience.description}</p>
            </div>
           ))}
        </div>
        <div className="flex flex-col w-full pt-5">
         <h1 className="dark:text-white font-Urbanist font-semibold xl:text-[48px] sm:text-[35px] md:text-[40] max-sm:text-[28px] pb-5">Meet the Estatein Team</h1>
         <p className="dark:text-[#999999] max-w-screen-xl max-sm:max-w-lg pb-5">At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
        </div> 
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 py-10 overflow-hidden">
           {teamMembers.map((member,index) => (
            <div key={index} className="relative bg-transparent bg-slate-200 bg-opacity-10 backdrop-blur-md border-opacity-20 shadow-lg border dark:border-[#262626] rounded-lg p-6 text-center transform transition duration-500 hover:scale-90">
               <img src={member.image}
               alt={member.name}
               className="object-contain mx-auto"
                />
                <h2 className="dark:text-white text-xl font-Urbanist font-semibold leading-relaxed">{member.name}</h2>
                <p className="text-[#999999] mb-4">{member.title}</p>
                <div className="mt-16">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full">
                  Say Hello 👋
                </button>
              </div>
            </div>
           ))}
        </div>
      </div>
    </section>
  )
}

export default AboutPage