import axios from "axios";
import Image from "next/image";

const Details = async ({ id }) => {
  const res = await axios.get(`https://summerfield.store/products/${id}`);
  console.log(res?.data);
  return (
    <div className=" w-screen h-screen px-5 py-10">
      <div className=" flex gap-10 justify-center items-center">
        <div className=" flex flex-col gap-2">
          <Image
            src={`https://summerfield.store${res?.data?.images[0]?.image}`}
            width={200}
            height={100}
            alt="logo"
            className=" rounded-sm"
          />
          <Image
            src={`https://summerfield.store${res?.data?.images[1]?.image}`}
            width={200}
            height={100}
            alt="logo"
            className=" rounded-sm"
          />
          <Image
            src={`https://summerfield.store${res?.data?.images[2]?.image}`}
            width={200}
            height={100}
            alt="logo"
            className=" rounded-sm"
          />
        </div>
        <Image
          src={`https://summerfield.store${res?.data?.images[0]?.image}`}
          width={500}
          height={500}
          alt="Product"
          className=" rounded-md"
        />
        <div>
            <h1 className="mt-1 px-8 text-4xl text-wrap text-center text-[#09195a] hover:text-[#0984c8]">{res?.data?.title}</h1>
            <p className="text-center text-[#ef837b] text-lg font-semibold">৳ {res?.data?.selling_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
