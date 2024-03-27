import { Suspense } from "react";
import LoadingComponent from "./loading";
import { HomeCardComponent } from "@/components/cards/HomeCardComponent";
import { HomeType } from "@/types/home";

async function fetchProduct() {
  const product = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store"
  });
  const res = await product.json();
  return res;
}

export default async function Home() {
  const product = await fetchProduct();

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent/>} >
        {product?.map((pro: HomeType) => (
          <HomeCardComponent
            image={pro.image}
            title={pro.title}
            price={pro.price}
            key={pro.id}
          />
        ))}
        </Suspense>
      </div>
    </>
  );
}
