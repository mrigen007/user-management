## SETUP
git clone https://github.com/mrigen007/user-management.git
npm install
set MONGO_URL inside the .env file
npm run start

## DOCUMENTATION

#### Login User
URL: http://localhost:3000/a/user/login (POST)
Log in with Email & Password

#### Get All Users
URL: http://localhost:3000/a/user/list (GET)
Return all user collections.

#### Create User
URL: http://localhost:3000/a/user/registeruser (POST)
Add new user

#### Update Own User Account
URL: http://localhost:3000/a/user/update/:id (PATCH)
Update the User with a given ID.

##### Delete Own User Account
URL: http://localhost:3000/a/user/delete (DELETE)
Delete the User's Account
