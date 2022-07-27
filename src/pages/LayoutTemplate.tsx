import { Layout } from "antd";
import styles from "src/asset/style/Home.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { logoutUser } from "src/firebase";
import { useAppSelector } from "src/store/hooks";

function LayoutTemplate({ children }) {
	const { Header, Content } = Layout;
	const { Title, Text } = Typography;

	// variables
	const authStatus: any = useAppSelector(state => state.auth.user);

	// actions
	const LogoutHandler = async () => {
		await logoutUser();
	};
	return (
		<Layout>
			<Header className={styles.header}>
				<Title level={3} style={{ color: "#f9ebde" }}>
					Todo App
				</Title>
				{authStatus && (
					<Text className={styles.text}>
						Welcome, {authStatus?.email} <span className={styles.separator}>|</span>
						<span className={styles.logout} onClick={() => LogoutHandler()}>
							Logout {<ArrowRightOutlined />}
						</span>
					</Text>
				)}
			</Header>
			<Content className={styles.content}>{children}</Content>
		</Layout>
	);
}

export default LayoutTemplate;
