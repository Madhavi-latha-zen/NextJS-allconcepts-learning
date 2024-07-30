"use client";

import React, { useState, useEffect } from 'react';

type Product = {
    id: string;
    name: string;
    price: number;
}

const ProductDetails: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/products", {
                next: {
                    revalidate: 10,
                },
            });
            const products: Product[] = await response.json();
            setProducts(products);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product Details</h1>
            {products.map((product: Product) => (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <h1>${product.price}</h1>
                </div>
            ))}
        </div>
    );
}

export default ProductDetails;
