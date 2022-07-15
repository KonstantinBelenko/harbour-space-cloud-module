Guide on how to re-create a default AMI for this application

Use the following instructions:
## Log in to the aws console

* Go to `https://aws.amazon.com/`
* Press the `Sign In to the Console` in the top right corner and proceed to your aws console
* ![image](https://user-images.githubusercontent.com/90444271/179213259-4a833f24-b590-4979-9c1a-3279a79608a5.png)

## Create new EC2 instance
* Open the EC2 console and press `Launch instance`
* ![image](https://user-images.githubusercontent.com/90444271/179214515-8af2ba90-49e9-4b5e-813a-67b045b295b9.png)
* ![image](https://user-images.githubusercontent.com/90444271/179215011-8ef044cd-da70-453d-a702-90e1b5b1109d.png)
* Name this EC2 `Base AWS Linux`
* ![image](https://user-images.githubusercontent.com/90444271/179215268-fc519f29-d4df-4151-a74f-1bfcc0a9c63a.png)

* Choose AWS Linux as a base OS
* ![image](https://user-images.githubusercontent.com/90444271/179215319-1a5c5268-7f24-444e-a080-a7668ce0d281.png)

* Make sure that the instance type is t2.micro (Free tier eligible)
* ![image](https://user-images.githubusercontent.com/90444271/179215342-ee4ab274-71f1-46c8-baed-7aabd42f3f16.png) 

* Create a new key-pair and download the file
* ![image](https://user-images.githubusercontent.com/90444271/179215388-dcb20bbf-0702-44fb-8a40-5091444bc492.png)
* ![image](https://user-images.githubusercontent.com/90444271/179215538-78621173-38b6-4032-ae29-5ac37d87919c.png)

* Allow http trafic
* ![image](https://user-images.githubusercontent.com/90444271/179215628-2eb048d9-8608-48e0-ae12-d466a5104c3b.png)

* Press `Launch Instance`
* Success
* ![image](https://user-images.githubusercontent.com/90444271/179215692-c72b90d5-3bd0-4429-8d8b-7b0aa17649a0.png)

## Connect to your aws instance
* After a waiting for a minute - you should be able to connect to your aws instance with the key you created. In this example i use Windows WSL (Ubuntu 22.04). But it shouldn't be different on any other linux
* Grab the key file you created and make sure it has proper rights for an ssh-key
```bash
$ sudo chmod 600 <KEY-FILE name>
```
* ![image](https://user-images.githubusercontent.com/90444271/179216450-a3b24b5e-5770-45b5-b5b8-3e11249eb059.png)
* Get the ip address of your machine 
* ![image](https://user-images.githubusercontent.com/90444271/179216667-da907fdf-f94a-41bd-897c-58a9ad3e593e.png)
* Connect to your aws machine (standard name for aws linux is `ec2-user`)
```bash
$ ssh -i <KEY-FILE name> ec2-user@<IP-ADDRESS>
```
* ![image](https://user-images.githubusercontent.com/90444271/179216969-d6733af3-5d44-4123-901d-ea860840b1ed.png)

## 4. Pull the github repo and install dependencies
* Install git (Answer y when prompted)
```bash
$ sudo yum update && sudo yum install git
```
* Pull the repo
```bash
$ git clone https://github.com/KonstantinBelenko/harbour-space-cloud-module.git && cd harbour-space-cloud-module
```
* Install node script and re-connect to the instance
```bash
$ ./scripts/install_node_aws.sh
$ exit
$ ssh -i <KEY-FILE name> ec2-user@<IP-ADDRESS>
$ cd ./harbour-space-cloud-module
```
* Test run the server
```bash
# Run the server with sudo
$ sudo $(which node) server.js

# You should see something like this:
# Listening on port 80...

# Go to your browser and paste the ip address of your instance to the search like this `<IP-ADDRESS>:3000/host_id`. You should see a random UUID appear in your browser window
```
* Stop the server by pressing Ctrl+C
## Set up on-boot start
```bash
# Copy service file to the system folder
$ sudo cp ./app.service /etc/systemd/system

# Set it up to run on boot with systemctl
$ systemctl daemon-reload
$ systemctl enable app.service
$ systemctl start app.service

# Check your browser again, it should return UUID
```

## Make the AMI
* Go to your EC2 dashboard. 
* Select running instance called `Base AWS Linux`
* Press `Create Image`
* ![image](https://user-images.githubusercontent.com/90444271/179230308-8100c6ea-8536-42d2-8324-052eef843c4f.png)
* ![image](https://user-images.githubusercontent.com/90444271/179230642-e60ad9d9-f88f-488a-80b4-0cafffe808bf.png)
* ![image](https://user-images.githubusercontent.com/90444271/179230734-dcf44d68-824d-4c08-b7b9-322159034c55.png)
* Pres `Create image`
* Wait for a couple of minutes for image to load
* Success
