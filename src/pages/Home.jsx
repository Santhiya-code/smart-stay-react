import { Link } from "react-router-dom";
import deluxeImg from '../assets/deluxe.jpg';
import suiteImg from '../assets/suite.jpg';
import royalImg from '../assets/comfy room.jpg';
import classicImg from '../assets/royal room.jpg';
import gardenImg from '../assets/classic room.jpg';
import oceanImg from '../assets/luxury room.jpg';
import { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "$100/night",
    image: deluxeImg,
    description: "Comfortable room with a queen-sized bed, free Wi-Fi, and city view.",
    rating: 4,
    available: true
  },
  {
    id: 2,
    name: "Suite Room",
    price: "$200/night",
    image: suiteImg,
    description: "Spacious suite with king bed, private balcony, and luxury amenities.",
    rating: 5,
    available: false
  },
  {
    id: 3,
    name: "Deluxe Room",
    price: "$250/night",
    image: royalImg,
    description: "Luxurious room with a king-sized bed, ocean view, and a private Jacuzzi.",
    rating: 5,
    available: true
  },
  {
    id: 4,
    name: "Deluxe Room",
    price: "$120/night",
    image: classicImg,
    description: "A comfortable classic room with all basic amenities and a city view.",
    rating: 4,
    available: true
  },
  {
    id: 5,
    name: "Deluxe Room",
    price: "$140/night",
    image: gardenImg,
    description: "Cozy room with a view of the lush garden, perfect for relaxation.",
    rating: 4,
    available: false
  },
  {
    id: 6,
    name: "Deluxe Room",
    price: "$300/night",
    image: oceanImg,
    description: "Elegant room with a breathtaking ocean view and luxury amenities.",
    rating: 5,
    available: true
  },
];

function StarRating({ rating }) {
  return (
    <div className="text-yellow-400 text-lg">
      {"★".repeat(rating) + "☆".repeat(5 - rating)}
    </div>
  );
}

function Home() {
  const [favorites, setFavorites] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredRooms = showFavorites
    ? rooms.filter((room) => favorites.includes(room.id))
    : showAvailableOnly
    ? rooms.filter((room) => room.available)
    : rooms;

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
        <h1 className="text-3xl font-bold text-center w-full">Available Rooms</h1>
        <div className="flex gap-2 w-full justify-center">
          <button
            onClick={() => setShowAvailableOnly(!showAvailableOnly)}
            className="text-sm bg-gray-200 px-3 py-1 rounded shadow hover:bg-gray-300 transition"
          >
            {showAvailableOnly ? "Show All" : "Show Available Only"}
          </button>
          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className="text-sm bg-yellow-100 px-3 py-1 rounded shadow hover:bg-yellow-200 transition"
          >
            {showFavorites ? "Show All" : "Show Favorites Only"}
          </button>
        </div>
      </div>

      {filteredRooms.length === 0 ? (
        <p className="text-center text-gray-500">No rooms to display.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-blue-500">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white border p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 relative hover:ring-2 hover:ring-blue-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover transform hover:scale-105 transition duration-300 rounded"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold mb-1">{room.name}</h2>
                <StarRating rating={room.rating} />
                <p className="text-gray-600 text-sm mt-2">{room.description}</p>
                <p className="text-lg font-medium mt-2">{room.price}</p>
                <p className={`mt-1 text-sm font-semibold ${room.available ? "text-green-600" : "text-red-600"}`}>
                  {room.available ? "✅ Available" : "❌ Not Available"}
                </p>

                <div className="flex justify-between items-center mt-5">
                  <Link
                    to={`/room/${room.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => toggleFavorite(room.id)}
                    className={`text-2xl transition transform hover:scale-110 ${
                      favorites.includes(room.id) ? "text-red-500" : "text-gray-400"
                    }`}
                    title="Toggle Favorite"
                  >
                    {favorites.includes(room.id) ? "❤️" : "🤍"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
