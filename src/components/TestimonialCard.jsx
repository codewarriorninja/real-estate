
const TestimonialCard = ({testimonial}) => {
  return (
    <div className="bg-slate-200 dark:bg-[#1A1A1A] border dark:border-[#262626] rounded-lg shadow-lg">
       {/* <div className="flex items-center gap-4">
          {testimonial.Stars.map((star) =>(
            <div key={star}>
              <img src={star.imgUrl} />
            </div>
          ))}
       </div> */}
       <h2 className="dark:text-white font-Urbanist font-semibold text-[20px] p-4">{testimonial.Title}</h2>
       <p className="dark:text-white font-Urbanist leading-relaxed mt-2 p-4 text-sm lg:text-lg max-w-lg">{testimonial.TestimonialText}</p>
       <div className="flex items-center gap-3 p-4">
          <img src={testimonial.imgUrl}
           alt={testimonial.Title}
           width={50}
           height={50}
            className="object-contain"
           />
           <div className="flex flex-col">
            <p className="dark:text-white font-medium xl:text-lg sm:text-sm">{testimonial.name}</p>
            <p className="dark:text-white font-medium xl:text-lg sm:text-sm">{testimonial.Location}</p>
           </div>
       </div>
    </div>
  )
}

export default TestimonialCard