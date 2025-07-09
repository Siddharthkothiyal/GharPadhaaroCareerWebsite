import React, { useState, useEffect } from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = ({ jobId, jobTitle }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    linkedIn: '',
    portfolio: '',
    experience: '',
    education: '',
    skills: ''
  });

  useEffect(() => {
    // Check if resume data exists in localStorage
    const savedResumeData = localStorage.getItem('resumeData');
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);

      // Parse the name into first and last name
      const nameParts = resumeData.name ? resumeData.name.split(' ') : ['', ''];
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Format experience
      const experience = resumeData.experience ?
        resumeData.experience.map(exp =>
          `${exp.title} at ${exp.company} (${exp.duration})`
        ).join('\n') : '';

      // Format education
      const education = resumeData.education ?
        resumeData.education.map(edu =>
          `${edu.degree} from ${edu.institution} (${edu.year})`
        ).join('\n') : '';

      // Format skills
      const skills = resumeData.skills ? resumeData.skills.join(', ') : '';

      // Update form data with resume information
      setFormData(prev => ({
        ...prev,
        firstName,
        lastName,
        email: resumeData.email || '',
        phone: resumeData.phone || '',
        experience,
        education,
        skills
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please upload a resume file");
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const base64File = reader.result.split(",")[1]; // remove "data:...base64," part

      const formPayload = new FormData();
      formPayload.append("firstName", formData.firstName);
      formPayload.append("lastName", formData.lastName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("coverLetter", formData.coverLetter);
      formPayload.append("linkedIn", formData.linkedIn);
      formPayload.append("portfolio", formData.portfolio);
      formPayload.append("experience", formData.experience);
      formPayload.append("education", formData.education);
      formPayload.append("skills", formData.skills);

      formPayload.append("resume", base64File);
      formPayload.append("resumeName", formData.resume.name);
      formPayload.append("mimeType", formData.resume.type);

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxyuN8qoNxwnHvA6kqDlIixKvtXf9pUCpG6zLc7lbhrbxHe8PGVpw0v8H9pRLeN8Xbj/exec", {
          method: "POST",
          body: formPayload,
        });

        const result = await response.json();

        if (result.status === "success") {
          alert("Application submitted successfully!");
          // console.log("Resume Link:", result.fileUrl);
        } else {
          alert("Submission failed: " + result.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again.");
      }
    };

    reader.readAsDataURL(formData.resume); // triggers onload above
  };

  return (
    <div className="job-application-form">
      <h2>Apply for {jobTitle}</h2>
      <p className="form-description">Please fill out the form below to apply for this position.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Personal Information</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder='first name'
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder='last name'

              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='email'

              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder='phone number'
              />
            </div>
          </div>
        </div>

        <div className="form-section ">
          <h3>Resume & Cover Letter</h3>

          <div className="">
            <label htmlFor="resume" className='file-upload-btn'>Resume * (PDF or DOCX)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              required={!formData.resume}
              className="file-input"
            />
            {formData.resume && (
              <p className="file-selected">
                Selected file: {formData.resume.name}
              </p>
            )}
          </div>

          <div className="form-group coverletter-section">
            <label htmlFor="coverLetter">Cover Letter (Optional)</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us why you're interested in this position and what makes you a great fit."
            ></textarea>
          </div>
        </div>

        <div className="form-section">
          <h3>Professional Information</h3>

          <div className="form-group">
            <label htmlFor="linkedIn">LinkedIn Profile (Optional)</label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div className="form-group">
            <label htmlFor="portfolio">Portfolio/Website (Optional)</label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Work Experience *</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows="4"
              required
              placeholder="List your relevant work experience"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="education">Education *</label>
            <textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              rows="3"
              required
              placeholder="List your educational background"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills *</label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              rows="3"
              required
              placeholder="List your relevant skills"
            ></textarea>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="application-form-btn cancel-btn ">Cancel</button>
          <button type="submit" className="application-form-btn submit-application-btn">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;