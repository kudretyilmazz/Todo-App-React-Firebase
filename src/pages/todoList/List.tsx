import { List, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { remove, editableChanger, update } from 'src/store/todosSlice/todos';
import Form from 'src/components/form/Form';
import Input from 'src/components/input/Input';
import FormItem from 'src/components/form/FormItem';
const { Title } = Typography;

function ListComp() {
	const todos = useAppSelector(state => state.todos);
	const dispatch = useAppDispatch();
	const DeleteHandler = (id: string) => {
		dispatch(remove(id));
	};
	const editableHandler = (id: string) => {
		dispatch(editableChanger(id));
	};
	const updateHandler = (value: any) => {
		dispatch(update([value.id, value.values.editableInput]));
	};
	return (
		<List
			header={
				<div>
					<Title level={3} underline>
						Todos
					</Title>
				</div>
			}
			bordered
			size='small'
			dataSource={todos}
			renderItem={item =>
				item.editable ? (
					<List.Item>
						<Form name='editableTodo' onFinish={e => updateHandler({ id: item.id, values: e })}>
							<FormItem initialValue={item.title} name='editableInput'>
								<Input />
							</FormItem>
						</Form>
					</List.Item>
				) : (
					<List.Item>
						<p onClick={() => editableHandler(item.id)}> {item.title} </p>
						<span onClick={() => DeleteHandler(item.id)} style={{ float: 'right' }}>
							{<CloseOutlined style={{ color: 'red' }} />}
						</span>
					</List.Item>
				)
			}
		></List>
	);
}

export default ListComp;
