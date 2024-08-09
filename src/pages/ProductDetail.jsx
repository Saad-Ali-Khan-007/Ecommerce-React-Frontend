import { useState, useEffect } from "react";
import useAxios from "../api/useAxios";
import ItemDetail from "../components/itemDetail/ItemDetail";
import ItemReview from "../components/itemReview/ItemReview";
import SuggestedItem from "../components/suggestedItem/SuggestedItem";
import { BiLoaderAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const fetchProduct = async () => {
    try {
      const response = await useAxios().get(
        `product/product-detail/${params.slug}/`
      );
      setProduct(response.data);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center animate-spin items-center">
          <BiLoaderAlt />
        </div>
      ) : (
        <div>
          <ItemDetail product={product} />
          <ItemReview product={product} />
          <SuggestedItem />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
