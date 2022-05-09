import { Form } from 'antd';
import { FormItemProps as FormItemPropsAntd, Rule } from 'antd/lib/form';

import React from 'react';

export interface FormItemProps extends FormItemPropsAntd {
	name?: string;
	label?: string | null;
	className?: string;
	marginReset?: boolean;
	rules?: Rule[];
}

function FormItem(props: FormItemProps) {
	const { children, name, label, className = '', marginReset, rules } = props;

	return (
		<Form.Item
			{...props}
			label={label}
			id={name}
			className={`${className} ${marginReset && 'no_margin'}`}
			rules={rules}
		>
			{children}
		</Form.Item>
	);
}

export default FormItem;
