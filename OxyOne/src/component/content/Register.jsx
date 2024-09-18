import React, { useState } from "react";
import VolunteerForm from "./VolunteerForm";
import DonerForm from "./DonerForm";
import headlogo1 from "../../assets/flower-pot.png";

const Register = () => {
  const [formType, setFormType] = useState("volunteer");

  const handleButtonClick = (type) => {
    setFormType(type);
  };

  return (
    <>
      <div className="w-full mt-20 px-4 lg:px-16">
        <div className="flex justify-center">
          <h2 className="heading01 font-bold mb-8 md:text-3xl">
            {" "}
            Get Register Yourself{" "}
          </h2>

          <img src={headlogo1} className="h-14 inline" alt="" />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <button
              className={`w-full py-2 font-semibold ${
                formType === "volunteer" ? "bg-primary" : "bg-green-700"
              } text-white`}
              onClick={() => handleButtonClick("volunteer")}
            >
              As a Volunteer
            </button>
          </div>
          <div className="w-1/2">
            <button
              className={`w-full py-2 font-semibold ${
                formType === "donor" ? "bg-primary" : "bg-green-700"
              } text-white`}
              onClick={() => handleButtonClick("donor")}
            >
              As a Donor
            </button>
          </div>
        </div>

        <div className="mt-8">
          {formType === "volunteer" && (
            <div className="p-6 contactbg rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Volunteer Registration Form
              </h3>
              {/* Volunteer form fields */}
              <VolunteerForm />
            </div>
          )}

          {formType === "donor" && (
            <div className="p-6 contactbg rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Donor Registration Form
              </h3>
              {/* Donor form fields */}
              <DonerForm />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
