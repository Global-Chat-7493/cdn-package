/**
 * @function `upload` - Upload an image to the CDN.
 * @param { string } [token] - The bot token.
 * @param { url } [url] - The URL to the media to upload.
 * @param { number } [userId] - The ID of the user.
 * @returns { object } - The response from the CDN.
 */

const axios = require("axios");

module.exports = async function upload(token, url, userId) {
    if(!userId) return new SyntaxError("No user ID provided");
    if(!Number(userId)) return new TypeError("Invalid user ID provided");

    if(!url) return new SyntaxError("No URL provided");

    if(!token) return new SyntaxError("No user ID provided");
    if(!String(token)) return new TypeError("Invalid token provided");

    const data = {
        token: token,
        url: url,
        userid: userId
    }

    let res;

    try {
        const request = await axios.post("https://gc-cdn.wdh.gg/api/upload", data);

        res = request;
    } catch(err) {
        res = err.response;
    }

    return res;
}