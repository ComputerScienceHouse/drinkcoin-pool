module.exports = {
  "coin": "drinkcoin",
  "symbol": "DNK",
  "coinUnits": 1000000000000,
  "coinDifficultyTarget": 120,

  "logging": {
    "files": {
      "level": "info",
      "directory": "logs",
      "flushInterval": 5
    },
    "console": {
      "level": "info",
      "colors": true
    }
  },

  "poolServer": {
    "enabled": process.env.POOL_SERVER_ENABLED === "true",
    "clusterForks": "auto",
    "poolAddress": process.env.POOL_WALLET_ADDRESS,
    "blockRefreshInterval": 1000,
    "minerTimeout": 900,
    "ports": [{
        "port": 3333,
        "difficulty": 100,
        "desc": "Low end hardware"
      },
      {
        "port": 5555,
        "difficulty": 2000,
        "desc": "Mid range hardware"
      },
      {
        "port": 7777,
        "difficulty": 10000,
        "desc": "High end hardware"
      },
      {
        "port": 8888,
        "difficulty": 10000,
        "desc": "Hidden port",
        "hidden": true
      }
    ],
    "varDiff": {
      "minDiff": 100,
      "maxDiff": 200000,
      "targetTime": 100,
      "retargetTime": 30,
      "variancePercent": 30,
      "maxJump": 100
    },
    "fixedDiff": {
      "enabled": true,
      "addressSeparator": "."
    },
    "shareTrust": {
      "enabled": true,
      "min": 10,
      "stepDown": 3,
      "threshold": 10,
      "penalty": 30
    },
    "banning": {
      "enabled": true,
      "time": 600,
      "invalidPercent": 25,
      "checkThreshold": 30
    },
    "slushMining": {
      "enabled": false,
      "weight": 120,
      "lastBlockCheckRate": 1
    }
  },

  "payments": {
    "enabled": process.env.POOL_PAYMENTS_ENABLED === "true",
    "interval": 600,
    "maxAddresses": 50,
    "mixin": 3,
    "transferFee": 50000000,
    "minPayment": 1000000000,
    "maxTransactionAmount": 0,
    "denomination": 1000000000
  },

  "blockUnlocker": {
    "enabled": process.env.POOL_BLOCK_UNLOCKER_ENABLED === "true",
    "interval": 30,
    "depth": 10,
    "poolFee": 2,
    "devDonation": 0.1,
    "coreDevDonation": 0.1,
    "extraFeaturesDevDonation": 0.1
  },

  "api": {
    "enabled": process.env.POOL_API_ENABLED === "true",
    "hashrateWindow": 600,
    "updateInterval": 5,
    "port": process.env.POOL_API_PORT || 8117,
    "blocks": 30,
    "payments": 30,
    "password": process.env.POOL_ADMIN_PASSWORD
  },

  "daemon": {
    "host": process.env.POOL_DAEMON_HOST || "127.0.0.1",
    "port": process.env.POOL_DAEMON_PORT || 42068
  },

  "wallet": {
    "host": process.env.POOL_WALLET_HOST || "127.0.0.1",
    "port": process.env.POOL_WALLET_PORT || 8070
  },

  "redis": {
    "host": process.env.POOL_REDIS_HOST || "127.0.0.1",
    "port": process.env.POOL_REDIS_PORT || 6379
  },

  "monitoring": {
    "daemon": {
      "checkInterval": 60,
      "rpcMethod": "getblockcount"
    },
    "wallet": {
      "checkInterval": 60,
      "rpcMethod": "getbalance"
    }
  },

  "charts": {
    "pool": {
      "hashrate": {
        "enabled": true,
        "updateInterval": 60,
        "stepInterval": 1800,
        "maximumPeriod": 86400
      },
      "workers": {
        "enabled": true,
        "updateInterval": 60,
        "stepInterval": 1800,
        "maximumPeriod": 86400
      },
      "difficulty": {
        "enabled": true,
        "updateInterval": 1800,
        "stepInterval": 10800,
        "maximumPeriod": 604800
      },
      "price": {
        "enabled": true,
        "updateInterval": 1800,
        "stepInterval": 10800,
        "maximumPeriod": 604800
      },
      "profit": {
        "enabled": true,
        "updateInterval": 1800,
        "stepInterval": 10800,
        "maximumPeriod": 604800
      }
    },
    "user": {
      "hashrate": {
        "enabled": true,
        "updateInterval": 180,
        "stepInterval": 1800,
        "maximumPeriod": 86400
      },
      "payments": {
        "enabled": true
      }
    }
  }
};
