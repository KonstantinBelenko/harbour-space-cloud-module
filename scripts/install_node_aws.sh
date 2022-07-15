# This script is a part of "/docs/aws-ami.md" documentation
# Its purpose is to automatically download nodeJS to AWS Linux and install dependencies

# To properly run this script - you should run it while being in the main repo folder
# a.k.a. `[harbour-space-cloud-module] ./scripts/install_node_aws.sh`

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh

echo "INSATLLING NODE JS LTS"
nvm install --lts
node -e "console.log('Running Node.js ' + process.version)"

echo "INSTALLING DEPENDENCIES"
npm i

echo "SUCCESS!"
