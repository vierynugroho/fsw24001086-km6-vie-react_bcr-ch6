import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer className='mb-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-10 col-md-3 mb-3'>
						<p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
						<a
							className='nav-link'
							href='#'
						>
							binarcarrental@gmail.com
						</a>
						<a
							className='nav-link'
							href='#'
						>
							081-233-334-808
						</a>
					</div>
					<div className='col-10 col-md-3 mb-3'>
						<a
							href='#our_services'
							className='nav-link mb-2'
						>
							Our Services
						</a>
						<a
							href='#why_us'
							className='nav-link my-2'
						>
							Why Us
						</a>
						<a
							href='#testimonial'
							className='nav-link my-2'
						>
							Testimonial
						</a>
						<a
							href='#faq'
							className='nav-link mt-2'
						>
							FAQ
						</a>
					</div>
					<div className='col-8 col-md-3 mb-3'>
						<p>Connect with us</p>
						<div className='row'>
							<div className='col-2'>
								<a
									href='#'
									className='nav-link'
								>
									<img
										src='/assets/icon_facebook.svg'
										alt='facebook'
										id='icon__social_media'
										className='rounded-circle'
										title='facebook'
									/>
								</a>
							</div>
							<div className='col-2'>
								<a
									href='#'
									className='nav-link'
								>
									<img
										src='/assets/icon_instagram.svg'
										alt='instagram'
										id='icon__social_media'
										className='rounded-circle'
										title='instagram'
									/>
								</a>
							</div>
							<div className='col-2'>
								<a
									href='#'
									className='nav-link'
								>
									<img
										src='/assets/icon_twitter.svg'
										alt='twitter'
										id='icon__social_media'
										className='rounded-circle'
										title='twitter'
									/>
								</a>
							</div>
							<div className='col-2'>
								<a
									href='#'
									className='nav-link'
								>
									<img
										src='/assets/icon_mail.svg'
										alt='mail'
										id='icon__social_media'
										className='rounded-circle'
										title='mail'
									/>
								</a>
							</div>
							<div className='col-2'>
								<a
									href='#'
									className='nav-link'
								>
									<img
										src='/assets/icon_twitch.svg'
										alt='twitch'
										id='icon__social_media'
										className='rounded-circle'
										title='twitch'
									/>
								</a>
							</div>
						</div>
					</div>
					<div className='col-10 col-md-3 mb-3'>
						<p>Copyright Binar 2022</p>

						<Link
							className='navbar-brand rounded-1 primary-color'
							to={'/'}
						></Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
