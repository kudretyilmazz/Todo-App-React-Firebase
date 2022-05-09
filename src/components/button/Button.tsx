import { Button as ButtonAntd } from 'antd';
import { SIZES } from 'src/constants/common/sizes';
import { ButtonProps as ButtonPropsAntd } from 'antd/lib/button';
import { MARGIN_SIZES } from 'src/constants/common/marginSizes';
import { ReactNode } from 'react';

export interface ButtonProps extends Omit<ButtonPropsAntd, 'size'> {
	label?: string | undefined;
	customLabel?: ReactNode | undefined;
	icon?: ReactNode;
	rightIcon?: ReactNode;
	className?: string | undefined;
	sizes?: SIZES | undefined;
	block?: boolean;
	marginright?: MARGIN_SIZES;
	marginleft?: MARGIN_SIZES;
	margintop?: MARGIN_SIZES;
	marginbottom?: MARGIN_SIZES;
	name: string;
	disabled?: boolean;
}

function Button(props: ButtonProps) {
	const {
		label,
		icon,
		rightIcon,
		className = '',
		sizes,
		block,
		marginright,
		marginleft,
		margintop,
		marginbottom,
		name,
		onClick,
		disabled,
	} = props;

	const ButtonTemplate = (
		<div>
			<ButtonAntd
				{...props}
				disabled={disabled}
				id={name}
				size={sizes}
				block={block}
				onClick={onClick}
				className={`margin_left_${marginleft} margin_right_${marginright} margin_top_${margintop} 
				margin_bottom_${marginbottom} ${className}`}
				icon={!rightIcon && icon && <span className={`btn-icon`}>{icon}</span>}
			>
				{label}
				{rightIcon && <span>{rightIcon}</span>}
			</ButtonAntd>
		</div>
	);
	return <>{ButtonTemplate}</>;
}

export default Button;
