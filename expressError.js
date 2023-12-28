class ExpressError extends Error{
    constructor(messgae, status){
        super();
        this.message = message;
        this.status = status;
        console,error(this.stack);
    }
}

module.exports = ExpressError;