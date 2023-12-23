import React,{useState} from 'react';
import { addTicket } from "../Utils/ticketSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Newticket() {

  const navigate = useNavigate();

   const [ticket, setTicket] = useState({
    ticketnum: "",
    date: "",
    ticketname: "",
    department: "",
    subject: "",
    category: "",
    type: "",
    priority: "",
    description: "",
   });

   let name,value;

   const handleInputs = (e) => {
     name = e.target.name;
     value = e.target.value;

     setTicket({...ticket, [name]:value});
   };

   const dispatch= useDispatch();

   const handleSubmit= (e) => {
     e.preventDefault();
     dispatch(addTicket(ticket));
     console.log(ticket);
     navigate("/myticket");
  };
  const cartItems=useSelector(store=>store.tickets.items);
  console.log(cartItems);
  return (
    <>
   
<h1 className="hd"> Create New Ticket</h1>
<form className="fm1" name='myform' onSubmit={handleSubmit}>
     
        <table>
        <tr>
          <td>
             <label className='labl'>Ticket No.</label>
             <input type="text" name="ticketnum" value={ticket.ticketnum} onChange={handleInputs} required/>
          </td>
          <td>
             <label className='labl'>Date</label>
             <input type="text" name="date" value={ticket.date} onChange={handleInputs} required/>
             </td>
        </tr>
        <tr>
          <td>
           <label className='labl'>Name</label>
           <input type="text" name="ticketname" value={ticket.ticketname} onChange={handleInputs} required/>
          </td>
          <td>
           <label className='labl'>Department</label>
           <input type="text"  name="department" value={ticket.department} onChange={handleInputs} required/>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
           <label className='labl '>Subject</label>
          </td>
        </tr>
        <tr>
        <td colSpan="2" >
           <input type="text" className='iptwth' name="subject" value={ticket.subject} onChange={handleInputs} required/>
          </td>
        </tr>
        <tr>
          <td>
           <label className='labl'>Category</label>
          </td>
          <td >
           <label className='labl'>Description</label>
          </td>
        </tr>
        <tr>
          <td>
           <input type="text" name="category" value={ticket.category} onChange={handleInputs} required/>
          </td>
          <td rowspan="4" >
           <textarea name="description" rows="10" cols="42" value={ticket.description} onChange={handleInputs} required/>
          </td>
        </tr>
        <tr>
          <td>
           <label className='labl'>Type</label>
           </td>
        </tr>
        <tr>
          <td>
           <input type="text" name="type" value={ticket.type} onChange={handleInputs} required/>
           </td>
        </tr>
        <tr>
        <td>
           <label className='labl'>Priority</label>
           </td>
        </tr>
        <tr>
        <td>
           <input type="text" name="priority" value={ticket.priority} onChange={handleInputs} required/>
           </td>
        </tr>
        
        </table>
         <div className='btn'>
          <button type="submit">Submit</button>
          </div>
      </form>
     
   </>
     
      
  )
}
