import { Input } from 'antd';
import { FormItemProps } from 'src/components/form/FormItem';
import { InputProps as InputPropsAntd } from 'antd/lib/input';

type MergedProps = InputPropsAntd & Omit<FormItemProps, 'children'>;

function InputPassword(props: MergedProps) {
	return <Input.Password {...props} type='password' size='large' autoComplete='off' />;
}

export default InputPassword;
