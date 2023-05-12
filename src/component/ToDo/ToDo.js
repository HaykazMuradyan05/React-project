import './ToDo.css'

export default function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className='Item-todo'>
            <div className={todo.complete ? 'strike' : 'item-text'}
                onClick={() => toggleTask(todo.id)}>
                {todo.id}
            </div>
            <div className='item-delete' onClick={() => removeTask(todo.id)}>X</div>
        </div>
    )
}