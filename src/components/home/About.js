import '../../styles/About.css';
import chef from '../../assets/chef.jpg';
import chefs from '../../assets/marioandadrian.jpg';

const description = ["Little Lemon is a stylish Mediterranean restaurant situated in the Chicago area. We have an extensive, healthy menu featuring only the finest fresh and organic ingredients. We offer reservations for a variety of occasions, and our site features convenient online ordering."];

const About = () => {
    return (
        <section className="page-section about">
            <div className="about-elements content-wrapper" id="about">
                <div className="about-column">
                    <section>
                        <h1>
                            Little Lemon
                        </h1>
                        <h3>
                            Chicago
                        </h3>
                    </section>
                    <section>
                        <p>
                            {description}
                        </p>
                    </section>
                </div>
                <div className="img-stack">
                    <img
                        className="about-pic"
                        src={chef}
                        alt="A chef preparing a salad"
                    />
                    <img
                        className="about-pic"
                        src={chefs}
                        alt="A photograph of two smiling chefs conversing"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;