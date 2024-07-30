"use client";
import {useRouter} from "next/navigation";

function orderproducts(){
const router = useRouter();
    const handleclick =()=>{
        console.log("placing order");
        router.push("/");
    }
    return(
        <div>
            <div>All products</div>
            <button onClick={handleclick}>order products</button>
        </div>
    )
}
export default orderproducts