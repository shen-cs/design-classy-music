import express from 'express';
import mongoose from 'mongoose';
import Record from './models/record';
import bodyParser from 'body-parser';

mongoose.connect('mongodb://localhost/design-music');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  next();
});

app.get('/', (req, res) => {
  res.send('wooow')
});


app.post('/api/data', (req, res) => {
  const data  = req.body;
  if(data.title) {
    let rec = new Record({
      timestamp: new Date().toString(),
      type: data.title
    });
    rec.save((err) => {
      if(!err) {
        res.json({success: true});
      }
      else {
        res.json({success: false});
      }
    })
  }
  else {
    res.json({success: false});
  }
});

app.get('/api/data', (req, res) => {
  Record.find({}, (err, docs) => {
    if(!err) {
      res.json({data: docs})
    }
    else {
      res.json({success: false})
    }
  })
})

app.delete('/api/data', (req, res) => {
  Record.deleteMany({}, (err) => {
    if(!err) {
      res.json({success: true});
    }
    else {
      res.json({success: false});
    }
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));

export default app;