const { schedule } = require('@netlify/functions')

const handler = async function(event, context) {
    console.log("Received event:", event);
    let body = JSON.parse(event.body);
    console.log(body);

    return {
        statusCode: 200,
    };
};

module.exports.handler = schedule("@daily", handler);