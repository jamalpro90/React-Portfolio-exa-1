import './Menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`menu ${menuOpen && 'active'}`}>
      <ul>
        <li>
          <a onClick={() => setMenuOpen(false)} href="#intro">
            Home
          </a>
        </li>
        <li>
          <a onClick={() => setMenuOpen(false)} href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a onClick={() => setMenuOpen(false)} href="#works">
            Works
          </a>
        </li>
        <li>
          <a onClick={() => setMenuOpen(false)} href="#testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a onClick={() => setMenuOpen(false)} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
