import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Hi, I'm Joyce</h1>
      <img src="https://via.placeholder.com/350" alt="My profile pic" />

      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <a href="https://github.com/joyce">GitHub</a>
      <a href="https://linkedin.com/in/joyce">LinkedIn</a>

      <h2>Newsletter Signup</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <fieldset>
            <legend>Select your interests:</legend>
            <div>
              <input
                type="checkbox"
                id="react"
                value="React"
                onChange={handleInterestChange}
              />
              <label htmlFor="react">React</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="javascript"
                value="JavaScript"
                onChange={handleInterestChange}
              />
              <label htmlFor="javascript">JavaScript</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="css"
                value="CSS"
                onChange={handleInterestChange}
              />
              <label htmlFor="css">CSS</label>
            </div>
          </fieldset>

          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <div>
          <h3>Thank you for signing up, {name}!</h3>
          <p>Your interests: {interests.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
