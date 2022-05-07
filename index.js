
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
}

main().catch((err) => {
  console.error(err);
});