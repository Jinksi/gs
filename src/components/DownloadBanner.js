import React from 'react'

import Image from './Image'
import Button from './Button'
import './DownloadBanner.css'

export default ({ file = {}, title, preview }) => (
  <div className="section col6">
    <div className="container skinny DownloadBanner--Container">
      {preview &&
        file && (
          <a className="DownloadBanner--Image" href={file.publicURL}>
            <Image src={preview} alt={title} />
          </a>
        )}
      <div className="DownloadBanner--Content">
        <h5>{title}</h5>
        {file && (
          <Button
            href={file.publicURL}
            target="_blank"
            className="DownloadBanner--Button"
          >
            Click Here
          </Button>
        )}
      </div>
    </div>
  </div>
)
