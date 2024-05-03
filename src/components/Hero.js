import '../styles/Hero.css';
import heroImage from '../assets/restaurantfood-min.jpg';

const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

const Hero = () => {
    return (
        <main className="page-section">
            <div className="hero-elements content-wrapper">
                <div className="hero-column">
                    <section>
                        <h1>
                            Little Lemon
                        </h1>
                        <h2>
                            Chicago
                        </h2>
                    </section>
                    <section>
                        <p>
                            {description}
                        </p>
                    </section>
                    <section>
                        <p>
                            Button stub
                        </p>
                    </section>
                </div>
                <div className="hero-column breakout-img">
                    <img
                        src={heroImage}
                        alt="An employee holding a plate of food"
                    />
                </div>
            </div>
        </main>
    );
};

export default Hero;