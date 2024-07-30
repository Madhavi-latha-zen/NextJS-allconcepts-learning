import { Metadata } from "next";

type props ={
  params:{
    productId:string;
  };
}; 

export const generatemetadata =({params} :props):Metadata =>{
  return{
    title:`Product ${params.productId}`,
  }
}
function ProductDetails({ params }: { params: { productId: string } }) {
  return <h1>Details about product{params.productId}</h1>;
}
export default ProductDetails;
