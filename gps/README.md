# GPS Tracking Application

This is a React Native application that tracks GPS location even when offline and syncs data when connectivity is restored.

## Features

- Real-time GPS tracking
- Background location tracking
- Offline data storage
- Automatic sync when online
- Manual sync option

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. For Android, make sure you have the required permissions in `app.json`

3. Replace the API endpoint in `lib/config.js` with your actual endpoint

4. Run the application:
   ```
   npx expo start
   ```

## Required Permissions

The app requires the following permissions:
- ACCESS_FINE_LOCATION
- ACCESS_COARSE_LOCATION
- ACCESS_BACKGROUND_LOCATION (for background tracking)
- INTERNET

## API Endpoint

The app expects a POST endpoint that accepts JSON data in the following format:

```json
{
  "locations": [
    {
      "lm_device_id": "string",
      "lm_latitude": "string",
      "lm_longitude": "string",
      "lm_device_alias": "string",
      "lm_datetime": "string"
    }
  ]
}
```

## File Structure

- `app/` - Main application screens
- `lib/` - Core functionality (storage, sync, config)
- `background/` - Background task implementation
- `utils/` - Utility functions
- `components/` - Reusable UI components

## How It Works

1. The app requests location permissions from the user
2. Location data is collected and stored locally using AsyncStorage
3. When online, data is automatically synced to the configured API endpoint
4. Data that has been successfully synced is marked and not sent again