import React from 'react';

export const OurServicesSection = () => {
	return (
		<section
			id='our_services'
			className='d-flex justify-content-center align-items-center'
		>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-6 mb-3'>
						<img
							className='img-fluid w-75'
							src='/assets/img_service.png'
							alt=''
						/>
					</div>
					<div className='col-12 col-md-6 d-flex justify-content-center align-items-center flex-column'>
						<h2 className='fw-bold'>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
						<p>
							Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
							wedding, meeting, dll.
						</p>
						<ul
							id='list_service'
							className='list-group w-100 p-0'
						>
							<li className='list-group-item border-0 d-flex justify-content-start align-items-center gap-3 p-0 py-2'>
								<span className='custom-icon'></span>
								Sewa Mobil Dengan Supir di Bali 12 Jam
							</li>
							<li className='list-group-item border-0 d-flex justify-content-start align-items-center gap-3 p-0 py-2'>
								<span className='custom-icon'></span>
								Sewa Mobil Lepas Kunci di Bali 24 Jam
							</li>
							<li className='list-group-item border-0 d-flex justify-content-start align-items-center gap-3 p-0 py-2'>
								<span className='custom-icon'></span>
								Sewa Mobil Jangka Panjang Bulanan
							</li>
							<li className='list-group-item border-0 d-flex justify-content-start align-items-center gap-3 p-0 py-2'>
								<span className='custom-icon'></span>
								Gratis Antar - Jemput Mobil di Bandara
							</li>
							<li className='list-group-item border-0 d-flex justify-content-start align-items-center gap-3 p-0 py-2'>
								<span className='custom-icon'></span>
								Layanan Airport Transfer/Drop In Out
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
