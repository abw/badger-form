import React from 'react'

const SeeAlso = ({links}) =>
  <div className="see-also">
    <h3>See Also</h3>
    <ul className="menu">
      { links.map(
        (Link, n) =>
          <li key={n}>
            <Link/>
          </li>
      )}
    </ul>
  </div>

export default SeeAlso