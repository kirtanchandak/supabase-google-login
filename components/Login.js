import React from "react";
import styles from "../styles/Home.module.css";

function Login() {
  return (
    <div>
      <button className="flex items-center space-x-2 bg-black p-3 rounded-lg drop-shadow-2xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          className="w-14"
        />
        <span className="text-white font-sans text-xl font-bold">
          Login with Google
        </span>
      </button>
    </div>
  );
}

export default Login;
