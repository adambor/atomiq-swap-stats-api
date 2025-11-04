# atomiq swaps DB API

API for fetching swaps & statistics from the database, the swaps are tracked by an external swap watcher & pushed into the Cosmos DB.

Requires the Cosmos DB backend setup and configured with the following (this is then to be configured in environmental variables):
- database name: `AtomiqSwaps`
- container name: `swaps`

Check `example.settings.json` for example configuration and environmental variable setup!
