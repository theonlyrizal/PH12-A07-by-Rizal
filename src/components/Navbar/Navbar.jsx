import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white py-5 md:px-[4%]">
      <div className="flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu md:hidden dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="text-xl md:text-2xl font-bold">CS — Ticket System</a>
      </div>

      <div className="navbar-end md:flex-nowrap md:w-2/3">
        <ul className="menu menu-horizontal hidden md:flex px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <a className="btn bg-gradient-to-br from-[#632ee3] to-[#995fe9] text-white rounded-lg p-5 md:text-lg">
          + New Ticket
        </a>
      </div>
    </div>
  );
};

export default Navbar;
