import React from 'react'
import { Todo } from '../types'

type Props = {
    todos: Todo[];
    deleteTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button type='button' onClick={() => { deleteTodo(todo.id) }}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;