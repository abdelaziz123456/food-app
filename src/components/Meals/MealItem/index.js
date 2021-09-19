import classes from './index.module.css';
import MealForm from '../MealForm';
function MealItem(props){
    const price=`$${props.meal.price.toFixed(2)}`
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>   
                <MealForm/>
             
            </div>
            
        </li>
    )
}

export default MealItem