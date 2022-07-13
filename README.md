## This is an simple rest application made on node js

How to run:

* Clone the repo `git clone git@github.com:KonstantinBelenko/harbour-space-cloud-module.git`
* Install dependencies 
```bash
$ cd harbour-space-cloud-module.git
$ npm install
```
* Run the application `npm start`

## Endpoints:
1. `/host_id` - This endpoint returns a random uuid
2. `/health` - This endpoint tells you if the server is online <br>
3. `/change` - This endpoit is only for ***testing purposes***. It changes the state of the server from online to offline and back