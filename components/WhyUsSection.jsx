import React from 'react';

export const WhyUsSection = () => {
	return (
		<section
			id='why_us'
			className='d-flex justify-content-center align-items-center'
		>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h2 className='fw-bold'>Why Us?</h2>
						<p>Mengapa harus pilih Binar Car Rental?</p>
					</div>

					<div className='row mx-auto'>
						<div className='col-12 col-md-3 mb-3'>
							<div className='card h-100'>
								<div className='card-body'>
									<img
										id='icon'
										className='card-img-top mb-3'
										src='/assets/icon_mobil_lengkap.svg'
										alt='Title'
									/>
									<h5 className='card-title fw-bold'>Mobil Lengkap</h5>
									<p className='card-text'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
								</div>
							</div>
						</div>
						<div className='col-12 col-md-3 mb-3'>
							<div className='card h-100'>
								<div className='card-body'>
									<img
										id='icon'
										className='card-img-top mb-3'
										src='/assets/icon_harga_murah.svg'
										alt='Title'
									/>
									<h5 className='card-title fw-bold'>Harga Murah</h5>
									<p className='card-text'>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
								</div>
							</div>
						</div>
						<div className='col-12 col-md-3 mb-3'>
							<div className='card h-100'>
								<div className='card-body'>
									<img
										id='icon'
										className='card-img-top mb-3'
										src='/assets/icon_layanan_24_jam.svg'
										alt='Title'
									/>
									<h5 className='card-title fw-bold'>Layanan 24 Jam</h5>
									<p className='card-text'>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
								</div>
							</div>
						</div>
						<div className='col-12 col-md-3 mb-3'>
							<div className='card h-100'>
								<div className='card-body'>
									<img
										id='icon'
										className='card-img-top mb-3'
										src='/assets/icon_professional.svg'
										alt='Title'
									/>
									<h5 className='card-title fw-bold'>Sopir Professional</h5>
									<p className='card-text'>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
