import Form from "src/components/form/Form";
import FormItem from "src/components/form/FormItem";
import Input from "src/components/input/Input";
import InputPassword from "src/components/input/InputPassword";
import Button from "src/components/button/Button";
import styles from "src/asset/style/LoginForm.module.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { registerUser } from "src/firebase";

//loginInfo
export const user = { username: "kudret", password: "123456kudret" };

interface RegisterProps {
	setRegister: (status) => void;
}

function RegisterForm(props: RegisterProps) {
	// Props Destruction
	const { setRegister } = props;

	//Actions
	const Handler = async (values: any) => {
		await registerUser(values?.email, values?.password);
		setRegister(true);
	};

	return (
		<div className={styles.container}>
			<Form className={styles.form} name="RegisterForm" onFinish={Handler}>
				<h2>Register</h2>
				<FormItem
					label="E-mail"
					name="email"
					rules={[
						{ required: true, message: "Please input your email!" },
						{
							type: "email",
							message: "The input is not valid E-mail!",
						},
					]}
				>
					<Input name="email" prefix={<UserOutlined />} />
				</FormItem>

				<FormItem
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}
				>
					<InputPassword name="password" prefix={<LockOutlined />} />
				</FormItem>
				<FormItem style={{ float: "right" }} className={styles.button}>
					<Button
						name="RegisterFormButton"
						label="Register"
						type="ghost"
						htmlType="submit"
					></Button>
				</FormItem>
				<Button name="loginGo" label="< Login" onClick={() => setRegister(true)} type="link" />
			</Form>
		</div>
	);
}

export default RegisterForm;
