# Eid Greeting Backend

A Node.js Express server that stores visitor names from the Eid Greeting React application in MongoDB.

## Folder Structure

```
server/
├── config/
│   └── database.js       # MongoDB connection configuration
├── controllers/
│   └── visitorController.js  # Business logic for visitor operations
├── middleware/
│   └── errorHandler.js   # Global error handling middleware
├── models/
│   └── Visitor.js        # Mongoose schema for visitors
├── routes/
│   └── visitorRoutes.js  # API route endpoints
├── .env                  # Environment variables
├── server.js             # Main server entry point
└── package.json          # Dependencies
```

## Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```
MONGODB_URI=mongodb+srv://your-mongodb-uri
CORS_ORIGIN=*
PORT=5000
NODE_ENV=development
```

## Running the Server

### Development (with auto-reload):
```bash
npm run dev
```

### Production:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/visitors
Create a new visitor record.

**Request Body:**
```json
{
  "name": "Imran Khan"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Visitor recorded successfully",
  "data": {
    "_id": "...",
    "name": "Imran Khan",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### GET /api/visitors
Retrieve all visitor records.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "Imran Khan",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ],
  "count": 1
}
```

### GET /health
Server health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running"
}
```

## Features

- ✅ MongoDB integration with Mongoose
- ✅ CORS enabled for frontend communication
- ✅ Environment variable configuration with dotenv
- ✅ Error handling middleware
- ✅ Fire-and-forget API calls from frontend (no waiting for response)
- ✅ Allows duplicate names to track multiple visits
- ✅ Timestamps for all records (createdAt, updatedAt)
- ✅ Production-ready error handling

## Frontend Integration

The React frontend automatically sends visitor names to this API:

1. **Form Submission**: When a user submits their name in the form, an API call is made to `POST /api/visitors`
2. **Direct URL Access**: When a user accesses `/name=USERNAME`, the app also triggers the API call in the background

All API calls are fire-and-forget, meaning:
- No loading spinners are shown
- No success/error messages are displayed
- Navigation happens immediately
- Errors are silently handled in the background

## Error Handling

The server includes global error handling that:
- Returns meaningful error messages in development
- Returns generic error messages in production (for security)
- Logs errors to the console
- Returns appropriate HTTP status codes

## Database Schema

**Visitor Model:**
```javascript
{
  name: String (required, trimmed),
  createdAt: Date (automatic),
  updatedAt: Date (automatic)
}
```

Notes:
- Duplicate names are allowed to track multiple visits
- All fields are trimmed automatically
- Timestamps are added automatically by Mongoose

## Troubleshooting

### Server won't connect to MongoDB
- Check MONGODB_URI in .env file
- Ensure MongoDB Atlas cluster is active
- Verify IP whitelist includes your connection IP

### CORS errors from frontend
- Ensure CORS_ORIGIN in .env matches frontend origin
- Use `*` to allow all origins (development only)

### Port already in use
- Change PORT in .env to a different port (e.g., 5001)
- Or kill the process using port 5000

## Tech Stack

- **Express.js**: Web framework
- **Mongoose**: MongoDB ODM
- **MongoDB**: Database
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **Nodemon**: Development server with auto-reload
