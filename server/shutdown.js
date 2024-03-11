// allows graceful exit & port being killed
function shutdown(server) {
  process.on('exit', () => {
    server.close();
    process.exit(0);
  })
  process.on('SIGTERM', () => {
    server.close();
    process.exit(0);
  })
  process.on('SIGINT', () => {
    server.close();
    process.exit(0);
  })
}

module.exports = {
  shutdown
}