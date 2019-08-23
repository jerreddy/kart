const helmet = require("helmet");
const logger = require("../middleware/logger");
const authenticate = require("../middleware/authentication");

module.exports = function(app) {
    app.use(helmet());
    app.use(logger);
    app.use(authenticate);
};

