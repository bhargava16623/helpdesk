import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBell,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className="header">
        <div className="logo">
            Helpdesk
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faBell} />
          <FontAwesomeIcon className="icon" icon={faUser} />
          <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
        </div>
    </div>
  )
}
