import React from 'react';

import Todo from './Todo.jsx';

const TodoList = ({ setTodos, todos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((todo) => (
					<Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
