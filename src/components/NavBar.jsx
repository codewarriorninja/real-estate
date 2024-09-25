import { useEffect, useState } from "react"
import { Switch } from "@headlessui/react"
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "../assets/Images/images";
import { NavLinks } from "../constants/constant";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    
        useEffect(() => {
            if(darkMode){
                document.documentElement.classList.add('dark')
            }else{
                document.documentElement.classList.remove('dark')
            }
        },[darkMode]);
   const linkClass = ({isActive}) => isActive ? 'font-medium font-Urbanist bg-black text-white hover:bg-gray-900 hover:text-white] rounded-md px-3 py-2' :'font-medium font-Urbanist text-black dark:text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  return (
    <header>
      <div className="bg-white dark:bg-[#262626] transition-all">
        <div className="w-full shadow-2xl dark:bg-[#262626] bg-slate-200 mx-auto xl:padding-x max-sm:padding-xyz sm:padding-xyz">
         <div className="flex items-center h-20">
           <nav className="flex justify-between items-center w-full relative">
             <div className="flex items-center space-x-4">
                <img src={Logo} width={48} height={48}/>
                <h1 className="font-Urbanist dark:text-white font-semibold">Estatain</h1>
             </div>
             <div className="hidden md:flex space-x-8">
                 {NavLinks.map((Link) => (
                    <NavLink to={Link.to} key={Link.Label} className={linkClass}>{Link.Label}</NavLink>
                 ))}
             </div>
             <div className="flex items-center space-x-4">
               <Switch checked={darkMode}
               onChange={setDarkMode}
               className={ `${darkMode ? 'bg-gray-800' : 'bg-blue-600'} relative inline-flex h-6 w-11 items-center rounded-full`}>
                 <span className={`${darkMode ? 'translate-x-1' :'translate-x-6'} inline-block h-4 w-4 transform rounded-full bg-white transition`}/>
               </Switch>
               <button className="md:hidden focus:outline-none" onClick={() =>setMenuOpen(!menuOpen)}>{menuOpen ? (
                <FiX className="h-6 w-6 dark:text-white text-black" />
               ) :(
                <FiMenu className="h-6 w-6 dark:text-white text-black" />
               )}</button>
             </div>
             <div className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-bg shadow-lg transform ${menuOpen ? 'translate-x-0' :'-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
              <div className="flex flex-col items-start p-6 space-y-4">
                    <div className="flex items-center pt-4 space-x-4">
                        <img src={Logo} width={48} height={48}/>
                        <h1 className="font-Urbanist dark:text-white font-semibold">Estatain</h1>
                    </div>
                    {NavLinks.map((Link) => (
                    <NavLink to={Link.to} key={Link.Label} className='dark:text-white text-black font-Urbanist py-2'>{Link.Label}</NavLink>
                 ))}
                </div>
             </div>
           </nav>
          </div> 
        </div>
      </div>
      {/* <Hero darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Property darkMode={darkMode} /> */}
    </header>
  )
}

export default NavBar