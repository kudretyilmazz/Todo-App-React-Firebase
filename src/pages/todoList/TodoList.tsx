import TodoForm from './TodoForm';
import ListComp from './List';

function TodoList() {
	return (
		<div style={{ width: '40%', paddingTop: '30px', height: '91vh' }}>
			<TodoForm />
			<ListComp />
		</div>
	);
}

export default TodoList;
