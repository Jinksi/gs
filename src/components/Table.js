import React from 'react'

import './Table.css'

export default ({ headings = [], items = [], checklist }) => (
  <div className="Table hasShadow hasBorder">
    {headings &&
      !!headings.length && (
        <div className="Table--Headings Table--Row">
          {headings.map((heading, index) => (
            <div
              className="Table--Headings--Item Table--Cell"
              key={heading + index}
            >
              {heading}
            </div>
          ))}
        </div>
      )}

    <div className="Table--Body">
      {items &&
        items.map((item = {}, index) => (
          <div className="Table--Row" key={'item' + index}>
            <div className="Table--Cell">
              {item['cell1']}{' '}
              {checklist && <input className="Table--Input" type="checkbox" />}
            </div>
            {item['cell2'] && (
              <div className="Table--Cell">{item['cell2']}</div>
            )}
          </div>
        ))}
    </div>
  </div>
)
