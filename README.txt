FAKE LOGIN SYSTEM — JAVASCRIPT PROMISE PRACTICE

How to run:
1. Extract this ZIP file.
2. Open index.html in a browser.
3. Enter username: admin
4. Enter password: 1234
5. Click Log in and wait 2 seconds.

To test failure, enter any other username or password.

Promise concepts practised:
- new Promise((resolve, reject) => ...)
- setTimeout() to simulate a delayed check
- resolve() for success
- reject() for failure
- .then() to handle success
- .catch() to handle errors
- .finally() to reset the button in either case

Important:
This is a learning demo only. It checks credentials in browser JavaScript and is NOT secure authentication.
Real login systems must verify credentials on a server and must never store passwords in frontend code.
