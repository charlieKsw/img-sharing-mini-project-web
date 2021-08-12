## Start Project

Simply install dependencies and start project

```
npm install
npm start

```

## Project Structure

```
├── src
│   ├── components    // global components that can be reused 
│   ├── pages         // project pages
│   ├── stores        // mobx stores 
│   ├── styles        // default style variables for index.scss
│   ├── config        // config styles received from dotenv
|── router            // routing all pages
```

## Project Features
```
├── Login 
│   ├── LocalStorage  // Store user token  
│   ├── Sign up Api   // Use authStore to call Sign up Api   (RESTful Api)
│   ├── Login Api     // Use authStore to call Login Api     (RESTful Api)
│   ├── CustomForm    // Use antd & rsuite Library 
│   ├── FormResponse  // Success and error message handling
|── Home              
│   ├── UploadPost    // Validate upload image type / size   (RESTful Api)
│   ├── GetPost       // Get updated post from DB            (RESTful Api)
│   ├── FormSubmit    // Verify forms input for image uploaded
│   ├── FormResponse  // Success and error message handling
|── Explore              
│   ├── ImageGrid     // Only login user (with token) can review other users posts
```

## Something you should know
- You must clone img-sharing-mini-project-server for backend connection
- You can sign up a new account and login to start uploading pictures 
- Backend tech-stack: Node JS & TypeScript & PostgreSql

## Port
- You can set up your own default port - e.g. localhost:4000