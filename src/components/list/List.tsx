import { List as ListAntd } from 'antd';
import { ListProps as ListPropsAntd } from 'antd/lib/list';
import { ReactNode } from 'react';
import { LIST_LAYOUT } from 'src/constants/List/listLayout';
export interface ListProps extends ListPropsAntd<any> {
	bordered?: boolean;
	dataSource?: any[];
	header?: ReactNode;
	footer?: ReactNode;
	itemLayout?: LIST_LAYOUT;
	renderİtem: any;
	Item: Element;
}

// function List(props: ListProps) {
// 	const { bordered, dataSource, header, footer, itemLayout, renderİtem } = props;

// 	const ListTemplate = (
// 		<List
// 			header={header}
// 			footer={footer}
// 			bordered={bordered}
// 			dataSource={dataSource}
// 			itemLayout={itemLayout}
// 			renderİtem={renderİtem}
// 		></List>
// 	);
// 	return <>{ListTemplate}</>;
// }

// export default List;
