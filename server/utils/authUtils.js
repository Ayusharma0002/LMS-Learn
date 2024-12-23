require('dotenv').config();
const axios = require('axios');

async function getAccessToken() {
  try {
    const response = await axios.post(
      `https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/token`,
      new URLSearchParams({
        client_id: process.env.MS_CLIENT_ID,
        client_secret: process.env.MS_CLIENT_SECRET,
        scope: 'https://graph.microsoft.com/.default', // Scope for Microsoft Graph API
        grant_type: 'client_credentials',
      })
    );

    return response.data.access_token; // Return the access token
  } catch (error) {
    console.error('Error getting access token:', error.response?.data || error.message);
    throw new Error('Failed to retrieve access token');
  }
}

module.exports = { getAccessToken };
