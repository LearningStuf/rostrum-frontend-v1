"use client";
import React, { useState } from "react";
import { FORM_URL } from "@/utils/SERVER_URL"; // Your Strapi form submission endpoint

const ContactForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // State for success or failure message
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim())
      formErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      formErrors.lastName = "Last name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is invalid";
    if (!formData.message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    // If there are no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch(FORM_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formName: "Rostrum",
            formData: formData,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setSubmitStatus({
            success: true,
            message: "Your message has been sent successfully!",
          });
          // Reset form fields
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setSubmitStatus({
              success: false,
              message: "",
            });
          }, 1000);
        } else {
          setSubmitStatus({
            success: false,
            message: "Failed to send message. Please try again later.",
          });
        }
      } catch (error) {
        setSubmitStatus({
          success: false,
          message: "An error occurred. Please try again.",
        });
      }
    }
  };


  return (
    // <form className="p-10" onSubmit={handleSubmit}>
    //   <div className="flex flex-wrap -mx-3 mb-6">
    //     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    //       <label
    //         className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //         htmlFor="grid-first-name"
    //       >
    //         First Name
    //       </label>
    //       <input
    //         className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
    //           errors.firstName ? "border-red-500" : "border-gray-200"
    //         } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
    //         id="grid-first-name"
    //         type="text"
    //         name="firstName"
    //         value={formData.firstName}
    //         onChange={handleInputChange}
    //         placeholder="Jane"
    //       />
    //       {errors.firstName && (
    //         <p className="text-red-500 text-xs italic">{errors.firstName}</p>
    //       )}
    //     </div>
    //     <div className="w-full md:w-1/2 px-3">
    //       <label
    //         className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //         htmlFor="grid-last-name"
    //       >
    //         Last Name
    //       </label>
    //       <input
    //         className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
    //           errors.lastName ? "border-red-500" : "border-gray-200"
    //         } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
    //         id="grid-last-name"
    //         type="text"
    //         name="lastName"
    //         value={formData.lastName}
    //         onChange={handleInputChange}
    //         placeholder="Doe"
    //       />
    //       {errors.lastName && (
    //         <p className="text-red-500 text-xs italic">{errors.lastName}</p>
    //       )}
    //     </div>
    //   </div>

    //   <div className="flex flex-wrap -mx-3 mb-6">
    //     <div className="w-full px-3">
    //       <label
    //         className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //         htmlFor="grid-email"
    //       >
    //         Email Address
    //       </label>
    //       <input
    //         className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
    //           errors.email ? "border-red-500" : "border-gray-200"
    //         } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
    //         id="grid-email"
    //         type="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleInputChange}
    //         placeholder="********@*****.**"
    //       />
    //       {errors.email && (
    //         <p className="text-red-500 text-xs italic">{errors.email}</p>
    //       )}
    //     </div>
    //   </div>

    //   <div className="flex flex-wrap -mx-3 mb-6">
    //     <div className="w-full px-3">
    //       <label
    //         className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //         htmlFor="grid-message"
    //       >
    //         Your Message
    //       </label>
    //       <textarea
    //         rows="10"
    //         className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
    //           errors.message ? "border-red-500" : "border-gray-200"
    //         } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
    //         id="grid-message"
    //         name="message"
    //         value={formData.message}
    //         onChange={handleInputChange}
    //       ></textarea>
    //       {errors.message && (
    //         <p className="text-red-500 text-xs italic">{errors.message}</p>
    //       )}
    //     </div>

    //     <div className="flex justify-between w-full px-3 mt-2">
    //       <button
    //         className="shadow bg-secondary hover:bg-primary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
    //         type="submit"
    //       >
    //         Send Message
    //       </button>
    //     </div>
    //   </div>

    //   {/* Success or failure message */}
    //   {submitStatus.message && (
    //     <p
    //       className={`text-center text-lg ${
    //         submitStatus.success ? "text-green-500" : "text-red-500"
    //       }`}
    //     >
    //       {submitStatus.message}
    //     </p>
    //   )}
    // </form>
    <>
      <iframe
        aria-label="BOOK A FREE SESSION"
        frameborder="0"
        style={{ height: "500px", width: "100%", border: "none" }}
        src="https://forms.zohopublic.in/guidance/form/ContactUs/formperma/0bBz1Rf01iORSyGoWdHdrdZRElTz2KCtT8Vnn4lpEoA"
      ></iframe>
    </>
  );
};

export default ContactForm;
