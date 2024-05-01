import React from 'react';

export const CarsContainer = ({ data }) => {
	return (
		<div
			id='cars-container'
			className='row  p-3 shadow-lg container position-relative w-75 mx-auto d-flex justify-content-evenly gap-2'
		>
			{data.map((car) => (
				<div className='col-12 col-lg-3 col-md-6 mt-3'>
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
								{`${car.rentPerDay} / hari`}
							</h4>
							<p className='card-text'>Description Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
							<a
								href='cars?id=${this.id}'
								className='d-block w-100 py-2 nav-link success-color text-white fw-bold text-center'
							>
								Pilih Mobil
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
