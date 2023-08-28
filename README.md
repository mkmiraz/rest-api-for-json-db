## REST API With Express Server
```html
    <img src="public/images/express.jpg">

```
This is our first REST API  React js Apps

## Fist Clone Repo and then install packages

```consol
$npm install
```

## Server Stuctures

```js

const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 8080;

// Express init
const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));








// Listen Port
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`.bgCyan.black);
});

```

## Package

* Express js
* Nodemon
* Colors
* Dotenv
* Multer
* Nodemailer