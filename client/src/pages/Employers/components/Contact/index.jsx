import "./styles.scss";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workTitle: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    companyLocation: "",
    websiteUrl: "",
    selectedOption: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validation logic (example: checking if fields are not empty)
    if (formData.fullName.length < 1) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (formData.workTitle.length < 1) {
      newErrors.workTitle = "Work title is required";
      valid = false;
    }

    if (formData.workEmail.length < 1) {
      newErrors.workEmail = "Email is required";
      valid = false;
    }
    if (formData.phoneNumber.length < 1) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    }
    if (formData.companyName.length < 1) {
      newErrors.companyName = "Company Name is required";
      valid = false;
    }
    if (formData.companyLocation.length < 1) {
      newErrors.companyLocation = "Company Location is required";
      valid = false;
    }
    if (formData.websiteUrl.length < 1) {
      newErrors.websiteUrl = "Website URL is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setFormData({ ...formData, selectedOption: selectedValue });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make a POST request to your server endpoint
        const response = await axios.post(
          "http://localhost:3001/employer/details",
          formData
        );

        // Handle the response if needed
        console.log("Server Response:", response.data);

        // Reset the form data to its initial state
        setFormData({
          fullName: "",
          workTitle: "",
          workEmail: "",
          phoneNumber: "",
          companyName: "",
          companyLocation: "",
          websiteUrl: "",
          selectedOption: "",
        });

        alert("Successfully submitted!");
      } catch (error) {
        // Handle errors
        console.error("Error submitting the form:", error);
      }
    } else {
      console.log("Form not submitted due to validation errors.");
    }
  };

  return (
    <>
      <div className="employers-contact">
        <div className="container">
          {/* Title-title */}
          <div className="text-title">
            <h1 className="title">Let&apos;s find your IT Talents</h1>
            <p>Leave your contact so our Customer Love team can support you</p>
          </div>

          <div className="form-container">
            {/* LEFT */}
            <div className="form-left">
              <div className="section-wrapper">
                {/* FORM */}
                <form onSubmit={handleSubmit} className="background">
                  <div className="user-contact">
                    <h3>Your contact information</h3>
                    <div className="flex-box-field">
                      {/* First Row */}
                      <div className="first-row">
                        <div
                          className="flex-box-item"
                          style={{ marginRight: "24px" }}
                        >
                          <div className="left-input">
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="Full name"
                            />
                            {errors.fullName && (
                              <label htmlFor="fullName">
                                * Please let us know your name
                              </label>
                            )}
                          </div>
                        </div>
                        <div className="flex-box-item">
                          <div className="right-input">
                            <input
                              type="text"
                              id="workTitle"
                              name="workTitle"
                              value={formData.workTitle}
                              onChange={handleInputChange}
                              placeholder="Work title"
                            />
                            {errors.workTitle && (
                              <label htmlFor="workTitle">
                                * Please let us know your title
                              </label>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Second Row */}
                      <div className="second-row">
                        <div
                          className="flex-box-item"
                          style={{ marginRight: "24px" }}
                        >
                          <div className="left-input">
                            <input
                              type="text"
                              id="workEmail"
                              name="workEmail"
                              value={formData.workEmail}
                              onChange={handleInputChange}
                              placeholder="Work email"
                            />
                            {errors.workEmail && (
                              <label htmlFor="workEmail">
                                *Please provide your work email address
                              </label>
                            )}
                          </div>
                        </div>
                        <div className="flex-box-item">
                          <div className="right-input">
                            <input
                              type="tel"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              placeholder="Phone number"
                            />
                            {errors.phoneNumber && (
                              <label htmlFor="phoneNumber">
                                *Please provide your phone number
                              </label>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Third Row */}
                      <div className="third-row">
                        <select
                          value={formData.selectedOption}
                          onChange={handleSelectChange}
                        >
                          <option value="" disabled selected>
                            How did you know ITviec
                          </option>
                          <option value="Google">Google</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Linkedin">Linkedin</option>
                          <option value="ITviec's Sales Team">
                            ITviec&apos;s Sales Team
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="company-contact">
                    <h3>Company information</h3>
                    {/* COMPANY NAME */}
                    <div className="name-com-input">
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                      />
                      {errors.companyName && (
                        <label htmlFor="companyName">
                          *Please let us know your company name
                        </label>
                      )}
                    </div>

                    {/* COMPANY LOCATION */}
                    <div className="location-com-input">
                      <input
                        type="text"
                        id="companyLocation"
                        name="companyLocation"
                        value={formData.companyLocation}
                        onChange={handleInputChange}
                        placeholder="Company Location"
                      />
                      {errors.companyLocation && (
                        <label htmlFor="companyLocation">
                          *Please let us know your company location
                        </label>
                      )}
                    </div>

                    {/* WEBSITE URL */}
                    <div className="website-url">
                      <input
                        type="text"
                        id="websiteUrl"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        placeholder="Website URL"
                      />
                      {errors.companyLocation ? (
                        <label htmlFor="companyLocation">
                          *Please let us know your URL Website
                        </label>
                      ) : (
                        <div htmlFor="websiteUrl">
                          URL includes a protocol (https), e.g:
                          https://itviec.com
                        </div>
                      )}
                    </div>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            {/* RIGHT */}

            <div className="form-right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
