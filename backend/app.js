const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const { connectDB } = require('./config/mongoDB'); // MongoDB connection

const indexRouter = require('./routes/index'); // Default routes
const authRouter = require('./routes/auth'); // Auth routes
const projectsRouter = require('./routes/projects'); // Projects routes

const app = express();

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit the process if the connection fails
  });

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// Handle favicon.ico requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine as EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/projects', projectsRouter); // Register the route

// Error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

// Start the server
const PORT = 8080;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
