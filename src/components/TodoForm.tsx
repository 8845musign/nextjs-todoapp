import React, { useState } from 'react';

import styled from 'styled-components';

type Props = {
    addTodo: (text: string) => void;
}

const Form = styled.form`
    display: flex;
    margin-bottom: 16px;
    padding: 16px;
`;

const Input = styled.input`
    flex: 1;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
`

const TodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!text) return;
        addTodo(text);
        setText('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </Form>
    )
}

export default TodoForm;