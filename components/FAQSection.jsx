import React from 'react';

export const FAQSection = () => {
	return (
		<section
			id='faq'
			className='d-flex justify-content-center align-items-center'
		>
			<div className='container'>
				<div className='row'>
					<div
						className='col-12 col-md-6 d-flex justify-content-center align-items-start flex-column'
						id='faq__title'
					>
						<h2 className='fw-bold'>Frequently Asked Question</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
					<div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
						<div
							className='accordion w-100'
							id='faq__accordion'
						>
							<div className='accordion-item my-3 border'>
								<h2
									className='accordion-header'
									id='faq__one'
								>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseOne'
										aria-expanded='false'
										aria-controls='collapseOne'
									>
										Apa saja syarat yang dibutuhkan?
									</button>
								</h2>
								<div
									id='collapseOne'
									className='accordion-collapse collapse'
									aria-labelledby='faq__one'
									data-bs-parent='#faq__accordion'
								>
									<div className='accordion-body'>
										<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These
										classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's
										also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
									</div>
								</div>
							</div>
							<div className='accordion-item my-3 border'>
								<h2
									className='accordion-header'
									id='faq__two'
								>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseTwo'
										aria-expanded='false'
										aria-controls='collapseTwo'
									>
										Berapa hari minimal sewa mobil lepas kunci?
									</button>
								</h2>
								<div
									id='collapseTwo'
									className='accordion-collapse collapse'
									aria-labelledby='faq__two'
									data-bs-parent='#faq__accordion'
								>
									<div className='accordion-body'>
										<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These
										classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's
										also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
									</div>
								</div>
							</div>
							<div className='accordion-item my-3 border'>
								<h2
									className='accordion-header'
									id='faq__three'
								>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseThree'
										aria-expanded='false'
										aria-controls='collapseThree'
									>
										Berapa hari sebelumnya sabaiknya booking sewa mobil?
									</button>
								</h2>
								<div
									id='collapseThree'
									className='accordion-collapse collapse'
									aria-labelledby='faq__three'
									data-bs-parent='#faq__accordion'
								>
									<div className='accordion-body'>
										<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These
										classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's
										also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
									</div>
								</div>
							</div>
							<div className='accordion-item my-3 border'>
								<h2
									className='accordion-header'
									id='faq__four'
								>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseFourth'
										aria-expanded='false'
										aria-controls='collapseFourth'
									>
										Apakah Ada biaya antar-jemput?
									</button>
								</h2>
								<div
									id='collapseFourth'
									className='accordion-collapse collapse'
									aria-labelledby='faq__four'
									data-bs-parent='#faq__accordion'
								>
									<div className='accordion-body'>
										<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These
										classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's
										also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
									</div>
								</div>
							</div>
							<div className='accordion-item my-3 border'>
								<h2
									className='accordion-header'
									id='faq__five'
								>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseFive'
										aria-expanded='false'
										aria-controls='collapseFive'
									>
										Bagaimana jika terjadi kecelakaan
									</button>
								</h2>
								<div
									id='collapseFive'
									className='accordion-collapse collapse'
									aria-labelledby='faq__five'
									data-bs-parent='#faq__accordion'
								>
									<div className='accordion-body'>
										<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These
										classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's
										also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
