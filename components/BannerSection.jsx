import React from 'react';

export const BannerSection = () => {
	return (
		<section className='d-flex justify-content-center align-items-center'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 mx-auto'>
						<div
							className='row py-5 mx-2 rounded-2 text-white'
							id='banner'
						>
							<div className='col-12 d-flex justify-content-center align-items-center flex-column'>
								<div className='row d-flex justify-content-center align-items-center'>
									<div className='col-8 text-center'>
										<h2 className='fw-bold'>Sewa Mobil di (Lokasimu) Sekarang</h2>
									</div>
									<div
										className='col-6 text-center'
										id='banner__body'
									>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									</div>
								</div>
								<a
									className='nav-link py-2 px-4 rounded-1 success-color text-white fw-bold mt-3'
									href='#'
								>
									Mulai Sewa Mobil
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
