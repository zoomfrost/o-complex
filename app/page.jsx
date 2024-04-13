import { getReviews } from "@/actions";
import Cart from "@/components/Cart";
import LoadMore from "@/components/LoadMore";
import ProductList from "@/components/ProductList";
import Reviews from "@/components/Reviews";
import Spinner from "@/components/shared/Spinner";
import { Suspense } from "react";

export default async function Home() {
  const reviews = await getReviews();

  return (
    <>
      <header className="w-full text-white mt-[13px] md:mt-[30px] xl:mt-[55px] lowercase font-normal text-4xl md:text-6xl xl:text-8xl bg-grey-primary py-4 flex flex-row justify-center rounded-xl mb-24">
        <h1 className="text-center">тестовое задание</h1>
      </header>

      <main className="container">
        <Reviews reviews={reviews} />
        <section className="flex-center">
          <Cart />
        </section>

        <section className="flex-center">
          <Suspense fallback={<Spinner />}>
            <ProductList />
          </Suspense>
        </section>
        <LoadMore />
      </main>
    </>
  );
}
