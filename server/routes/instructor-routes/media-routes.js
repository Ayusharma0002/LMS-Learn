const express = require("express");
const multer = require("multer");
const {
  uploadMediaToCloudinary,
  deleteMediaFromCloudinary,
} = require("../../helpers/cloudinary");

const router = express.Router();

// const upload = multer({ dest: "uploads/" });
const upload = multer({ dest: "uploads/" });


router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await uploadMediaToCloudinary(req.file.path);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log("media upload mai dikt ");
    console.log(e);

    res.status(500).json({ success: false, message: "Error uploading file" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Assest Id is required",
      });
    }

    await deleteMediaFromCloudinary(id);

    res.status(200).json({
      success: true,
      message: "Assest deleted successfully from cloudinary",
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({ success: false, message: "Error deleting file" });
  }
});

router.post("/bulk-upload", upload.array("files", 10), async (req, res) => {
  try {
    const uploadPromises = req.files.map((fileItem) =>
      uploadMediaToCloudinary(fileItem.path)
    );

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (event) {
    console.log(event);

    res
      .status(500)
      .json({ success: false, message: "Error in bulk uploading files" });
  }
});


//ye code 9-12-2024 ko add kiya pdf upload k liye
// Route for uploading PDFs to Cloudinary
// router.post("/upload-pdf", upload.single("pdf"), async (req, res) => {
//   try {
//     const result = await uploadMediaToCloudinary(req.file.path); // Upload to Cloudinary
//     console.log("aayush sharma from media-routes.js upload-pdf req-file.path",req.file.path);
//     console.log("aayush sharma from media-routes upload-pdf",result);
//     res.status(200).json({
//       success: true,
//       message: "PDF uploaded successfully.",
//       data: result, // Contains Cloudinary response
//     });
//   } catch (error) {
//     console.log("aayush sharma from media-routes error agyi upload-pdf");
//     console.error("Error uploading PDF:", error);
//     res.status(500).json({ success: false, message: "Error uploading PDF file" });
//   }
// });

router.post("/upload-pdf", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      console.log("/upload-pdf first line mai hi error");
      return res.status(400).json({
        success: false,
        message: "No file uploaded.",
      });
    }

    // Upload to Cloudinary
    const result = await uploadMediaToCloudinary(req.file.path); // Upload to Cloudinary
    console.log("Aayush upload-pdf Uploaded PDF to Cloudinary:", result);

    res.status(200).json({
      success: true,
      message: "PDF uploaded successfully.",
      data: result, // Contains Cloudinary response
    });
  } catch (error) {
    console.error("Aayush upload-pdfError uploading PDF:", error);
    res.status(500).json({ success: false, message: "Error uploading PDF file" });
  }
});


module.exports = router;