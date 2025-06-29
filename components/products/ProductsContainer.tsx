import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({ search });
  const productsLength = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      <section className="flex justify-between items-center">
        <h4 className="font-medium text-lg">
          {productsLength} Product{productsLength > 1 && "s"}
        </h4>
        <div className="flex gap-x-4">
          <Button
            size={"icon"}
            asChild
            variant={layout === "grid" ? "default" : "ghost"}
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              {" "}
              <LuLayoutGrid />
            </Link>
          </Button>
          <Button
            size={"icon"}
            asChild
            variant={layout === "grid" ? "ghost" : "default"}
          >
            <Link href={`/products?layout=link${searchTerm}`}>
              <LuList />
            </Link>
          </Button>
        </div>
      </section>
      <Separator className="mt-6"></Separator>
      <div>
        {productsLength === 0 ? (
          <h5 className="text-2xl mt-5">No product with this search</h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
