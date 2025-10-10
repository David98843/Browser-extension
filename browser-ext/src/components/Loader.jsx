import loaderImg from "./images/favicon-32x32.png";

const Loader = () => {
  return (
    <div className="loader">
      <img className="l-img" src={loaderImg} alt="loaderImg" />
    </div>
  );
};

export default Loader;
