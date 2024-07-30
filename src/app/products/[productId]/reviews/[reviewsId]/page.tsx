"use client";
import {notFound} from "next/navigation";

function reviewPage({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
    if(parseInt(params.reviewsId) > 100){
        notFound();
    }
  return (
    <h1>
      review page {params.reviewsId} product page {params.productId}
    </h1>
  );
}
export default reviewPage;
