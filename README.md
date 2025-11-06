# Travel Expense Tracker

A full-stack application for tracking travel expenses and reimbursements, built with React (Vite) and Node.js (Express).

## Features

- ✅ Add new expenses with date, purpose, and amount
- ✅ View all expenses in a table
- ✅ Delete expenses
- ✅ Real-time updates after adding expenses
- ✅ Responsive design

## Tech Stack

### Frontend
- React 19
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- CORS
- dotenv

## Project Structure

```
travel-expense-tracker/
├── backend/
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expenseRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ExpenseForm.jsx
│   │   │   └── ExpenseList.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `frontend` directory:
```env
VITE_API_BASE_URL=http://localhost:4000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Deployment on Render

### Backend Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the service:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment**: Node
4. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string (MongoDB Atlas recommended)
   - `PORT`: 4000 (or leave blank for Render to assign)
   - `NODE_ENV`: production
   - `FRONTEND_URL`: Your frontend URL (after deployment)

### Frontend Deployment

1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Configure the service:
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`
4. Add environment variable:
   - `VITE_API_BASE_URL`: Your backend URL (e.g., `https://your-backend.onrender.com`)

### Alternative: Using render.yaml

1. Push the `render.yaml` file to your repository
2. In Render dashboard, go to "New" → "Blueprint"
3. Connect your repository
4. Render will automatically detect and use the `render.yaml` configuration
5. Set the environment variables in the Render dashboard for each service

## Environment Variables

### Backend (.env)
- `MONGO_URI`: MongoDB connection string
- `PORT`: Server port (default: 4000)
- `NODE_ENV`: Environment (development/production)
- `FRONTEND_URL`: Frontend URL for CORS (optional)

### Frontend (.env)
- `VITE_API_BASE_URL`: Backend API URL

## API Endpoints

- `GET /` - Health check
- `GET /health` - Health check endpoint
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create a new expense
- `DELETE /api/expenses/:id` - Delete an expense

## MongoDB Setup

### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/travel-expenses`

### MongoDB Atlas (Recommended for Production)
1. Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Add your IP to the whitelist
5. Use the connection string in your `.env` file

## Troubleshooting

### Backend won't start
- Check if MongoDB is running (if using local MongoDB)
- Verify `MONGO_URI` is set correctly in `.env`
- Check if port 4000 is available

### Frontend can't connect to backend
- Verify `VITE_API_BASE_URL` is set correctly
- Check if backend is running
- For local development, ensure CORS is configured (already done)
- For production, check CORS settings and frontend URL

### Render deployment issues
- Ensure all environment variables are set in Render dashboard
- Check build logs for errors
- Verify MongoDB Atlas allows connections from Render's IPs (0.0.0.0/0)

## License

MIT

