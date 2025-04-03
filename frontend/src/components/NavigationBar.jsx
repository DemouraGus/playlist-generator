import { Link } from "react-router-dom";
import "../styles/NavigationBar.css";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/setlists">Setlists</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}