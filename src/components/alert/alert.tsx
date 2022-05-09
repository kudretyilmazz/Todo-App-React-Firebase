import { Alert as AlertAntd } from 'antd';
import { AlertProps as AlertPropsAntd } from 'antd/lib/alert';

export interface AlertProps extends AlertPropsAntd {
	type?: 'success' | 'info' | 'warning' | 'error';
	closable?: boolean;
	closeText?: React.ReactNode;
	message?: React.ReactNode;
	closeIcon?: React.ReactNode;
	action?: React.ReactNode;
	className?: string;
	onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Alert(props: AlertProps) {
	const {
		type,
		closable,
		closeText,
		message,
		closeIcon,
		action,
		className,
		onMouseEnter,
		onMouseLeave,
		onClick,
	} = props;

	const alertTemplate = (
		<AlertAntd
			type={type}
			closable={closable}
			closeText={closeText}
			message={message}
			closeIcon={closeIcon}
			action={action}
			className={className}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
		></AlertAntd>
	);
	return <>{alertTemplate}</>;
}

export default Alert;
