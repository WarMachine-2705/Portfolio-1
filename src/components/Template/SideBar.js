import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/divyansh.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Divyansh Mishra</h2>
        <p><a href="mailto:divyanshmishra27.dm@gmail.com">divyanshmishra27.dm@gmailcom</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Divyansh. Currently, pursuing B.Tech CSE in <a href="https://niituniversity.in/">NIIT University</a> Also,
        I am the co-founder and CTO of <a href="https://pantapulao.com">NUmunch</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Divyansh</p>
    </section>
  </section>
);

export default SideBar;
