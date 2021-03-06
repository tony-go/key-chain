const Corestore = require('corestore')

const { KeyChain } = require('../core.js')

const store = new Corestore('./temp/consumer')

async function run () {
  const keychain = await new KeyChain('rqa', { store })
    .ready([process.argv[2]])
  
  await keychain.put('FOO', new Date().toDateString())
  console.log(await keychain.last())
  console.log(await keychain.getConnectionInfo())
  // console.log("quit", await keychain.close());
}

run()
