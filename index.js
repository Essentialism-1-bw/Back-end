const server = require('./api/server.js');

const PORT = process.env.POR || 5000;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
