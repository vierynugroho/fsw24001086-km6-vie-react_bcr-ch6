import React from 'react';
import { Header } from '@/components/Header';
import { OurServicesSection } from '@/components/OurServicesSection';
import { WhyUsSection } from '@/components/WhyUsSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { BannerSection } from '@/components/BannerSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';

export const LandingPage = () => {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<OurServicesSection />
				<WhyUsSection />
				<TestimonialSection />
				<BannerSection />
				<FAQSection />
			</main>
			<Footer />
		</>
	);
};
