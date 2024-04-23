import React from "react";
import { useNavigate } from "react-router-dom";
import IsbakLogo from "../assets/media/isbak_ibb.png";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="m-10 flex justify-center items-center flex-col">
      <div className="flex items-center justify-center m-10 w-1/2">
        <img src={IsbakLogo} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => navigate("/home")}
          className="bg-[#12acc8] text-white p-3 m-5 rounded-md hover:text-[#12acc8] hover:bg-gray-100"
        >
          Uygulamaya Gitmek İçin Lütfen Tıklayınız
        </button>
        <p className="m-5">
          Uygulamamı Değerlendirdiğiniz İçin Teşekkür Ederim
        </p>
      </div>
    </div>
  );
};

export default Login;
