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

/*
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
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea>

        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
*/

/**
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  function signUp(formData) {
    const email = formData.get("email");
    console.log(email);
    const password = formData.get("password");
    console.log(password);
    const employmentStatus = formData.get("employmentStatus");
    console.log(employmentStatus);
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    console.log(dietaryRestrictions);
    const favColor = formData.get("favColor");
    console.log(favColor);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
*/

import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  /**
   * Challenge: see if you can remember how to grab an array of checked
   * items from the dietaryRestrictions checkboxes.
   */

  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const dietaryData = formData.getAll("dietaryRestrictions");
    const allData = {
      ...data,
      dietaryRestrictions: dietaryData,
    };
    console.log(allData);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="blue" required>
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/**

  * Sample output when the form is submitted with dietaryRestrictions values checked but not updated in the form above because of the --- IGNORE --- instruction above where we have to first update the form to check multiple dietary restrictions before submitting:
{email: "joe@schmoe.com", password: "password123", description: "This is a description", employmentStatus: "full-time", dietaryRestrictions: "gluten-free", favColor: "orange"}

 */
