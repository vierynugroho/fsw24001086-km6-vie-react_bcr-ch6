import React from 'react';
import { FormatRupiah } from '@arismun/format-rupiah';
import { Link } from 'react-router-dom';

export const CarsContainer = ({ data, showContainer }) => {
	console.log(data);
	return (
		<>
			{showContainer && (
				<div
					id='cars-container'
					style={{ display: showContainer ? 'flex' : 'none' }}
					className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-3 shadow-lg container position-relative w-75 mx-auto'
				>
					{data.length === 0 ? (
						<div
							class='alert alert-danger text-center fw-bold mt-2 w-100'
							role='alert'
						>
							{' '}
							Car Not Found!{' '}
						</div>
					) : (
						data.map((car) => (
							<div key={car.id}>
								<div
									className='card border-0 h-100'
									id='card-car'
								>
									<div className='card-body h-100'>
										<img
											className='img-fluid'
											id='img-car'
											src={`/assets/cars/${car.image}`}
											alt='${this.manufacture}'
										/>
										<h2
											className='card-title fw-bold pt-2'
											id='car-name'
										>
											{`${car.manufacture} ${car.model} / ${car.type}`}
										</h2>
										<h4
											className='card-sub-title fw-bold'
											id='car-rent'
										>
											<FormatRupiah value={car.rentPerDay} />
											{` / hari`}
										</h4>
										<p className='card-text'>{`${car.description}`}</p>
										<ul className='list-group car-list'>
											<li className='list-group-item'>
												<i>
													<img
														src='/assets/fi_passenger.svg'
														alt='user-icon'
													/>
												</i>{' '}
												{`${car.capacity} orang`}
											</li>
											<li className='list-group-item'>
												<i>
													<img
														src='/assets/fi_settings.svg'
														alt='user-icon'
													/>
												</i>{' '}
												{`${car.transmission}`}
											</li>
											<li className='list-group-item'>
												<i>
													<img
														src='/assets/fi_calendar.svg'
														alt='user-icon'
													/>
												</i>{' '}
												Tahun {`${car.year}`}
											</li>
										</ul>
									</div>
									<div className='card-footer border-0'>
										<Link
											to={`/cars?id=${car.id}`}
											className='d-block w-100 py-2 nav-link success-color text-white fw-bold text-center'
										>
											Pilih Mobil
										</Link>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			)}
		</>
	);
};
