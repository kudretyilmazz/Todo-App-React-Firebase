import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

export interface Todo {
	id: string;
	title: string;
	editable: boolean;
}

const initialState: Todo[] = [];

const TodosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<string>) => {
			const newTodo = { id: nanoid(), title: action.payload, editable: false };
			state.push(newTodo);
		},
		remove: (state, action: PayloadAction<string>) => {
			return state.filter(todo => todo.id !== action.payload);
		},
		editableChanger: (state, action: PayloadAction<string>) => {
			return state.map(todo => (todo.id === action.payload ? { ...todo, editable: true } : todo));
		},
		update: (state, action: PayloadAction<[string, string]>) => {
			return state.map(todo =>
				todo.id === action.payload[0]
					? { ...todo, title: action.payload[1], editable: false }
					: todo
			);
		},
	},
});

export default TodosSlice.reducer;
export const { add, remove, editableChanger, update } = TodosSlice.actions;
