module.exports = {
  apps: [
    {
      name: 'tokenbums community',
      script: 'npm',
      args: 'start -- -p 8095',
      pid_file: '/tmp/tokenbums.pid',
      max_restarts: 10,
      autorestarts: true,
      error_file: 'tokenbums.log',
      out_file: 'tokenbums.log',
      exec_mode: 'fork',
      instances: 1,
    },
  ],
};
