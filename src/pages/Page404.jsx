import React from "react";
import IsbakLogo from "../assets/media/isbak_ibb.png";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="m-10">
      <div className="flex items-center justify-center m-10">
        <img src={IsbakLogo} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#12acc8] text-white p-3 m-5 rounded-md hover:text-[#12acc8] hover:bg-gray-100"
        >
          Geri Git
        </button>
        <p className="m-5">Aradığınız Sayfa Bulunamamaktadır (404)</p>
      </div>
    </div>
  );
};

export default Page404;
