import TestimonialCard from '../cards/TestimonialCard';
import johnny from '../../assets/johnny.jpeg';
import flora from '../../assets/flora.jpeg';
import luna from '../../assets/luna.jpeg';
import matt from '../../assets/matt.jpeg';
import '../../styles/Testimonials.css';

const altText = "A customer's portrait";

const testimonials = [
    {
        id: "t1",
        name: "Johnny",
        rating: 5,
        imgUrl: johnny,
        imgAlt: altText,
        review: "The food here is unbelievable, and I love Little Lemon's atmosphere!",
    },
    {
        id: "t2",
        name: "Flora",
        rating: 5,
        imgUrl: flora,
        imgAlt: altText,
        review: "Delicious food and great service.",
    },
    {
        id: "t3",
        name: "Luna",
        rating: 5,
        imgUrl: luna,
        imgAlt: altText,
        review: "I go to Little Lemon all the time! The food is always amazing, and the staff are so friendly.",
    },
    {
        id: "t4",
        name: "Matt",
        rating: 5,
        imgUrl: matt,
        imgAlt: altText,
        review: "Whether I eat in or order online, this place delivers an excellent experience.",
    },
];

const Testimonials = () => {
    return (
        <section className="page-section testimonials">
            <div className="testimonials-elements content-wrapper">
                <div className="testimonials-row">
                    <section>
                        <h3>
                            Testimonials
                        </h3>
                    </section>
                </div>
                <div className="testimonials-cards">
                    {testimonials.map((data) => {
                        return (
                            <TestimonialCard
                                key={data.id}
                                name={data.name}
                                rating={data.rating}
                                imgUrl={data.imgUrl}
                                imgAlt={data.imgAlt}
                                review={data.review}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;