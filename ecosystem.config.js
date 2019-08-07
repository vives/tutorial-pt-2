module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-217-247.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Homely.pem',
      ref: 'origin/master',
      repo: 'git@github.com:vives/tutorial-pt-2',
      path: '/server/tutorial-pt-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}