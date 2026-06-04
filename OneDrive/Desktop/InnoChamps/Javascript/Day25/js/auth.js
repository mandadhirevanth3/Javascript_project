function register() {

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  const user = {

    name,
    email,
    password

  };

  fetch("http://localhost:3001/users", {

    method: "POST",

    headers: {

      "Content-Type": "application/json"

    },

    body: JSON.stringify(user)

  })

    .then((response) => response.json())

    .then(() => {

      alert("Registration Successful");

      // GO TO LOGIN PAGE
      window.location.href = "login.html";

    });

}

// LOGIN

function login() {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  fetch("http://localhost:3001/users")

    .then((response) => response.json())

    .then((users) => {

      const validUser = users.find((user) => {

        return (
          user.email === email &&
          user.password === password
        );

      });

      if (validUser) {

        localStorage.setItem(
          "user",
          JSON.stringify(validUser)
        );

        alert("Login Successful");

        window.location.href = "index.html";

      }

      else {

        alert("Invalid Credentials");

      }

    });

}