import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // To show success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_lzbf5qd", // Your service ID
        "template_ptrqkvt", // Your template ID
        formData, // The form data to send
        "dWWiwE_tq20guofrb" // Your user ID
      )
      .then(
        (response) => {
          console.log("Success:", response);
          setIsLoading(false);
          setIsSuccess(true);

          // Set a timeout to hide the success message after 3 seconds (3000ms)
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000); // Timeout for 3 seconds

          // Reset form after successful submission
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error:", error);
          setIsLoading(false);
          setIsSuccess(false);
        }
      );
  };

  return (
    <footer className="bg-[#000115] text-white p-5 lg:p-20 gap-10 lg:justify-between lg:flex lg">
      <div className="space-y-5 flex flex-row lg:flex-col gap-5 m-2">
        <h1 className="font-bold text-[20px] lg:text-[20px]">
          Contact DHHS For Assistance
        </h1>
        <h2 className="text-[10px]">
          Get in touch for grants and loans support within the United States.
        </h2>
        <img
          src="Images/seal dhhs.svg"
          alt="Seal"
          className="h-[100px] lg:h-[200px]"
        />
      </div>
      <div className="space-y-5 items-center space-x-5">
        <form onSubmit={handleSubmit}>
          <div className="rounded-2xl gap-5 space-y-5 lg:flex lg:gap-5">
            <input
              type="text"
              placeholder="Name"
              className="rounded-sm text-left bg-[#4c566a]"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="rounded-sm text-left bg-[#4c566a]"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <textarea
              placeholder="Message"
              className="bg-[#4c566a] rounded-xl text-center h-[120px]"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit" // Ensures this triggers the form submission
              className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
            {isSuccess && !isLoading && (
              <div className="mt-2 text-green-500">Message sent successfully!</div>
            )}
          </div>
        </form>
      </div>
    </footer>
  );
}
