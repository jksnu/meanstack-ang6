// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

class sendResponse{
    sendMyResponse(req, res, next){
        if(res.data){
            response.data = res.data;
            res.data = undefined;
            res.json(response);
        }
        if(res.err){
            sendError(res.err, res);
        }
    }
}

module.exports = new sendResponse;