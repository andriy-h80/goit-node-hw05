const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const validateFavoriteStatus = require("./validateFavoriteStatus");
const authenticate = require("./authenticate");
const validateSubscription = require("./validateSubscription");
const upload = require("./upload");

module.exports = {
    validateBody,
    isValidId,
    validateFavoriteStatus,
    authenticate,
    validateSubscription,
    upload,
};
