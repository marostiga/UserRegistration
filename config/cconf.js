exports.config = {
  
  allScriptsTimeout: 15000,
  baseUrl: 'https://demodirectory.com/profile/login.php',
  framework: 'jasmine',

  specs: [
    '../specs/*.e2e-spec.js'
  ],
  
  capabilities: {
    'browserName': 'chrome',
    chromeOptions:{ 

      args: [ "--no-sandbox", "--start-maximized" ] 
    }
  },
  directConnect: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

};