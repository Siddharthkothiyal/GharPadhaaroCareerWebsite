import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedTeams.css';
import { div } from 'framer-motion/client';

const FeaturedTeams = () => {
  const teams = [
    {
      id: 1,
      name: 'Artificial Intelligence',
      description: 'Build the next generation of AI openly and responsibly. Meta is all in on building the future of AI with Llama, our open-source collection of models.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
          <circle cx="7.5" cy="14.5" r="1.5"></circle>
          <circle cx="16.5" cy="14.5" r="1.5"></circle>
        </svg>
      ),
      image: "/GharPadharoPictures/ArtificialIntelligence.jpg"
    },
    {
      id: 2,
      name: 'Metaverse and Wearables',
      description: 'Innovate the leading spatial platform and new devices. Our teams create new ways to connect in the metaverse and take wearables beyond gaming.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h1"></path>
          <path d="M21 12h1"></path>
          <path d="M12 2v1"></path>
          <path d="M12 21v1"></path>
          <path d="M4 4l.5.5"></path>
          <path d="M19.5 4.5l.5-.5"></path>
          <path d="M4 20l.5-.5"></path>
          <path d="M19.5 19.5l.5.5"></path>
          <path d="M12 7v5l3 3"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      ),
      image: "/GharPadharoPictures/MetaVerse.jpg"
    },
    {
      id: 3,
      name: 'Infrastructure',
      description: 'Ensure the efficiency, safety and security of our technologies. Maintaining a secure and reliable global infrastructure is essential to peoples\'s safety and privacy.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      image: "/GharPadharoPictures/Research.jpg"
    },
    {
      id: 4,
      name: 'Software Engineering',
      description: 'Build products and services used by billions of people around the world. Our engineers are constantly iterating, solving problems and working together to empower people.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="12" y1="2" x2="12" y2="22"></line>
        </svg>
      ),
      image: "/GharPadharoPictures/Engineering.jpg"
    }
  ];

  return (

    <>
      {/* previos code */}
      {/* <div className="featured-teams">
        <div className="teams-grid">
          {teams.map(team => (
            <div className="team-card" key={team.id}>
              <div className="team-icon">{team.icon}</div>
              <h3 className="team-name">{team.name}</h3>
              <p className="team-description">{team.description}</p>
              <Link to="/careers" className="team-link">View Jobs <span>→</span></Link>
            </div>
          ))}
        </div>
      </div> */}

      <div className="space-y-20">
        {teams.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:h-[300px] w-[80vw] justify-between items-center md:items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
          >
            <div className="h-[200px] md:h-[300px] w-full md:w-[45%] flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-[90%] rounded-2xl object-cover"
              />
            </div>

            <div className="w-full md:w-[50%] bg-white rounded-3xl p-5 flex flex-col items-center justify-evenly boxShadow mt-5 md:mt-0">
              <div className="flex flex-row items-center justify-center gap-3 h-15">
                <p className="team-icon relative top-3">{item.icon}</p>
                <h2 className="text-2xl">{item.name}</h2>
              </div>
              <p className="text-gray-700 text-center md:text-left">{item.description}</p>
              <Link to="/careers" className="team-link">
                View Jobs <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedTeams;

