import { useState } from 'react';
import Form from 'src/components/form/Form';
import FormItem from 'src/components/form/FormItem';
import Input from 'src/components/input/Input';
import { PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useAppDispatch } from 'src/store/hooks';
import { add } from 'src/store/todosSlice/todos';
import { message } from 'antd';

function TodoForm() {
	const [newTodo, setNewTodo] = useState('');
	const { Title } = Typography;
	const dispatch = useAppDispatch();
	const TodoHandler = () => {
		if (newTodo !== '' && newTodo !== undefined) {
			dispatch(add(newTodo));
		}
		const messageTemplate = (
			<span>
				{newTodo} <span style={{ color: '#1d5c63', fontWeight: 'bolder' }}>eklendi.</span>
			</span>
		);
		message.success(messageTemplate);
		setNewTodo('');
	};
	return (
		<div>
			<Title level={4}>New Todo</Title>
			<Form name='TodoForm' onFinish={TodoHandler}>
				<FormItem>
					<Input
						name='newTodo'
						placeholder='ex: i will wash my car'
						prefix={<PlusOutlined />}
						value={newTodo}
						onChange={e => setNewTodo(e.target.value)}
					></Input>
				</FormItem>
			</Form>
		</div>
	);
}

export default TodoForm;
