import React from 'react';

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="description-section">
      <h2>Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default Description;