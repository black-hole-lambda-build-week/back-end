# ** Back End - Black Hole**
---
## What is Black Hole?

#### Sometimes, you just need to vent to get it out, move on, and feel better.  Enter black hole. The reverse note taking app where everything you type automatically gets dumped in the trash. 
#### Research shows writing things down helps your brain move past the thought and onto bigger and brighter things. Don’t let the fear of other people reading what you write stop you from reaping these benefits! 
#### Driver cut you off? Frustrated with the hour long wait time at a restaurant? Type out your response, hit submit, and it’s absorbed into the black hole so you can move on with your life. 



Used for register and login
```js
{
  "username": "userName",
  "password": "password"
}
```
---

Used for Posting a Message
```js
{
  "message": "message",
  "timeInOrbit": INTEGER
}
```
---

### Users

| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register          | Creates a new User to the users table in the database.                                                                                                                           |
| POST   | /login             | Checks whether the payload from the body matches with the user from the database. Returns a message and JWT token on successful login.                                           |
| GET    | /users             | Protected Route. Returns an array of User objects of all users.                                                                                                                  |
| GET    | /users/:id         | Protected Route. Returns an array of objects for the user by ID                                                                                                                  |
| DELETE | /users/:id         | Protected Route. Deletes a User by specific ID.                                                                                                                                  |

---

### The following routes are protected. Provide token returned from successful `register` or `login` as `Authorization` header.

### Posting a Message - Protected
| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | /orbit             | Returns an array of objects containing all messages.                                                                                                                             |
| GET    | /orbit/:id         | Returns specific message by particular ID.                                                                                                                                       |
| POST   | /orbit             | Inserts payload into the orbit database which enables it to be viewed at a later time. ID will autogenerate.                                                                     |
| PUT    | /orbit/:id         | Allows users to update message.                                                                                                                                                  |
| DELETE | /orbit/:id         | Immediately deletes payload.                                                                                                                                                     |
|
