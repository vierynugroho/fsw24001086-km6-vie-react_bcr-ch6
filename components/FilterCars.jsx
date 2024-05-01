import React from 'react';
import { CarsContainer } from './CarsContainer';

export const FilterCars = () => {
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
									>
										Cari Mobil
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<CarsContainer />
		</>
	);
};
