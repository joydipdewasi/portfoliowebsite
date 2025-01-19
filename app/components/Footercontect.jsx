import React from 'react';

const contectInfo = {
  email: 'priyomdewasi@gmail.com',
  github: 'https://github.com/joydipdewasi',
  linkedin:
    'https://www.linkedin.com/in/joydip-dewasi-94916127b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
};

const Footer = () => {
  return (
    <footer
      id="contect"
      className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white"
    >
      <h1 className="text-center mx-36 justify-center text-2xl font-bold">
        Contect Info
      </h1>

      <div className="container p-12 flex justify-between  ">
        {/* <div className="container p- flex justify-between"> */}
        <ul className="space-x-12 lg:mx-28 md:mx-20 lg:space-x-64 md:space-x-40  flex flex-row">
          <li className="flex items-center space-x-1">
            <span className="text-blue-400">📧</span>
            <a
              href={`mailto:${contectInfo.email}`}
              className="text-lg font-medium text-blue-400 hover:underline"
            >
              {/* {contectInfo.email} */} Email
            </a>
          </li>
          <li className="flex items-center space-x-1">
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
          <li className="flex items-center space-x-1">
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
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
