import { Link } from 'react-router-dom';

const SpecialCard = props => {
    return (
        <div className="special-card">
            <div className="special-card-img">
                <img
                    src={props.imgUrl}
                    alt={props.imgAlt}
                />
            </div>
            <div className="special-card-text">
                <div className="special-card-header">
                    <span>
                        <h4 className="card">{props.specialName}</h4>
                    </span>
                    <span>
                        <p className="card-price">$ {props.price}</p>
                    </span>
                </div>
                <div className="special-card-description">
                    <p>
                        {props.specialDescription}
                    </p>
                </div>
                <div className="special-card-delivery">
                    <Link to="#">Order a delivery</Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialCard;