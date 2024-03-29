import Form from "src/components/form/Form";
import FormItem from "src/components/form/FormItem";
import Input from "src/components/input/Input";
import InputPassword from "src/components/input/InputPassword";
import Button from "src/components/button/Button";
import styles from "src/asset/style/LoginForm.module.css";
import { useNavigate } from "react-router-dom";

import { loginUser } from "src/firebase";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

//loginInfo

// Interface
interface loginProps {
	setRegister: (status) => void;
}

function LoginForm(props: loginProps) {
	// Props Destruction
	const { setRegister } = props;

	// variables
	const navigate = useNavigate();

	// actions
	const Handler = async (values: any) => {
		await loginUser(values?.username, values?.password);
		navigate("/todo");
	};

	return (
		<div className={styles.container}>
			<Form className={styles.form} name="LoginForm" onFinish={Handler}>
				<h2>Login</h2>
				<FormItem
					label="Username"
					name="username"
					rules={[{ required: true, message: "Please input your username!" }]}
				>
					<Input name="username" prefix={<UserOutlined />} />
				</FormItem>

				<FormItem
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}
				>
					<InputPassword name="password" prefix={<LockOutlined />} />
				</FormItem>
				<FormItem style={{ float: "right" }} className={styles.button}>
					<Button name="LoginFormButton" label="Login" type="ghost" htmlType="submit"></Button>
				</FormItem>
				<Button
					name="registerGo"
					label="< register now"
					onClick={() => setRegister(false)}
					type="link"
				/>
			</Form>
		</div>
	);
}

export default LoginForm;
