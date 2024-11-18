Here’s a structured and well-detailed README file for your **Online Library System** React assignment:

---

# Online Library System 📚  

An online library system where users can explore books by category, view details of each book, add new books, and navigate seamlessly through a user-friendly interface.

---

## Table of Contents  
- [Overview](#overview)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  
- [License](#license)  

---

## Overview  
The **Online Library System** is a React-based application that allows users to:  
- Browse books by category.  
- View detailed information about individual books.  
- Add new books using a form with validation.  
- Handle undefined routes with a 404 error page.  

This project demonstrates skills in React development, including dynamic routing, state management with Redux, and form handling.  

---

## Features  

1. **Home Page**  
   - Welcome message with a list of book categories.  
   - Display of popular books with a link to view more details.  
   - Navigation bar with links to Home, Browse Books, and Add Book.  

2. **Browse Books Page**  
   - List of books filtered by category.  
   - Dynamic routing to display books by category.  
   - Search functionality to filter books by title or author.  

3. **Book Details Page**  
   - Detailed view of a selected book, including title, author, description, and rating.  
   - A "Back to Browse" button to return to the Browse Books page.  

4. **Add Book Page**  
   - A form for adding new books with proper validation.  
   - Redux integration to manage the state of the book list.  
   - Redirection to the Browse Books page after successful form submission.  

5. **404 Page**  
   - Custom error page for undefined routes with a link back to the Home page.  

6. **Submission Ready**  
   - GitHub repository link with instructions for running the project.  

---

## Project Structure  

```
src  
├── main.jsx            # Routing and rendering entry point  
├── app.jsx             # Main app layout with Navbar and Outlet  
├── components  
│   ├── Navbar.jsx      # Navigation bar and hero section  
│   ├── BookList.jsx    # Displays book categories, search box, and book data  
│   ├── Book.jsx        # Displays individual book data (child of BookList)  
│   ├── BookDetails.jsx # Detailed view of a book  
│   ├── AddBook.jsx     # Form for adding a new book  
│   ├── BrowserBook.jsx # All books displayed  
│   ├── Error.jsx       # 404 Page Not Found component  
├── redux               # Redux store and slices for managing state  
├── mockData            # Dummy data for books  
├── styles              # CSS and styling  
└── assets              # Static assets (images, icons)  
```

---

## Tech Stack  

- **Frontend**: React, React Router, Redux  
- **Styling**: CSS or any preferred framework (e.g., Tailwind, Bootstrap)  
- **State Management**: Redux  
- **Routing**: React Router  

---

## Installation  

1. Clone the repository:  
   ```bash  
   git clone <repository_link>  
   cd online-library-system  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Run the development server:  
   ```bash  
   npm run dev  
   ```  

4. Open in your browser:  
   Navigate to `http://localhost:5173/` (or the specified port).  

---

## Usage  

1. Explore categories on the **Home Page**.  
2. Browse books using the **Browse Books Page**.  
3. View detailed information about a book by clicking "View Details."  
4. Add new books via the **Add Book Page**.  
5. Test undefined routes to view the **404 Page**. 




### **Navbar Component Documentation**

#### **Purpose**  
The **Navbar** component provides navigation for the Online Library System. It includes links to the **Home**, **Browse Books**, and **Add Book** pages. It also handles responsive design for mobile users with a collapsible menu.  

---

#### **Features**  
1. **Logo and Title**: Displays the app logo and title.  
2. **Navigation Links**: Links to key pages - Home, Browse Books, and Add Book.  
3. **Responsive Menu**: Collapsible menu for smaller screens.  
4. **Hero Section**: Displays below the navbar.  

---

#### **Key Functionality**  
- Uses `menuOpen` state to toggle the visibility of the menu on mobile devices.  
- Integrates React Router’s `Link` for smooth navigation.  

![alt text](image.png)

---

### **HeroSection Component Documentation**

#### **Purpose**  
The **HeroSection** component is the visually appealing header section of the Online Library System. It welcomes users with a motivational message and sets the tone for the platform.

---

#### **Features**  
1. **Background Styling**:  
   - Uses `bg-cover` and `bg-center` classes to set a full-screen background image.  
   - Applies a dark overlay (`bg-black bg-opacity-50`) for better text visibility.

2. **Center Content**:  
   - Displays a bold welcome message (`text-5xl font-bold`).  
   - Includes a descriptive tagline with consistent spacing (`text-lg mb-8`).  

3. **Tailwind-CSS Based**:  
   - Fully styled using Tailwind CSS for simplicity and responsiveness.  

---

![alt text](image-1.png)


---

### **BookList Component Documentation**

#### **Purpose**  
The **BookList** component displays a list of books filtered by category or search text. It allows users to browse books by category, search for specific books, and view book details by clicking on a book.

---

### **Component Overview**  

#### **1. Category Buttons**  
- Displays buttons for different categories (e.g., Fiction, Non-Fiction).  
- Clicking a button filters books by the selected category.  
- Fully responsive and styled using Tailwind CSS. 

![alt text](image-2.png)

---

#### **2. Search Bar**  
- Allows users to search books by title.  
- Dynamically filters books as the user types in the search bar.

![alt text](image-3.png)

---

#### **3. Book Render Section**  
- Displays the filtered list of books in a grid layout.  
- Each book is clickable and navigates to the **Book Details** page.  

![alt text](image-4.png)

---

### **Features and Functionality**

#### **Category Buttons**  
- **Dynamic Links**:  
  Each button links to a specific category using React Router's `Link`.  
- **Styling**:  
  Uses Tailwind classes for hover effects and transitions.  

#### **Search Bar**  
- **Controlled Input**:  
  The `searchText` state dynamically filters books based on the entered text.  
- **Interactive UI**:  
  Includes a focus effect with `focus:ring` for better UX.  

#### **Book Rendering**  
- **Dynamic List**:  
  Uses the `filterBook` state to render only the books that match the selected category or search text.  
- **Reusability**:  
  Each book is passed as a prop to the `Book` component for rendering.  

---

### **Props and State**  
1. **Props**:  
   - `books`: Array of book data imported from mock data.  
   - `Book`: Reusable component to render individual book details.  

2. **State**:  
   - `searchText`: Tracks the search input value.  
   - `filterBook`: Stores the filtered list of books based on category or search input.  
  

---

### **Book Component Documentation**

#### **Purpose**  
The **Book** component is a reusable card layout used to display individual book details like the title, year, category, and image. It includes a "View More" button for navigation.


![alt text](image-5.png)

---

### **Features**

1. **Responsive Card Design**  
   - Adjusts size and spacing dynamically based on the screen size (`sm`, `md`, `lg` breakpoints).  

2. **Book Details**  
   - Displays the book’s title, year, category, and image.  

3. **Interactive UI**  
   - Includes hover effects for a smooth user experience (`hover:scale-105` on the card and `hover:bg-blue-600` on the button).  

4. **View More Button**  
   - Placeholder for additional functionality or navigation.  

---

### **Component Props**

- **`book` (Object)**: Contains details about the book to be displayed.  
  - `imageLink`: URL of the book's cover image.  
  - `title`: Title of the book.  
  - `year`: Year the book was published.  
  - `category`: Category or genre of the book.  
  
---

### **Key Functionality**
- **Responsive**: Adapts to all device sizes.  
- **Dynamic Content**: Displays book data based on the `book` prop.  
- **Interactive**: Includes hover animations for better user engagement.  

---


### **BookDetails Component Documentation**

#### **Purpose**  
The **BookDetails** component is used to display detailed information about a specific book. It retrieves the book's details dynamically based on its ID from the URL parameters.

![alt text](image-6.png)

---

### **Features**

1. **Dynamic Content**  
   - Fetches the specific book's details using the `id` from the URL.  
   
2. **Detailed Information**  
   - Displays various attributes of the book, including title, author, category, language, pages, year, rating, and publication date.

3. **Back Navigation**  
   - Provides a button to navigate back to the book list.

4. **Responsive Layout**  
   - Adjusts its layout for better readability on various screen sizes, with a two-column design for larger screens.

---

### **Component Props**

- **No Props**: This component does not take direct props. It fetches the book data using URL parameters.

---

### **Key Functionality**

1. **Fetch Data by ID**  
   - Extracts the `id` from the URL using `useParams` and finds the corresponding book from a predefined dataset (`mockData`).

2. **Dynamic Rendering**  
   - Displays the book's details dynamically based on the retrieved data.  

3. **Navigation**  
   - Includes a "Back to Books" button that navigates to the `/books/All` route for user convenience.

---

### **Edge Cases**
- If no book is found with the given ID, additional handling (e.g., an error message or redirection) should be implemented for robustness.

---


### **BrowseBooks Component Documentation**

#### **Purpose**  
The **BrowseBooks** component is designed to display a collection of books in a grid layout, allowing users to browse through them and navigate to individual book details.

![alt text](image-7.png)

---

### **Features**

1. **Book Collection Display**  
   - Dynamically lists all books available in the `mockData` file.  

2. **Book Navigation**  
   - Each book is presented as a clickable card. Clicking on a card navigates the user to the details page for that book.

3. **Responsive Design**  
   - The grid adjusts seamlessly across various screen sizes, ensuring a consistent user experience.

---

### **Component Props**

- **No Props**: The component does not accept any props. It uses the `books` dataset imported from `mockData`.

---

### **Key Functionality**

1. **Dynamic Grid Rendering**  
   - Maps through the `books` array to create individual book cards.  
   
2. **Book Cards**  
   - Each card includes:  
     - Book Cover Image  
     - Title  
     - Author  
     - Category  

3. **Navigation**  
   - Each card is wrapped in a `Link` that directs users to the details page of the selected book using its `id`.


---


### **AddBook Component Documentation**

#### **Purpose**  
The **AddBook** component allows users to add a new book to the existing `books` dataset by filling out a form with details such as title, author, category, and other attributes.


![alt text](image-8.png)
---

### **Features**

1. **Form Input for Book Details**  
   - A comprehensive form captures all necessary details about a book, such as:
     - Title  
     - Author  
     - Category  
     - Image Link  
     - Language  
     - Number of Pages  
     - Publication Date  
     - Year  
     - Rating  

2. **Dynamic Data Handling**  
   - Uses React's `useState` hook to manage form input state dynamically.

3. **Book Addition**  
   - On form submission, the book is added to the `books` dataset with a unique ID.

4. **Input Validation**  
   - Ensures all fields are completed before submission.

5. **Confirmation Feedback**  
   - Displays a success message (`alert`) once the book is added.

---

### **Component Props**

- **No Props**: The component does not accept any props. It directly interacts with the `books` dataset.

---

### **Key Functionalities**

1. **Form Handling**  
   - The `handleChange` function updates the form's state dynamically based on user input.

2. **Form Submission**  
   - The `handleSubmit` function:
     - Prevents the default form behavior using `e.preventDefault()`.
     - Adds the new book to the `books` dataset.
     - Clears the form fields after successful submission.

3. **ID Assignment**  
   - Assigns a unique ID to each new book by taking the length of the `books` array and incrementing it by 1.

4. **Field Parsing**  
   - Converts numeric inputs (`pages`, `year`, `rating`) to their respective types (integer or float) to ensure correct data handling.

---

### **Styling**  
The form is styled for a clean, responsive, and user-friendly experience, with:
- Consistent margins and paddings for proper spacing.
- Input focus effects for better user interaction.
- Hover and transition effects on buttons.

---

### **ErrorPage Component Documentation**

#### **Purpose**  
The **ErrorPage** component displays a custom 404 error page when users navigate to an undefined or non-existent route in the application.

![alt text](./asserts/readMeImage/image-9.png)
---

### **Features**

1. **Clear Error Message**  
   - A visually striking **"404"** message to immediately inform users that the requested page is unavailable.

2. **Navigation Assistance**  
   - Includes a **Back to Home** button to guide users back to the main page.

3. **Responsive Design**  
   - Fully responsive layout, ensuring a seamless experience across different screen sizes.

---

### **Key Elements**

1. **404 Error Display**  
   - Prominent, bold **"404"** text styled in blue to draw attention.

2. **Error Message**  
   - A concise, user-friendly message: **"Oops! Page Not Found"**, to reassure users that the issue is with navigation, not the system.

3. **Navigation Button**  
   - A clickable button styled with hover effects, redirecting users to the home page.

---

### **Styling Details**

- **Layout**  
  - Flexbox layout centers the content both horizontally and vertically.  

- **Color Scheme**  
  - Uses a soft gray background with contrasting blue for the primary error message and button.

- **Button Interaction**  
  - Hover effects provide feedback, enhancing the user experience.

---

### **Component Props**

- **No Props**: The component does not accept props and serves as a static fallback for incorrect routes.

---


