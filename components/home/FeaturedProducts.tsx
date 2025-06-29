import { fetchFeaturedProducts } from "@/utils/actions";
import EmtpyList from "../global/EmtpyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedProducts() {
  const featuredProducts = await fetchFeaturedProducts();
  if (featuredProducts.length === 0) return <EmtpyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={featuredProducts} />
    </section>
  );
}

export default FeaturedProducts;
