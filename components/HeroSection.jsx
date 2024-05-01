import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
	return (
		<section
			id='hero'
			className='d-flex justify-content-end align-items-center'
		>
			<div className='container'>
				<div className='row w-100'>
					<div className='col-12 col-md-7'>
						<div className='container'>
							<div className='row'>
								<div className='col-10'>
									<h1 className='fw-bold'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
								</div>
							</div>
							<div className='row'>
								<div
									className='col-12'
									id='hero__body'
								>
									<p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
									<Link
										className='nav-link'
										to={'/cars'}
									>
										<button className='py-2 px-3 rounded-1 success-color text-white fw-bold border-0'>Mulai Sewa Mobil</button>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div
						className='col-12 col-md-5 pe-0 position-absolute end-0'
						id='hero-img'
					>
						<img
							className='img-fluid'
							src='/assets/Mercedes Car EQC 300kW Edition.png'
							alt='Mercedes'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
