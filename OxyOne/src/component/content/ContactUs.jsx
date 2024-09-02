import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center lg:space-x-10 py-12 px-4 lg:px-16 contactbg bg-SeaBlue">
      {/* Form Column */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h2>
        <form className={`${styles.form} bg-white p-6 rounded-lg shadow-lg`}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-green-800 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-800 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-green-800 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details and Map Column */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Our Location</h2>
        <p className="text-green-800 mb-4">123 Green Road, Tree City, Earth</p>
        <p className="text-green-800 mb-4">Phone: +123 456 7890</p>
        <p className="text-green-800 mb-4">Email: contact@treeplantation.com</p>
        <div className={`${styles.map} w-full h-64 bg-green-100 mt-6 rounded-lg overflow-hidden`}>
          {/* Embed a map using an iframe or any other preferred method */}
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509239!2d144.9537353153159!3d-37.81627977975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e0fbdcb092!2sVictoria%20State%20Library!5e0!3m2!1sen!2sin!4v1604984690996!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
