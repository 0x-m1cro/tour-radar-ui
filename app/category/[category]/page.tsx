import CategoryPageClient from '@/components/CategoryPageClient';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  
  // Get category name from params
  const categoryName = resolvedParams.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return <CategoryPageClient categoryName={categoryName} />;
}
