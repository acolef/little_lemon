import './HorizontalScroll.css';

const HorizontalScroll = props => {
    return (
        <div className="horizontal-scroller">
            {props.children}
        </div>
    );
};

export default HorizontalScroll;