// Error handling middleware

const errorHandler = (err, req, res,next) => {
    try {    
    
        "use strict";
    
        console.error(err.message);
        console.error(err.stack);
        res.status(500);
        res.render("error-template", {
            error: err
        });
    
    } catch (error) {
      console.error("Error occurred in operation:", error);
      throw error;
    }
};

module.exports = { errorHandler };
