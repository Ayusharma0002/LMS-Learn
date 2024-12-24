// const { Client } = require("@microsoft/microsoft-graph-client");
// require("isomorphic-fetch");

// // Add Live Session Controller
// const addLiveSession = async (req, res) => {
//   try {
//     const { title, objective, instructorName, startDateTime, endDateTime } = req.body;

//     // Validate required fields
//     if (!title || !objective || !instructorName || !startDateTime || !endDateTime) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // Microsoft Graph Client
//     const client = Client.init({
//       authProvider: (done) => {
//         done(null, process.env.MS_GRAPH_ACCESS_TOKEN); // Replace with your token logic
//       },
//     });

//     // Create Online Meeting
//     const meeting = await client.api("/me/onlineMeetings").post({
//       subject: title,
//       startDateTime: new Date(startDateTime).toISOString(),
//       endDateTime: new Date(endDateTime).toISOString(),
//       attendees: [
//         {
//           emailAddress: { address: "attendee@example.com", name: instructorName },
//           type: "Required",
//         },
//       ],
//     });

//     // Save meeting details in DB (Optional)
//     const liveSession = {
//       title,
//       objective,
//       instructorName,
//       startDateTime,
//       endDateTime,
//       joinUrl: meeting.joinUrl, // Teams meeting URL
//     };

//     // Return response
//     res.status(201).json({
//       success: true,
//       message: "Live session created successfully",
//       data: liveSession,
//     });
//   } catch (error) {
//     console.error("Error adding live session:", error);
//     res.status(500).json({
//       success: false,
//       message: "Error adding live session",
//     });
//   }
// };

// module.exports =  {addLiveSession} ;
// const { Client } = require('@microsoft/microsoft-graph-client');
// const { getAccessToken } = require('../../utils/authUtils');
// // const { getAccessToken } = require('./getAccessToken'); // Import the function

// const addLiveSession = async (req, res) => {
//   try {
//     const { title, objective, instructorName, startDateTime, endDateTime } = req.body;

//     // Validate required fields
//     if (!title || !objective || !instructorName || !startDateTime || !endDateTime) {
//       return res.status(400).json({
//         success: false,
//         message: 'All fields are required',
//       });
//     }

//     // Get the access token
//     const accessToken = await getAccessToken();

//     // Microsoft Graph Client
//     const client = Client.init({
//       authProvider: (done) => {
//         done(null, accessToken); // Use the access token
//       },
//     });

//     // Create Online Meeting
//     const meeting = await client.api('/me/onlineMeetings').post({
//       subject: title,
//       startDateTime: new Date(startDateTime).toISOString(),
//       endDateTime: new Date(endDateTime).toISOString(),
//       attendees: [
//         {
//           emailAddress: { address: 'attendee@example.com', name: instructorName },
//           type: 'Required',
//         },
//       ],
//     });

//     // Save meeting details in DB (Optional)
//     const liveSession = {
//       title,
//       objective,
//       instructorName,
//       startDateTime,
//       endDateTime,
//       joinUrl: meeting.joinUrl, // Teams meeting URL
//     };

//     // Return response
//     res.status(201).json({
//       success: true,
//       message: 'Live session created successfully',
//       data: liveSession,
//     });
//   } catch (error) {
//     console.error('Error adding live session:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error adding live session',
//     });
//   }
// };

// module.exports = { addLiveSession };

// const { Client } = require('@microsoft/microsoft-graph-client');
// const { getAccessToken } = require('../../utils/authUtils');

// const addLiveSession = async (req, res) => {
//   try {
//     console.log("Received data:", req.body);  // Log the incoming request body

//     const { title, objective, instructorName, startDateTime, endDateTime } = req.body;

//     // Validate required fields
//     if (!title || !objective || !instructorName || !startDateTime || !endDateTime) {
//       return res.status(400).json({
//         success: false,
//         message: 'All fields are required',
//       });
//     }

//     // Get the access token
//     const accessToken = await getAccessToken();
//     console.log("Access token retrieved:", accessToken);

//     // Microsoft Graph Client
//     const client = Client.init({
//       authProvider: (done) => {
//         done(null, accessToken); // Use the access token
//       },
//     });

//     // Create Online Meeting
//     const meeting = await client.api('/me/onlineMeetings').post({
//       subject: title,
//       startDateTime: new Date(startDateTime).toISOString(),
//       endDateTime: new Date(endDateTime).toISOString(),
//       attendees: [
//         {
//           emailAddress: { address: 'attendee@example.com', name: instructorName },
//           type: 'Required',
//         },
//       ],
//     });

//     console.log("Meeting created:", meeting);  // Log the meeting response

//     // Save meeting details in DB (Optional)
//     const liveSession = {
//       title,
//       objective,
//       instructorName,
//       startDateTime,
//       endDateTime,
//       joinUrl: meeting.joinUrl, // Teams meeting URL
//     };

//     // Return response
//     res.status(201).json({
//       success: true,
//       message: 'Live session created successfully',
//       data: liveSession,
//     });
//   } catch (error) {
//     console.error('Error adding live session:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error adding live session',
//     });
//   }
// };





// const addLiveSession = async (req, res) => {
//     try {
//       const { title, objective, instructorName, startDateTime, endDateTime } = req.body;
  
//       // Validate required fields
//       if (!title || !objective || !instructorName || !startDateTime || !endDateTime) {
//         return res.status(400).json({
//           success: false,
//           message: 'All fields are required',
//         });
//       }
  
//       // Get the access token
//       const accessToken = await getAccessToken();
  
//       // Microsoft Graph Client
//       const client = Client.init({
//         authProvider: (done) => {
//           done(null, accessToken); // Use the access token
//         },
//       });
  
//       // Create Online Meeting
//       const meeting = await client.api('/me/onlineMeetings').post({
//         subject: title,
//         startDateTime: new Date(startDateTime).toISOString(),
//         endDateTime: new Date(endDateTime).toISOString(),
//         attendees: [
//           {
//             emailAddress: { address: 'attendee@example.com', name: instructorName },
//             type: 'Required',
//           },
//         ],
//       });
  
//       // Save meeting details in DB (Optional)
//       const liveSession = {
//         title,
//         objective,
//         instructorName,
//         startDateTime,
//         endDateTime,
//         joinUrl: meeting.joinUrl, // Teams meeting URL
//       };
  
//       // Return response
//       res.status(201).json({
//         success: true,
//         message: 'Live session created successfully',
//         data: liveSession,
//       });
//     } catch (error) {
//       // Enhanced error handling
//       console.error('Error adding live session:', error);
      
//       // Check if error is related to the access token
//       if (error.message.includes('Failed to retrieve access token')) {
//         return res.status(500).json({
//           success: false,
//           message: 'Failed to retrieve access token. Check client credentials and API permissions.',
//         });
//       }
  
//       // If error is related to Microsoft Graph
//       if (error.response) {
//         return res.status(500).json({
//           success: false,
//           message: `Microsoft Graph API Error: ${error.response.data.error.message}`,
//         });
//       }
  
//       // Generic error message
//       return res.status(500).json({
//         success: false,
//         message: 'An unknown error occurred.',
//       });
//     }
//   };
  

// module.exports = { addLiveSession };




const { Client } = require('@microsoft/microsoft-graph-client');
const { getAccessToken } = require('../../utils/authUtils');
require('isomorphic-fetch'); // Required for Microsoft Graph Client


// const addLiveSession = async (req, res) => {
//   try {
//     const { title, objective, instructorName, startDateTime, endDateTime, userId } = req.body;
//     console.log(req.body);

//     // Validate required fields
//     // if (!title || !objective || !instructorName || !startDateTime || !endDateTime || !userId) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     message: 'All fields (title, objective, instructorName, startDateTime, endDateTime, userId) are required.',
//     //   });
//     // }
//     if (!title || !objective || !instructorName || !startDateTime || !endDateTime || !userId) {
//       console.error('Missing fields in request body:', { title, objective, instructorName, startDateTime, endDateTime, userId });
//       return res.status(400).json({
//         success: false,
//         message: 'All fields (title, objective, instructorName, startDateTime, endDateTime, userId) are required.',
//       });
//     }
    
//     // Validate dates
//     if (isNaN(Date.parse(startDateTime)) || isNaN(Date.parse(endDateTime))) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid date format for startDateTime or endDateTime. Use ISO 8601 format.',
//       });
//     }

//     // Get the access token
//     const accessToken = await getAccessToken();

//     // Microsoft Graph Client
//     const client = Client.init({
//       authProvider: (done) => {
//         done(null, accessToken); // Use the access token
//       },
//     });

//     // Prepare the payload for the meeting
//     const meetingPayload = {
//       subject: title,
//       startDateTime: new Date(startDateTime).toISOString(),
//       endDateTime: new Date(endDateTime).toISOString(),
//       attendees: [
//         {
//           emailAddress: "ayush@samvit.online",
//           type: 'Required',
//         },
//       ],
//     };

//     console.log('Payload:', meetingPayload); // Debugging: Ensure payload is correct

//     // Create Online Meeting for the specified user
//     const meeting = await client.api(`/users/${userId}/onlineMeetings`).post(meetingPayload);
//     console.log("hey ru there ",meeting);

//     // Save meeting details in DB (Optional)
//     const liveSession = {
//       title,
//       objective,
//       instructorName,
//       startDateTime,
//       endDateTime,
//       joinUrl: meeting.joinUrl, // Teams meeting URL
//     };

//     // Return response
//     res.status(201).json({
//       success: true,
//       message: 'Live session created successfully.',
//       data: liveSession,
//     });
//   } catch (error) {
//     // Enhanced error handling
//     console.error('Error adding live session:', error);

//     // Check if error is related to the payload or API
//     if (error.body && error.body.includes('Request payload cannot be null')) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid request payload. Check that all required fields are provided.',
//       });
//     }

//     // Check if error is related to the access token
//     if (error.message.includes('Failed to retrieve access token')) {
//       return res.status(500).json({
//         success: false,
//         message: 'Failed to retrieve access token. Check client credentials and API permissions.',
//       });
//     }

//     // Generic error message
//     return res.status(500).json({
//       success: false,
//       message: 'An unknown error occurred.',
//     });
//   }
// };

// module.exports = { addLiveSession };

    // Updated payload
    // const meetingPayload = {
    //   subject: title,
    //   startDateTime: new Date(startDateTime).toISOString(),
    //   endDateTime: new Date(endDateTime).toISOString(),
    //   attendees: [
    //     {
    //       emailAddress: {
    //         address: "ayush@samvit.online",
    //         name: instructorName,
    //       },
    //       type: 'Required',
    //     },
    //   ],
    // };

    //ye code 23-12-24 sahi h bilkul
//     const addLiveSession = async (req, res) => {
//       try {
//         const { title, objective, instructorName, startDateTime, endDateTime, userId } = req.body;
    
//         if (!title || !objective || !instructorName || !startDateTime || !endDateTime || !userId) {
//           console.error('Missing fields in request body:', { title, objective, instructorName, startDateTime, endDateTime, userId });
//           return res.status(400).json({
//             success: false,
//             message: 'All fields (title, objective, instructorName, startDateTime, endDateTime, userId) are required.',
//           });
//         }
    
//         const accessToken = await getAccessToken();

//         // console.log("hey i am a access token" , accessToken);
    
//         const client = Client.init({
//           authProvider: (done) => {
//             done(null, accessToken);
//           },
//         });
    

//     const meetingPayload = {
//       subject: title,
//       startDateTime: new Date(startDateTime).toISOString(),
//       endDateTime: new Date(endDateTime).toISOString(),
//       attendees: [
//         {
//           emailAddress: {
//             address: "ayush@samvit.online",
//             name: instructorName,
//           },
//           type: "Required",
//         },
//       ],
//     };

//     // console.log("Validated Payload:", JSON.stringify(meetingPayload, null, 2));
//     // console.log('Payload:', meetingPayload);

//     // Create Online Meeting
//     // userId="83f620aa-c318-40ad-a95d-5158644816a1";
//     // const meeting = await client.api(`/users/${userId}/onlineMeetings`).post(meetingPayload);
//     // const meeting = await client.api(`/users/83f620aa-c318-40ad-a95d-5158644816a1/onlineMeetings`).post(meetingPayload);

//     //ye sahi vala 
//     // const meeting = await client.api(`https://graph.microsoft.com/v1.0/users/83f620aa-c318-40ad-a95d-5158644816a1/onlineMeetings/createOrGet`)
//     const meeting = await client.api(`https://graph.microsoft.com/v1.0/users/83f620aa-c318-40ad-a95d-5158644816a1/onlineMeetings/createOrGet`)
//     // const meeting = await client.api(`/users/83f620aa-c318-40ad-a95d-5158644816a1/onlineMeetings`)

//     if(meeting){
//       console.log('hey i m meeting',meeting.joinUrl);
//     }
//     if(meeting.joinUrl){
//       console.log('hey i m a meeting joinUrl',meeting.joinUrl);
//     }else{
//       console.log('hey i m not a meeting joinUrl',meeting.joinUrl);
//     }

    

//     const liveSession = {
//       title,
//       objective,
//       instructorName,
//       startDateTime,
//       endDateTime,
//       joinUrl: meeting.joinUrl,
//     };

//     console.log('hey m live session',liveSession);

//     res.status(201).json({
//       success: true,
//       message: 'Live session created successfully.',
//       data: liveSession,
//     });
//   } catch (error) {
//     console.error('Error adding live session:', error);

//     if (error.body && error.body.includes('Request payload cannot be null')) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid request payload. Check that all required fields are provided.',
//       });
//     }

//     if (error.message.includes('Failed to retrieve access token')) {
//       return res.status(500).json({
//         success: false,
//         message: 'Failed to retrieve access token. Check client credentials and API permissions.',
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: 'An unknown error occurred.',
//     });
//   }
// };


// module.exports = { addLiveSession };


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