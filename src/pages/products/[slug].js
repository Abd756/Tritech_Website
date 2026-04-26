
import { useRouter } from 'next/router';
import ProductDetailLayout from '../../components/ProductDetailLayout';
import productsDetailData from '../../data/productsDetailData';

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Wait for router to be ready
  if (!router.isReady) return null;

  const product = productsDetailData[slug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been moved.</p>
          <a href="/products" className="bg-primary text-white px-8 py-3 rounded-xl font-bold transition-all">
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  return <ProductDetailLayout product={product} />;
}
