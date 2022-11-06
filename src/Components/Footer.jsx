import React from 'react';

const Footer = () => {
  return (
    <div className="bg bg-slate-700 text-white p-10 md:pl-32 relative bottom-0 w-full left-0 text-left z-0">
      <div>
        Home | Terms and Conditions | Privacy Policy | Help | Manage
        Account
      </div>
      <p>Copyright © 2016 Demo Streaming All Rights Reserved </p>
      <div className="md:flex justify-between mt-6">
        <div className="flex mt-4">
          <img
            className="w-6 max-h-6"
            src="/src/assets/social/facebook-white.svg"
          />
          <img
            className="w-6 ml-2 max-h-6"
            src="/src/assets/social/instagram-white.svg"
          />
          <img
            className="w-6 ml-3 max-h-6"
            src="/src/assets/social/twitter-white.svg"
          />
        </div>
        <div className="md:flex">
          <img
            className="w-32 md:ml-6 mt-6 md:mt-0"
            src="/src/assets/store/app-store.svg"
          />
          <img
            className="w-32 md:ml-6 mt-2 md:mt-0"
            src="/src/assets/store/play-store.svg"
          />
          <img
            className="w-32 md:ml-6 mt-2 md:mt-0"
            src="/src/assets/store/windows-store.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
