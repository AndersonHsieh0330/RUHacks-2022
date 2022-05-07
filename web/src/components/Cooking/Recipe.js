import styles from './Recipe.module.css'
import CookingMethodList from './CookingMethodsList';
import Card from '../UI/Card';
const Recipe = props =>{

    
    return(
<Card className = {`${styles['recipe']}`}>
<h1>{props.recipeName}</h1>
<CookingMethodList methods={props.methods} deleteMethod = {props.deleteMethod}/>
</Card>
    )
}

export default Recipe;