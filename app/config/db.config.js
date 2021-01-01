module.exports = {
  HOST: "localhost",
  USER: "noobs",
  PASSWORD: "noobs",
  DB: "ex-seq",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
