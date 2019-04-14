# **Black Hole Back End**






```js
{
}
```


### Users

| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register          | Creates a new User to the users table in the database.                                                                                                                           |
| POST   | /login             | Checks whether the payload from the body matches with the user from the database. Returns a message and JWT token on successful login.                                           |
| GET    | /users             | Protected Route. Returns an array of User objects of all users.                                                                                                                  |
| GET    | /users/:id         | Protected Route. Returns an array of objects for the user by ID                                                                                                                  |
| DELETE | /users/:id         | Protected Route. Deletes a User by specific ID.                                                                                                                                  |

---

---

### The following routes are protected. Provide token returned from successful `register` or `login` as `Authorization` header

### Posting a Message - Protected
| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| POST   | /orbit             | Inserts payload into the orbit database which enables it to be viewed at a later time.                                                                                           |
| PUT    | /orbit/:id         | Allows users to update message.                                                                                                                                                  |
| DELETE | /blackhole         | Immediately deletes payload.                                                                                                                                                     |
