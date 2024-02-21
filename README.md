
# Netflix
# Project link
-https://netflix-woad-six.vercel.app

## 🚀 About Me

Hi, I'm Shubham Rajput, a passionate developer currently focused on learning TypeScript and building projects with React.js. With a keen interest in front-end development, I'm constantly exploring new technologies and frameworks to enhance my skills and create engaging user experiences.

## adding search bar in Netflix Project



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