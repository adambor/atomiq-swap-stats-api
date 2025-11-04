
//This was used before, so now this is just a mock that always returns empty array
module.exports = async function (context, req) {

    context.res = {
        status: 200,
        body: []
    };
    context.done();

};
