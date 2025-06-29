import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
  console.log(productId);
  return (
    <Button className="mt-8 capitalize" size={"lg"}>
      Add To Chart
    </Button>
  );
}

export default AddToCart;
