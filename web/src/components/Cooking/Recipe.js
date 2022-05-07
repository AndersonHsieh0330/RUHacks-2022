import styles from './Recipe.module.css'
import CookingMethodList from './CookingMethodsList';
import Card from '../UI/Card';
import { useState } from "react";
const Recipe = props =>{

    const [name, setName] = useState('Fried Chicken');
    return(
<Card className = {`${styles['recipe']}`}>
<h1>{name}</h1>
<CookingMethodList methods={props.methods} deleteMethod = {props.deleteMethod}/>
</Card>
    )
}

export default Recipe;