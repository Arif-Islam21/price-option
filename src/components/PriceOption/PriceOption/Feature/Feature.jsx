import PropTypes from "prop-types";
import { PiCrosshairFill } from "react-icons/pi";

const Feature = ({ feature }) => {
  return (
    <div className="pl-6">
      <p className="flex text-center items-center ">
        <PiCrosshairFill className="mr-2 mt-4" />
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
