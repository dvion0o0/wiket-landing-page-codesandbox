import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Sidebar({ closeToggle, toggle }) {
  return (
    <aside className={`${toggle ? "active" : null}`}>
      <div className="sidebar-center">
        <AiOutlineClose className="close" />
        <ul className="sidebar-links">
          <li>
            <a href="/" className="side-link">
              Benifits
            </a>
          </li>
          <li>
            <a href="/" className="side-link">
              Your Profile
            </a>
          </li>
          <li>
            <a href="/" className="side-link">
              Connections
            </a>
          </li>
          <li>
            <a href="/" className="side-link">
              Plans & Pricing
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
