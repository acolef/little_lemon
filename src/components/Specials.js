import '../styles/Specials.css';
import greeksalad from '../assets/greek_salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemondessert from '../assets/lemon_dessert.jpeg';

const Specials = () => {
    return (
        <section className="page-section specials">
            <div className="specials-elements content-wrapper">
                <div className="specials-row">
                    <section>
                        <h2>
                            This week's specials!
                        </h2>
                    </section>
                    <section>
                        <button>
                            Online Menu
                        </button>
                    </section>
                </div>
                <div className="specials-cards">
                    <p>
                        Special card stub
                    </p>
                    <p>
                        Special card stub
                    </p>
                    <p>
                        Special card stub
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Specials;