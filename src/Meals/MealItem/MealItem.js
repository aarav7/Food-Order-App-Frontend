import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props => {
    return <li className={styles.meal}>
        <div>
            <h3>{props.meal.name}</h3>
            <div className={styles.description}>{props.meal.description}</div>
            <div className={styles.price}>{`$${props.meal.price.toFixed(2)}`}</div>
        </div>
        <div>
            <MealItemForm id={props.id} meal={props.meal} />
        </div>
    </li>
}

export default MealItem