import { useRouter } from 'next/router';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import servicesDetailData from '../../data/servicesDetailData';

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) return null;

  const service = servicesDetailData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Not Found</h2>
          <p className="text-gray-600 mb-8">The service you are looking for does not exist or has been moved.</p>
          <a href="/" className="bg-primary text-white px-8 py-3 rounded-xl font-bold transition-all">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return <ServiceDetailLayout service={service} />;
}
