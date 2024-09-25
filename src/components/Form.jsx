import { useState } from "react"
const Form = () => {
 const [contactMethod, setContactMethod] = useState('phone')
  return (
    <div className="pb-16">
     <form className="w-full border border-[#9999] shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">First Name</label>
            <input type="text" placeholder="Enter First Name" className="w-full p-2 bg-slate-200 dark:bg-[#262626] rounded outline-none focus:right-2 focus:ring-purple-500" />
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">Last Name</label>
            <input type="text" placeholder="Enter Last Name" className="w-full p-2 bg-slate-200 dark:bg-[#262626] rounded outline-none focus:right-2 focus:ring-purple-500" />
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">Email</label>
            <input type="email" placeholder="Email" className="w-full p-2 bg-slate-200 dark:bg-[#262626] rounded outline-none focus:right-2 focus:ring-purple-500" />
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">Phone Number</label>
            <input type="text" placeholder="Enter Phone Number" className="w-full p-2 bg-slate-200 dark:bg-[#262626] rounded outline-none focus:right-2 focus:ring-purple-500" />
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">Preferred Location</label>
            <select className="w-full p-2 rounded bg-slate-200 dark:bg-[#262626] outline-none focus:ring-2">
                <option>Select Location</option>
            </select>
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">Property Type</label>
            <select className="w-full p-2 rounded bg-slate-200 dark:bg-[#262626] outline-none focus:ring-2">
                <option>Select Property Type</option>
            </select>
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">No. of Bathrooms</label>
            <select className="w-full p-2 rounded bg-slate-200 dark:bg-[#262626] outline-none focus:ring-2">
                <option>Select no. of Bathrooms</option>
            </select>
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">No. of Bedrooms</label>
            <select className="w-full p-2 rounded bg-slate-200 dark:bg-[#262626] outline-none focus:ring-2">
                <option>Select no. of Bedrooms</option>
            </select>
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">Budget</label>
            <select className="w-full p-2 rounded bg-slate-200 dark:bg-[#262626] outline-none focus:ring-2">
                <option>Select Budget</option>
            </select>
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">Preferred Contact Method</label>
            <input type="text" placeholder="Enter Phone Number" className="w-full p-2 bg-slate-200 dark:bg-[#262626] rounded outline-none focus:right-2 focus:ring-purple-500" />
        </div>
        <div className="p-2">
            <label className="block mb-2 font-Urbanist font-medium dark:text-white">Email</label>
            <input type="email" placeholder="Email" className="w-full p-2 bg-slate-200 dark:bg-[#262626] rounded outline-none focus:right-2 focus:ring-purple-500" />
        </div>
      </div>
      <div className="flex flex-col mt-4 p-2 mb-2 font-Urbanist font-medium dark:text-white">
        <label className="">Message</label>
          <textarea rows='4' placeholder="Enter Your Message here...." className="w-full p-2  bg-slate-200 dark:bg-[#262626] outline-none rounded"/>
      </div>
      <div className="flex justify-between items-center flex-wrap">
      <div className="flex items-center mt-4 p-2">
         <input type="checkbox" className="mr-2" />
         <label className="text-sm font-Urbanist font-medium dark:text-white">I agree with <a href='#' className="text-purple-500 underline font-Urbanist font-medium"> Terms of Use </a>and <a href="#" className="text-purple-500 underline">Privacy Policy</a></label>
      </div>
      <button className="max-sm:w-full p-3 bg-purple-600 hover:bg-purple-700 text-white font-medium font-Urbanist rounded-lg m-2">Send Your Message</button>
      </div>
     </form>
    </div>
  )
}

export default Form