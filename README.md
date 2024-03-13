### Social Media Backend

---

 <h4/> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="darkblue" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg> fakebook</h4>

---

<img src="./src/img/1.jpeg"/>

---

Very thanks for interest in my fifth project with Geekshubs Academy of the Full Stack Development Bootcamp 🚀.

<STACK ICONS>

#### Description

The project consists of creating a social network where users can register, access the network and interact with each other.
Users can also follow or unfollow other users, write comments on their profiles or posts.

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

PUT - Like 👍🏽 & dislike 👎🏽 -

`http://localhost4000/api/posts/like/:id`

---

### Install and Develop

```bash
$ npm init --yes
```

```bash
$ npm i express
```

```bash
$ npm i nodemon -D
```

```bash
$ npm i dotenv -D
```

##### add Type module into package.json

```
"type": "module",
```

```bash
$ npm i mongoose
```

Add to .env

```
PORT = 4000
MONGO_URI=mongodb://root:root@127.0.0.1:27017/test?authSource=admin

JWT_SECRET=XXXXXX

```

---

Updated User.js

```txt
create model
```

```txt
create controller
```

```txt
install bcrypt to password encrypt

```

```bash
$ npm i bcrypt

```
