# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

In this group project, we worked on different components using React hooks.

In the pages folder there are

1. Counter.jsx
2. Message.jsx
3. StudentForm.jsx

The first is the Counter in the Count.jsx component. In this project;

- The component uses the useState hook to manage the count state, which is initially set to 0.
- useEffect: Runs a side effect whenever the count changes. If the count is even, it triggers an alert message.
- increment increases the count by 1 when called, and decrement decreases the count by 1 and logs the new value to the console.

- Rendering: The component renders a counter interface with:

* A heading displaying "App Counter".
* A paragraph showing the current count value.
* A div with background styling that contains:
* An increment button to increase the count.
* A span displaying the current count value.
* A decrement button to decrease the count, which is disabled when the count is 0.
* A reset button that sets the count back to 0.

Key Points:

- State Updates: The setCount function is used to update the state. The updater function receives the previous state value (prev) and returns the new state value.
- Effect Hook: The useEffect hook is used to perform a side effect (alert in this case) based on the count value.

The Message component demonstrates a clean and modular way to manage state and style components using styled-components.

- Imports:

* useState: Imported from React, this hook is used to manage the component's state.
* styled: Imported from styled-components to create styled components with CSS-in-JS.

- Message: A functional component that manages a message state and provides a way to update it.

- State Management:

* message: A state variable initialized to "Hello, Welcome to Our Shelter!".
* setMessage: Function to update the message state.
* changeMessage: A function that updates the message state to "Thank you for Visiting Us!" when called.

- Rendering:

* <Container>: Wraps the content with the styled Container component.
* <h1>: Displays the current message.
* <button>: A button element with an onDoubleClick event that triggers changeMessage to update the message.

Key Points:

- Styled Components: The Container styled component is used to style the layout and buttons. This approach encapsulates the styling logic within the component itself.
  (=> styled-components is a popular library for styling React components using a technique known as CSS-in-JS. It allows you to write CSS code directly within your JavaScript or TypeScript files, which helps to encapsulate styles with the components they belong to.)
- State Management: The useState hook manages the message state, allowing dynamic updates based on user interaction.
- Event Handling: The button changes the message when double-clicked, demonstrating how React handles events and state updates.

The StudentForm component provides a simple interface for managing a list of students, allowing users to add new entries and remove existing ones.

- Imports:

* useState: Imported from React to manage state within the component.
* Button: A custom button component imported from the ../component/Button file.

- Component Definition:

* StudentForm: A functional component that allows users to add and delete student records.

- State Management:

* students: An array holding the list of students.
* name: A string holding the name of the student.
* age: A number holding the age of the student.

- Event Handlers:

* updateStudent: Handles form submission to add a new student.
  . Prevents the default form submission behavior using e.preventDefault().
  . Creates a new student object with an incremented ID, name, and age.
  . Updates the students list by appending the new student to the existing array.
  . Resets the form fields to empty or default values.
* deleteStudent: Handles the deletion of a student based on their ID.
  . Filters out the student with the given ID from the students array.
  . Updates the students list with the filtered array.

- Rendering:

* Form Elements:
  . <input> for name: Captures the student’s name and updates the name state on change.
  . <input> for age: Captures the student’s age and updates the age state on change.
  . Button for submission: Submits the form to add a new student.

- Student List:

* Maps over the students array to render each student's name and age along with a delete button.
* Displays student details and a delete button for each student. The delete button calls deleteStudent with the student’s ID when clicked.

Key Points:

- State Management: Uses useState to manage the list of students and form input values.
- Event Handling: Functions to handle form submission and deletion of students.
- Dynamic Rendering: Displays the student list and updates it dynamically based on user interactions.
- Styled Components: Uses a custom Button component for consistent styling and behavior.

In the components folder, there is;

1. Button.jsx

The Button component is designed to be flexible and reusable, allowing customization through props for various aspects such as text, background color, text color, and event handling. It also supports standard button attributes like type and disabled. By using props to control the button’s appearance and behavior, it becomes a versatile component that can be used in different contexts within your application.

- Destructuring Props:
  The props are destructured at the beginning of the function to extract the values. The text prop has a default value of "Test button", which is used if no value is passed.

* Props:
  . text (default: "Test button"): The text to be displayed inside the button. If not provided, it defaults to "Test button".
  . bg: The background color of the button. This is set via inline styles.
  . color: The text color of the button. This is also set via inline styles.
  . onClick: A callback function to handle the button's click event.
  . disabled: A boolean that, if true, disables the button (makes it unclickable).
  . type: Specifies the type of button (e.g., "button", "submit", "reset"). This is a standard attribute for HTML buttons.
  . className: Allows additional CSS classes to be applied to the button. This can be used for styling or applying additional classes.

- Rendering:

* <button> Element: Renders a standard HTML button.
  . disabled={disabled}: Applies the disabled attribute based on the disabled prop. When true, the button is disabled.
  . style={{ background: bg, color: color }}: Applies inline styles to set the background and text color based on the bg and color props.
  . onClick={onClick}: Assigns the click event handler passed via the onClick prop.
  . type={type}: Sets the button type attribute based on the type prop.
  . className={className}: Applies additional CSS classes passed via the className prop.
* Content:
  . {text}: Displays the button text inside the button element.

The App component acts as the root component of the React application, combining multiple components into a single view. Each of the imported components (Count, StudentForm, Message) represents a distinct part of the UI, organized under one main application structure.

- Imports:
  Count, StudentForm, and Message are React components imported from their respective files.
  ./App.css imports a CSS file for global styles.

- Component Function:
  App is a functional React component that renders the three imported components: Count, StudentForm, and Message.
  These components are displayed within a <div>, which is the main container for the application's UI.

- Export:
  The App component is exported as the default export, making it available for use in other parts of the application.
