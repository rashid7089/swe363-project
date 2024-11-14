# swe363-project

## (Note: to enter just write in the log in page: 
email: hacker
passwor:1 
 
# Usage Guidelines for Project Showcase Application

## Introduction
This application, **Project Showcase**, allows users to explore, search, and add projects. The app displays projects with their relevant details and allows users to filter by major and year. The system also supports login and signup functionality for authenticated users, ensuring that only users with appropriate roles can add new projects.

The following guidelines are provided to help users navigate and interact with the **Project Showcase** application.

---

## Getting Started
1. **Sign Up or Login:**
   - On first use, a user must sign up or log in to access the full features.
   - Click the **Sign Up** button if you don’t have an account, or the **Login** button to access an existing account.
   - Use your credentials (email and password) to sign in. Once logged in, you'll be redirected to the **Home** page.

2. **Navigating the Home Page:**
   - After logging in, users are directed to the **Home** page, where they can explore the existing projects.
   - You can search for projects by entering keywords in the **Search Projects** bar or filter by **Major** and **Year**.
   - Each project card shows the title, company, and an image. Clicking on a project card will redirect you to the detailed project page.

3. **Adding New Projects:**
   - If your user role is **Senior**, you will have the option to **Add Project**.
   - The **Add Project** button will be visible in the navbar when logged in.
   - Fill in the project details, including the title, team members, project date, description, and image.
   - Click **Upload The Project** to save the project. A success message will confirm the project submission.

---

## Feature Guidelines

### **Authentication**
- Users must log in to view, add, or modify projects. The system supports **Senior** and **Faculty** users.
  - **Senior** users can add projects and view all projects.
  - **Faculty** users can view projects but cannot add new projects.

### **Searching and Filtering Projects**
- **Search Projects**: Use the search bar to find projects by title. The system will filter projects in real-time as you type.
- **Filtering by Major**: Use the **Major** dropdown to filter projects based on the project’s major.
- **Filtering by Year**: Use the **Year** dropdown to filter projects by year.

### **Project Cards**
- Each project card displays:
  - **Title**: The name of the project.
  - **Company/Team**: The organization or team responsible for the project.
  - **Project Image**: A preview image related to the project.
- Clicking a project card will take you to the project’s detailed view.

### **Add New Project (For Senior Users)**
1. **Fields Required:**
   - **Title**: Enter a clear and descriptive title for the project.
   - **Teammates’ Names**: Enter names of all teammates separated by commas.
   - **Teammates’ Majors**: Enter the majors of each teammate, separated by commas.
   - **Project Date**: Select the project date from the calendar.
   - **Description**: Provide a detailed description of the project. Be sure to explain the project's objectives, methods, and outcomes.
   - **Project Image(s)**: Upload one or more images related to the project (e.g., screenshots, diagrams).
   
2. **Form Submission:**
   - After completing the form, click **Upload The Project** to submit.
   - A success message will appear upon successful submission.

---

## Error Handling and Validation
- **Login**: If the email or password is incorrect, an error message will display.
- **Sign Up**: Ensure the email and password meet validation requirements. A confirmation message will show upon successful registration.
- **Add Project**: If any field is left empty, the system will display an error message highlighting the missing information.
  
---

## Role-Based Access
- **Senior Users**: Have full access to all features, including viewing and adding projects.
- **Faculty and Other Users**: Can only view projects, not add new ones.

---

## Important Notes
1. **Data Integrity**: Ensure accurate and complete data when adding projects.
2. **Search Functionality**: The search and filtering tools help narrow down the project list based on your criteria.
3. **Responsiveness**: The app is designed to work on both desktop and mobile devices.

---

## Future Enhancements
1. **Database Integration**: Future versions will allow real-time database integration for storing projects and user data.
2. **User Profile Management**: A user profile page for managing personal information, project submissions, and history.
3. **Advanced Search Filters**: More filtering options will be added in future updates.

---

This concludes the usage guidelines for **Project Showcase**. We hope these instructions will help you understand the app’s features and functionality. Should you encounter any issues, feel free to contact support or consult the FAQ section.
