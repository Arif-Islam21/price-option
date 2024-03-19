import PropTypes from "prop-types";
import Feature from "./Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-400 flex flex-col rounded-lg p-4 text-center text-white ">
      <h2 className="">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-4xl my-8">{name}</h4>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-green-300 text-black font-bold mt-8 py-4 rounded-lg hover:bg-green-600 w-full">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
