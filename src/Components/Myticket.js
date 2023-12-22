import React from 'react';
import { useSelector } from "react-redux";

export default function Myticket() {
  
  const ticketItems=useSelector(store=>store.tickets.items);

  return (
    <div >
      <h1 className='myt'>List of Tickets</h1>
      <table className='tb'>
            <tr >
                <th>Ticket No.{ticketItems[0]?.ticketnum}</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Support By</th>
                <th>Date</th>
                <th>Priority</th>
            </tr>
            {
                    ticketItems?.map((item)=>(
                      <tr className='tb'>
                        <td>{item?.ticketnum}</td>
                        <td>{item?.subject}</td>
                        <td>-</td>
                        <td>{item?.department}</td>
                        <td>{item?.date}</td>
                        <td>{item?.priority}</td>
                      </tr>
                     )
                    )
                     }
           
        </table>

    </div>

  )
}
