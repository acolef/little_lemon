import '../../styles/Specials.css';
import greeksalad from '../../assets/greek_salad.jpg';
import bruschetta from '../../assets/bruschetta.jpg';
import lemondessert from '../../assets/lemon_dessert.jpeg';
import SpecialCard from '../cards/SpecialCard';

const weeklySpecials = [
    {
        dish: "Greek Salad",
        price: "12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        imgUrl: greeksalad,
        imgAlt: "A Greek salad",
    },
    {
        dish: "Bruschetta",
        price: "5.99",
        description: "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        imgUrl: bruschetta,
        imgAlt: "Four bruschettas on a wooden platter",
    },
    {
        dish: "Lemon Dessert",
        price: "5.00",
        description: "This comes straight from grandma's recipe book! Every last ingredient has been sourced and is as authentic as can be imagined.",
        imgUrl: lemondessert,
        imgAlt: "A small, rectangular slice of a four-layered lemon cake topped with cream",
    },
];

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
                    {weeklySpecials.map((data, i) => {
                        return (
                            <SpecialCard
                                key={i}
                                dish={data.dish}
                                price={data.price}
                                description={data.description}
                                imgUrl={data.imgUrl}
                                imgAlt={data.imgAlt}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Specials;