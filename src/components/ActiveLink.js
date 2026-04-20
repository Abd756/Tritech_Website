
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ActiveLink({ href, children, scrolled }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`px-5 py-2 rounded-xl transition-all duration-300 font-bold text-sm tracking-wide ${isActive
          ? scrolled ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-primary text-white shadow-lg shadow-primary/30'
          : scrolled ? 'text-blue-100 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-primary hover:bg-gray-100'
        }`}
    >
      {children}
    </Link>
  );
}
