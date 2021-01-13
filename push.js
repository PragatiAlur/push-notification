var push = require('web-push');

push.generateVAPIDKeys();
 
let vapidKeys = {
    publicKey: 'BAaXROCOQHVxqotOtxMYsXdNq-AeV8GspHZQxVEoksHvZzponswAH_XyVSGS_COFAge3mu9m6rEmrjUUkRE3uLE',
    privateKey: 'lvW4lNUdWkCU_zePlKc1ZpKsP9Ky2BHqyhZq8pz2WB0'
  }


  push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = { endpoint:"https://fcm.googleapis.com/fcm/send/fjqoIkXCm_k:APA91bF2Q5WwhYBN_KjkavYC2_DF4wAPDgPVJh6bmMGlfsDJeL8PKNUtg4CrZzncB3dsXSwXKfIToLV1vbxSld0jmX0fdaTyb91JAWuNoDhw40za9lKLfGyHco__DLYqER8xwxNm2jOW",
  expirationTime:null,
  keys:{p256dh:"BISsVFP5jOTaV0prslb1FpCW_7VgDYHZ-wwKr3sxPd3nlZJJdn_bU6ppa72CksUvl3FZ5DZJrzil5-1vO686g6U",
  auth:"iomxns2pOlpMLS63k-gnIQ" }
}
  push.sendNotification(sub, 'test message');