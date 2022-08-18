import styles from './AvailableMeals.module.css';
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];



const AvailableMeals = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);

    async function fetchMeals() {
        try {
            const response = await fetch("https://food-order-app-backend-aarav.herokuapp.com/meals");
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const data = await response.json();
            const meals = data.map((item) => {
                return {
                    id: item._id,
                    name: item.name,
                    description: item.description,
                    price: item.price
                }
            })
            setMeals(meals)
            setIsLoading(false)
        }
        catch (err) {
            console.log(err.message);
            console.log(err);
            setIsLoading(false)
            setError(err.message)
        }

    }

    const mealsList = meals.map(meal => {
        return <MealItem key={meal.id} id={meal.id} meal={meal} />
    });

    useEffect(() => {
        fetchMeals();
    }, []);

    return <section className={styles.meals}>
        <Card>
            {!isLoading && meals.length > 0 && !error &&
                <ul>
                    {mealsList}
                </ul>}
            {!isLoading && meals.length === 0 && !error && <p>Found no Items</p>}
            {isLoading && !error && <p>Loading...</p>}
            {error && <p>There was an error</p>}
        </Card>
    </section>
}

export default AvailableMeals