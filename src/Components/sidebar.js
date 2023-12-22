import React from 'react';
import dashboard from "../img/dashboard.png";
import myticket from "../img/myticket.png";
import newticket from "../img/newticket.png";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
        <Link to="/" className='cl'><div className='sdline'><img alt='dashboard' src={dashboard} className="sdimg" /><li> Dashboard</li></div></Link>
        <Link to="/newticket" className='cl'><div className='sdline'><img alt='my ticket' src={newticket} className="sdimg"/>  <li> New Ticket</li></div></Link>
        <Link to="/myticket" className='cl'> <div className='sdline'><img alt='new ticket' src={myticket} className="sdimg"/><li> My Ticket</li></div></Link>
        </ul>
    </div>
  )
}
