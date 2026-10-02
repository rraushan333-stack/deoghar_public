import "./Testimonials.css";

const testimonials = [
  {
    initials: "SK",
    name: "Sangeeta & Manoj Kumar",
    text: `Watching our daughter flourish here has been truly wonderful. She joined the school as a shy and uncertain child — today, she is confident, responsible, and actively involved in school activities. The teachers genuinely understand and support every child.`,
  },

  {
    initials: "AS",
    name: "Abhishek Sinha",
    text: `Our son has grown tremendously since joining the school. The teachers are caring, supportive, and always encourage students to do their best. We are very happy to see his confidence and interest in learning grow every day.`,
  },

  {
    initials: "PJ",
    name: "Poonam Jha",
    text: `Our daughter has developed a real love for learning since joining the school. The activities, guidance, and friendly atmosphere have helped her become more confident and creative. We truly appreciate the efforts of the teachers and school management.`,
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonial-heading">
        <p>OUR COMMUNITY</p>

        <h2>Stories That Speak.</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">★★★★★</div>

            <p className="testimonial-text">"{item.text}"</p>

            <div className="testimonial-user">
              <div className="user-avatar">{item.initials}</div>

              <strong>{item.name}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
