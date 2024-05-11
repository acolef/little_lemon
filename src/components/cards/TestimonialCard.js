import './TestimonialCard.css';
import star from '../../assets/star.png';

const TestimonialCard = props => {
    const numStars = props.rating;
    const starRating = Array.from({ length: numStars });

    return (
        <div className="testimonial-card">
            <div className="testimonial-rating">
                {starRating.map((i) =>
                    <img
                        key={i}
                        src={star}
                        alt={`Star ${i}`}
                    />
                )}
            </div>
            <div className="testimonial-person">
                <span className="testimonial-person-img">
                    <img src={props.imgUrl} alt={props.imgAlt} />
                </span>
                <span className="testimonial-person-name">
                    <h4>{props.name}</h4>
                </span>
            </div>
            <div className="testimonial-review">
                <p>"{props.review}"</p>
            </div>
        </div>
    );
}

export default TestimonialCard;