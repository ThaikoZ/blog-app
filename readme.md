# BLOG APP README

## Description

This project is a simple blog site implemented using Django for the backend API and React.js for the frontend user interface. The blog allows users to read posts categorized by tags.

## Project Structure

```
BLOG APP/
├── backend/
│   ├── blog/
│   │   ├── <backend_files>
│   │   ├── ...
│   ├── manage.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── <frontend_files>
│   │   ├── ...
│   ├── package.json
│   ├── package-lock.json
```

## Backend

The backend is developed using Django and provides the following endpoints:

- `/posts/`: Retrieves a list of all posts.
- `/posts/<id>/`: Retrieves details of a specific post by ID.
- `/tags/`: Retrieves a list of all tags available.
- `/tags/<id>/`: Retrieves details of a specific tag by ID.

### Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ThaikoZ/blog-app
   cd blog-app
   ```

2. **Backend Setup**:

   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Create virtual env and install dependencies:
     ```bash
     pip install -m pipenv
     pipenv install
     ```
     or install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Apply database migrations:
     ```bash
     python manage.py migrate
     ```
   - Run the Django development server:
     ```bash
     python manage.py runserver
     ```
   - The API endpoints will be available at `http://127.0.0.1:8000/`.

3. **Frontend Setup**:

   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm run dev
     ```
   - The frontend will be accessible at `http://localhost:5173/`.

4. **Accessing the Application**:
   - Open your web browser and go to `http://localhost:5173/` to access the blog site.

## Technology Stack

- **Backend**: Django
- **Frontend**: React.js
- **Database**: SQLite (default for Django)

## Additional Notes

- Customize and extend the project as per your requirements.
- Ensure both backend and frontend servers are running concurrently for the full functionality of the blog.
- Add authentication, authorization, or other features as needed for a complete application.

---

Feel free to add more details such as deployment instructions, troubleshooting tips, or any additional features specific to your project. Adjust the paths, URLs, and commands according to your project structure and setup preferences.
