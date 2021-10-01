import React from 'react';
import './Footer.scss';
function Footer() {
  return (
    <div className="footer">
      <p>
        Created by <b>Celal Can Kurt</b>
        <a href="https://github.com/cllcnkrt">
          {' '}
          <i class="fab fa-github"></i>
        </a>
      </p>
    </div>
  );
}

export default Footer;
