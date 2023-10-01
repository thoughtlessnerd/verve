import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.css";

function Nav(props) {
  return (
    <nav style={props.style}>
      <div className="start">
        <span className="logo">ThoughtlessNerd</span>
      </div>
      <div className="end">
        <ul className="links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Academics</a>
          </li>
          <li>
            <a href="#">Programs</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Media</a>
          </li>
        </ul>
        <div className="buttons">
          <span className="icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
