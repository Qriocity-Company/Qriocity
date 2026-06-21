import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ imageUrl, timeAgo, title, description, timeColor,link }) => {
  return (
    <Link to={link}>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className={`text-sm font-semibold ${timeColor}`}>{timeAgo}</span>
        <h2 className="text-xl font-bold text-gray-900 mt-2">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
    </Link>
  );
};

export default PostCard;
