#  Installation

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/feedback-form.git
```

---

## 2. Install Frontend Dependencies

```bash
npm install
```

---

## 3. Install Backend Dependencies

```bash
cd server
npm install
```

---

#  Environment Variables

## Backend (.env)

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string
```

---

## Frontend (.env)

Create a `.env` file in the root React project.

```env
REACT_APP_API=http://localhost:5000/api
```

---

#  Running the Project

## Start Backend

```bash
cd server
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

## Start Frontend

Open another terminal.

```bash
npm start
```

Frontend runs on

```
http://localhost:3000
```
