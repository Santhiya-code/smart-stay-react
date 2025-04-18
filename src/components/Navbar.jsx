import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Hotel Booking</Link>
        <Link to="/booking/1" className="bg-white text-blue-600 px-4 py-2 rounded">Book Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;
