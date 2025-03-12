import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="button"
      class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 rounded-lg text-md text-center w-full px-5 py-1"
    >
      {text}
    </button>
  );
};

export default Button;
