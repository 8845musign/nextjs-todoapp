"use client"

import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

import type { Todo } from '../../types';

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        setTodos([...todos, { id: String(todos.length + 1), text }]);
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}

export default TodoPage;