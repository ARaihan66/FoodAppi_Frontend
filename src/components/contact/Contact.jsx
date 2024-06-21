import React, { useEffect, useState } from "react";
import MapLocation from "../mapLocation/MapLocation";
import Lottie from "react-lottie";
import SendMessage from "../../assets/lottiefile/message.json";
import contact from "../../assets/contact/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const defaultSendMessage = {
    loop: true,
    autoplay: true,
    animationData: SendMessage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img
        src={contact}
        alt="contact"
        className="w-full h-[350px] rounded-md my-5 opacity-80"
      />
      <h3 className="font-bold text-2xl my-5">Contact Us</h3>
      <p>
        For any general questions or feedback about FoodAppi, please feel free
        to reach out to us. We value your input and are always eager to hear
        from our users. Whether you have a suggestion to improve our service, a
        query about how FoodAppi works, or just want to share your experience,
        we're here to listen and assist.Our customer support team is here to
        assist you with any issues or concerns you may have with your orders or
        the app. We strive to provide prompt and efficient service to ensure
        your satisfaction. Whether you have a question about your order status,
        need help with the app, or encountered a problem, don't hesitate to
        contact us. We're available around the clock to support you.{" "}
      </p>
      <h3 className="font-bold text-2xl my-5">Send Us Message</h3>
      <div className="flex justify-center items-center bg-orange-200 rounded-lg">
        <div className="flex-1">
          <form className="flex flex-col justify-center items-center gap-5">
            <input
              type="text"
              value={name}
              placeholder="Enter Your Name"
              required
              onChange={handleOnChange}
              className="outline-none px-5 py-2 w-[350px] rounded"
            />
            <input
              type="email"
              value={email}
              placeholder="Enter Your Email"
              required
              onChange={handleOnChange}
              className="outline-none px-5 py-2 w-[350px] rounded"
            />
            <textarea
              placeholder="Enter Your Opinion"
              value={message}
              required
              onChange={handleOnChange}
              className="outline-none px-5 py-2 w-[350px] rounded"
            />
            <button className="uppercase bg-yellow-900 px-5 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1">
          <Lottie options={defaultSendMessage} />
        </div>
      </div>
      <MapLocation />
    </div>
  );
};

export default Contact;
