import React from 'react'
import BookingProvider from "./BookingProvider";
import { useParams } from 'react-router-dom';
const BookingList = () => {
    
     const bookings = [
  {
    id: 1,
    name: "Aman Gupta",
    profession: "Electrician",
    date: "23 May, 2026",
    time: "02:00 PM - 04:30 PM",
    location: "New Delhi",
    status: "upcoming"
  },
  {
    id: 2,
    name: "Rohit Sharma",
    profession: "Plumber",
    date: "25 May, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Noida",
    status: "completed"
  },
  {
    id: 3,
    name: "Suresh Yadav",
    profession: "Carpenter",
    date: "20 May, 2026",
    time: "01:00 PM - 03:00 PM",
    location: "Ghaziabad",
    status: "active"
  },
  {
    id: 4,
    name: "Vikas Singh",
    profession: "Painter",
    date: "28 May, 2026",
    time: "09:00 AM - 11:00 AM",
    location: "Delhi",
    status: "upcoming"
  },
  {
    id: 5,
    name: "Ramesh Kumar",
    profession: "AC Technician",
    date: "15 May, 2026",
    time: "03:00 PM - 05:00 PM",
    location: "Faridabad",
    status: "completed"
  },
  {
    id: 6,
    name: "Deepak Verma",
    profession: "Electrician",
    date: "18 May, 2026",
    time: "11:00 AM - 01:00 PM",
    location: "Noida",
    status: "canceled"
  },
  {
    id: 7,
    name: "Ankit Sharma",
    profession: "Plumber",
    date: "26 May, 2026",
    time: "04:00 PM - 06:00 PM",
    location: "Delhi",
    status: "upcoming"
  },
  {
    id: 8,
    name: "Pankaj Singh",
    profession: "Carpenter",
    date: "19 May, 2026",
    time: "02:00 PM - 04:00 PM",
    location: "Ghaziabad",
    status: "active"
  },
  {
    id: 9,
    name: "Manoj Kumar",
    profession: "Painter",
    date: "12 May, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Delhi",
    status: "completed"
  },
  {
    id: 10,
    name: "Rahul Verma",
    profession: "AC Technician",
    date: "30 May, 2026",
    time: "01:00 PM - 03:00 PM",
    location: "Noida",
    status: "upcoming"
  },
  {
    id: 11,
    name: "Sunil Yadav",
    profession: "Electrician",
    date: "14 May, 2026",
    time: "03:00 PM - 05:00 PM",
    location: "Faridabad",
    status: "completed"
  },
  {
    id: 12,
    name: "Ajay Kumar",
    profession: "Plumber",
    date: "22 May, 2026",
    time: "09:00 AM - 11:00 AM",
    location: "Delhi",
    status: "active"
  },
  {
    id: 13,
    name: "Mohit Sharma",
    profession: "Carpenter",
    date: "29 May, 2026",
    time: "12:00 PM - 02:00 PM",
    location: "Noida",
    status: "upcoming"
  },
  {
    id: 14,
    name: "Nitin Verma",
    profession: "Painter",
    date: "16 May, 2026",
    time: "02:00 PM - 04:00 PM",
    location: "Delhi",
    status: "completed"
  },
  {
    id: 15,
    name: "Karan Singh",
    profession: "AC Technician",
    date: "21 May, 2026",
    time: "11:00 AM - 01:00 PM",
    location: "Ghaziabad",
    status: "active"
  },
  {
    id: 16,
    name: "Arjun Kumar",
    profession: "Electrician",
    date: "31 May, 2026",
    time: "04:00 PM - 06:00 PM",
    location: "Noida",
    status: "upcoming"
  },
  {
    id: 17,
    name: "Vivek Yadav",
    profession: "Plumber",
    date: "13 May, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Delhi",
    status: "completed"
  },
  {
    id: 18,
    name: "Ravi Sharma",
    profession: "Carpenter",
    date: "24 May, 2026",
    time: "01:00 PM - 03:00 PM",
    location: "Faridabad",
    status: "active"
  },
  {
    id: 19,
    name: "Sanjay Kumar",
    profession: "Painter",
    date: "27 May, 2026",
    time: "09:00 AM - 11:00 AM",
    location: "Delhi",
    status: "upcoming"
  },
  {
    id: 20,
    name: "Lokesh Verma",
    profession: "AC Technician",
    date: "17 May, 2026",
    time: "02:00 PM - 04:00 PM",
    location: "Noida",
    status: "canceled"
  }
];
const {status} = useParams()

  const filteredBookings = !status
      ? bookings
      : bookings.filter((item) => item.status === status);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
       {filteredBookings.map((item)=>(
           <BookingProvider data={item} key={item.id}/>)
      ) }
        
       </div>
  )
}

export default BookingList