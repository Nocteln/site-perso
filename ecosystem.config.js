module.exports = {
  apps: [
    {
      script: "index.js",
      watch: ".",
    },
    {
      script: "./service-worker/",
      watch: ["./service-worker"],
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "http://87.106.234.10/",
      ref: "origin/master",
      repo: "https://github.com/Nocteln/site-perso",
      path: "/root/site-perso",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
