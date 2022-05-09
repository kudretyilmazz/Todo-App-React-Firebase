import { Input as InputAntd } from 'antd';
import { InputProps as InputPropsAntd } from 'antd/lib/input';
import FormItem, { FormItemProps } from 'src/components/form/FormItem';

export type MergedProps = Omit<InputPropsAntd, 'name'> & Omit<FormItemProps, 'children'>;

function Input(props: MergedProps) {
	return (
		<FormItem {...props}>
			<InputAntd {...props} name='' allowClear autoComplete='off' size='large' />
		</FormItem>
	);
}

export default Input;
