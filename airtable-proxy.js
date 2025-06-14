const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const AIRTABLE_API_KEY = 'patNa8s4uVzAjiq3.d90554687ce46d3095efc20a4b60c70df8a1c4c208118290f6dcb1dc8ebd0cc7';
  const BASE_ID = 'appUfG1Pxoc8icljw';
  const TABLE_NAME = 'Müşteri Listesi';

  const url = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}?view=Grid%20view`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Airtable fetch failed', details: error.message }),
    };
  }
};
