# KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern **online friend management and relationship tracking web application** designed to help users stay connected with their friends through reminders, interaction tracking, and visual analytics.

It allows users to monitor communication frequency, log interactions (Call, Text, Video), and visualize friendship activity using charts — all in a clean, responsive UI.

---

## Live Demo

 Live Site: [https://keenkeeper.vercel.app]()
 GitHub Repo: [https://github.com/quantumrahman/keen-keeper]()

---

## Technologies Used

- React.js — Frontend UI development
- Tailwind CSS — Styling & responsive design
- Chart.js — Data visualization (Pie Chart analytics)
- Custom Toast System — Built from scratch for notifications
- React Router DOM — Page navigation
- Vercel — Deployment platform

---

## Key Features

### 1. Home Dashboard

- Beautiful hero banner with call-to-action
- Summary cards for quick insights
- Grid layout showing all friends dynamically from JSON

### 2. Friend Management System

- Displays 8 realistic friend profiles from local JSON
- Friend cards include:
  - Profile picture
  - Name
  - Days since last contact
  - Tags
  - Status indicator (overdue / almost due / on-track)
- Clickable cards navigate to detailed profile page

### 3. Friend Detail Page

- Two-column layout (Figma-based design)
- Friend profile info (bio, email, tags, status)
- Action buttons (Snooze, Archive, Delete)
- Relationship stats cards (goal, last contact, next due date)
- Quick check-in actions:
  - Call
  - Text
  - Video

These actions:

- Add timeline entries automatically
- Trigger custom toast notifications

### 4. Timeline System

- Logs all interactions (Call / Text / Video)
- Displays:
  - Date
  - Interaction icon
  - Title (e.g., “Call with John Doe”)
- Supports filtering by interaction type

### 5. Friendship Analytics

- Pie chart visualization using Chart.js
- Shows distribution of:
  - Calls
  - Texts
  - Video calls

### 6. Timeline Filtering (Challenge Feature)

- Filter timeline entries by:
  - Call
  - Text
  - Video

### 7. Extra Features

- Fully responsive (Mobile / Tablet / Desktop)
- Custom 404 Not Found page
- Loading spinner while fetching data
- Persistent routing without reload errors
- Smooth UX with toast notifications

---

## Learning Highlights

While building this project, I learned:

* State management in React
* Component-based architecture
* Dynamic routing with React Router
* Data visualization using Chart.js
* Building reusable UI components
* Custom toast notification system

---

## Author

Developed by **Rakibul Rahman**

---

## License

This project is created for educational purposes and assignment submission.
