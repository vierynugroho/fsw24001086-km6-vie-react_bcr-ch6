import { CarsContainer } from '@/components/CarsContainer';
import { FilterCars } from '@/components/FilterCars';
import { FooterSearchCar } from '@/components/FooterSearchCar';
import { Header } from '@/components/Header';
import { HeroSectionSearchCar } from '@/components/HeroSectionSearchCar';
import React from 'react';

export const SearchCar = () => {
	return (
		<>
			<Header />
			<main>
				<HeroSectionSearchCar />
				<FilterCars />
			</main>
			<FooterSearchCar />
		</>
	);
};
