
function API(app){
  app.get('/api/haha', function(req, res) {
    res.json({ custom: 'response' });
  });
  app.post('/api/hehe', function(req, res) {
    res.json({ custom: 'qqqqqq' });
  });
}
module.exports = {
  API
}