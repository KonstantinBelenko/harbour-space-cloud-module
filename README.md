## This is a rest application made with nodeJs
It includes a rudementary load balancer that accepts traffic on port 80 and balaces it between 3 hard-coded servers using round-robin algorythm

## How to run it:

1. Clone the repo 
```bash
$ cd /home
$ git clone git@github.com:KonstantinBelenko/harbour-space-cloud-module.git && cd harbour-space-cloud-module
```

2. Install docker & docker-compose
```bash
# Theese scripts are made for AWS Linux (don't use them for other repos)
$ ./scripts/install_docker.sh
$ ./scripts/install_docker-compose.sh
```

3. Build & run docker-compose
```bash
# Build docker images
$ docker-compose build

# Run docker-compose in terminal
$ docker-compose run
# OR - run docker-compose in the background
$ docker-compose run -d
```

## Application Endpoints:
1. `/host_id` - This endpoint returns a random uuid
2. `/health` - This endpoint tells you if the server is online <br>
3. `/change` - This endpoit is only for ***testing purposes***. It changes the state of the server from online to offline and back

* All servers are configured by default to use ports **[3000-3002]**