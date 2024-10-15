
const QuestionsCard = ({Question}) => {
  return (
    <div className="bg-slate-200 dark:bg-[#1A1A1A] border dark:border-[#262626] rounded-lg shadow-lg">
       {/* <div className="flex items-center gap-4">
          {testimonial.Stars.map((star) =>(
            <div key={star}>
              <img src={star.imgUrl} />
            </div>
          ))}
       </div> */}
       <h2 className="dark:text-white font-Urbanist font-semibold text-xl p-4">{Question.Title}</h2>
       <p className="dark:text-white font-Urbanist mt-2 p-4 max-w-md text-base">{Question.QuestionText}</p>
       </div>
  )
}

export default QuestionsCard