import React from "react";
import ItemDetail from "../components/itemDetail/ItemDetail";
import ItemReview from "../components/itemReview/ItemReview";
import SuggestedItem from "../components/suggestedItem/SuggestedItem";
const ProductDetail = () => {
  return (
    <div>
      <ItemDetail />
      <ItemReview />
      <SuggestedItem />
    </div>
  );
};

export default ProductDetail;
