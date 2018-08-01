import React from 'react'
import { File } from 'react-feather'

import './DownloadBox.css'

export default ({ listItems = [] }) => (
  <div className="DownloadBox hasBorder hasShadow">
    <h5 className="DownloadBox--Title">Downloadable Forms</h5>
    {listItems.map(item => (
      <a
        key={item.title}
        target="_blank"
        href={item.file}
        className="DownloadBox--Item"
      >
        <File /> {item.title}
      </a>
    ))}
  </div>
)