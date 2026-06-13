# CloudVault Mobile App

A mobile application that allows you to create personal clouds for storing any type of data securely.

## Features
- 📱 Create unlimited personal clouds
- 📁 Store files, documents, images, and any data type
- 🔒 Secure encryption for all data
- ☁️ Sync across multiple devices
- 👥 Share data securely with others
- 🏷️ Organize with folders and tags

## Tech Stack
- **Mobile:** React Native (iOS & Android)
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Storage:** AWS S3
- **Authentication:** JWT

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- React Native CLI
- Android Studio or Xcode (for mobile development)

### Installation

```bash
# Clone the repository
git clone https://github.com/ALLXRUDEMENTRY999/ALLXRUDEMENTRY999.git
cd ALLXRUDEMENTRY999

# Install backend dependencies
cd backend
npm install

# Install mobile dependencies
cd ../mobile
npm install
```

### Running the Backend

```bash
cd backend
npm start
```

The backend server will run on `http://localhost:5000`

### Running the Mobile App

```bash
cd mobile

# For Android
npm run android

# For iOS
npm run ios
```

## Project Structure

```
.
├── backend/           # Node.js Express server
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
├── mobile/            # React Native app
│   ├── screens/
│   ├── components/
│   ├── services/
│   ├── navigation/
│   └── App.js
├── docs/              # Documentation
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create a new account
- `POST /api/auth/login` - Login to account

### Clouds
- `GET /api/clouds` - Get all user clouds
- `POST /api/clouds` - Create a new cloud
- `GET /api/clouds/:id` - Get cloud details
- `DELETE /api/clouds/:id` - Delete a cloud

### Data Storage
- `POST /api/clouds/:id/upload` - Upload file to cloud
- `GET /api/clouds/:id/files` - Get files in cloud
- `DELETE /api/clouds/:id/files/:fileId` - Delete file

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - See LICENSE file for details
