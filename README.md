
# AluraFlix

AluraFlix is a responsive web application designed to showcase video content categorized by different themes such as "Front End", "Back End", and "Innovation and Management". The application allows users to add, edit, and delete video cards dynamically while providing a clean and interactive UI. The project is built with React and features a mobile-first design.

---

## Features

1. **Dynamic Video Management**:
   - Add new videos using a modal form.
   - Edit existing videos inline.
   - Delete videos, with changes synced to the server.

2. **Category Organization**:
   - Videos are grouped by categories, each with a unique scrollable section.

3. **Mobile-Friendly Design**:
   - Header becomes the Footer on mobile devices.
   - The Footer is hidden on smaller screens for better usability.
   - Each category has a horizontal slider for video cards on tablets and mobile devices.

4. **Responsive Design**:
   - Fully responsive layout for desktop, tablet, and mobile devices.
   - Custom styles for video cards, sliders, and modals.

5. **JSON Server Backend**:
   - Data is stored and managed via a JSON Server.
   - Fetch, POST, and DELETE requests are made to update the server dynamically.

---

## Technologies Used

- **Frontend**:
  - React.js (Functional Components and Hooks)
  - CSS3 with Media Queries for responsive design
  - JSX for templating and component-based architecture

- **Backend**:
  - JSON Server for simulating a REST API
  - Fetch API for asynchronous communication

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/aluraflix.git
   cd aluraflix
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the JSON Server:
   ```bash
   npx json-server --watch db.json -p 5000
   ```

4. Start the React development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at:
   ```bash
   http://localhost:3000
   ```

---

## Usage

### Adding a New Video
1. Click on the "New Video" button in the header.
2. Fill out the form with the video's details (title, category, image link, video link, description).
3. Click "Save" to add the video to the appropriate category.

### Editing a Video
1. Click the "Edit" button on the video card.
2. Update the details in the inline form.
3. Save the changes, and the video card will be updated.

### Deleting a Video
1. Click the "Delete" button on the video card.
2. The video will be removed from the category and deleted from the backend.

---

## Project Structure

```
src/
│
├── components/
│   ├── Banner/               # Hero banner component
│   ├── Categorias/           # Category and video card listing
│   ├── Footer/               # Footer component
│   ├── Header/               # Header component
│   ├── MainContainer/        # Main content container
│   ├── NewVideoForm/         # Modal form for adding videos
│   └── VideoCard/            # Video card components
│
├── App.css                   # Global styles
├── App.js                    # Main React component
├── index.js                  # Entry point
└── db.json                   # Mock database for JSON Server
```

---

## Responsive Design Behavior

### Desktop
- Header is fixed at the top.
- Footer remains fixed at the bottom.
- Videos are displayed in a grid layout by category.

### Mobile
- Header acts as the Footer and moves to the bottom.
- The actual Footer is hidden.
- Each category has a horizontal slider for navigating video cards.

---

## APIs

1. **GET Videos**:
   - URL: `http://localhost:5000/videos`
   - Fetches all videos.

2. **POST a Video**:
   - URL: `http://localhost:5000/videos`
   - Adds a new video with the required fields.

3. **DELETE a Video**:
   - URL: `http://localhost:5000/videos/<ID>`
   - Deletes a video by its ID.

---


## Future Enhancements

- Implement authentication for managing video content.
- Add drag-and-drop functionality for reordering videos within categories.
- Improve UI with animations and transitions.

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
