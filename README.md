### Social Media Backend

---

 <h4/> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="darkblue" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg> fakebook</h4>

---

<img src="./src/img/1.jpeg"/>

---

Very thanks for interest in my fifth project with Geekshubs Academy of the Full Stack Development Bootcamp 🚀.

---

#### Description

The project consists of creating a social network where users can register, access the network and interact with each other.
Users can also follow or unfollow other users, write comments on their profiles or posts.

---

[![GITHUB]][github-url][![DOCKER]][docker-url][![Mongo][MongoDB]][MongoDB-url][![Node][Node.JS]][Node.JS-url][![Express][Express.js]][Express.js-url][![js]][js-url][![JWT]][JWT-url]

[JWT]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[JWT-url]: https://jwt.io/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/es
[Node.JS]: https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white
[Node.JS-url]: https://nextjs.org/
[MYSQL]: https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white
[MYSQL-url]: https://www.mysql.com/
[GITHUB]: https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://www.github.com/
[GIT]: https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white
[git-url]: https://git-scm.com/
[LINKEDIN]: https://img.shields.io/badge/linkedin-0274B3?style=for-the-badge&logo=linkedin&logoColor=white
[LINKEDIN-url]: https://www.linkedin.com/
[JS]: https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black
[js-url]: https://developer.mozilla.org/es/docs/Web/JavaScript
[DOCKER]: https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[sequelize-url]: https://www.sequelize.org/
[gmail-url]: https://www.gmail.com/

#### First Structure (Routes)

- Users
- Posts

  Thats tables have relation between us.

#### Data Base Diagram

---

Atach Image

---

#### Develop

REST API design for FRONTEND

Create two main tables, User and Post. They are related to each other. The fields of the Post table are: post id, user id, comments, name, and likes.
The User table fields are: name, email, password, role, following, and followers.

---

### Endpoints

#### AUTH

POST - User Register -
`http://localhost4000/api/auth/register`

POST - User Login -
`http://localhost4000/api/auth/login`

#### USERS

GET - Show all Users (super_admin) -
`http://localhost4000/api/users`

GET - Show User profile -
`http://localhost4000/api/users/profile`

PUT - Update User Profile (name) -
`http://localhost4000/api/users/profile`

GET - Filter by Email (super_admin) -
`http://localhost4000/api/users?email=ejemplo@ejemplo.com`

DELETE - Delete User (super_admin) -
`http://localhost4000/api/users/:id`

PUT - Update User Role (super_admin) -
`http://localhost4000/api/users/fid}/role`

#### POST

POST - Create post -
`http://localhost4000/api/posts`

DELETE - Delete post by id -
`http://localhost4000/api/posts/:id`

PUT -Update Post by id -
`http://localhost4000/api/posts`

GET - Retrieve own posts
`http://localhost4000/api/posts/own`

GET - Retrieve all posts -
`http://localhost4000/api/posts`

GET - Retrieve posts by id -
`http://localhost4000/api/posts/:id`

GET - Retrieve user posts -
`http://localhost4000/api/users/posts/:user-id`

#### LIKES

PUT - Like 👍🏽 & dislike 👎🏽 -
`http://localhost4000/api/posts/like/:id`

---

`All non-public endpoints with corresponding middlewares`

<ol>We can find here the collection of all endpoints in Thunder Client:
You have to open Thunder Client
Go to collections and import this file:
</ol>

`./HTTP/thunder-collection_SOCIAL_MEDIA.json`

<ol>
Also can use this collection if run deployed project
</ol>

`./HTTP/thunder-collection_SOCIAL_MEDIA_DEPLOY.json`

#### Seeders

To check out this project, you'll need to populate the database. We create some random users and post. In the example code only one object is shown for each seeder

User & Post Seeder `$ npm run seed`

```js
import User from "../../models/User.js"
import Post from "../../models/Post.js"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import "dotenv/config"

//User Seeder

const userSeeder = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {})

    console.log("Connected to MongoDB")

    const user = await User.create([
      {
        _id: new mongoose.Types.ObjectId("65eebde6af5c0f55427ff54e"),
        email: "admin@admin.com",
        password: bcrypt.hashSync("123456", 6),
        role: "admin",
      },
    ])
    console.log("User created")
  } catch (error) {
    console.log(error)
  }
}

// Post Seeder

const postSeeder = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {})

    console.log("Connected to MongoDB")

    const post = await Post.create([
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        userId: new mongoose.Types.ObjectId("65eebde6af5c0f55427ff54e"),
        likes: ["65eebde6af5c0f55427ff54e", "65ef99191cab165c23b93315"],
      },
    ])

    console.log("Posts created")
  } catch (error) {
    console.log(error)
  } finally {
    mongoose.disconnect()
  }
}

const executeSeeders = async () => {
  await userSeeder()
  await postSeeder()
}
executeSeeders()
```

 <ol>Users created</ol>
<li> - super_admin, admin & random user - </li>

```
{
"email": "superadmin@superadmin.com"
"password": 123456,
"role_id": "super_admin"
}
{
"email": "admin@admin.com"
"password": 123456,
"role_id": "admin"
}
{
"email": "user@user.com"
"password": 123456,
"role_id": "user"
}
```

---

#### Middlewares

<ol>auth( )</ol>
  
  - We will use 'middleware' functions to control access to our data.

- Auth`(authorization system based on TOKENs) will block anything that should not be seen by the general public. In our case, it only does not affect`register`and`login`.
- The `auth()` function verifies an encrypted TOKEN created automatically at login. With an active token we have access to owner profile, owner post or post user followed.

<ol>isSuperAdmin( )</ol>
  
- We also want to grant special administrative access. With another middleware, the `isSuperAdmin()` function, we control PERMISSIONS.
- The 'superadmin' role would be able to reach all data, while Users would have a more limited reach. More levels can be implemented.

---

#### Deployment

To do deployment of this project we use FL0.

`https://social-media-backend-dev-dmjn.1.us-1.fl0.io`

We can use this url with endpoints collection of thunder

### Install and Develop

To start this project we install the following packages:

```bash
$ npm init --yes
```

#### We install Express

```bash
$ npm i express
```

```bash
$ npm i nodemon -D
```

```bash
$ npm i dotenv -D
```

##### Add Type module into package.json

```
"type": "module",
```

##### We install Mongoose to model ower application data.

```bash
$ npm i mongoose
```

#### We create .env to enviroment vaiables

Add to `.env` and create `.env.sample`

```

PORT = 4XXX

## DATA BASE CONNECTION
MONGO_URI=mongodb://root:root@127.0.0.1:27017/test?authSource=admin

JWT_SECRET=XXXXXX

```

---

```txt
Create models
```

```txt
Create controller
```

```txt
Install bcrypt to password encrypt

```

```bash
$ npm i bcrypt
```

```txt
Create routes folder with his files routes: auth.routes, posts.routes, users.routes & router.


---


```

To handle errors we managment with handleError function.

```js
const handleError = (res, errorMessage, statusErrorCode = 500) => {
  res.status(statusErrorCode).json({
    success: false,
    message: errorMessage,
  })
}

export default handleError
```

---

#### MongoDB Compass

We can check our data with the MongoDB compass.
We do that inserting MONGO_URI variables.
`Users`
<img src="./src/img/MongoCompasUsers.png"/>

`Post`
<img src="./src/img/MongoCompasPost.png"/>

---

### Author

<a href = "mailto:ramirolpoblete@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a> <a href="https://www.linkedin.com/in/ramiropoblete/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> <a href = "https://github.com/Ramer8"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
