import { Message } from "../assets/Icons/icons"
import { Logo } from "../assets/Images/images"
import { FooterLinks } from "../constants/constant"
import { BiCopyright } from "react-icons/bi"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-bg w-full pt-16">
       <div className="padding-x max-xl:padding-xyz mx-auto">
        <div className="flex justify-between items-start flex-wrap gap-20">
          <div className="flex flex-col gap-8 max-sm:w-full">
            <div className="flex items-center gap-4">
                <img src={Logo}
                alt="logo"
                width={48}
                height={48}
                className="object-contain"
                />
                <h1 className="dark:text-white font-semibold xl:text-[25px] font-Urbanist">Estate</h1>
             </div>
             <div className="flex items-center justify-between border border-[#262626] rounded-2xl pr-5">
              <input type="text" placeholder="Enter Your Email" className="bg-transparent outline-none pl-4 py-3 sm:w-[265px] lg:w-[305px] xl:w-[423px] w-full"/>
              <img src={Message}
              alt="message"
               width={25}
               height={25}
               className="object-contain cursor-pointer dark:bg-transparent dark:p-0 bg-black rounded-full p-1"
               />
             </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5  gap-20 lg:gap-10 w-full">
            {FooterLinks.map((footer) =>(
              <div key={footer.title}>
               <h4 className="text-[#999999] font-Urbanist font-medium leading-6 sm:text-[16px] lg:text-[18px] xl:text-[20px] max-sm:text-[14px] pb-7">{footer.title}</h4>
               <ul className="flex flex-col gap-[20px]">
                {footer.links.map((link) => (
                  <li key={link.name} className="dark:text-white leading-6 font-medium font-Urbanist xl:text-[18px] max-sm:text-[14px] sm:text-[16px]">{link.name}</li>
                ))}
               </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-3">
          <BiCopyright className="text-xl dark:text-[#fff]" />
          <span className="dark:text-[#fff] font-WorkSans font-medium text-lg">Develop By Henok Aragaw</span>
          </div>
        </div>
       </div>
    </footer>
  )
}

export default Footer