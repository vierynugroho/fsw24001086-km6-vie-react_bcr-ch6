import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CarsContext = createContext();

const CarsProvider = (props) => {
	const [data, setdata] = useState([]);

	const fetchCars = async () => {
		try {
			const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
			const cars = response.data;
			setdata(cars);
			toast.success('all car data retrieved successfully', {
				style: {
					backgroundColor: 'green',
					color: 'white',
				},
				iconTheme: {
					primary: 'white',
					secondary: 'green',
				},
			});
		} catch (error) {
			toast.error('failed to get cars data', {
				style: {
					backgroundColor: 'red',
					color: 'white',
				},
				iconTheme: {
					primary: 'white',
					secondary: 'black',
				},
			});
		}
	};

	useEffect(() => {
		fetchCars();
	}, []);

	return <CarsContext.Provider value={{ data }}>{props.children}</CarsContext.Provider>;
};

export default CarsProvider;
