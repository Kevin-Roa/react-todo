import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	// Filter the todos based on the status
	const filterHandler = () => {
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
	};

	// Save todos locally
	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	// Get the locally saved todos
	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			setTodos(JSON.parse(localStorage.getItem('todos')));
		}
	};

	// Get todos from localStorage on startup
	useEffect(() => {
		getLocalTodos();
	}, []);

	// Update filtered todos every time todos or status changes
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
		// eslint-disable-next-line
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
