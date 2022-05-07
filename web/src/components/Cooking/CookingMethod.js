import styles from './CookingMethod.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
const CookingMethod = props =>{

    const clickHandler = (event) => {
        console.log('clicked')
        props.onDeleteMethod(props.id);
      };
return(  
<li>
    <Card className={`${styles['cookingmethod-item']}`}>
      <div className={`${styles['cookingmethod-item__description']}`}>
        <h2>{props.title}</h2>
        <div className={`${styles['cookingmethod-item__ingredients']}`}>{props.ingredients}</div>
      </div>
      <Button onClick={clickHandler}>Delete Method</Button>
    </Card>
    </li>



);

}

export default CookingMethod;