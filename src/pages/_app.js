import '../styles/globals.css';
import MainLayout from '../layouts/MainLayout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Preloader from '../components/Preloader';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);

  // Initial preloader for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Preloader for route changes
  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) setRouteLoading(true);
    };
    const handleComplete = () => setRouteLoading(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {(loading || routeLoading) && <Preloader />}
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
