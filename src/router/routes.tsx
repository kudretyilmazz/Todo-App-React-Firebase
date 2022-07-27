import { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import TodoList from "src/pages/todoList/TodoList";
import LoginForm from "src/pages/LoginForm";
import NotFound from "src/pages/NotFound";
import LayoutTemplate from "src/pages/LayoutTemplate";
import RegisterForm from "src/pages/RegisterForm";
import { useAppSelector } from "src/store/hooks";
function RouterConfig() {
	// usestates
	const [register, setRegister] = useState<boolean>(true);

	// Variables
	const authStatus = useAppSelector(state => state.auth.user);
	return (
		<Routes>
			<Route
				path="/"
				element={
					<LayoutTemplate>
						{!authStatus ? (
							register ? (
								<LoginForm setRegister={setRegister} />
							) : (
								<RegisterForm setRegister={setRegister} />
							)
						) : (
							<Navigate to="/" />
						)}
					</LayoutTemplate>
				}
			/>
			<Route
				path="/todo"
				element={<LayoutTemplate>{authStatus ? <TodoList /> : <Navigate to="/" />}</LayoutTemplate>}
			/>
			<Route
				path="*"
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
