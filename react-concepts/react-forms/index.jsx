/*
import React from "react";
import ReactDOM from "react-dom/client";

// Form submission handler
function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    console.log(email);

    // Gather the info from the form
    // Submit it to a backend
    formEl.reset();
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
*/

import React from "react";
import ReactDOM from "react-dom/client";

// Form submission handler using the action attribute
function App() {
  function signUp(formData) {
    const email = formData.get("email");
    console.log(email);
    const password = formData.get("password");
    console.log(password);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
