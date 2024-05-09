"use client";

import { useEffect, useState } from "react";

const NewArrival = () => {
    const [products, setProducts ] = useState();



    useEffect(() => { 
        const loader = async () => { 
            // const res = await 
         }
     },[])
    return (
        <div>
            <article>
                <h2>New Arrival Products</h2>
                <p>Give your wardrobe a refresh with these new arrivals</p>
            </article>

        </div>
    );
};

export default NewArrival;