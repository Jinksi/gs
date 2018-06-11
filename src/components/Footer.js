import React from 'react'

import './Footer.css'

export default ({ siteTitle, ...props }) => (
  <footer className="Footer">
    <div className="Footer--upper">
      <div className="container Footer--upper--container">
        <div className="Footer--column">
          <div className="Footer--column--title">East Malvern</div>
          <a href="" className="Footer--email noDecoration colorInherit">
            email@email.com
          </a>
          <a href="" className="Footer--phone noDecoration colorInherit">
            01 234 567
          </a>
          <a href="" className="Footer--view colorInherit">
            View Centre
          </a>
        </div>
        <div className="Footer--column">
          <div className="Footer--column--title">East Malvern</div>
          <a href="" className="Footer--email noDecoration colorInherit">
            email@email.com
          </a>
          <a href="" className="Footer--phone noDecoration colorInherit">
            01 234 567
          </a>
          <a href="" className="Footer--view colorInherit">
            View Centre
          </a>
        </div>
        <div className="Footer--column">
          <div className="Footer--column--title">East Malvern</div>
          <a href="" className="Footer--email noDecoration colorInherit">
            email@email.com
          </a>
          <a href="" className="Footer--phone noDecoration colorInherit">
            01 234 567
          </a>
          <a href="" className="Footer--view colorInherit">
            View Centre
          </a>
        </div>
        <div className="Footer--column">
          <div className="Footer--column--title">
            Sign up for Centre Newsletter
          </div>
        </div>
      </div>
    </div>

    <div className="Footer--lower">
      <div className="container taCenter">
        © {new Date().getFullYear()} {siteTitle} | Web Design by{' '}
        <a
          href="https://thriveweb.com.au"
          target="_blank"
          className="colorInherit"
        >
          Thrive
        </a>
      </div>
    </div>
  </footer>
)
