import Table from 'rc-table';
import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

const SubCategoryTable = () => {
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: 400,
			className: 'text-black p-2 border-r-2 border-b-2',
			rowClassName: 'bg-black-ripon',
		},
		{
			title: 'Category',
			dataIndex: 'subCount',
			key: 'subCount',
			width: 400,
			className: 'text-black p-2 border-r-2 border-b-2',
		},
		{
			title: 'Total Product',
			dataIndex: 'productCount',
			key: 'productCount',
			width: 400,
			className: 'text-black p-2 border-r-2 border-b-2',
		},
		{
			title: 'Operations',
			dataIndex: '',
			key: 'operations',
			width: 400,
			className: 'text-black p-2 border-b-2',
			render: () => (
				<>
					<a
						href='#'
						className='bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full'
					>
						View
					</a>{' '}
					<a
						href='/update-bags/7oBGXNcXRdMKLfoEs2WjhP5iRtwnMDkvvHFipqnzAGmq'
						className='bg-green-500 hover:bg-green-400 text-white py-1 px-3 rounded-full'
					>
						Update
					</a>{' '}
					<a
						href='#'
						className='bg-red-500 hover:bg-red-400 text-white  py-1 px-3 rounded-full'
					>
						Burn
					</a>
				</>
			),
		},
	];

	const data = [
		{ id: '001', name: 'Jack', subCount: 28, productCount: 'some where' },
		{ id: '002', name: 'Rose', subCount: 36, productCount: 'some where' },
	];

	//Pagination
	const [activePage, setActivePage] = useState(15);
	const handlePageChange = pageNumber => {
		setActivePage(pageNumber);
	};

	return (
		<>
			<Table
				columns={columns}
				data={data}
				rowKey={data => data.id}
				className='p-4 w-full text-center rc-table-custom font-semibold'
				style={{ border: '1px solid #b7b7b8' }}
			/>
			<Pagination
				activePage={activePage}
				itemsCountPerPage={10}
				totalItemsCount={450}
				pageRangeDisplayed={5}
				onChange={handlePageChange}
				nextPageText={'Next'}
				prevPageText={'Prev'}
				firstPageText={'First'}
				lastPageText={'Last'}
				innerClass='js-ul'
				itemClass='js-li'
				linkClass='page-link'
			/>
		</>
	);
};

export default SubCategoryTable;
