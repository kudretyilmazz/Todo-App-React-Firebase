import Button from 'src/components/button/Button';
import { useNavigate } from 'react-router-dom';
function NotFound() {
	const navigate = useNavigate();
	return (
		<div
			style={{
				height: '91vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<h1>
				Error: 404 not found{' '}
				<Button
					name='homeback'
					onClick={() => navigate('/')}
					label='Back to Home'
					type='default'
					block
				/>{' '}
			</h1>
			<br />
		</div>
	);
}

export default NotFound;
