"use client";
import React, { useEffect, useState } from "react";
import { Flex, Spin } from "antd";
import Card from "../card/Card";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loader = async () => {
      const res = await fetch(
        `https://summerfield.store/products/?page=${page}&${filter}`
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(data?.products || []);
          setLoading(false);
        });
      console.log(res);
    };
    loader();
  }, [filter, page]);

  const handleNext = () => {
    if (26 > page > 0) {
      setLoading(true);
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page >= 2 || page <= 26) {
      setLoading(true);
      setPage(page - 1);
    }
  };

  return (
    <div className=" flex flex-col mt-10">
      {isLoading || !products ? (
        <Flex align="center" gap="middle" className=" mx-auto my-20">
          <Spin size="large" />
        </Flex>
      ) : (
        <>
          <div className=" flex">
            <div className="w-[277px]"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-3">
              {products.map((product, index) => (
                <Card key={product.id} product={product} index={index}/>
              ))}
            </div>
          </div>
          <div className=" mt-10 mb-8 mx-auto flex gap-3">
            <button
              className=" bg-[#0984c8] hover:bg-[#09195a] active:opacity-40 p-3 text-white text-sm font-bold rounded-sm"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className=" bg-[#0984c8] hover:bg-[#09195a] active:opacity-40 p-3 text-white text-sm font-bold rounded-sm"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllProducts;
