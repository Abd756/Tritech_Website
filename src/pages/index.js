import Head from 'next/head';
import Carousel from '../components/Carousel';
import HomeAboutSection from '../components/HomeAboutSection';
import HomeCertificatesSection from '../components/HomeCertificatesSection';
import HomeServicesSection from '../components/HomeServicesSection';
import dynamic from 'next/dynamic';
const HomeWhyChooseUsSection = dynamic(() => import('../components/HomeWhyChooseUsSection'), { ssr: false });
import ClientLogoSlider from '../components/ClientLogoSlider';

export default function Home() {
    return (
        <>
            <Head>
                <title>TRI TECH (PVT) LIMITED | LV Switchgear & Industrial Services</title>
                <meta name="description" content="TRI TECH (PVT) Limited — Manufacturer of LV Switchgear, Instrumentation, Electrification & Plant Services. Established 2008, Lahore, Pakistan." />
            </Head>
            <div className="min-h-screen flex flex-col items-center justify-start bg-white">
                <div className="w-full">
                    <Carousel />
                </div>
                <HomeAboutSection />
                <HomeCertificatesSection />
                <HomeServicesSection />
                <HomeWhyChooseUsSection />
                <ClientLogoSlider />
            </div>
        </>
    );
}

