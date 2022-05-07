import CookingMethod from './CookingMethod';
import styles from './CookingMethodsList.module.css';
const CookingMethodList = (props) =>{

  

    // let expenseContent = <p>No Expenses Found</p>;

   if(props.methods.length === 0){
       return <h2 className={`${styles['method-list__fallback']}`}>No Methods yet</h2>
   }

    return(
        <ul className={`${styles['method-list']}`}>
        {props.methods.map((method) => (
        <CookingMethod
          key = {method.id}
          title={method.name}
          ingredients={method.ingredients}
        />
      ))}
        </ul>
    )

}

export default CookingMethodList;