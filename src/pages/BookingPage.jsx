import { useParams } from "react-router-dom";
import { useState } from "react";

function BookingPage() {
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for Room ${id} from ${checkIn} to ${checkOut}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Room {id}</h1>
      <form className="space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="w-72">
          <label className="block mb-1 font-medium">Check-In Date</label>
          <input
            type="date"
            className="border border-gray-300 p-2 rounded w-full"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div className="w-72">
          <label className="block mb-1 font-medium">Check-Out Date</label>
          <input
            type="date"
            className="border border-gray-300 p-2 rounded w-full"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
