import { Fragment } from "react";
import mealsImage from '../../../assets/meals.jpg';
import classes from './index.module.css'
import CartIcon from "../../Cart/CartIcon";
function Header (props){
    return (
        <Fragment>
        <header className={classes.header}>
          <h1 >FoodProject</h1>
          
          <button className={classes.button}>
            

            <span  className={classes.icon}>
                <CartIcon/>
            </span>

            <span >
                Your Cart
            </span>

            <span className={classes.badge}>
                3
            </span>
            
        </button>

        </header>
        <div className={classes['main-image']}>
        <img  src={mealsImage} alt="delicious food image" />
        </div>

        
  
      </Fragment>
    )
}


export default Header