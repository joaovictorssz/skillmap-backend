# Skill.map() - API

- This is a server of the Skill.map() application, and they must be used together.

# How to use
  1. Clone the repo
  2. Install all the dependecies:

```javascript
      npm install
```
  3. Create an .env file at the root folder and set the enviroments variables:
       # Important: If you don't set this variables, your app may not works correctly!
    JWT_SECRET=skillmap@inovatec //It is an arbitrary value
    JWT_EXPIRES=3d //The number of days before the jwt token expires
    GOOGLE_CLIENTID= You must get this google client id by creating an Google Cloud account
    GOOGLE_SECRET= You must get this google secret by creating an Google Cloud account
    AWS_ACCESS_KEY_ID= You must get this by creating an Amazon AWS account
    AWS_SECRET_ACCESS_KEY= You must get this by creating an Amazon AWS account
    AWS_S3_REGION= The region of your s3 bucket
    PORT=3333 //The port that the app will run in
    DATABASE_CONNECTION= Your mongodb URL (if you want to run locally, it can be: mongodb://0.0.0.0:27017/skillmap)
    

   
   4. Run the app with: 

    npm run start:dev 
    or if you want to deploy to production
    npm run build 
    npm run start
    
  
 # Support
 Send me and e-mail 
 joaovictosilva.dev@gmail.com
   
