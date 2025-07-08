// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import './LandingPage.css';

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {


//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const el = sectionRef.current;

//     gsap.fromTo(
//       el,
//       {
//         y: 100,
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.4,
//         // ease: "power4.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="landing-page">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="container">
//           <div className="hero-content">
//             <h1>Your career is your canvas paint boldly.</h1>
//             <p>
//               Join a community of innovators & journey where your career meets purpose and in building better stays.
//             </p>
//             <div className="hero-buttons">
//               <Link to="/login" className="btn btn-primary">Sign In</Link>
//               <Link to="/signup" className="btn btn-secondary">Create Account</Link>
//               <Link to="/careers" className="btn btn-outline">Browse Jobs</Link>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="image-placeholder">
//               <svg width="300" height="250" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="300" height="250" rx="8" fill="#E4E6EB" />
//                 <path d="M150 125C167.673 125 182 110.673 182 93C182 75.3269 167.673 61 150 61C132.327 61 118 75.3269 118 93C118 110.673 132.327 125 150 125Z" fill="#1877F2" />
//                 <rect x="85" y="140" width="130" height="65" rx="8" fill="#1877F2" opacity="0.7" />
//                 <path d="M150 170C150 170 120 170 120 140" stroke="white" strokeWidth="4" strokeLinecap="round" />
//                 <path d="M150 170C150 170 180 170 180 140" stroke="white" strokeWidth="4" strokeLinecap="round" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features">
//         <div className="container">
//           <h2>Why Join GharPadharo</h2>
//           <div className="features-grid">
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect width="50" height="50" rx="25" fill="#E7F3FF" />
//                   <path d="M33 25C33 29.4183 29.4183 33 25 33C20.5817 33 17 29.4183 17 25C17 20.5817 20.5817 17 25 17C29.4183 17 33 20.5817 33 25Z" stroke="#1877F2" strokeWidth="2" />
//                   <path d="M25 21V25L28 28" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </div>
//               <h3>Flexible Work Options</h3>
//               <p>Choose from remote, hybrid, or in-office positions that fit your lifestyle and work preferences.</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect width="50" height="50" rx="25" fill="#E7F3FF" />
//                   <path d="M17 25H33" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
//                   <path d="M25 17V33" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
//                   <path d="M21 21L29 29" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
//                   <path d="M29 21L21 29" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               </div>
//               <h3>Innovative Projects</h3>
//               <p>Work on cutting-edge technologies that impact billions of people around the world.</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect width="50" height="50" rx="25" fill="#E7F3FF" />
//                   <path d="M25 17V33" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
//                   <path d="M19 23L25 17L31 23" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M19 33H31" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               </div>
//               <h3>Career Growth</h3>
//               <p>Access to learning resources, mentorship programs, and clear paths for advancement.</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect width="50" height="50" rx="25" fill="#E7F3FF" />
//                   <path d="M20 25C20 22.7909 21.7909 21 24 21H26C28.2091 21 30 22.7909 30 25C30 27.2091 28.2091 29 26 29H24C21.7909 29 20 27.2091 20 25Z" stroke="#1877F2" strokeWidth="2" />
//                   <path d="M25 17V33" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               </div>
//               <h3>Competitive Benefits</h3>
//               <p>Comprehensive health coverage, wellness programs, and financial benefits to support you.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Teams Section */}
//       <section className="teams-section">
//         <div className="container">
//           <h2>Explore Our Teams</h2>
//           <p className="section-description">
//             Discover diverse teams at GharPadharo where you can make an impact and grow your career.
//           </p>
//           <div className="teams-carousel">
//             <div className="team-item"  ref={sectionRef}>
//               <h3>Engineering</h3>
//               <p>Build the next generation of technologies that bring people closer together.</p>
//               <Link to="/careers" className="team-link">
//                 View Openings <span>→</span>
//               </Link>
//             </div>
//             <div className="team-item">
//               <h3>Product Design</h3>
//               <p>Create intuitive and beautiful experiences that help people connect in meaningful ways.</p>
//               <Link to="/careers" className="team-link">
//                 View Openings <span>→</span>
//               </Link>
//             </div>
//             <div className="team-item">
//               <h3>Research</h3>
//               <p>Solve complex problems and develop new insights that advance the state of the art.</p>
//               <Link to="/careers" className="team-link">
//                 View Openings <span>→</span>
//               </Link>
//             </div>
//             <div className="team-item">
//               <h3>Data Science</h3>
//               <p>Extract insights from data to inform product decisions and business strategy.</p>
//               <Link to="/careers" className="team-link">
//                 View Openings <span>→</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials">
//         <div className="container">
//           <h2>What Our Employees Say</h2>
//           <div className="testimonial-card">
//             <div className="quote-mark">"</div>
//             <p className="testimonial-text">
//               Working at GharPadharo has been an incredible journey. I've had the opportunity to work on projects that impact billions of people while growing professionally in a supportive environment. The culture encourages innovation and taking smart risks.
//             </p>
//             <div className="testimonial-author">
//               <div className="author-avatar"></div>
//               <div className="author-info">
//                 <h4>Alex Johnson</h4>
//                 <p>Senior Software Engineer, 3 years at GharPadharo</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="container">
//           <h2>Ready to Build the Future?</h2>
//           <p>
//             Join our team of talented individuals who are passionate about creating technology that brings the world closer together.
//           </p>
//           <div className="cta-buttons">
//             <Link to="/signup" className="btn btn-primary">Create Account</Link>
//             <Link to="/careers" className="btn btn-secondary">Browse Open Positions</Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;



import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '../CareerPortal/Header';
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {


  useEffect(() => {
    gsap.utils.toArray(".reveal-section").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero flex flex-col items-center lg:flex-row lg:px-10"
          style={{
            backgroundImage: 'url("/GharPadharoPictures/landingPageImage.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}>
          <div className="container w-[100vw] lg:w-[50vw] ">
            <div className="hero-content">
              <h1>Your career is your canvas paint boldly.</h1>
              <p>
                Join a community of innovators & journey where your career meets purpose and in building better stays.
              </p>
              <div className="hero-buttons">
                <Link to="/login" className="btn btn-primary">Sign In</Link>
                <Link to="/signup" className="btn btn-secondary">Create Account</Link>
                <Link to="/careers" className="btn btn-outline">Browse Jobs</Link>
              </div>
            </div>
          </div>
          <div className='w-[90vw] lg:w-[40vw] mr-0 lg:mr-10 p-5 lg:p-10'>
            <img src="/GharPadharoPictures/landingPageMain.jpg" alt="Logo" className='rounded-2xl w-[80vw] lg:w-[100%]' />
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2>Why Join GharPadharo</h2>
            <div className="features-grid">
              <div className="feature-card reveal-section">
                <div className="feature-icon">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="25" fill="#E7F3FF" />
                    <path d="M33 25C33 29.4183 29.4183 33 25 33C20.5817 33 17 29.4183 17 25C17 20.5817 20.5817 17 25 17C29.4183 17 33 20.5817 33 25Z" stroke="#1877F2" strokeWidth="2" />
                    <path d="M25 21V25L28 28" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Flexible Work Options</h3>
                <p>Choose from remote, hybrid, or in-office positions that fit your lifestyle and work preferences.</p>
              </div>
              <div className="feature-card reveal-section">
                <div className="feature-icon">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="25" fill="#E7F3FF" />
                    <path d="M17 25H33" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
                    <path d="M25 17V33" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
                    <path d="M21 21L29 29" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
                    <path d="M29 21L21 29" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Innovative Projects</h3>
                <p>Work on cutting-edge technologies that impact billions of people around the world.</p>
              </div>
              <div className="feature-card reveal-section">
                <div className="feature-icon">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="25" fill="#E7F3FF" />
                    <path d="M25 17V33" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
                    <path d="M19 23L25 17L31 23" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 33H31" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Career Growth</h3>
                <p>Access to learning resources, mentorship programs, and clear paths for advancement.</p>
              </div>
              <div className="feature-card reveal-section">
                <div className="feature-icon">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="25" fill="#E7F3FF" />
                    <path d="M20 25C20 22.7909 21.7909 21 24 21H26C28.2091 21 30 22.7909 30 25C30 27.2091 28.2091 29 26 29H24C21.7909 29 20 27.2091 20 25Z" stroke="#1877F2" strokeWidth="2" />
                    <path d="M25 17V33" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Competitive Benefits</h3>
                <p>Comprehensive health coverage, wellness programs, and financial benefits to support you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="teams-section">
          <div className="container">
            <h2>Explore Our Teams</h2>
            <p className="section-description">
              Discover diverse teams at GharPadharo where you can make an impact and grow your career.
            </p>
            <div className="teams-carousel">
              <div className="team-item reveal-section">
                <h3>Engineering</h3>
                <p>Build the next generation of technologies that bring people closer together.</p>
                <Link to="/careers" className="team-link">
                  View Openings <span>→</span>
                </Link>
              </div>
              <div className="team-item reveal-section">
                <h3>Product Design</h3>
                <p>Create intuitive and beautiful experiences that help people connect in meaningful ways.</p>
                <Link to="/careers" className="team-link">
                  View Openings <span>→</span>
                </Link>
              </div>
              <div className="team-item reveal-section">
                <h3>Research</h3>
                <p>Solve complex problems and develop new insights that advance the state of the art.</p>
                <Link to="/careers" className="team-link">
                  View Openings <span>→</span>
                </Link>
              </div>
              <div className="team-item reveal-section">
                <h3>Data Science</h3>
                <p>Extract insights from data to inform product decisions and business strategy.</p>
                <Link to="/careers" className="team-link">
                  View Openings <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="container">
            <h2>What Our Employees Say</h2>
            <div className="testimonial-card reveal-section">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                Working at GharPadharo has been an incredible journey. I've had the opportunity to work on projects that impact billions of people while growing professionally in a supportive environment. The culture encourages innovation and taking smart risks.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Siddharth Kothiyal</h4>
                  <p>Software Developer, 1 year at GharPadharo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Build the Future?</h2>
            <p>
              Join our team of talented individuals who are passionate about creating technology that brings the world closer together.
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary">Create Account</Link>
              <Link to="/careers" className="btn btn-secondary">Browse Open Positions</Link>
            </div>
          </div>
        </section>
      </div>
    </>

  );
};

export default LandingPage;