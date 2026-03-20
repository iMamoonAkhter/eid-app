# Quick Start Guide

Get the full Eid Greeting app running in < 5 minutes!

## Prerequisites Check

```bash
# Check Node.js installed
node --version  # Should be v16+

# Check npm installed
npm --version   # Should be v7+
```

## Start Backend

```bash
# Terminal 1
cd server
npm start          # Or: npm run dev (for auto-reload)
```

✅ Server should print: `Server running on http://localhost:5000`

## Start Frontend

```bash
# Terminal 2
cd client
npm run dev
```

✅ Browser should open: `http://localhost:5173`

## Test It!

1. **Form Test:**
   - Type your name
   - Click "Generate Wish"
   - See greeting immediately
   - No spinners or messages

2. **Direct URL Test:**
   - Open: `http://localhost:5173/name=Imran`
   - See greeting page
   - Greeting appears instantly

3. **Check Database:**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Navigate to your cluster
   - Open Collections → eid-greeting → visitors
   - See your names with timestamps ✓

## That's It!

Your full-stack app is running:
- ✅ React frontend with beautiful animations
- ✅ Express backend recording names
- ✅ MongoDB storing visitor data
- ✅ API calls (fire-and-forget, non-blocking)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't start | Check MONGODB_URI in `server/.env` |
| Can't see names in DB | Ensure backend is running, check MongoDB connection |
| API calls not working | Verify VITE_API_URL in `client/.env` = `http://localhost:5000` |
| Port 5000 in use | Change PORT in `server/.env` to 5001 |

## What's Running

```
Frontend:  http://localhost:5173  (React app)
Backend:   http://localhost:5000  (Express API)
Database:  MongoDB Atlas (Cloud)
```

## Next: View Full Docs

- **Detailed Setup:** See [SETUP.md](SETUP.md)
- **API Reference:** See [BACKEND_INTEGRATION.md](BACKEND_INTEGRATION.md)
- **Server Docs:** See [server/README.md](server/README.md)

## Key Features

✨ Beautiful Eid greeting with animations
🎉 Social share buttons (WhatsApp, Facebook, X)
📱 Fully responsive design
🎊 Confetti effects
💫 Glassmorphism UI
🔄 Fire-and-forget API (non-blocking)
📊 MongoDB data storage
🚀 Production-ready backend

Enjoy! 🎉
