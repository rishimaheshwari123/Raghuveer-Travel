import React, { useState } from "react";

const Loading = ({ setIsLoading }) => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className="fixed top-0 left-0 w-full h-full loading flex justify-center items-center">
      <div
        className="spinner-border text-primary w-[-250px] h-[250px] flex items-center justify-center "
        role="status"
      >
        <img
          className="visually-hidden w-full h-full bg-transparent"
          src="./loading.gif"
        />
      </div>
    </div>
  );
};

export default Loading;
