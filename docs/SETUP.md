# CloudVault Setup Guide

## Prerequisites

### For Backend Development
- Node.js 16 or higher
- npm or yarn
- MongoDB (local or cloud)
- AWS S3 account (for file storage)

### For Mobile Development
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development on Mac)
- Simulator or physical device

## Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/cloudvault
   JWT_SECRET=your_jwt_secret_key
   AWS_ACCESS_KEY_ID=your_aws_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## Mobile App Setup

1. Navigate to mobile directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. For Android:
   ```bash
   npm run android
   ```

4. For iOS:
   ```bash
   npm run ios
   ```

## Testing the Application

1. Backend health check:
   ```
   GET http://localhost:5000/api/health
   ```

2. Mobile app will connect to the backend at the specified IP address.

## Troubleshooting

- **Port already in use:** Change PORT in .env file
- **MongoDB connection failed:** Ensure MongoDB is running
- **React Native build errors:** Clear cache with `npm start -- --reset-cache`
