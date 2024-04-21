
# Project link
- https://netflix-seven-sandy.vercel.app/



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


REACT_APP_TMDB_API=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTU4MjY1OTcxZTI1ZjdhMTkzZGZlNGU2ODU4ZGZlYyIsInN1YiI6IjY1Y2NiYzIyMTM2NTQ1MDE4NmEyMmMwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.462_uEUYnqXiW618YUneZww-1bpJ3sbz0PTVDtssIc8
