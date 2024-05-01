import React from 'react';
import { Navbar } from './Navbar';

export const Header = () => {
	return (
		<header className='position-fixed top-0 w-100'>
			<div className='container mx-auto w-100'>
				<Navbar />
			</div>
		</header>
	);
};
