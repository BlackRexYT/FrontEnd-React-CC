import './Todo.css'

function Todo(props){
    return(
        <div className="todo">
            <h2>{props.title}</h2>
            <p>{props.para}</p>
            <button>delete</button>
        </div>
    )
}

export default Todo