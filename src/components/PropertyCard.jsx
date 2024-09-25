import { useState } from "react"
import { Bath, Bed, Building } from "../assets/Icons/icons";
import { NavLink } from "react-router-dom";

const PropertyCard = ({property}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = property.description;

    if(!showFullDescription){
     description = description.substring(0,90) + '...'
    }
  return (
    <div className="border dark:border-[#262626] rounded-lg shadow-lg">
      <img src={property.imgUrl}
      alt="bulding"
      className="w-full h-full object-cover mb-4 p-4"
       />
       <h2 className="dark:text-white font-Urbanist font-semibold text-[20px] p-4">{property.name}</h2>
       <p className="dark:text-white font-Urbanist leading-relaxed mt-2 p-4">{description}</p>
       <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 p-2 hover:text-indigo-600">{showFullDescription ? 'Less' :'More'}</button>
       <div className="flex items-center justify-between gap-6 p-4">
          <div className="flex flex-col">
             <p className="dark:text-[#999999] font-Urbanist font-medium text-[18px]">{property.PriceText}</p>
             <p className="dark:text-white font-semibold text-[25px]">{property.Price}</p>
          </div>
          <NavLink to={`/property/${property.id}`} className="text-white dark:text-white font-medium font-Urbanist bg-[#703BF7] px-2 py-3 rounded-[8px]">View Property Details</NavLink>
       </div>
    </div>
  )
}

export default PropertyCard