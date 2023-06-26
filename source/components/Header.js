import "../App.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
          className="navlink"
        >
          <h1>Eliott MIEZE</h1>
        </NavLink>
        <div>
          <ul id="navbar">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
                className="navlink"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* https://www.youtube.com/watch?v=23BHwAFIZmk&t=73s&ab_channel=Tech2etc */}
    </>
  );
}
