import React from 'react';

export const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-transparent py-3 mx-4'>
			<a
				className='navbar-brand rounded-1 primary-color'
				href='#'
			></a>
			{/* [START] - action button in mobile view */}
			<button
				className='navbar-toggler border-0'
				type='button'
				data-bs-toggle='offcanvas'
				data-bs-target='#navbar__mobile'
				aria-controls='navbar__mobile'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			{/* [END] - action button in mobile view */}

			{/* [START] - navbar in mobile view */}
			<div
				className='offcanvas offcanvas-end w-50 d-lg-none'
				data-bs-scroll='true'
				tabIndex='-1'
				data-bs-backdrop='true'
				id='navbar__mobile'
				aria-labelledby='navbar__mobileLabel'
			>
				<div className='offcanvas-header'>
					<a
						href='#'
						className='nav-link'
					>
						<h5
							className='offcanvas-title fw-bold'
							id='navbar__mobileLabel'
						>
							BCR
						</h5>
					</a>
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='offcanvas'
						aria-label='Close'
					></button>
				</div>
				<div className='offcanvas-body'>
					<ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-4'>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='#our_services'
							>
								Our Services
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='#why_us'
							>
								Why Us
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='#testimonial'
							>
								Testimonial
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='#faq'
							>
								FAQ
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link py-2 px-2 rounded-1 success-color text-white fw-bold w-50 text-center'
								href='#'
							>
								Register
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/*  [END] - navbar in mobile view  */}

			{/* [START] - navbar in desktop view */}
			<div
				className='collapse navbar-collapse'
				id='navbar__desktop'
			>
				<ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-4'>
					<li className='nav-item'>
						<a
							className='nav-link'
							href='#our_services'
						>
							Our Services
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link'
							href='#why_us'
						>
							Why Us
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link'
							href='#testimonial'
						>
							Testimonial
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link'
							href='#faq'
						>
							FAQ
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link py-2 px-4 rounded-1 success-color text-white fw-bold'
							href='#'
						>
							Register
						</a>
					</li>
				</ul>
			</div>
			{/*  [END] - navbar in desktop view  */}
		</nav>
	);
};
