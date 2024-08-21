import React from 'react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleJoinNowClick = () => {
    navigate('/signup');
  };
//   const handleGetStartedClick = () => {
//     navigate('/FeaturesPage');
//   };

  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Get Started?</h2>
        <button onClick={handleJoinNowClick}>Join Now</button>
        
      </div>
    </section>
  );
};

export default CallToAction;