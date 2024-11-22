// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { CheckCircle } from "lucide-react"; // CheckCircle for animation and icon

// function PaymentCancelPage() {
//   const navigate = useNavigate();

//   // Handler for redirection to previous page or payment page
//   const handleRetryPayment = () => {
//     navigate(-1); // This takes the user to the previous page.
//   };

//   return (
//     // <div className="h-screen bg-gray-100 flex justify-center items-center">
//     //   <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
//     //     {/* Animation and message */}
//     //     <div className="mb-6">
//     //       <CheckCircle className="h-16 w-16 text-red-500 mx-auto animate-bounce" />
//     //       <h2 className="text-2xl font-semibold text-gray-800 mt-4">Payment Canceled</h2>
//     //       <p className="text-gray-600 mt-2">
//     //         Unfortunately, your payment was canceled. Please try again or contact support if you have any issues.
//     //       </p>
//     //     </div>

//     //     {/* Button to retry payment */}
//     //     <Button onClick={handleRetryPayment} className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600 transition-all">
//     //       Retry Payment
//     //     </Button>
//     //   </div>
//     // </div>
//     <div>hellp</div>
//   );
// }

// export default PaymentCancelPage;
import { useNavigate, useParams } from "react-router-dom"; 
import { Button } from "@/components/ui/button"; // Assuming Button component exists
import { CheckCircle } from "lucide-react"; // CheckCircle icon for visual feedback

function PaymentCancelPage() {
  const navigate = useNavigate();

    const { courseId } = useParams(); // Extract courseId from the URL
  
    // Handler for redirecting the user back to the course details page
    const handleRetryPayment = () => {
      if (courseId) {
        // Redirect to the course details page using the extracted courseId
        navigate(`/course/details/${courseId}`);
      } else {
        console.error("Course ID is missing!");
      }
    };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        {/* Animation and message */}
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-red-500 mx-auto animate-bounce" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Payment Canceled</h2>
          <p className="text-gray-600 mt-2">
            Unfortunately, your payment was canceled. Please try again or contact support if you have any issues.
          </p>
        </div>

        {/* Button to retry payment */}
        <Button
          onClick={handleRetryPayment}
          className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600 transition-all"
        >
          Retry Payment
        </Button>
      </div>
    </div>
  );
}

export default PaymentCancelPage;
