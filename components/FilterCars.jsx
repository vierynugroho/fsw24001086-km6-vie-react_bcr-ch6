import React, { useContext, useEffect, useState } from 'react';
import { CarsContainer } from './CarsContainer';
import { CarsContext } from '@/src/contexts/CarsContext';
import toast from 'react-hot-toast';

export const FilterCars = () => {
	const { data } = useContext(CarsContext);
	const [cars, setCars] = useState([]);
	const [showContainer, setShowContainer] = useState(false);

	const [driverType, setDriverType] = useState('');
	const [date, setDate] = useState('');
	const [pickUpTime, setPickUpTime] = useState('');
	let [totalPassenger, setTotalPassenger] = useState('');

	//! Data Filter
	const carsFilter = async () => {
		setShowContainer(true);
		let filter_dateTime = new Date(`${date} ${pickUpTime}`);
		let formattedDateTime;

		//! VALIDATION INPUT
		//TODO: totalPassenger is empty
		if (totalPassenger == '') totalPassenger = 0;

		//TODO: all input is empty
		if (date == '' && pickUpTime == '' && totalPassenger == '0') {
			console.log('empty input!');
			setCars(data);
			return;
		}

		// //TODO:driverType is empty
		if (driverType == '' || driverType == null) {
			toast.error('Driver Type is Empty!', {
				style: {
					backgroundColor: 'red',
					color: 'white',
				},
				iconTheme: {
					primary: 'white',
					secondary: 'red',
				},
			});
			return;
		}

		//TODO: date or pick up time is empty
		if (date != '' && pickUpTime == '') {
			toast.error('Please Enter Car Pickup Time!', {
				style: {
					backgroundColor: 'red',
					color: 'white',
				},
				iconTheme: {
					primary: 'white',
					secondary: 'red',
				},
			});
			return;
		} else if (pickUpTime != '' && date == '') {
			toast.error('Please Enter Car Pickup Date!', {
				style: {
					backgroundColor: 'red',
					color: 'white',
				},
				iconTheme: {
					primary: 'white',
					secondary: 'red',
				},
			});
			return;
		}

		//! VALIDATION FILTER
		let filteredCars;

		//TODO: if passenger empty
		if (totalPassenger == '' || totalPassenger == null) {
			filter_dateTime = new Date(filter_dateTime.getTime());
			formattedDateTime = filter_dateTime.toISOString();
			filteredCars = (car) => car.availableAt <= formattedDateTime && car.available === true;
		}
		//TODO: if date or pick up time empty
		else if (date == '' || date == null || pickUpTime == '' || pickUpTime == null) {
			filteredCars = (car) => car.capacity >= totalPassenger && car.available === true;
		}
		//TODO: if all inputs are filled
		else {
			filter_dateTime = new Date(filter_dateTime.getTime());
			formattedDateTime = filter_dateTime.toISOString();
			filteredCars = (car) => car.capacity >= totalPassenger && car.available === true && car.availableAt <= formattedDateTime;
		}

		//! Action Filter

		const carsFiltered = data.filter(filteredCars);
		// console.log(cars);
		setCars(carsFiltered);
		toast.success('cars data filtered successfully', {
			style: {
				backgroundColor: 'green',
				color: 'white',
			},
			iconTheme: {
				primary: 'white',
				secondary: 'green',
			},
		});
	};

	return (
		<>
			<div
				id='cari_mobil'
				className='d-flex justify-content-center align-items-center mb-5'
			>
				<div
					className='container position-relative w-75 rounded shadow-lg py-3'
					style={{ marginTop: '-50px' }}
					id='cari_mobil_container'
				>
					<div className='row d-flex justify-content-between align-items-center'>
						<div className='col-12 col-md-10'>
							<div className='row'>
								<div className='col-6 col-md-6 col-lg-3'>
									<div className='mb-3'>
										<label
											htmlFor='driverType'
											className='form-label'
										>
											Tipe Driver
										</label>
										<select
											className='form-select'
											id='driverType'
											value={driverType}
											onChange={(e) => setDriverType(e.target.value)}
										>
											<option
												hidden
												value=''
											>
												Pilih Tipe Driver
											</option>
											<option value='dengan supir'>Dengan Supir</option>
											<option value='tanpa supir'>Tanpa Supir (Lepas Kunci)</option>
										</select>
									</div>
								</div>
								<div className='col-6 col-md-6 col-lg-3'>
									<div className='mb-3'>
										<label
											htmlFor='date'
											className='form-label'
										>
											Tanggal
										</label>
										<input
											type='date'
											className='form-control'
											id='date'
											value={date}
											onChange={(e) => setDate(e.target.value)}
										/>
									</div>
								</div>
								<div className='col-6 col-md-6 col-lg-3'>
									<div className='mb-3'>
										<label
											htmlFor='pickUpTime'
											className='form-label'
										>
											Waktu Jemput/Ambil
										</label>
										<select
											className='form-select'
											aria-label='Default select example'
											id='pickUpTime'
											value={pickUpTime}
											onChange={(e) => setPickUpTime(e.target.value)}
										>
											<option
												hidden
												value=''
											>
												Pilih Waktu
											</option>
											<option value='08:00'>08.00 WIB</option>
											<option value='09:00'>09.00 WIB</option>
											<option value='10:00'>10.00 WIB</option>
											<option value='11:00'>11.00 WIB</option>
											<option value='12:00'>12.00 WIB</option>
										</select>
									</div>
								</div>
								<div className='col-6 col-md-6 col-lg-3'>
									<div className='mb-3'>
										<label
											htmlFor='totalPassenger'
											className='form-label'
										>
											Jumlah Penumpang
										</label>
										<div className='input-group'>
											<input
												type='number'
												className='form-control'
												placeholder='Jumlah Penumpang'
												aria-label='Jumlah Penumpang'
												aria-describedby='addon-wrapping'
												min='0'
												id='totalPassenger'
												value={totalPassenger}
												onChange={(e) => setTotalPassenger(e.target.value)}
											/>
											<span
												className='input-group-text'
												id='addon-wrapping'
											>
												<i>
													<img
														src='/assets/fi_users.svg'
														alt='user-icon'
													/>
												</i>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-12 col-md-2 d-flex justify-content-end align-items-center'>
							<div className='row w-100'>
								<div className='col-12'>
									<button
										className='w-100 mx-end nav-link py-2 px-2 rounded success-color fw-bold text-center'
										type='submit'
										id='btnCariMobil'
										onClick={() => carsFilter()}
									>
										Cari Mobil
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<CarsContainer
				data={cars}
				showContainer={showContainer}
			/>
		</>
	);
};
