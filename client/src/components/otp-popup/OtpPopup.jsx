// components/OTVerificationPopup.js
import { useState } from "react";

function OtpPopup({ onSubmit, onClose }) {
  const [otp, setOtp] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(otp);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            placeholder="Enter OTP"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpPopup;
