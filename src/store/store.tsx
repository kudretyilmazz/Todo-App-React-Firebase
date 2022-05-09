import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice/auth';
import TodosReducer from './todosSlice/todos';

const store = configureStore({
	reducer: {
		auth: authReducer,
		todos: TodosReducer,
	},
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
