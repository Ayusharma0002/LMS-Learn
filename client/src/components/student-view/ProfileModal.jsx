import React, { useRef } from "react";

const userData = {
    name: "Aayush Sharma",
    title: "Senior Software Engineer",
    email: "ayush@samvit.online",
    phone: "9988776655",
    location: "Jungle",
    image: "/User.png",
};

const ProfileModal = ({ onClose }) => {
    const modalRef = useRef(null);
    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleOutsideClick}>
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-lg p-6 w-96">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Profile</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 text-xl hover:text-gray-800"
                    >
                        &times;
                    </button>
                </div>

                {/* Profile Content */}
                <div className="flex flex-col items-center space-y-3">
                    {/* User Image */}
                    <img
                        src={userData.image}
                        alt={userData.name}
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    {/* Name and Title */}
                    <h3 className="text-xl font-semibold">{userData.name}</h3>
                    <p className="text-gray-500 text-sm">{userData.title}</p>


                    {/* Contact Details */}
                    <div className="text-gray-700 text-sm space-y-2 w-full mt-2">
                        <div className="flex items-center gap-2">
                            📧{" "}
                            <a
                                href={`mailto:${userData.email}`}
                                className="text-blue-500 hover:underline"
                            >
                                {userData.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-2">📞 {userData.phone}</div>
                        <div className="flex items-center gap-2">📍 {userData.location}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
