import React from 'react'
import StatusBadge from "../../components/common/StatusBadge";
import { useNavigate, useParams } from 'react-router-dom';
import Button from "../../components/common/Button";
const PaymentList = () => {
    const {status} = useParams()
    const navigate = useNavigate();
    const payments = [
    {
      id: 1,
      name: "Aman Gupta",
      date: "21 May 2024",
      transactionId: "#TXM5030",
      status: "completed",
      amount: 200,
    },
    {
      id: 2,
      name: "Rohit Sharma",
      date: "18 May 2024",
      transactionId: "#TXM5031",
      status: "pending",
      amount: 450,
    },
    {
      id: 3,
      name: "Priya Singh",
      date: "15 May 2024",
      transactionId: "#TXM5032",
      status: "failed",
      amount: 300,
    },
    {
      id: 4,
      name: "Ankit Verma",
      date: "10 May 2024",
      transactionId: "#TXM5033",
      status: "completed",
      amount: 150,
    },
    {
      id: 5,
      name: "Neha Sharma",
      date: "08 May 2024",
      transactionId: "#TXM5034",
      status: "pending",
      amount: 600,
    },
    {
      id: 6,
      name: "Vikas Yadav",
      date: "05 May 2024",
      transactionId: "#TXM5035",
      status: "completed",
      amount: 120,
    },
    {
      id: 7,
      name: "Sneha Kapoor",
      date: "03 May 2024",
      transactionId: "#TXM5036",
      status: "failed",
      amount: 350,
    },
    {
      id: 8,
      name: "Rahul Mehta",
      date: "01 May 2024",
      transactionId: "#TXM5037",
      status: "completed",
      amount: 500,
    },
    {
      id: 9,
      name: "Pooja Verma",
      date: "29 Apr 2024",
      transactionId: "#TXM5038",
      status: "pending",
      amount: 220,
    },
    {
      id: 10,
      name: "Karan Malhotra",
      date: "27 Apr 2024",
      transactionId: "#TXM5039",
      status: "completed",
      amount: 800,
    },

    {
      id: 11,
      name: "Simran Kaur",
      date: "25 Apr 2024",
      transactionId: "#TXM5040",
      status: "failed",
      amount: 410,
    },
    {
      id: 12,
      name: "Arjun Patel",
      date: "22 Apr 2024",
      transactionId: "#TXM5041",
      status: "completed",
      amount: 275,
    },
    {
      id: 13,
      name: "Nikhil Jain",
      date: "20 Apr 2024",
      transactionId: "#TXM5042",
      status: "pending",
      amount: 330,
    },
    {
      id: 14,
      name: "Meena Iyer",
      date: "18 Apr 2024",
      transactionId: "#TXM5043",
      status: "completed",
      amount: 190,
    },
    {
      id: 15,
      name: "Saurabh Mishra",
      date: "16 Apr 2024",
      transactionId: "#TXM5044",
      status: "failed",
      amount: 520,
    },
    {
      id: 16,
      name: "Kavita Singh",
      date: "14 Apr 2024",
      transactionId: "#TXM5045",
      status: "inactive",
      amount: 260,
    },
    {
      id: 17,
      name: "Deepak Kumar",
      date: "12 Apr 2024",
      transactionId: "#TXM5046",
      status: "pending",
      amount: 145,
    },
    {
      id: 18,
      name: "Riya Sharma",
      date: "10 Apr 2024",
      transactionId: "#TXM5047",
      status: "active",
      amount: 700,
    },
    {
      id: 19,
      name: "Manish Gupta",
      date: "08 Apr 2024",
      transactionId: "#TXM5048",
      status: "failed",
      amount: 390,
    },
    {
      id: 20,
      name: "Alok Singh",
      date: "05 Apr 2024",
      transactionId: "#TXM5049",
      status: "completed",
      amount: 180,
    },
  ];

  const paymentFilters = !status ? payments: payments.filter((items)=> items.status === status)
  return (
     <div>
                {paymentFilters.map((item) => (
                  <div key={item.id}>
                    <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted justify-items-center items-center py-3">
                      <h2>{item.name}</h2>
                      <p>{item.date}</p>

                      <p className="hidden md:flex">{item.transactionId}</p>

                      <div className="hidden md:flex">
                        <StatusBadge badge={item.status}>
                          {item.status}
                        </StatusBadge>
                      </div>

                      <h3>₹ {item.amount}</h3>

                      <Button
                        color="blue"
                        onClick={() => navigate(`payment-info`)}
                      >
                        View
                      </Button>
                    </div>

                    <div className="w-full h-[1px] bg-muted"></div>
                  </div>
                ))}
              </div>
  )
}

export default PaymentList