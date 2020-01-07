import React from "react";
import loading from '../../assets/images/loading.gif'

const Loader = () => {
  return (
    <div>
      <img src={loading} alt="spinner" />
    </div>
  );
}

export default Loader;