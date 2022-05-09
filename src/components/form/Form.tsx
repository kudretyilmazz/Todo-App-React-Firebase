import { Form as FormAntd } from 'antd';
import { FORM_LAYOUT } from 'src/constants/form/formLayout';
import { SIZES } from 'src/constants/common/sizes';
import { FormProps as FormPropsAntd } from 'antd/lib/form';
import { ReactNode } from 'react';

export interface FormProps extends FormPropsAntd {
	children: JSX.Element | JSX.Element[];
	name: string;
	layout?: FORM_LAYOUT;
	sizes?: SIZES;
}

function Form(props: FormProps) {
	const { children, name, layout, sizes } = props;
	const FormTemplate = (
		<FormAntd {...props} name={name} layout={layout} size={sizes}>
			{children}
		</FormAntd>
	);
	return <>{FormTemplate}</>;
}

Form.defaultProps = {
	layout: FORM_LAYOUT.VERTICAL,
};

export default Form;
