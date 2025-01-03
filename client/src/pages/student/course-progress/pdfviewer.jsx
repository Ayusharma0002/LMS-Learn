// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// const PDFViewer = ({ pdfUrl }) => (
//   <div
//     className="h-full w-full overflow-hidden" // Adjusted to avoid overflow
//   >
//     <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${"3.11.174"}/build/pdf.worker.min.js`}>
//       <Viewer fileUrl={pdfUrl} />
//     </Worker>
//   </div>
// );

// export default PDFViewer;
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewer = ({ pdfUrl }) => (
//   <div className="h-full w-full overflow-auto"> {/* Make sure it occupies full height and width */}
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${"3.11.174"}/build/pdf.worker.min.js`}>
      <Viewer fileUrl={pdfUrl} />
    </Worker>
//   </div>
);

export default PDFViewer;
