/**
 * @function `del` - Delete an image from the CDN.
 * @param { string } [token] - The bot token.
 * @param { string } [file] - The ID of the file.
 * @param { number } [userId] - The ID of the user.
 * @returns { object } - The response from the CDN.
 */

const axios = require("axios");

module.exports = async function del(token, file, userId) {
    if(!userId) return new SyntaxError("No user ID provided");
    if(!Number(userId)) return new TypeError("Invalid user ID provided");

    if(!file) return new SyntaxError("No file ID provided");
    if(!String(file)) return new TypeError("Invalid file ID provided");

    if(!token) return new SyntaxError("No user ID provided");
    if(!String(token)) return new TypeError("Invalid token provided");

    let res;

    try {
        const request = await axios.delete("https://gc-cdn.wdh.gg/api/delete", {
            headers: {
                "file": file,
                "token": token,
                "userid": userId
            }
        })

        res = request;
    } catch(err) {
        res = err.response;
    }

    return res;
}