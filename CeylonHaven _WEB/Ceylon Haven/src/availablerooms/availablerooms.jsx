import React, { useState } from 'react';
import './availablerooms.css';

import room1 from './room1.jpg';
import room2 from './room2.jpg';
import room4 from './room4.jpg';


const AvailableRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAvailableRooms = () => {
        setLoading(true);

        setTimeout(() => {
            setRooms([
                { id: 1, type: 'Deluxe Room', available: 15, price: 'Rs.5000/night', image: room1 },
                { id: 2, type: 'Budget', available: 13, price: 'Rs.2000/night', image: room2 },
                { id: 4, type: 'AC Room', available: 18, price: 'Rs.6000/night', image: room4 },
            ]);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="available-rooms-container">
            <h2>Available Rooms</h2>
            <button onClick={fetchAvailableRooms} className="fetch-btn">Check Available Rooms</button>
            {loading && <p className="loading-text">Loading rooms...</p>}
            <div className="room-list">
                {rooms.map(room => (
                    <div key={room.id} className="room-item">
                        <img src={room.image} alt={room.type} />
                        <h3>{room.type}</h3>
                        <p><strong>Available:</strong> {room.available} rooms</p>
                        <p><strong>Price:</strong> {room.price}</p>
               

                        <button className="book-btn" onClick={() => window.location.href = "/signup"}>
    Book Now
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableRoom;
