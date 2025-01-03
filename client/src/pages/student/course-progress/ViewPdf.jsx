import { useEffect, useRef, useState } from "react";

const ViewPdf = ({ currentLecture, markLectureAsViewedService, fetchCurrentCourseProgress, auth, studentCurrentCourseProgress }) => {
    const pdfViewerRef = useRef(null);
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

    useEffect(() => {
        const handleScroll = async () => {
            const scrollableElement = pdfViewerRef.current;

            if (scrollableElement) {
                const { scrollTop, scrollHeight, clientHeight } = scrollableElement;

                const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
                const isAtBottom = scrollPercentage >= 0.9;

                setIsScrolledToBottom(isAtBottom);

                if (isAtBottom) {
                    console.log("At bottom");

                    // Call the provided service functions
                    if (!currentLecture?.videoUrl && currentLecture?.pdfUrl) {
                        await markLectureAsViewedService(
                            auth?.user?._id,
                            studentCurrentCourseProgress?.courseDetails?._id,
                            currentLecture._id
                        );
                        await fetchCurrentCourseProgress();
                    }
                }
            }
        };

        const element = pdfViewerRef.current;

        if (element) {
            element.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (element) {
                element.removeEventListener("scroll", handleScroll);
            }
        };
    }, [currentLecture, markLectureAsViewedService, fetchCurrentCourseProgress, auth, studentCurrentCourseProgress]);

    return (
        <div
            ref={pdfViewerRef}
            className="h-[550px] overflow-auto bg-red-400 relative mr-[-10px]"
        
        >
            <iframe
                src={currentLecture?.pdfUrl}
                width="100%"
                height="2050px"
                style={{
                    border: "none",
                    pointerEvents: "none",
                    float:'left'
                }}
                title="PDF Viewer"
            />
        </div>
    );
};

export default ViewPdf;
