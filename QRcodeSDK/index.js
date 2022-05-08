

// Run the following code to test that you have successfully created a project and installed the Openscreen SDK. 
// Initiate the Openscreen node SDK and include the project ID that you received using the Openscreen dashboard 
const { Openscreen } = require("@openscreen/sdk");
require('dotenv').config();
const os = new Openscreen().config({key: process.env.OS_API_KEY, secret: process.env.OS_API_SECRET});
const projectId = '95786b59-0362-4afb-a909-33a641fc8a53';

async function main(){

  // Create an asset and generate a QR Code 
  const asset = await os.project(projectId).assets().create({
    name: 'Hello World',
    qrCodes: [
      {
        intent: 'https://google.ca',
        intentType: 'DYNAMIC_REDIRECT'
      }
    ]
  });

  // Returns the asset object you just created 
  console.log("Asset:", JSON.stringify(asset, '',2));

  // Note: The qrCodeId within the asset object can be accessed through asset.asset.qrCodes[0].qrCodeId
  const { qrCodeId } = asset.asset.qrCodes[0];

  // Returns a scannable QR Code and saves the png file in your project folder
  const qrCode = await os.qrCode(qrCodeId).get({
    format:'png',
    margin: 5, 
    scale: 8,
    foreground: '#0A74B7',
    background: '#D3D3D3',
    dataUrl: true}); 

  await os.saveQrImageDataToFile(qrCode, 'stylishQRCode.png');

  // Returns the Openscreen qrCode object 
  console.log("QR Code:", JSON.stringify(qrCode, '',2));
=======
// Initiate the Openscreen node SDK and include the project ID that you recieved using the Openscreen dashboard 
const { Openscreen } = require("@openscreen/sdk");
require('dotenv').config();
const os = new Openscreen().config({
    key: 'FybBxfdAZ9tshVCkr2',
    secret: 'i0rMx21izP3OGslQ5k8iwSYd',
  })
const projectId = '95786b59-0362-4afb-a909-33a641fc8a53';

async function main() { 
  
  // Create an asset for a new listing sign being hosted for 123 Main Street 
  const res = await os.project(projectId).assets().create({
    name: '123Main Sign',
    description: 'Sign for 123 Main Street, Toronto',
    customAttributes: {
      type: 'Sale',
      MLS: '123ABC',
    },
    qrCodes: [{
      intent: `https://sidewalkqr.com/123main/`,
      intentType: 'DYNAMIC_REDIRECT'
    }]
  });

  // Returns a scannable QR Code
  const { qrCodeId } = res.asset.qrCodes[0];
  const qrCode = await os.qrCode(qrCodeId).get({format: 'png'})
  await os.saveQrImageDataToFile(qrCode, 'my-dynamic-qr-code.png');

  // View the new asset that you have created 
  console.log('Asset:', JSON.stringify(res, '',2));
