const express = require('express');
const app = express();
const path=require('path')
const PORT=process.env.PORT || 4000

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Your server routes and logic here
app.get('/model',(req,res)=>{
    res.sendFile(path.join(__dirname,'model.json'))
})
app.get('/group1-shard1of1.bin', (req, res) => {
    res.sendFile(path.join(__dirname, 'group1-shard1of1.bin'));
  });

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});
