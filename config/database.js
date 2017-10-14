// DB configuration
var url = process.env.DBURL || "mongodb://localhost:27017/paddleracer";

module.exports = {
  database: url,
  secret: 'yoursecret'
}
