import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card} id='card'>
            {props.children}
        </div>
    )
};

export default Card;