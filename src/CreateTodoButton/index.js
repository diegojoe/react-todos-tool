import './CreateTodoButton.css'
function CreateTodoButton()
{
    return (
        <button className="CreateTodoButton"
        onClick={()=>{
            console.log('le diste al boton crear');
        }}>+</button>
    )
}
export {CreateTodoButton}
