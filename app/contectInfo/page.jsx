import React from 'react';

const contectInfo = {
  email: 'priyomdewasi@gmail.com',
  github: 'https://github.com/joydipdewasi',
  linkedin:
    'https://www.linkedin.com/in/joydip-dewasi-94916127b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
};

const ContectInfo = () => {
  return (
    <div id="contect" className="flex items-center justify-center h-screen">
      <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Information
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <span className="text-blue-400">📧</span>
            <a
              href={`mailto:${contectInfo.email}`}
              className="text-lg font-medium text-blue-400 hover:underline"
            >
              {/* {contectInfo.email} */} Email
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-pink-400">🐙</span>
            <a
              href={contectInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-pink-400 hover:underline"
            >
              GitHub Profile
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-green-400">🔗</span>
            <a
              href={contectInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-green-400 hover:underline"
            >
              LinkedIn Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContectInfo;
