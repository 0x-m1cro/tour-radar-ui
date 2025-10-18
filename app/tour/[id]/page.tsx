import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';
import TourDetailClient from '@/components/TourDetailClient';
import { getTourById } from '@/lib/mockData';

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const tour = getTourById(resolvedParams.id);

  if (!tour) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <Link href="/" className="text-primary hover:text-primary-dark">
            Return to Homepage
          </Link>
        </div>
      </MainLayout>
    );
  }

  return <TourDetailClient tour={tour} />;
}
