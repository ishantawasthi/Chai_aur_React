import { useState } from "react";

const Card = ({ username }) => {
     

    // const Card = (props) => {
   // console.log(props.username);
       
    console.log(username);

  const [count, setCount] = useState(0);

  let  product = {
    name: username,
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png",
  };

  return (
    <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full mt-6">
      {/* Image */}
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* Content */}
      <div className="text-gray-500/60 text-sm">
        <p>{product.category}</p>

        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill("")
            .map((_, i) =>
              product.rating > i ? (
                <svg
                  key={i}
                  width="14"
                  height="13"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                    fill="#615fff"
                  />
                </svg>
              ) : (
                <svg
                  key={i}
                  width="14"
                  height="13"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                    fill="#615fff"
                    fillOpacity="0.35"
                  />
                </svg>
              )
            )}

          <p>({product.rating})</p>
        </div>

        {/* Price + Button */}
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-indigo-500">
            ${product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              ${product.price}
            </span>
          </p>

          <div className="text-indigo-500">
            {count === 0 ? (
              <button
                onClick={() => setCount(1)}
                className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0m6.417 0a.583.583 0 1 1-1.167 0"
                    stroke="#615fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                 {username}
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                <button
                  onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                  className="px-2"
                >
                  -
                </button>
                <span className="w-5 text-center">{count}</span>
                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="px-2"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
