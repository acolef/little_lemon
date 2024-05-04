import '../styles/About.css';
import chef from '../assets/chef.jpg';
import chefs from '../assets/marioandadrian.jpg';

const description = ["Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."];

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
                        className="lower"
                        src={chef}
                        alt="A photograph of a whole fish on a flaming grill with potatoes, tomatoes, and lemon"
                    />
                    <img
                        className="higher"
                        src={chefs}
                        alt="A photograph of two smiling chefs conversing"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;