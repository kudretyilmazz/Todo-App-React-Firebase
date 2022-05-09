import { Routes, Route, Navigate } from 'react-router-dom';
import TodoList from 'src/pages/todoList/TodoList';
import LoginForm from 'src/pages/LoginForm';
import NotFound from 'src/pages/NotFound';
import LayoutTemplate from 'src/pages/LayoutTemplate';
import { useAppSelector } from 'src/store/hooks';
function RouterConfig() {
	const authStatus = useAppSelector(state => state.auth.value);
	return (
		<Routes>
			<Route
				path='/'
				element={
					!authStatus ? (
						<LayoutTemplate>
							<LoginForm />
						</LayoutTemplate>
					) : (
						<Navigate to='/todo' />
					)
				}
			/>
			<Route
				path='/todo'
				element={
					authStatus ? (
						<LayoutTemplate>
							<TodoList />
						</LayoutTemplate>
					) : (
						<Navigate to='/' />
					)
				}
			/>
			<Route
				path='*'
				element={
					<LayoutTemplate>
						<NotFound />
					</LayoutTemplate>
				}
			/>
		</Routes>
	);
}

export default RouterConfig;
