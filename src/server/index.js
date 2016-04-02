import express from 'express';
import compression from 'compression';
import path from 'path';

const app = express();
app.use(compression);

app.get('/favicon.ico', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/x-icon' });
  res.end();
});

app.use(express.static(path.resolve(__dirname, 'dist')));

// temporaly response
app.get('*', (req, res) => res.send('ok'));

const port = process.env.PORT || 8080;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }
  console.info('==> 🌎 Up & runnig listening on port %s.', port);
});

export default app;
