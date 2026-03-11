# 🎬 YouTube Clone

<div align="center">

![YouTube Clone](https://img.shields.io/badge/YouTube-Clone-red?style=for-the-badge&logo=youtube&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A fully functional YouTube Clone built with React & YouTube Data API v3**

</div>

---

## ✨ Features

- 🏠 **Home Feed** — Browse most popular videos from YouTube in real-time
- 📂 **Category Filtering** — Filter videos by Gaming, Music, Sports, News, Tech & more
- 🎥 **Video Player** — Watch any YouTube video with autoplay support
- 📊 **Video Stats** — View real likes, views, and publish date
- 💬 **Comments Section** — Real YouTube comments with author info & timestamps
- 📺 **Channel Info** — Channel name, profile image & subscriber count
- 🔁 **Recommended Videos** — Related videos based on category
- 📱 **Fully Responsive** — Works on mobile, tablet & desktop

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| ⚛️ **React 18** | Frontend UI & Component Architecture |
| 🔀 **React Router DOM** | Client-side routing & navigation |
| 🎨 **Tailwind CSS** | Utility-first styling & responsive design |
| ⚡ **Vite** | Lightning fast build tool |
| 📅 **Moment.js** | Human-readable timestamps |
| 🌐 **YouTube Data API v3** | Fetching real video, channel & comment data |
| 🧠 **Advanced JavaScript** | Async/Await, fetch API, ES6+ features |

---

## 📁 Project Structure

```
yt-clone/
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx        # Top navigation bar
│   │   ├── SideBar.jsx       # Category sidebar
│   │   ├── Feed.jsx          # Video feed grid
│   │   ├── PlayVideo.jsx     # Video player & details
│   │   └── Recomended.jsx    # Recommended videos
│   ├── Pages/
│   │   ├── Home/
│   │   │   └── Home.jsx      # Home page
│   │   └── Video/
│   │       └── Video.jsx     # Video detail page
│   ├── assets/               # Images & static files
│   ├── data.js               # API key & helper functions
│   └── App.jsx               # Main app & routes
├── public/
├── index.html
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- YouTube Data API v3 Key

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/yt-clone.git

# Navigate to project folder
cd yt-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

### API Key Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable **YouTube Data API v3**
4. Generate an API key
5. Add it to `src/data.js`:

```js
export const myAPI = "YOUR_API_KEY_HERE";
```

---

## 📸 Pages Overview

### 🏠 Home Page
- Displays most popular videos in a responsive grid
- Sidebar with category filters
- Real video thumbnails, titles, channel names & views

### 🎬 Video Page
- Embedded YouTube player with autoplay
- Full video stats (views, likes, date)
- Channel info with subscriber count
- Real comments with profile pictures & timestamps
- Recommended videos sidebar

---

## 🔑 API Endpoints Used

```
GET /videos        → Most popular videos by category
GET /channels      → Channel details & subscriber count  
GET /commentThreads → Video comments
```

---

## ⚠️ Limitations

- Comments & likes are **read-only** (YouTube API restriction)
- YouTube API free tier has **10,000 quota units/day**
- Some category IDs are not supported by YouTube's `mostPopular` chart

---

## 👨‍💻 Author

Made with ❤️ by **Nawab**

![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)

---

<div align="center">

⭐ **If you like this project, give it a star!** ⭐

</div>
