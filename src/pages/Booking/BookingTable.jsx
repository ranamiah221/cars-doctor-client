import React from "react";

const BookingTable = ({ booking, handleBookingDelete, handleBookingConfirm }) => {

  const { _id, title, img, date, status } = booking;
  return (
    <>
      {/* row 1 */}
      <tr>
        <td>
          <button onClick={()=>handleBookingDelete(_id)} className="btn btn-sm btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>

        <td>
          <div className="h-32 w-32 flex justify-center items-center rounded-lg">
            <img className="rounded-lg" src={img} />
          </div>
        </td>
        <td>{title}</td>
        <td>{date}</td>

        <th>
            {
                status === 'confirm'? <button className="btn btn-sm bg-[#FF3811] text-white">
                confirmed
              </button> :<button onClick={()=>handleBookingConfirm(_id)} className="btn bg-[#FF3811] text-white btn-xs">
                Pending
              </button>
            }
          
        </th>
      </tr>
    </>
  );
};

export default BookingTable;
