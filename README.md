# React Todo App

This is a React-based Todo application that allows users to manage their tasks efficiently. It includes features like adding, editing, deleting, and marking tasks as completed, with support for persistent data storage using `localStorage`. The app also includes bonus features such as priority levels for tasks, dark mode, and a responsive design to ensure a smooth user experience across devices.

## Installation

To run this app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/keerthana2624/react-todo-app.git
2. Navigate into the project folder:
   - cd react-todo-app
3. Install the dependencies:
   - npm install
4. Start the development server:
   - npm start
The app will now be running at http://localhost:3000.

# Usage
**Once the app is running:**

## Features
1. **Add Task Functionality**
   - Users can add new tasks with a title and description.
   - Tasks can be assigned a due date.

2. **Task List Display**
   - All added tasks are displayed in a structured list format.
   - Each task shows its title, description, and due date (if applicable).

3. **Mark as Complete**
   - Users can mark tasks as completed.
   - Completed tasks are visually distinct (e.g., using a strikethrough or different colors) to differentiate them from pending tasks.

4. **Delete Task**
   - Users can delete tasks from the list with a simple click.

5. **Filter Tasks**
   - Users can filter tasks based on their status (e.g., All, Completed, Pending) to manage tasks more easily.

6. **Responsive Design**
   - The application is designed to be fully responsive, working seamlessly on both desktop and mobile devices.

7. **Persistent Data**
   - Tasks are stored in `localStorage`, ensuring they remain available even after refreshing the page or closing and reopening the browser.

## Bonus Features

1. **Priority Levels**
   - Tasks can be assigned priority levels such as High, Medium, or Low to help users prioritize their tasks.

2. **Edit Existing Tasks**
   - Users can edit existing tasks, including updating the title, description, due date, and priority.

3. **Dark Mode**
   - The app includes a dark mode feature, allowing users to switch between light and dark themes for a more comfortable viewing experience.

4. **Header and Footer**
   - The app includes a header with links to "About" and "Contact Us" sections.
   - The footer contains information about copyrights, privacy policy, and terms of services.

## Technology Stack

- **Frontend**: React.js
- **State Management**: React `useState` and `useEffect`
- **Data Persistence**: `localStorage`
- **CSS**: Styled using custom CSS for responsive design and user interface customization.

