const { getAccessToken } = require('../../utils/authUtils');
require('isomorphic-fetch'); // Required for Microsoft Graph Client
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

async function addLiveSession(req, res) {
  try {
    // Get the access token
    console.log("Live Req :", req);

    const sessionData = req.body.liveSession;
    const {
      title,
      sessionId,
      objective,
      instructorName,
      date,
      time,
      duration,
      platform,
      link,
      description
    } = sessionData;


    console.log("Fronted data: ", sessionData);
    function validateSessionData(data) {
      const requiredFields = ['title', 'instructorName', 'startDateTime', 'endDateTime'];

      // Check if any of the required fields is blank
      const hasBlankField = requiredFields.some(field => !data[field] || data[field].trim() === '');

      // Return null if any required field is blank
      return hasBlankField ? null : data;
    }

    const result = validateSessionData(sessionData);
    console.log("Link : ",link);
  
    if (!result) {
      
      console.log('Validation failed. Returning null.');
      return null;
    }

    console.log("Validated Data: ", result); // Output: null
    const accessToken = await getAccessToken();
    const userId = process.env.AZURE_USER_ID;
    // Generate unique meeting details
    const now = new Date();
    const startDateTime = new Date(now.getTime(date) + 5 * 60 * 1000).toISOString(); // 5 minutes from now
    const endDateTime = new Date(now.getTime(date) + 35 * 60 * 1000).toISOString(); // 30 minutes duration
    const uniqueSubject = `User Meeting - ${uuidv4()}`; // Unique subject

    const onlineMeeting = {
      startDateTime,
      endDateTime,
      subject: uniqueSubject,
      participants: {
        attendees: [
          {
            upn: "ashwini.kumar.2210@gmail.com",
            role: "presenter",
          }
        ],
      },
      recordAutomatically: true,
    };



    // Make the API call to create the meeting
    const response = await axios.post(
      `https://graph.microsoft.com/v1.0/users/${userId}/onlineMeetings`,
      onlineMeeting,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // console.log("meeting url :",response.data);

    const liveSession = {
      title,
      objective,
      instructorName,
      sessionId,
      startDateTime,
      endDateTime,
      date,
      time,
      duration,
      platform,
      link: response.data.joinUrl,
      description,
      joinUrl: response.data.joinUrl,
    };
    // Return only the data from the API response
    // res.status(201).json({
    //   success: true,
    //   message: 'Live session created successfully.',
    //   data: liveSession,
    // });
    return liveSession;
  } catch (error) {
    console.error("Error creating meeting:");
    // res.status(500).json({
    //   success: false,
    //   message: 'Failed to create online meeting',
    //   error: error.response?.data || error.message,
    // });
  }
}

module.exports = { addLiveSession };