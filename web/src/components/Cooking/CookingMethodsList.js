import CookingMethod from './CookingMethod';
import styles from './CookingMethodsList.module.css';
const CookingMethodList = (props) =>{
    const deleteMethodHandler = (methodId) =>{
        props.deleteMethod(methodId)
    }

    // let expenseContent = <p>No Expenses Found</p>;

   if(props.methods.length === 0){
       return <h2 className={`${styles['method-list__fallback']}`}>No Methods yet</h2>
   }

    return(
        
        <ul className={`${styles['method-list']}`}>
        {props.methods.map((method) => (
        <CookingMethod
          id = {method.id}
          key = {method.id}
          title={method.method_name}
          ingredients={method.ingredients}
          onDeleteMethod={deleteMethodHandler}
        />
      ))}
        </ul>
       
    )

}

export default CookingMethodList;