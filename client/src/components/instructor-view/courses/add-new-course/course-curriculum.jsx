import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { courseCurriculumInitialFormData, liveSessionFormControls } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { mediaBulkUploadService, mediaDeleteService, mediaUploadService, pdfUploadService, addNewCourseService } from "@/services";
import { Upload } from "lucide-react";
import { useContext, useRef, useState } from "react";
import MediaProgressbar from "@/components/media-progress-bar";
import VideoPlayer from "@/components/video-player";

function CourseCurriculum() {
  const {
    courseCurriculumFormData,
    setCourseCurriculumFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
    liveSessionFormData,
    setLiveSessionFormData,
    liveSessionInitialFormData,
  } = useContext(InstructorContext);

  const bulkUploadInputRef = useRef(null);

  // Track PDF upload status
  const [pdfUploadStatus, setPdfUploadStatus] = useState([]);
  const [videoUploadStatus, setVideoUploadStatus] = useState([]);

  function handleNewLecture() {
    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0],
      },
    ]);
  }

  function handleCourseTitleChange(event, currentIndex) {
    const updatedFormData = [...courseCurriculumFormData];
    updatedFormData[currentIndex] = {
      ...updatedFormData[currentIndex],
      title: event.target.value,
    };
    setCourseCurriculumFormData(updatedFormData);
  }

  function handleFreePreviewChange(currentValue, currentIndex) {
    const updatedFormData = [...courseCurriculumFormData];
    updatedFormData[currentIndex] = {
      ...updatedFormData[currentIndex],
      freePreview: currentValue,
    };
    setCourseCurriculumFormData(updatedFormData);
  }

  async function handleSingleLectureUpload(event, currentIndex) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
        if (response.success) {
          const updatedFormData = [...courseCurriculumFormData];
          updatedFormData[currentIndex] = {
            ...updatedFormData[currentIndex],
            videoUrl: response?.data?.url,
            public_id: response?.data?.public_id,
          };
          setCourseCurriculumFormData(updatedFormData);
          setMediaUploadProgress(false);

          const updatedVideoStatus = [...videoUploadStatus];
          updatedVideoStatus[currentIndex] = "Video uploaded successfully";
          setVideoUploadStatus(updatedVideoStatus);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function handlePdfUpload(event, currentIndex) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
        if (response.success) {
          const updatedFormData = [...courseCurriculumFormData];
          updatedFormData[currentIndex] = {
            ...updatedFormData[currentIndex],
            pdfUrl: response?.data?.url,
          };
          setCourseCurriculumFormData(updatedFormData);

          const updatedPdfStatus = [...pdfUploadStatus];
          updatedPdfStatus[currentIndex] = "PDF uploaded successfully";
          setPdfUploadStatus(updatedPdfStatus);
        }
        setMediaUploadProgress(false);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function handleReplaceVideo(currentIndex) {
    const updatedFormData = [...courseCurriculumFormData];
    const publicId = updatedFormData[currentIndex].public_id;

    const deleteResponse = await mediaDeleteService(publicId);

    if (deleteResponse?.success) {
      updatedFormData[currentIndex] = {
        ...updatedFormData[currentIndex],
        videoUrl: "",
        public_id: "",
      };

      setCourseCurriculumFormData(updatedFormData);
    }
  }

  async function handleDeleteLecture(currentIndex) {
    const updatedFormData = [...courseCurriculumFormData];
    const publicId = updatedFormData[currentIndex].public_id;

    const deleteResponse = await mediaDeleteService(publicId);

    if (deleteResponse?.success) {
      updatedFormData.splice(currentIndex, 1);
      setCourseCurriculumFormData(updatedFormData);

      // Clear video and PDF upload statuses
      const updatedPdfStatus = [...pdfUploadStatus];
      updatedPdfStatus.splice(currentIndex, 1);
      setPdfUploadStatus(updatedPdfStatus);

      const updatedVideoStatus = [...videoUploadStatus];
      updatedVideoStatus.splice(currentIndex, 1);
      setVideoUploadStatus(updatedVideoStatus);

      // Re-enable the "Add Lecture" button if there's at least one lecture left
      if (updatedFormData.length === 0) {
        setCourseCurriculumFormData([
          ...updatedFormData,
          {
            ...courseCurriculumInitialFormData[0],
          },
        ]);
      }
    }
  }


  async function handleMediaBulkUpload(event) {
    const selectedFiles = Array.from(event.target.files);
    const bulkFormData = new FormData();
    selectedFiles.forEach((file) => bulkFormData.append("files", file));

    try {
      setMediaUploadProgress(true);
      const response = await mediaBulkUploadService(bulkFormData, setMediaUploadProgressPercentage);

      if (response?.success) {
        let updatedFormData = courseCurriculumFormData.some(isLectureValid)
          ? [...courseCurriculumFormData]
          : [];

        updatedFormData = [
          ...updatedFormData,
          ...response?.data.map((item, index) => ({
            videoUrl: item?.url,
            public_id: item?.public_id,
            title: `Lecture ${updatedFormData.length + (index + 1)}`,
            freePreview: false,
          })),
        ];

        setCourseCurriculumFormData(updatedFormData);
        setMediaUploadProgress(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleNewLiveSession() {

    setLiveSessionFormData([
      ...liveSessionFormData,
      {
        ...liveSessionInitialFormData,
        id: liveSessionFormData.length + 1, // Unique ID for each session
      },
    ]);
  }

  function handleLiveSessionChange(event, index) {
    
    
    const { name, value } = event.target;
    console.log("Form Data : ",name, " : ", value);
    
    const updatedSessions = [...liveSessionFormData];
    updatedSessions[index] = { ...updatedSessions[index], [name]: value };
    setLiveSessionFormData(updatedSessions);
  }


  function handleDeleteLiveSession(index) {
    const updatedSessions = liveSessionFormData.filter((_, i) => i !== index);
    setLiveSessionFormData(updatedSessions);
  }
  function formatDateTimeForInput(date) {
    if (!date) return "";
    const dateObj = new Date(date);
    return dateObj.toISOString().slice(0, 16); // Formats to YYYY-MM-DDTHH:MM
  }
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>Create Course Curriculum</CardTitle>
        <div>
          <Input
            type="file"
            ref={bulkUploadInputRef}
            accept="video/*"
            multiple
            className="hidden"
            id="bulk-media-upload"
            onChange={handleMediaBulkUpload}
          />
          <Button
            as="label"
            htmlFor="bulk-media-upload"
            variant="outline"
            className="cursor-pointer"
          >
            <Upload className="w-4 h-5 mr-2" />
            Bulk Upload
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleNewLecture}
        >
          Add Lecture
        </Button>
        <Button
          className="ml-2"
          onClick={handleNewLiveSession}
        >
          Add Live Session
        </Button>
        {mediaUploadProgress && (
          <MediaProgressbar
            isMediaUploading={mediaUploadProgress}
            progress={mediaUploadProgressPercentage}
          />
        )}
        <div className="mt-4 space-y-4">
          {courseCurriculumFormData.map((curriculumItem, index) => (
            <div key={index} className="border p-5 rounded-md">
              <div className="flex gap-5 items-center">
                <h3 className="font-semibold">Lecture {index + 1}</h3>
                <Input
                  name={`title-${index + 1}`}
                  placeholder="Enter lecture title"
                  className="max-w-96"
                  onChange={(event) => handleCourseTitleChange(event, index)}
                  value={curriculumItem.title}
                />
                <div className="flex items-center space-x-2">
                  <Label>Free Preview</Label>
                  <Switch
                    checked={curriculumItem.freePreview}
                    onCheckedChange={(value) => handleFreePreviewChange(value, index)}
                  />
                </div>
              </div>
              <div className="flex gap-5 mt-4">
                {curriculumItem.videoUrl ? (
                  <div className="flex gap-3">
                    <VideoPlayer url={curriculumItem.videoUrl} width="550px" height="200px" />
                    <Button onClick={() => handleReplaceVideo(index)}>Replace Video</Button>
                    <Button onClick={() => handleDeleteLecture(index)} className="bg-red-900">
                      Delete Lecture
                    </Button>
                  </div>
                ) : (
                  !curriculumItem.videoUploaded && (
                    <Input
                      type="file"
                      accept="video/*"
                      placeholder="Upload video"

                      onChange={(event) => handleSingleLectureUpload(event, index)}
                    />
                  )
                )}
                {pdfUploadStatus[index] ? (
                  <span className="text-green-500">{pdfUploadStatus[index]}</span>
                ) : (
                  <Input
                    type="file"
                    accept="application/pdf"

                    onChange={(event) => handlePdfUpload(event, index)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-4">
          {/* Render Live Session Forms */}
          {liveSessionFormData.length > 0 && liveSessionFormData.map((session, index) => (
            <div key={index} className="border p-5 rounded-md">
              <h3 className="font-semibold">Live Session {index + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {liveSessionFormControls.map((control) => (
                  <div key={control.name}>
                    <label htmlFor={`${control.name}-${index}`} className="block font-medium mb-2">
                      {control.label}
                    </label>
                    {control.componentType === "input" ? (
                      <Input
                        id={`${control.name}-${index}`}
                        name={control.name}
                        type={control.type}
                        placeholder={control.placeholder}
                        value={
                          control.type === "datetime-local"
                            ? formatDateTimeForInput(session[control.name])
                            : session[control.name]
                        }
                        onChange={(event) => handleLiveSessionChange(event, index)}
                        className="w-full p-2 border rounded-md"
                      />
                    ) : control.componentType === "textarea" ? (
                      <textarea
                        id={`${control.name}-${index}`}
                        name={control.name}
                        placeholder={control.placeholder}
                        value={session[control.name]}
                        onChange={(event) => handleLiveSessionChange(event, index)}
                        className="w-full p-2 border rounded-md"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Button onClick={() => handleDeleteLiveSession(index)} className="bg-red-500">
                  Delete Session
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseCurriculum;
