## Version 1.4.0 (2024-03-30)

### New Features
- Enhanced Firmware Manager
  - Added ability to schedule firmware updates
  - Display scheduled update times for each device
- Improved user interface for firmware management
  - Added dialog for scheduling updates
  - Improved layout and responsiveness of the Firmware Manager component

### Improvements
- Enhanced error handling and user feedback in firmware management
- Added refresh functionality to update device information in real-time

### API Changes
- Added new API endpoints:
  - POST /api/devices/[id]/firmware/schedule: Schedule a firmware update for a specific device
  - GET /api/devices/[id]/firmware/schedule: Retrieve scheduled update information for a specific device

### Bug Fixes
- Fixed issue with progress bar not resetting after firmware update completion

### Security
- Implemented input validation for scheduled update times
- Ensured proper error handling for API requests in the Firmware Manager component

