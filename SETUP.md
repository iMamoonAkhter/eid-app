# Eid Greeting Project - Complete Setup Guide

A full-stack Eid Greeting web application with React frontend and Node.js backend that stores visitor names in MongoDB.

## Project Structure

```
eid-project/
├── client/                    # React frontend
│   ├── src/
│   │   ├── api/
│   │   │   └── visitorAPI.js  # API integration module
│   │   ├── components/        # React components
│   │   ├── pages/
│   │   │   ├── Home.jsx       # Landing page with form
│   │   │   └── Greeting.jsx   # Personalized greeting page
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # Node.js backend
│   ├── config/
│   │   └── database.js        # MongoDB connection
│   ├── controllers/
│   │   └── visitorController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Visitor.js
│   ├── routes/
│   │   └── visitorRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

## Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn
- MongoDB Atlas account (free tier available)
- Git

## Step 1: Set Up Frontend (Client)

### 1.1 Install Frontend Dependencies

```bash
cd client
npm install
```

### 1.2 Configure Frontend Environment

Check that `.env` file has:
```
VITE_API_URL=http://localhost:5000
```

### 1.3 Run Frontend Development Server

```bash
npm run dev
```

Frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

## Step 2: Set Up Backend (Server)

### 2.1 Install Backend Dependencies

```bash
cd server
npm install
```

### 2.2 Configure MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster or use existing one
3. Get your connection string
4. Update `server/.env`:

```
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
CORS_ORIGIN=*
PORT=5000
NODE_ENV=development
```

### 2.3 Run Backend Development Server

```bash
cd server
npm run dev
```

Backend will run on `http://localhost:5000`

## Step 3: Test the Application

### 3.1 Test Frontend → Backend Flow

1. Open `http://localhost:5173` in browser
2. Enter a name in the form and submit
3. You should be redirected to the greeting page
4. No loading or error messages should appear (fire-and-forget)

### 3.2 Verify Data in MongoDB

1. Go to MongoDB Atlas
2. Navigate to your cluster
3. Open the database browser
4. Check the `eid-greeting` database → `visitors` collection
5. You should see your submitted names with timestamps

### 3.3 Test Direct URL Access

1. Open `http://localhost:5173/name=TestUser` directly
2. You should see the greeting page immediately
3. The name "TestUser" should be recorded in MongoDB
4. No errors should appear in the browser console

### 3.4 Test API Directly (Optional)

```bash
# Create a visitor
curl -X POST http://localhost:5000/api/visitors \
  -H "Content-Type: application/json" \
  -d '{"name": "Ahmed"}'

# Get all visitors
curl http://localhost:5000/api/visitors

# Health check
curl http://localhost:5000/health
```

## Key Features

### Frontend
- ✅ Beautiful Eid greeting page with animations
- ✅ Name input form with validation
- ✅ URL-based routing (`/name=USERNAME`)
- ✅ Responsive design
- ✅ Glassmorphism UI effects
- ✅ Confetti animations
- ✅ Social share buttons (WhatsApp, Facebook, X)
- ✅ Fire-and-forget API calls

### Backend
- ✅ Express.js REST API
- ✅ MongoDB database with Mongoose ODM
- ✅ CORS enabled for frontend
- ✅ Environment variable configuration
- ✅ Error handling middleware
- ✅ Allows duplicate visitor names
- ✅ Automatic timestamps on records

### API Integration
- ✅ Non-blocking API calls (fire-and-forget)
- ✅ No loading spinners or error messages
- ✅ Immediate UI navigation
- ✅ Silent error handling
- ✅ Works with both form submission and direct URL access

## API Endpoints

### POST /api/visitors
Records a visitor name.

**Request:**
```json
{
  "name": "Imran Khan"
}
```

### GET /api/visitors
Retrieves all visitor records.

### GET /health
Server health check.

## Environment Variables

### Client (.env)
```
VITE_API_URL=http://localhost:5000
```

### Server (.env)
```
MONGODB_URI=mongodb+srv://...
CORS_ORIGIN=*
PORT=5000
NODE_ENV=development
```

## Troubleshooting

### Frontend can't connect to backend
- Check if backend is running on port 5000
- Verify VITE_API_URL in client/.env
- Check browser console for CORS errors
- Ensure server has CORS enabled

### MongoDB connection error
- Verify MONGODB_URI is correct
- Check IP whitelist in MongoDB Atlas
- Ensure MongoDB cluster is running
- Test connection string

### Port already in use
- Change PORT in server/.env
- Or find and kill process using port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  ```

### API calls show loading forever
- Check browser network tab
- Verify backend is running
- Check for CORS errors
- Ensure JSON content-type is set

## Production Deployment

### Frontend (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy the `dist/` folder
3. Set `VITE_API_URL` to production backend URL

### Backend (Heroku/Railway/Render)
1. Set environment variables
2. Run: `npm start`
3. Ensure MongoDB Atlas IP whitelist includes server IP

## Development Notes

### Authentication
Currently, the app has no authentication. Consider adding:
- User login/signup
- JWT tokens
- Rate limiting

### Validation
- Frontend validates name length > 0
- Backend validates and trims names
- No special character restrictions (by design)

### Database
- Duplicate names are allowed (for tracking multiple visits)
- No indexes added yet (add for production)
- Data retention: None (all data is kept)

### Performance
- Fire-and-forget API calls prevent UI blocking
- Mongoose auto-indexes primary fields
- MongoDB connection pooling enabled by default

## Next Steps

1. Add user authentication
2. Implement name analytics/statistics
3. Add delete/edit functionality
4. Set up automated backups
5. Add rate limiting to prevent spam
6. Implement data export features
7. Add admin dashboard

## Support & Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## License

MIT License - Feel free to use this project as a base for your own applications.
