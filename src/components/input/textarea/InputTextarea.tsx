import { Input } from 'antd';
import { FormItemProps } from 'src/components/form/FormItem';
import { TextAreaProps as TextAreaPropsAntd } from 'antd/lib/input/TextArea';

type MergedProps = Omit<TextAreaPropsAntd, 'name'> & Omit<FormItemProps, 'children'>;

interface TextAreaProps extends MergedProps {
	maxLength?: number;
	rows?: number;
}

function InputTextarea(props: TextAreaProps) {
	const { maxLength, rows } = props;
	const { TextArea } = Input;

	return (
		<div>
			<TextArea {...props} rows={rows} maxLength={maxLength} allowClear />
		</div>
	);
}

export default InputTextarea;
