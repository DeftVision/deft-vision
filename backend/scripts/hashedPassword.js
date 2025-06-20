// backend/scripts/hashPassword.js

const bcrypt = require("bcryptjs");

// Grab the password from the command line
const password = process.argv[2];

if (!password) {
    console.error("Please provide a password: node scripts/hashPassword.js SuperSecret!");
    process.exit(1);
}

// Hash the password
bcrypt.hash(password, 10).then((hash) => {
    console.log("Hashed Password:\n", hash);
}).catch((err) => {
    console.error("Failed to hash password:", err.message);
    process.exit(1);
});


// node backend/scripts/hashedPassword.js kungfu
