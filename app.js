const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const {convertNumsArray, calculateMean, calculateMedian, calculateMode} = require('./helpers');

app.get('/mean', function(request, response, next){

    if(!request.query.nums){
        throw new ExpressError('Please enter a comma-separated list of numbers.', 400);
    }
    
    let numsAsStrings = request.query.nums.split(',');
    let nums = convertNumsArray(numsAsStrings);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: calculateMean(nums)
    }

    return response.send(result);
});

app.get('/median', function(request, response, next){
    if(!request.query.nums){
        throw new ExpressError('Please enter a comma=separated list of numbers.', 400);
    }

    let numsAsStrings = request.query.nums.split(',');
    let nums = convertNumsArray(numsAsStrings);
    
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: calculateMedian(nums)
    }

    return response.send(result);
})


app.get('/mode', function(request, response, next){
    if(!request.query.nums){
        throw new ExpressError('Please enter a comma-separated list of numbers.', 400);
    }

    let numsAsStrings = request.query.nums.split(',');
    let nums = convertNumsArray(numsAsStrings);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: calculateMode(nums)
    }

    return response.send(result);

});

// Error handling for 404 and 500 errors

app.use(function (request, response, next){
    const error = new ExpressError("Not Found", 404);
    return next(error);
});

app.use(function(error, request, response, next){
    response.status(error.status || 500);
    return response.json({
        error: error,
        message: error.message
    })
})

app.listen(3000, function(){
    console.log('Server started on port 3000');
});