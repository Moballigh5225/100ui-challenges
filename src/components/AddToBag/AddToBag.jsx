import "./styles.css";

const AddToBag = () => {
  return (
    <div className="   flex justify-center text-center p-8 w-full   ">
      <div className=" flex multi-images-container  text-center items-center     p-2  flex-col gap-2">
        <div className="image-one bg p-0.5 bg-blue-600 rounded-lg  h-20">
          <img
            className="object-cover h-full w-full rounded-lg"
            src="https://uploads-ssl.webflow.com/644936ee98f322622c685779/645ce6722ad9dd61c8f739a1_Classic-T-Shirt-Gery-Navy.jpg"
            alt=""
          />
        </div>
        <div className="image-one bg    h-20">
          <img
            className="opacity-60 object-cover h-full w-full rounded-lg"
            src="https://uploads-ssl.webflow.com/644936ee98f322622c685779/645ce6722ad9dd61c8f739a1_Classic-T-Shirt-Gery-Navy.jpg"
            alt=""
          />
        </div>
        <div className="image-one bg h-20">
          <img
            className=" opacity-60 object-cover h-full w-full rounded-lg"
            src="https://uploads-ssl.webflow.com/644936ee98f322622c685779/645ce6722ad9dd61c8f739a1_Classic-T-Shirt-Gery-Navy.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="parent-container flex p-2">
        <div className="big-image-container p-0.5 ">
          <img
            className="object-cover h-full w-full rounded-lg"
            src="https://uploads-ssl.webflow.com/644936ee98f322622c685779/645ce6722ad9dd61c8f739a1_Classic-T-Shirt-Gery-Navy.jpg"
            alt=""
          />
        </div>
        <div className="details-container ">
          <div className="grid gap-x-8  grid-cols-1 p-2 gap-2 justify-items-start ml-4">
            <div className="font-serif  font-bold text-xs text-sky-500">
              POLO RALPH
            </div>
            <div className="font-bold  text-2xl">
              Custom Fit Polo Bear Oxford Shirt
            </div>
            <div className="text-xs mb-2 text-slate-500 ">
              Blue polo with a classic cut.Made of smooth and soft cotton.
            </div>
            <div className="font-semibold text-3xl font-serif    ">
              $99.00
              <span className=" bg-sky-200  px-2 py-1 font-normal place-content-center text-blue-700 border rounded text-sm text-center items-center ml-2">
                -25%
              </span>
            </div>
            <span className="text-xs text-slate-500 mb-8">$̶𝟷̶𝟹̶𝟸̶.̶𝟶̶𝟶̶</span>
            <div className="font-serif mb-3 font-bold text-xs">CHOOSE SIZE</div>
            <div className="grid font-serif grid-cols-5 gap-2 ">
              <div className=" px-1 py-2 ">S</div>
              <div className=" bg-black text-white py-2 px-1 rounded-md">M</div>
              <div className=" px-1 py-2">L</div>
              <div className=" px-1 py-2">XL</div>
              <div className=" px-1 py-2">XXL</div>
            </div>
            <div className="mt-4 text-sm text-center items-center border border-sky-500 py-2 w-full font-serif bg-blue-600 rounded text-white">
              ADD TO BAG
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToBag;
