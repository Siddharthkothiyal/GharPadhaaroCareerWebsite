import React, { useState } from 'react';
import './ResumeUpload.css';

const ResumeUpload = ({ onClose, onResumeProcessed }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check if file is PDF or DOCX
      const fileType = selectedFile.type;
      if (fileType === 'application/pdf' || 
          fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(selectedFile);
        setError('');
      } else {
        setFile(null);
        setError('Please upload a PDF or DOCX file');
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    setIsUploading(true);
    setProgress(0);

    // Simulate file upload and processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // Simulate resume parsing and data extraction
    setTimeout(() => {
      clearInterval(interval);
      setIsUploading(false);
      setProgress(100);
      
      // Mock extracted data from resume
      const extractedData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        skills: ['JavaScript', 'React', 'Node.js', 'CSS'],
        experience: [
          {
            title: 'Frontend Developer',
            company: 'Tech Solutions Inc.',
            duration: 'Jan 2020 - Present'
          },
          {
            title: 'Web Developer',
            company: 'Digital Creations',
            duration: 'Mar 2018 - Dec 2019'
          }
        ],
        education: [
          {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Technology',
            year: '2018'
          }
        ]
      };

      // Pass the extracted data to parent component
      onResumeProcessed(extractedData);
      onClose();
    }, 3000);
  };

  return (
    <div className="resume-upload-overlay">
      <div className="resume-upload-container">
        <div className="resume-upload-header">
          <h2>Upload Your Resume</h2>
          <button className="close-button" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="resume-upload-content">
          <p>Upload your resume to automatically fill in your application details.</p>
          <p className="file-format-note">Supported formats: PDF, DOCX</p>
          
          <div className="file-upload-area">
            {!file ? (
              <>
                <input 
                  type="file" 
                  id="resume-file" 
                  accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                  onChange={handleFileChange}
                  className="file-input"
                />
                <label htmlFor="resume-file" className="file-upload-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span>Choose a file or drag it here</span>
                </label>
              </>
            ) : (
              <div className="selected-file">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span className="file-name">{file.name}</span>
                <button 
                  className="remove-file" 
                  onClick={() => setFile(null)}
                  aria-label="Remove file"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            )}
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          {isUploading && (
            <div className="upload-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{progress}% - Analyzing resume...</span>
            </div>
          )}
          
          <div className="resume-upload-actions">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button 
              className="btn btn-primary" 
              onClick={handleUpload}
              disabled={!file || isUploading}
            >
              {isUploading ? 'Processing...' : 'Upload & Autofill'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;