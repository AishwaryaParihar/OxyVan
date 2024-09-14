import React from 'react';
import QRscan from '../../assets/upiQR.png';
import donate01 from '../../assets/DONATE01.png';
import donate02 from '../../assets/DONATE02.png';
import donate03 from '../../assets/DONATE03.png';
import donate04 from '../../assets/DONATE04.png';

const MoneyDonate = () => {
  return (
    <div className="flex flex-col lg:flex-row my-28 lg:justify-center lg:items-center mx-4 lg:mx-40  shadow-2xl shadow-lime-500">
      {/* 2nd Item (Moves to the bottom on smaller screens) */}
      <div className="shadow-2xl bg-primary lg:w-[30%] order-2 lg:order-none text-white font-semibold p-5 py-12 flex flex-col justify-center">
        <div className="text-center mb-12 text-3xl lg:text-4xl underline">
          Bank<span className="text-secondary">ing det</span>ails
        </div>
        <div className="my-4 text-lg lg:text-xl">
          <span className="text-secondary">Bank Name:</span> SBI (State Bank Of
          India)
        </div>
        <div className="my-4 text-lg lg:text-xl">
          <span className="text-secondary">Account name:</span> OXYVAN
          PARYAWARAN SANRAKSHAN SAMITI
        </div>
        <div className="my-4 text-lg lg:text-xl">
          <span className="text-secondary">Account No.:</span> 00000043097813492
        </div>
        <div className="my-4 text-lg lg:text-xl">
          <span className="text-secondary">IFSC Code:</span> SBIN0001308
        </div>
        <div className="my-4 text-lg lg:text-xl">
          <span className="text-secondary">Branch:</span> Main Branch New Market
          Bhopal, M.P.
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <img
            src={donate01}
            className="h-16 lg:h-20 mx-auto"
            alt="Donate 01"
          />
          <img
            src={donate02}
            className="h-16 lg:h-20 mx-auto"
            alt="Donate 02"
          />
          <img
            src={donate04}
            className="h-16 lg:h-20 mx-auto"
            alt="Donate 04"
          />
        </div>
      </div>

      {/* 3rd Item (Moves to the top on smaller screens) */}
      <div className="lg:w-[40%] order-1 lg:order-none p-4 lg:p-0">
        <img className="w-full h-auto" src={QRscan} alt="QR Code Scan" />
      </div>
    </div>
  );
};

export default MoneyDonate;
