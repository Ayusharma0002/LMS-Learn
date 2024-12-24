const { Client } = require('@microsoft/microsoft-graph-client');
const { getAccessToken } = require('../../utils/authUtils');
require('isomorphic-fetch'); // Required for Microsoft Graph Client



const addLiveSession = async (req, res) => {
  try {
    const { title, objective, instructorName, startDateTime, endDateTime, userId } = req.body;
 
    // Check for missing fields in the request body
    if (!title || !objective || !instructorName || !startDateTime || !endDateTime || !userId) {
      console.error('Missing fields in request body:', { title, objective, instructorName, startDateTime, endDateTime, userId });
      return res.status(400).json({
        success: false,
        message: 'All fields (title, objective, instructorName, startDateTime, endDateTime, userId) are required.',
      });
    }
 
    // Get the access token (from your OAuth flow)
    const accessToken = await getAccessToken(); // Ensure you have a valid access token from the Azure AD OAuth flow
 
    const client = Client.init({
      authProvider: (done) => {
        done(null, accessToken);
      },
    });

    // Meeting payload
    const meetingPayload = {
      subject: title,
      startDateTime: new Date(startDateTime).toISOString(),
      endDateTime: new Date(endDateTime).toISOString(),
      externalId: "7eb8263f-d0e0-4149-bb1c-1f0476083c56", // Use userId as externalId
      attendees: [
        {
          emailAddress: {
            address: "ayush@samvit.online", // Example attendee email
            name: instructorName,
          },
          type: "Required",
        },
      ],
    };

    console.log("Meeting Payload:", JSON.stringify(meetingPayload, null, 2));

    // Create or get the online meeting
    const meeting = await client
      .api(`/users/${userId}/onlineMeetings/createOrGet`)
      .post(meetingPayload);
 
    if (!meeting || !meeting.joinUrl) {
      console.error('Failed to create meeting or get join URL:', meeting);
      return res.status(500).json({
        success: false,
        message: 'Failed to create meeting or get join URL.',
      });
    }

    console.log('Meeting created successfully:', meeting.joinUrl);
 
    // Create live session object with meeting join URL
    const liveSession = {
      title,
      objective,
      instructorName,
      startDateTime,
      endDateTime,
      joinUrl: meeting.joinUrl,
    };
 
    console.log('Live session created:', liveSession);
 
    // Return the successful response
    res.status(201).json({
      success: true,
      message: 'Live session created successfully.',
      data: liveSession,
    });
  } catch (error) {
    console.error('Error adding live session:', error);

    // Handle different error scenarios
    if (error.statusCode === 401) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized. Check your access token and permissions.',
      });
    }

    if (error.statusCode === 403) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden. You do not have permission to create meetings.',
      });
    }

    if (error.code === 'InvalidAuthenticationToken') {
      return res.status(401).json({
        success: false,
        message: 'Invalid authentication token. Try refreshing your access token.',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'An unknown error occurred.',
      error: error.message,
    });
  }
};

module.exports = { addLiveSession };


// 123e4567-e89b-12d3-a456-426614174000