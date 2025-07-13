import React, { useState } from 'react'
import { useEffect } from 'react'

const Fetch = () => {
    const [products, setProducts] = useState()
    async function getProducts() {
        let response = await fetch("https://fakestoreapi.in/api/products");
        let data = await response.json()
        console.log(data.products);
        setProducts(data.products);

    }

    useEffect(() => {
        console.log("Component Mounted");
        getProducts();
    }, [])

    return (
        <div>
            <h1 className='text-center text-5xl font-bold'>All Products</h1>
            <section className="p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">

                {products.map((singleproduct) => {
                    let { image, title, id } = singleproduct;
                    return (
                        <div key={id}>
                            <img src={image} height={200} width={200} alt="" />
                            <h1>{title}</h1>
                        </div>
                    );
                })};
            </section>
        </div>
    )
}

export default Fetch