import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons/faSquareXTwitter';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <div className="space-x-20 bg-black text-white">
      <div className="flex flex-col  md:flex-row p-5 md:p-20 justify-between  [&_p]:text-gray-500 [&_a]:text-gray-500 [&_a:hover]:cursor-pointer">
        <div className="flex-1 space-y-3">
          <h1 className="text-xl">CS - Ticket System</h1>
          <p>
            The Customer Service Ticket System is simply a tool for managing support requests in the
            service and technology industry. The Ticket System has been the industry’s standard way
            of handling customer issues ever since businesses began to centralize communication,
            when an early developer created a framework to organize and track client interactions
            more efficiently.
          </p>
        </div>
        <div className="flex flex-col flex-1 space-y-3">
          <h1 className="text-xl">Company</h1>
          <a>About Us</a>
          <a>Our Mission</a>
          <a>Contact Sales</a>
        </div>
        <div className="flex flex-col flex-1 space-y-3">
          <h1 className="text-xl">Services</h1>
          <a>Products and Services</a>
          <a>Customer Stories</a>
          <a>Download Apps</a>
        </div>
        <div className="flex flex-col flex-1 space-y-3">
          <h1 className="text-xl">Information</h1>
          <a>Privacy Policy</a>
          <a>Terms and Conditions</a>
          <a>Join Us</a>
        </div>
        <div className="flex flex-col flex-1 space-y-3">
          <h1 className="text-xl">Social Links</h1>
          <a>
            {' '}
            <FontAwesomeIcon className="text-white" icon={faSquareXTwitter} /> @CS — Ticket System
          </a>
          <a>
            <FontAwesomeIcon icon={faLinkedinIn} className="text-white" /> @CS — Ticket System
          </a>
          <a>
            {' '}
            <FontAwesomeIcon icon={faFacebook} className="text-white" /> @CS — Ticket System
          </a>
          <a>
            <FontAwesomeIcon icon={faEnvelope} className="text-white" /> support@cst.com
          </a>
        </div>
      </div>
      <p className="text-center h-10">© 2025 CS — Ticket System. All rights reserved.</p>
    </div>
  );
};

export default Footer;
