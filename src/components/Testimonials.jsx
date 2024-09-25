import Property from "./Property"

const Testimonials = ({isTestimonial}) => {
  return (
    <section className="bg-white dark:bg-bg">
      <Property isTestimonial={true} />
    </section>
  )
}

export default Testimonials