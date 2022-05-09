import Form from 'src/components/form/Form';
import FormItem from 'src/components/form/FormItem';
import Input from 'src/components/input/Input';
import InputPassword from 'src/components/input/InputPassword';
import { message } from 'antd';
import Button from 'src/components/button/Button';
import styles from 'src/asset/style/LoginForm.module.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAppDispatch } from 'src/store/hooks';
import { Login } from 'src/store/authSlice/auth';
export const user = { username: 'kudret', password: '123456kudret' };

function LoginForm() {
	const dispatch = useAppDispatch();
	const Handler = (values: any) => {
		if (values.username === user.username && values.password === user.password) {
			dispatch(Login());
		} else {
			message.error('Username and password are incorrect');
		}
	};

	return (
		<div className={styles.container}>
			<Form className={styles.form} name='LoginForm' onFinish={Handler}>
				<FormItem
					label='Username'
					name='username'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input name='username' prefix={<UserOutlined />} />
				</FormItem>

				<FormItem
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<InputPassword name='password' prefix={<LockOutlined />} />
				</FormItem>
				<FormItem style={{ float: 'right' }} className={styles.button}>
					<Button name='LoginFormButton' label='Login' type='ghost' htmlType='submit'></Button>
				</FormItem>
			</Form>
		</div>
	);
}

export default LoginForm;
