// const { Client } = require('@microsoft/microsoft-graph-client');
// const { getAccessToken } = require('../../utils/authUtils');
// require('isomorphic-fetch'); // Required for Microsoft Graph Client

// const { v4: uuidv4 } = require('uuid');

// const addLiveSession = async (req, res) => {
//   try {
//     const { title, objective, instructorName, startDateTime, endDateTime,userId} = req.body;

//     // Check for missing fields in the request body
//     if (!title || !objective || !instructorName || !startDateTime || !endDateTime || !userId) {
//       console.error('Missing fields in request body:', { title, objective, instructorName, startDateTime, endDateTime});
//       return res.status(400).json({
//         success: false,
//         message: 'All fields (title, objective, instructorName, startDateTime, endDateTime, userId) are required.',
//       });
//     }

//     // Get the access token (from your OAuth flow)
//     const accessToken = await getAccessToken(); // Ensure you have a valid access token from the Azure AD OAuth flow

//     const client = Client.init({
//       authProvider: (done) => {
//         done(null, accessToken);
//       },
//     });

//     // Meeting payload
//     const externalId = uuidv4();
//     console.log("External ID ",externalId);

//     const attendees = [
//       {
//         emailAddress: {
//           address: "ayush@samvit.online", // Instructor email
//           name: instructorName,
//         },
//         type: "Required",               
//       }
//     ];

//     // const meetingPayload = {
//     //   subject: title,
//     //   startDateTime: new Date(startDateTime).toISOString(),
//     //   endDateTime: new Date(endDateTime).toISOString(),
//     //   externalId: "7eb8263f-d0e0-4149-bb1c-1f0476083c56", // Use userId as externalId
//     //   participants: {
//     //     attendees, // Assign the attendees array to participants.attendees
//     //   },
//     // };
//     // const meeting = await client
//     //   .api(`/users/${userId}/onlineMeetings/createOrGet`)
//     //   .post(meetingPayload);

//     const onlineMeeting = {
//       startDateTime: new Date().toISOString(),       
//       endDateTime: new Date(new Date().getTime() + 30 * 60 * 1000).toISOString(),
//       subject: `User Token Meeting - ${uuidv4()}`
//     };

//     const meeting = await client.api(`/users/${userId}/onlineMeetings`)
//       .post(onlineMeeting);


//     if (!meeting || !meeting.joinUrl) {
//       console.error('Failed to create meeting or get join URL:', meeting);
//       return res.status(500).json({
//         success: false,
//         message: 'Failed to create meeting or get join URL.',
//       });
//     }

//     console.log('Meeting created successfully:', meeting.joinUrl);

//     // Create live session object with meeting join URL
//     const liveSession = {
//       title,
//       objective,
//       instructorName,
//       startDateTime,
//       endDateTime,
//       joinUrl: meeting.joinUrl,
//     };

//     console.log('Live session created:', liveSession);

//     // Return the successful response
//     res.status(201).json({
//       success: true,
//       message: 'Live session created successfully.',
//       data: liveSession,
//     });
//   } catch (error) {
//     console.error('Error adding live session:', error);

//     // Handle different error scenarios
//     if (error.statusCode === 401) {
//       return res.status(401).json({
//         success: false,
//         message: 'Unauthorized. Check your access token and permissions.',
//       });
//     }

//     if (error.statusCode === 403) {
//       return res.status(403).json({
//         success: false,
//         message: 'Forbidden. You do not have permission to create meetings.',
//       });
//     }

//     if (error.code === 'InvalidAuthenticationToken') {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid authentication token. Try refreshing your access token.',
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: 'An unknown error occurred.',
//       error: error.message,
//     });
//   }
// };

// module.exports = { addLiveSession };


const { getAccessToken } = require('../../utils/authUtils');
require('isomorphic-fetch'); // Required for Microsoft Graph Client
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

async function addLiveSession(req, res) {
  try {
    // Get the access token
    const { title, objective, instructorName, userId} = req.body;
    const accessToken = await getAccessToken();

    // Generate unique meeting details
    const now = new Date();
    const startDateTime = new Date(now.getTime() + 5 * 60 * 1000).toISOString(); // 5 minutes from now
    const endDateTime = new Date(now.getTime() + 35 * 60 * 1000).toISOString(); // 30 minutes duration
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
    const liveSession = {
      title,
      objective,
      instructorName,
      startDateTime,
      endDateTime,
      joinUrl: response.data,
    };
    // Return only the data from the API response
    res.status(201).json({
      success: true,
      message: 'Live session created successfully.',
      data: liveSession,
    });
  } catch (error) {
    console.error('Error creating meeting:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create online meeting',
      error: error.response?.data || error.message,
    });
  }
}

module.exports = { addLiveSession };
