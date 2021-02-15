import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	}, [todos, status]);

	return (
		<div className="App">
			<header>
				<h1>Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList setTodos={setTodos} todos={filteredTodos} />
		</div>
	);
}

export default App;
