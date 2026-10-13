const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

// Return a Promise that settles after a simulated 2-second check.
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    console.log("Checking credentials...");

    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful! Welcome, admin.");
      } else {
        reject(new Error("Invalid username or password."));
      }
    }, 2000);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  loginBtn.disabled = true;
  loginBtn.textContent = "Checking...";
  message.className = "message pending";
  message.textContent = "Checking credentials... Please wait.";

  loginUser(username, password)
    .then((result) => {
      message.className = "message success";
      message.textContent = result;
      console.log(result);
    })
    .catch((error) => {
      message.className = "message error";
      message.textContent = error.message;
      console.error(error.message);
    })
    .finally(() => {
      loginBtn.disabled = false;
      loginBtn.textContent = "Log in";
    });
});
