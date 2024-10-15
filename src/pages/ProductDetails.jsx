import { useState } from "react"
import { useParams } from "react-router-dom"
import { Icon, LeftArrow, RightArrow } from "../assets/Icons/icons"

const ProductDetails = ({properties}) => {
const { id } = useParams();
const property = properties.find((prop) => prop.id === parseInt(id))
const [currentImageIndex, setCurrentImageIndex] = useState(); 

   if(!property){
    return <div>Propert Not Found</div>
   }
    
   const detailImages = property.detailImages || [];

   const nextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === detailImages.length - 1 ? 0 : prevIndex + 1)
   }
   const PrevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? detailImages.length - 1 : prevIndex -1);
   }

   const changeImage = (index) => {
    setCurrentImageIndex(index);
   }
  return (
    <section className="bg-white dark:bg-bg min-h-screen pt-10 w-full">
     <div className="padding-x max-xl:padding-xyz mx-auto">
        <div className="w-full">
        <div className="flex justify-between items-center">
          <p className="dark:text-white font-Urbanist font-medium">{property.name}</p>
          <p className="dark:text-white font-Urbanist font-medium">{property.Price}</p>
         </div>
            <div className="flex flex-wrap justify-center gap-1 w-full my-4 overflow-x-auto">
              {detailImages.map((image,index) => (
                <img key={index}
                 src={image} 
                 alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => changeImage(index)}
                 />
              ))}
            </div>
            <div className="relative flex justify-center items-center py-10">
              <div className="flex flex-col">
              <img src={detailImages[currentImageIndex]} 
               alt={`detail ${currentImageIndex+1}`}
               className="w-full h-auto md:w-96 object-contain mb-4"
              />
              <div className="flex items-center justify-between">
              <button className="bg-[#999999] w-10 h-10 rounded-full text-center flex items-center justify-center" onClick={PrevImage}><img src={LeftArrow} alt="Right Arrow" className=" object-contain" /></button>
                <button className="bg-[#999999] w-10 h-10 rounded-full text-center flex items-center justify-center" onClick={nextImage}><img src={RightArrow} alt="Right Arrow" className=" object-contain" /></button>
              </div>
              </div>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 pb-10">
          <div className="lg:w-1/2 lg:h-1/2 border border-[#292929] px-5 py-5 rounded-lg">
            <h2 className="dark:text-white font-Urbanist font-semibold leading-7 pb-5">Description</h2>
            <p className="dark:text-[#999999] font-Urbanist lg:max-w-xl font-medium leading-8 pb-5">{property.description}</p>
            <div className="flex items-start justify-between gap-8 border-t border-t-[#9999]">
              <div className="flex flex-col items-center gap-3 py-5">
                <img src={property.BedIconUrl} alt={property.name} className="object-contain bg-black p-2 rounded-full" />
                <p className="dark:text-white whitespace-nowrap">{property.Bedtext}</p>
              </div>
              <div className="flex flex-col items-center gap-3 pt-5">
                <img src={property.BathIconUrl} alt={property.name} className="object-contain bg-black p-2 rounded-full" />
                <p className="dark:text-white whitespace-nowrap">{property.BathText}</p>
              </div>
              <div className="flex flex-col items-center gap-3 pt-5">
                <img src={property.AreaIconUrl} alt={property.name} className="object-contain bg-black p-2 rounded-full" />
                <p className="dark:text-white">{property.Area}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 px-4 py-3 border border-[#292929] rounded-lg">
             <div className="flex flex-col px-5 py-5 gap-6">
              <h1 className="dark:text-white font-Urbanist font-semibold pb-5">Key Features and Amenities</h1>
              <div className="flex items-center gap-3 bg-slate-200 dark:bg-[#292929] px-2 py-3 border-l-lime-600 border-l-4">
                 <img src={Icon} alt="icon" className="object-contain" />
                 <p className="dark:text-[#999999] font-Urbanist font-medium">Expansive oceanfront terrace for outdoor entertaining</p>
              </div>
              <div className="flex items-center gap-3 bg-slate-200 dark:bg-[#292929] px-2 py-3 border-l-lime-600 border-l-4">
                 <img src={Icon} alt="icon" className="object-contain" />
                 <p className="dark:text-[#999999] font-Urbanist font-medium">Gourmet kitchen with top-of-the-line appliances</p>
              </div>
              <div className="flex items-center gap-3 bg-slate-200 dark:bg-[#292929] px-2 py-3 border-l-lime-600 border-l-4">
                 <img src={Icon} alt="icon" className="object-contain" />
                 <p className="dark:text-[#999999] font-Urbanist font-medium">Private beach access for morning strolls and sunset views</p>
              </div>
              <div className="flex items-center gap-3 bg-slate-200 dark:bg-[#292929] px-2 py-3 border-l-lime-600 border-l-4">
                 <img src={Icon} alt="icon" className="object-contain" />
                 <p className="dark:text-[#999999] font-medium font-Urbanist">Master suite with a spa-inspired bathroom and ocean-facing balcony</p>
              </div>
              <div className="flex items-center gap-3 bg-slate-200 dark:bg-[#292929] px-2 py-3 border-l-lime-600 border-l-4">
                 <img src={Icon} alt="icon" className="object-contain" />
                 <p className="dark:text-[#999999] font-medium font-Urbanist">Private garage and ample storage space</p>
              </div>
             </div>
          </div>
        </div>
      </div>
      </section>
  )
}

export default ProductDetails