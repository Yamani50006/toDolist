# toDolist

A simple and intuitive to-do list application built with Next.js, Zustand, and Tailwind CSS.

## Features and Functionality

*   **Add Tasks:**  Easily add new tasks to your list using the input field and "Add" button.
*   **Mark as Complete:** Check the checkbox next to a task to mark it as completed. This also applies a strikethrough style.
*   **Edit Tasks:**  Click the edit icon (BiEdit) to open a dialog and modify the task title.
*   **Delete Tasks:** Remove tasks from the list by clicking the trash icon (FaTrash).
*   **Task Counter:**  Displays the number of completed tasks.
*   **Responsive Design:**  The application is designed to be responsive and work well on different screen sizes.

## Technology Stack

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) - React framework for building performant web applications.
    *   [React](https://reactjs.org/) - JavaScript library for building user interfaces.
    *   [Zustand](https://github.com/pmndrs/zustand) -  Small, fast and scaleable bearbones state-management solution.
    *   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
    *   [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components for building high-quality design systems and user interfaces. Used for the `Dialog` component.
    *   [Lucide React](https://lucide.dev/) - Beautifully simple, pixel-perfect icons. Used for the `XIcon` in the dialog component.
    *   [react-icons](https://react-icons.github.io/react-icons) - Include popular icons in your React projects easily. Used for delete and edit icons.
*   **State Management:**
    *   Zustand

## Prerequisites

*   [Node.js](https://nodejs.org/) (version 18 or later recommended)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/Yamani50006/toDolist.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd toDolist
    ```

3.  Install dependencies using npm or yarn:

    ```bash
    npm install
    # or
    yarn install
    ```

## Usage Guide

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

3.  **Adding Tasks:**
    *   Type the task title in the input field located below the "Home List" heading.
    *   Click the "Add" button to add the task to the list.

4.  **Completing Tasks:**
    *   Click the checkbox next to the task to toggle its completion status. Completed tasks will have a strikethrough applied.

5.  **Editing Tasks:**
    *   Click the edit icon (BiEdit) next to the task you want to edit.  A dialog box will appear.
    *   Modify the task title in the input field within the dialog.
    *   Click the "Edit" button to save the changes.

6.  **Deleting Tasks:**
    *   Click the trash icon (FaTrash) next to the task you want to delete.

## API Documentation

This project does not have an external API.  All task data is managed in the client-side state using Zustand.  The state is managed within the `src/store/useStore.ts` file.

## Contributing Guidelines

Contributions are welcome!  Here's how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the `main` branch of the original repository.

Please ensure your code adheres to the existing coding style and includes appropriate tests.

## License Information

No license specified. All rights reserved by the author.

## Contact/Support Information

For questions or support, please contact [Yamani50006](https://github.com/Yamani50006) through GitHub.