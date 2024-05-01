import React from 'react';

export const TestimonialSection = () => {
	return (
		<section
			id='testimonial'
			className='d-flex justify-content-center align-items-center'
		>
			<div
				className='container'
				id='featured-3'
			>
				<div className='row'>
					<div className='col-12 col-md-8 mx-auto'>
						<h2 className='pb-2 text-center'>Testimonial</h2>
						<p className='text-center'>Berbagai review positif dari para pelanggan kami</p>
						<div
							id='carouselExample'
							className='carousel slide'
						>
							<div className='carousel-inner card py-4'>
								<div className='row d-flex justify-content-center'>
									<div className='col-2'>
										<button
											className='carousel-control-prev'
											type='button'
											data-bs-target='#carouselExample'
											data-bs-slide='prev'
										>
											<img
												src='/assets/Vector_kiri.svg'
												alt=''
												className='img-fluid'
											/>
										</button>
									</div>

									{/* <!-- Testimonial --> */}

									<div className='col-8'>
										<div className='carousel-item'>
											<div className='row'>
												<div className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
													<img
														id='profile_img'
														src='/assets/img_photo_2.png'
														alt=''
														className='img-fluid rounded-circle'
													/>
												</div>
												<div className='col-12 col-md-8'>
													<div className='row d-flex flex-column'>
														<div
															className='col-12 d-flex my-2'
															id='rate'
														>
															<img
																src='/assets/rate.svg'
																alt=''
																className='img-fluid'
															/>
														</div>
														<div className='col-12'>
															<p>
																“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
																amet, consectetur adipiscing elit, sed do eiusmod”
															</p>
														</div>
														<div className='col-12'>
															<p className='fw-bold'>John Doe 32, Bromo</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='carousel-item'>
											<div className='row'>
												<div className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
													<img
														id='profile_img'
														src='/assets/img_photo_3.png'
														alt=''
														className='img-fluid rounded-circle'
													/>
												</div>
												<div className='col-12 col-md-8'>
													<div className='row d-flex flex-column'>
														<div
															className='col-12 d-flex my-2'
															id='rate'
														>
															<img
																src='/assets/rate.svg'
																alt=''
																className='img-fluid'
															/>
														</div>
														<div className='col-12'>
															<p>
																“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
																amet, consectetur adipiscing elit, sed do eiusmod”
															</p>
														</div>
														<div className='col-12'>
															<p className='fw-bold'>John Doe 32, Bromo</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='carousel-item active'>
											<div className='row'>
												<div className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
													<img
														id='profile_img'
														src='/assets/img_photo.png'
														alt=''
														className='img-fluid rounded-circle'
													/>
												</div>
												<div className='col-12 col-md-8'>
													<div className='row d-flex flex-column'>
														<div
															className='col-12 d-flex my-2'
															id='rate'
														>
															<img
																src='/assets/rate.svg'
																alt=''
																className='img-fluid'
															/>
														</div>
														<div className='col-12'>
															<p>
																“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
																amet, consectetur adipiscing elit, sed do eiusmod”
															</p>
														</div>
														<div className='col-12'>
															<p className='fw-bold'>John Doe 32, Bromo</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- Testimonial --> */}

									<div className='col-2'>
										<button
											className='carousel-control-next'
											type='button'
											data-bs-target='#carouselExample'
											data-bs-slide='next'
										>
											<img
												src='/assets/Vector-kanan.svg'
												alt=''
												className='img-fluid'
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
