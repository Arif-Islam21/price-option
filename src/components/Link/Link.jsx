import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-8 hover:bg-green-800 rounded-lg px-4">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
