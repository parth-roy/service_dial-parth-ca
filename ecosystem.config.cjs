module.exports = {
  apps: [
    {
      name: "service_dial",
      script: "npm",
      args: "start",
      cwd: "/var/www/service_dial",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
