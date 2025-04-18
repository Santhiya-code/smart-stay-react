import { useParams, Link } from "react-router-dom";
import { FaWifi, FaTv, FaDog, FaBed, FaShower, FaFan, FaConciergeBell } from "react-icons/fa";

function RoomDetails() {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Room #{id} Details</h1>

        <p className="text-gray-700 text-lg mb-6 text-center italic">
          Experience comfort with top-notch amenities and elegant ambiance 🌟
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 text-center text-blue-700">
          <div className="flex flex-col items-center">
            <FaFan className="text-3xl" />
            <span className="mt-2 text-sm">Air Conditioning</span>
          </div>
          <div className="flex flex-col items-center">
            <FaTv className="text-3xl" />
            <span className="mt-2 text-sm">Smart TV</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDog className="text-3xl" />
            <span className="mt-2 text-sm">Pet Friendly</span>
          </div>
          <div className="flex flex-col items-center">
            <FaWifi className="text-3xl" />
            <span className="mt-2 text-sm">Free Wi-Fi</span>
          </div>
          <div className="flex flex-col items-center">
            <FaConciergeBell className="text-3xl" />
            <span className="mt-2 text-sm">Room Service</span>
          </div>
          <div className="flex flex-col items-center">
            <FaBed className="text-3xl" />
            <span className="mt-2 text-sm">Deluxe Queen Bed</span>
          </div>
          <div className="flex flex-col items-center">
            <FaShower className="text-3xl" />
            <span className="mt-2 text-sm">24/7 Hygienic Bathroom</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm text-center mb-6">
          Max occupancy: <strong>3 guests</strong>
        </p>

        <div className="flex justify-center">
          <Link
            to={`/booking/${id}`}
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded-full shadow-lg transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;

