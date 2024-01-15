import React from 'react';

export default function CoreValuesItem({ text, Icon }) {
	return (
		<div className='w-full bg-dark/10 select-none active:scale-95 hover:opacity-50 cursor-pointer p-2 flex flex-col space-y-2 items-center justify-center rounded-md'>
			<Icon size={42} />
			<span className='sans xbold text-sm'>{text}</span>
		</div>
	);
}
