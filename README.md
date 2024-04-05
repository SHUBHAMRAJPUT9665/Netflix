
# Project link
- https://netflix-seven-sandy.vercel.app/

## 🚀 About Me

## API Reference

#### Firebase API


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### TMBd API (Movie )


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
#### Authentication

```http
const auth = firebase.auth();

 auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed up successfully
    const user = userCredential.user;
  })
  .catch((error) => {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;
  });
```
### Demo 
- coming Soon