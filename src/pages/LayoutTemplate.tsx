import { Layout } from 'antd';
import { user } from './LoginForm';
import styles from 'src/asset/style/Home.module.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { Logout } from 'src/store/authSlice/auth';

function LayoutTemplate({ children }) {
	const { Header, Content } = Layout;
	const { Title, Text } = Typography;
	const authStatus = useAppSelector(state => state.auth.value);
	const dispatch = useAppDispatch();
	return (
		<Layout>
			<Header className={styles.header}>
				<Title level={3} style={{ color: '#f9ebde' }}>
					Todo App
				</Title>
				{authStatus && (
					<Text className={styles.text}>
						Welcome, {user.username} <span className={styles.separator}>|</span>
						<span onClick={() => dispatch(Logout())} className={styles.logout}>
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
