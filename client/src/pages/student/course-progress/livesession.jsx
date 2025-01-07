
import {useRef,useState} from 'react';

// const LiveSession = ({ onClose, studentCurrentCourseProgress }) => {
const LiveSession = ({ onClose, session }) => {
// const LiveSession = ({ onClose, title }) => {
    const modalRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };
    
     // Test data for the session: 3rd Jan 2025, 3:20 PM to 4:20 PM UTC
  //    const liveSession = {
  //     instructorName: "John Doe",
  //     title: "Advanced React Training",
  //     description: "Learn advanced concepts of React",
  //     startDateTime: "2025-01-03T15:20:00.000+00:00", // 3rd Jan 2025, 3:20 PM UTC
  //     endDateTime: "2025-01-03T16:20:00.000+00:00", // 3rd Jan 2025, 4:20 PM UTC
  //     link: "https://example.com/live-session",
  // };
  
    // Test data for the session: 3rd Jan 2025, 3:20 PM to 4:20 PM UTC
    // const liveSession = studentCurrentCourseProgress?.courseDetails?.liveSession?.[0];
    console.log(session.title,"tosession hai");
    const liveSession=session;
  
    // Format start and end times in UTC
    const startDate = liveSession?.startDateTime ? new Date(liveSession.startDateTime) : null;
    const endDate = liveSession?.endDateTime ? new Date(liveSession.endDateTime) : null;
  
    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-GB', { timeZone: 'UTC' }); // Format in UTC
    };
  
    const formatTime = (date) => {
        if (!date) return '';
        return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'UTC',
        }); // Format time in UTC
    };
  
    // Check if the current time is within the allowed range
    const isValidTimeToJoin = () => {
        const currentDate = new Date();
        if (currentDate < startDate) {
            setErrorMessage("You are not able to join yet, the session will start on " + formatDate(startDate) + " at " + formatTime(startDate));
            return false;
        } else if (currentDate > endDate) {
            setErrorMessage("You are not able to join now, the session already ended on " + formatDate(endDate) + " at " + formatTime(endDate));
            return false;
        }
        return true;
    };
  
    const handleJoin = () => {
        if (isValidTimeToJoin()) {
            // Proceed with joining the session
            window.open(liveSession?.link, "_blank");
        }
    };
  
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOutsideClick}>
            <div ref={modalRef} className="bg-white rounded-lg shadow-lg p-6 w-96">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Live Session Details</h2>
                    <button onClick={onClose} className="text-gray-500 text-xl hover:text-gray-800">
                        &times;
                    </button>
                </div>
  
                {/* Live Session Content */}
                <div className="flex flex-col items-center space-y-3">
                    <h3 className="text-xl font-semibold">{liveSession?.instructorName}</h3>
                    <p className="text-gray-500 text-sm">Instructor</p>
                    <div className="text-gray-700 text-sm space-y-2 w-full mt-2">
                        <div className="flex items-center gap-2">📚 {liveSession?.title}</div>
                        <div className="flex items-center gap-2">📝 {liveSession?.description}</div>
                        <div className="flex items-center gap-2">🗓️ <strong>Join on:</strong> {formatDate(startDate)}</div>
                        <div className="flex items-center gap-2">⏳ <strong>Timing:</strong> {formatTime(startDate)} to {formatTime(endDate)}</div>
                        <div className="flex items-center gap-2">🔗 
                            <button onClick={handleJoin} className="text-blue-500 hover:underline">
                                Join Live Session
                            </button>
                        </div>
                    </div>
                </div>
  
                {/* Error Message (if any) */}
                {errorMessage && (
                    <div className="text-red-500 mt-4 text-center">
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
  };
  

  export default LiveSession;