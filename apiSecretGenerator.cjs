const crypto = require('crypto');

function generateApiSecret() {
  const secret = crypto.randomBytes(32).toString('hex');
  return secret;
}

const apiSecret = generateApiSecret();
console.log(apiSecret);