import React, { useState } from "react";
import "./services.css"; // Assuming your CSS is in Services.css

const Services = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    yourName: "",
    yourCompany: "",
    yourEmail: "",
    yourPhone: "",
    textArea: "",
  });

  // State to manage submission status
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process the form data as needed (e.g., send to API)
    console.log("Form submitted:", formData);

    // Mock API call using fetch
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      setSubmissionStatus("Your form has been submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("There was an error submitting your form.");
    }

    // Reset form fields after submission (optional)
    setFormData({
      yourName: "",
      yourCompany: "",
      yourEmail: "",
      yourPhone: "",
      textArea: "",
    });
  };

  return (
    <div className="services-container">
      <h1 className="services-heading">Focus on what's important</h1>
      <p className="services-subheading">
        Let's talk about improving your tax submissions
      </p>
      <p className="services-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit
        nisi, adipisci quod ad, quasi quia alias dolore sint dolorem facilis
        quibusdam mollitia iure atque nemo, at ab sit explicabo. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Laborum impedit nisi,
        adipisci quod ad, quasi quia alias dolore sint dolorem facilis quibusdam
        mollitia iure atque nemo, at ab sit explicabo.
      </p>

      <form onSubmit={handleSubmit} className="services-form">
        <label htmlFor="yourName">Your Name</label>
        <input
          className="services-input-field"
          type="text"
          name="yourName"
          placeholder="Your Name"
          value={formData.yourName}
          onChange={handleChange}
          required
        />

        <label htmlFor="yourCompany">Your Company</label>
        <input
          className="services-input-field"
          type="text"
          name="yourCompany"
          placeholder="Company Name"
          value={formData.yourCompany}
          onChange={handleChange}
          required
        />

        <label htmlFor="yourEmail">Your Email</label>
        <input
          className="services-input-field"
          type="email"
          name="yourEmail"
          placeholder="Your Email Address"
          value={formData.yourEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="yourPhone">Your Phone</label>
        <input
          className="services-input-field"
          type="tel"
          name="yourPhone"
          placeholder="Your Phone Number"
          value={formData.yourPhone}
          onChange={handleChange}
          required
        />

        <label htmlFor="textArea">How can we help you?</label>
        <textarea
          name="textArea"
          className="services-input-field services-text-area"
          cols="30"
          rows="5"
          placeholder="How can we help you?"
          value={formData.textArea}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="services-submit">
          Reserve Your Free Consultation
        </button>
      </form>

      {submissionStatus && (
        <p className="submission-status">{submissionStatus}</p>
      )}
    </div>
  );
};

export default Services;
