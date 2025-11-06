# Quick Setup & Testing Guide

## Step 1: Set Up Environment Variables

### Backend Setup
1. Navigate to the backend folder:
```bash
cd backend
```

2. Create a `.env` file:
```bash
touch .env
```

3. Add the following to `backend/.env`:
```env
MONGO_URI=mongodb://localhost:27017/travel-expenses
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Note:** If you're using MongoDB Atlas instead of local MongoDB, replace `MONGO_URI` with your Atlas connection string.

### Frontend Setup
1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Create a `.env` file:
```bash
touch .env
```

3. Add the following to `frontend/.env`:
```env
VITE_API_BASE_URL=http://localhost:4000
```

## Step 2: Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## Step 3: Start MongoDB (if using local MongoDB)

**Option A: Local MongoDB**
```bash
# On macOS (if installed via Homebrew)
brew services start mongodb-community

# Or manually start
mongod
```

**Option B: MongoDB Atlas (Recommended)**
- Use your MongoDB Atlas connection string in the backend `.env` file
- No local setup needed

## Step 4: Start the Backend Server

In one terminal:
```bash
cd backend
npm start
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server running on port 4000
📍 Environment: development
```

If you see errors:
- **MongoDB connection error**: Check if MongoDB is running or your MONGO_URI is correct
- **Port already in use**: Change the PORT in `.env` or kill the process using port 4000

## Step 5: Start the Frontend Server

In a **new terminal**:
```bash
cd frontend
npm run dev
```

You should see:
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

## Step 6: Test the Application

1. **Open your browser** and go to: `http://localhost:3000`

2. **Test adding an expense:**
   - Fill in the form with:
     - Date: Any date
     - Purpose: e.g., "Client Meeting"
     - Amount: e.g., 1500
   - Click "Add Expense"
   - You should see: "✅ Expense added successfully!"
   - The expense should appear in the table below

3. **Test viewing expenses:**
   - The expense you just added should appear in the "All Expenses" table
   - Check that the date, purpose, and amount are displayed correctly

4. **Test deleting an expense:**
   - Click the "Delete" button next to any expense
   - The expense should disappear from the table

5. **Test backend API directly:**
   - Open: `http://localhost:4000` - Should show backend message
   - Open: `http://localhost:4000/health` - Should show `{"status":"ok","message":"Server is healthy"}`
   - Open: `http://localhost:4000/api/expenses` - Should show JSON array of expenses

## Troubleshooting

### Backend won't start
- Check if MongoDB is running: `mongosh` (or `mongo` in older versions)
- Verify `.env` file exists in `backend/` folder
- Check if port 4000 is available: `lsof -i :4000`

### Frontend can't connect to backend
- Make sure backend is running on port 4000
- Check browser console (F12) for errors
- Verify `VITE_API_BASE_URL` in frontend `.env` is `http://localhost:4000`

### MongoDB connection issues
- For local MongoDB: Ensure MongoDB is running
- For MongoDB Atlas: Check your connection string and whitelist your IP address
- Test connection: `mongosh "your_connection_string"`

### CORS errors
- Backend CORS is configured to allow all origins in development
- If you see CORS errors, check that `FRONTEND_URL` in backend `.env` matches your frontend URL

## Quick Test Commands

```bash
# Test backend health
curl http://localhost:4000/health

# Test getting expenses
curl http://localhost:4000/api/expenses

# Test adding an expense
curl -X POST http://localhost:4000/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"date":"2024-01-15","purpose":"Test","amount":100}'
```

