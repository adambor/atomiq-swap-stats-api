
const {CosmosClient} = require("@azure/cosmos");

const client = new CosmosClient(process.env.COSMOS_CONECTION_STRING);
const container = client.database("AtomiqSwaps").container("swaps");

module.exports = {
    client,
    container
};