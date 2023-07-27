# Guild Wars 2 Forum

Guild Wars Forum is a forum/ review app for enthusiasts of the guildwars franchise. The main goal of this app is to encourage players to talk about their favourite/ least favourite things in the game, show off their gear or share thoughts on up coming content.

A community can be created in the future with the possibility of creating and finding a guild for you to play the game with.

![Image showing the website's responsiveness on different screens]

## Project Links

- [Deployed Front End Site]

- [Repository for Front End Site]

- [Deployed API Site]

- [Repository for API Site]

## UX Design and Planning

During the planning of this project, I considered which features and functionality should be available to the user, and how to provide these whilst maximising the user experience.

## Project Goals

A react frontend website and django backend API. Linked together to provide full CRUD functionality. 

A site that is accessed via login and provides users with the features of creating posts and comments and editing their profile. 

### The factors in setting these goals:

- Entry level knowledge and understanding of creating a React frontend and API backend.

### Project goals:

|No.|Goal|Description|
|---|---|---|
|1|Log in/log out/Sign up | User can create an account and login or log out|
|2|Posts page styled with video games theme | A responsive homepage with post CRUD functionality|
|3|Comments | Comments for each post with CRUD functionality|
|4|Profiles (Created on new account) | Profiles with full CRUD Functionality |
|5| Front-end react website and custom built API| Hosted on Heroku |
|6| Deployment of final website to Heroku | Upon project completion | 
|7| Document all known bugs and issues | Ensure documentation is clear and honest |

## User Stories

An agile development strategy was implemented in this project as user stories were created as 'Issues' on GitHub. Each user story prioritised b being assigned a level of necessity to be included in the project - 'Should-Have', 'Could-Have' or 'Must-Have' and seen can be seen as labels attached to the user stories. These user stories were then put onto a kanban board using 'GitHub Projects'. Here, user stories could be moved between 'To do', 'In progress (current sprint)', 'Done'and 'Won't do' columns. 

### Setup

1. As a **user** I can **view a navbar on each page** so that **I can use the links to change my current page**.
2. As a **user** I can **navigate through pages quickly** so that **I can view content seamlessly without page refresh**.
3. As a **user** I can **tell if I am logged in or not so that I can log in if I need to**.
4. As a **user** I can **maintain logged in until I choose to log out so that I don’t have to log in all-time**.
5. As a **user** I can **create a list of my favourites posts**.

### Posts

1. As a **logged in user** I can **create posts**.
2. As a **user** I can **delete my posts**.
3. As a **user** I can **edit my posts title and description**.
4. As a **user** I can **view the details of a single post so that I can learn more about it**.
5. As a **user** I can **view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content**.
6. As a **user** I can **search for posts and categories so that I can find specific themes**.
7. As a **user** I can **view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them**
8. As a **user** I can **view the details of a single post so that I can learn more about it**

### Comments

1. As a **logged in user**, I can **create a comment on a post** so that **I can share my opinion**.
2. As a **user**, I can **view comments on a post** so that **I can read other users’ opinions**.
3. As a **comment author**, I can **edit my comment**.
4. As a **comment author** I can **delete my comments**.

### Favourites

1. As a **logged in user**, I can **favourite a post** so that **I can save my favourite posts**.
2. As a **loggeed in user**, I can **view my favourite posts in a feed** so that **I can revisit my favourite posts**.
3. As a **logged in user**, I can **remove a favourite on a post** so that **it no longer appears in my favourites feed**.

### Profile

1. As a **user** I can **sign in to the app so that I can access functionality for logged in users**.
2. As a **logged user** I can **update my username and password so that I can change my display name and keep my profile secure**.
3. As a **user** I can **see all my uploaded posts**.
4. As a **logged user** I can **view content filtered by users I follow so that I can keep up to date with what they are posting about**.
5. As a **user** I can **view user's avatars so that I can easily identify users of the application**.
6. As a **user** I can **follow and unfollow other people**.
7. As a **user** I can **view statistics about a specific user: bio, number of posts, follows and users followed**.
8. As a **user** I can **see a list of the most followed profiles so that I can see which profiles are popular**.

### Contact Us

1.
2. 


## Features

### Landing page

![landing page]

- Styled to give the feel of a video gamer database login

- user can only login from this screen

### Navigation 

- Displays the brand logo and name of the website to the user.

![logo]

- A red background color and white font color provides sufficient contrast so the links are clearly visible.

- A blue hover effect also provides sufficient contrast and improves the user experience by showing that the links are clickable. 

![hover]

- On screens sizes with sufficient space, 'Font Awesome' icons are used for extra clarity of the links.

- The active page's nav link appears green to indicate to the user which page they are currently viewing.

![image of navbar & on smaller screens]

- Allows the user to navigate between pages on the website.

- On smaller screens, a hamburger icon appears and opens a dropdown menu when clicked, displaying all of the navbar links. This provides a better user experience as the navbar doesn't have to take up unnecessary space and it maximises the space for other content.

![burger]

- On smaller screens, the navbar automatically closes after clicking a nav link or clicking off of the nav bar to provide a better users experience.

- Conditional rendering is used to display different nav links to users that are logged in and logged out. This limits users to being able to only use site functionality relevant to their log in status.

![loggeout]
![loggedin]

- Users are able to see their log in avatar in the navbar.

![profile]


### Sign Up

- Allows users to sign up for an account on the website.

- The 'Sign Up' title makes it obvious to the user that they are on the sign up page and avoids confusion with the 'Sign In' page.

- Users should input a username and the same password into the 'New Password' and 'Confirm Password' fields. Validation is present to detect errors, such as when the passwords don't match or when a field is blank. Alerts explain the errors if the users try to submit an invalid form.

- A link is available for users to be redirected to the 'Sign In' page if they already have an account.

- By clicking the 'Sign Up' button, the form is submitted and the user is redirected to the 'Home' page.

![sign up]

### Sign In

- Allows users to sign into their account on the website.

- The 'Sign In' title makes it obvious to the user that they are on the sign in page and avoids confusion with the 'Sign Up' page.

- Users should input a username and password. Validation is present to detect errors, such as when the username or password is incorrect and when a field is blank. Alerts explain the errors if the users try to submit an invalid form.

- A link is available for users to be redirected to the 'Sign Up' page if they don't already have an account.

- By clicking the 'Sign In' button, the form is submitted and the user is redirected to the 'Home' page.

![sign in]


### Home Page

- Displays the most recent posts to the user in a continuous feed.

- Controls section at the top of the page includes a search bar, favourites, contact us and add post button. These are above the posts so that the user is instantly aware that they can manipulate the page content.

- Search bar allows users to search for posts on the website by title or user's name. 

- Add Post button allows users to be redirected to the 'Create Post' page, where they can add their own post to the website. The button only appears if the current user is logged in.

- Each post clearly shows information such as the author, date created, title and description and image. Clicking on the post image will redirect users to the 'Post' page, where they can find more details. Clicking on the profile image will redirect users to the author's 'Profile' page

- Display the most followed profiles with the possibilty to follow/unfollow a profile.

![home screen]

- Buttons are present at the bottom of the post to allow the user to comment, add favourite and like the post.

- By clicking the comment button, users are redirected to the 'Post' page, where a comment form is below the post.

- By clicking the favourite button, users can add the post to their favourites feed. The favourite icon colour will become solid to inform the user that their favourite has been registered.

- By clicking the a like button, the count for the option will increment by 1 and the icon colour will become solid.

![comment]


### Post Page

![post view]

- Shows a specific, single post, with more details such as by showing the 'Add Comment' form, comments and more options dropdown. 

- Accessed by clicking on a post's image.

- The 'Add Comment' form is only visible for logged in users, however all users can view the comments on a post.

- Comments are ordered in a list, with the most recent comments appearing at the top.

- Comments show the content, date/time updated, author's name and author's profile image.

- Infinite scrolling is present for posts that have more than 10 comments.

- If ther current user is the author of the post, a more options dropdown button will appear as three dots. When clicked, the user can select the pencil button to be redirected to the 'Edit Post' page, or the bin to delete the post.

- If ther current user is the author of the comment, a more options dropdown button will appear as three dots. When clicked, the user can select the pencil button to load the 'Edit Comment' form, or the bin to delete the comment.

![comment]

![edit comment]

![edit comment2]


### Profile view

![profile view]

- Find the posts created by the user

- See the number of posts

- See the number of followers

- See the number of following

- Owner can choose to edit, change username and change password

![edit](/src/assets/readmefiles/editprofile.png)


### Favourites Page

- Functions identically to the home page but only displays a feed of posts that the logged in user has favourited.

![favourites page](/src/assets/readmefiles/favourites.png)

- If the user is yet to favourite a post, the user receives a message explaining that they need to favourite a post first.

![without favourites](/src/assets/readmefiles/withoufavourites.png)

### Contact Page

- A user can contact the admin

![contact](/src/assets/readmefiles/contact.png)

### Add Post

- Allows logged in users to create their owns posts on the website.

- Accessed via the 'Add Post' button.

![add post](/src/assets/readmefiles/addpostnav.png)

- Users must input a title, image and content before submitting a post. Validation is used to check that fields are not left blank and users receive an alert message to explain the error if they try to submit the form with a blank field.
 Placeholder text is used to inform the user of the information required for each field.

![add post error](/src/assets/readmefiles/addposterror.png)

- The image input will be displayed as a small preview to the user so can check their image before submitting the form.

![add post preview](/src/assets/readmefiles/postpreview.png)

- Users can create a post using the submit button, or be returned to the home page by clicking on the cancel button.

- Once the form is submitted, the user will be redirected to the 'Home' page, where they can see their new post in the feed.

![add post form](/src/assets/readmefiles/addpostread.png)

### Edit Post

- Allows logged in users to change the content of an existing post.

![edit post form](/src/assets/readmefiles/postedit.png)

- Accessed by clicking on the 'MoreDropdown' link on the 'Post' page. Can only be accessed if the current user is the author of the post to ensure that users cannot edit the content of other users' posts.

- The form loads pre-filled with the existing post data, making it easy for the user to edit the information accordingly.

- The same input validation as in the 'Add Post' form is present, preventing the user from submitting a form with an empty field and returning an alert message to inform the user of the error.

- Clicking the 'Cancel' button will return the user to 'Post' page and the original post data will remain.

- Clicking the 'Save' button will result in updated fields to be saved to the post's data. The user will be returned to 'Post' page.

![edit save](/src/assets/readmefiles/editsave.png)

![edit image](/src/assets/readmefiles/cangeimagepost.png)

## React Components

React components are blocks of code that are reusable throughout an application. Rather than categorising each page as a whole, each page can be broken down into parts, known as components. They are advantageous as they reduce the need for writing the same code multiple times for different pages. Large pages can often be quite complex, so working on a particular part (component) of a page independently can reduce complexity and the opportunity for making errors. Additionally, an error caused in a particular component will be isolated to itself so won't impact the whole site's functionality. Finally, components were used to easily provide a consistent and familiar theme and user experience across the website

### Avatar

- Used to display user profile images, such as on posts, comments, profiles and the navbar.

- User experience improved as it allows consistent and familiar styling to be used throughout the application. It also allows users to be creative and feel unique with their profile.

### MoreDropdown

- Used to create a 3 dots icon that when clicked, would provide button links.

- MoreDropdown used on posts and comments, to allow the author to edit or delete their content.

- ProfileDropdown variation allows the profile owner to edit their profile or change their username and password.

- Also improves the user experience by allowing supplementary content to be hidden from the main content. Thus, not keeping the laout simple and not overwhelming for the user.

### NavBar

- Used on every page to allow users to access different pages on the website.

- Forms a consistent part of the layout on every page to contribute to the website's identity.

- Improves the user experience as users are able to reach any page from any page and creating a sense of familiarity.

### PageNotFound

- Used to notify the user that the current URL path returns no content.

- Improves the user experience by providing feedback after an error, rather than leaving them to become confused.

![edit image](/src/assets/readmefiles/exist.png)


## Future Features

- Create a rating system to the posts.

- Create categories like Playstation/Xbox/Twitch/PC.

## Manual Testing

### Navigation

| Test Case | Test Description | Test Outcome | Test Result |
| ----------- | ----------- | ----------- | ----------- |
| 001 | Navbar can be seen on every page of the website. | Navbar is present at the top of every page. | Pass |
| 002 | Navbar links are accurate and load the correct pages. | Navlinks accurately redirect users to the correct page. No broken links. | Pass |
| 003| Clicking a navbar link should redirect users quickly, without unnecessary page reloads. | Navigation between pages is quick. No unnecessary page reloads, only changing components are re-rendered. | Pass |
| 004 | Users can see their login status in the navbar. | Users are able to see their login status by seeing either the profile image and sign out navlinks when logged in, and the sign up and sign in navlinks when logged out. | Pass |
| 005 | User has access to different links in the navbar depending on log in status. | Conditional rendering successfully makes the 'Favourites', 'Contact Us', 'Profile', and 'Sign Out' links visible for logged in users, whereas only logged out users have the 'Sign Up' and 'Sign In' links visible. | Pass |

### Authentication

| Test Case | Test Description | Test Outcome | Test Result |
| ----------- | ----------- | ----------- | ----------- |
| 006 | 'Sign Up' form prevents users from registering for an account when invalid input data is provided. | Validation prevents users registering for an account, for example when the username already exists, passwords don't match and when fields are left blank. | Pass |
| 007 | Users receive alerts to explain validation errors in the 'Sign Up' form. | Users receive error alert messages underneath the field the error occurs in. | Pass |
| 008 | Users are able to sign up for an account. | When users input valid data into the 'Sign Up' form they can successfully register for an account. | Pass |
| 009 | The 'sign in' link redirects users to the 'Sign In' page. | Clicking the 'sign in' link successfully redirects users to the 'Sign In' page. | Pass |
| 010 | 'Sign In' form prevents users from signing into their account when invalid input data is provided. | Validation prevents users signing into their account, for example when the username or password are incorrect and when fields are left blank. | Pass |
| 011 | Users receive alerts to explain validation errors in the 'Sign In' form. | Users receive error alert messages underneath the field the error occurs in. | Pass |
| 012 | Users are able to sign in to their already created account. | When users input valid data into the 'Sign In' form they can successfully log into their account. | Pass |
| 013 | The 'sign up' link redirects users to the 'Sign Up' page. | Clicking the 'sign up' link successfully redirects users to the 'Sign Up' page. | Pass |
| 014 | Users can see their logged in status. | Users can check the navbar to see their log in status | Pass |
| 015 | Logged out users are unable to access pages exclusive to logged in users (e.g. 'Add Post' page) and are either reidrected to the 'Home' page or see a page not found message. | Logged out users are unable to use logged in user functionality are redirected to the 'Home' page or see a page not found message.  | Pass |
| 016 | Logged in users are unable to access the pages exclusive to logged out users (e.g. 'Sign Up' and 'Sign In' pages) | When a logged in users tries to access a URL to a page exclusive to logged out users, they are redirected to the 'Home' page. | Pass |
| 017 | Users can log out of their account using the 'Sign Out' link in the navbar. | Users can log out and are redirected to the 'Home' page. | Pass |
| 018 | When users successfully register for an account, the profile instance is created in the API and has the correct data. | User instance is created and the data is correct. | Pass |

### Posts

| Test Case | Test Description | Test Outcome | Test Result |
| ----------- | ----------- | ----------- | ----------- |
| 019 | The 'Home' page renders a feed of posts if they exist. Most recent posts are seen first. | A feed of posts can be seen if post instances are created. Most recent posts are seen at the top of the feed. | Pass |
| 020 |The 'Favourites' page renders a feed of posts that the current user has already favourited. | A feed of posts is shown; only including posts that the user has favourited. | Pass |
| 021 | When no posts exist on the 'Home' or 'Favourites' pages. A message is displayed to inform the user that there are no results. | No results image and message seen on each page when no posts exist. | Pass |
| 022 | The search bar can be used to filter the posts feed by a post's title. | The search bar returns a feed of posts the where the input matchespost's title. | Pass |
| 023 | The 'Add Post' button (allowing users to add a post) only renders for logged in users. | Only logged in users can see the 'Post' button. | Pass |
| 024 | Each post in the feed displays the all the correct information about the post. | Each post includes a title, author name, profile image, date, description, image, comment button, and favourite button. | Pass |
| 025 | 'Post' page (showing detail about a particular post) can be accessed by clicking on a particular post's image. | Cliciking on a post's image loads a page containing only the specific post. | Pass |
| 026 | The 'Post' page shows comments for a post if they exist, or a message if they don't. | Comments can be seen in a feed below the post when they exist. If there are no comments, the user is informed. | Pass |
| 027 | If the user is logged in, the 'Post' page shows the 'Add Comment' form. | 'Add Comment' visible under the post, only if the user is logged in. | Pass |
| 028 | Only the author of a post, can access its 'Edit Post' page. |  The post author can access the 'Edit Post' form, whereas other users are redirected to the 'Home' page. | Pass |
| 029 | Logged in users can use the 'Add Post' form to add a new post to the website. | Submitting valid data in the 'Add Post' form will create a post which can be seen in the posts feed. | Pass |
| 030 | Users cannot create a post if data is invalid in the 'Add Post' form. | 'Add Post' form handles invalid data when a user tries to submit the form (e.g. empty fields) and informs the user of the error as an alert message under the invalid field. | Pass |
| 031 | Clicking the 'Cancel' button in the 'Create Post' form results in no post being created and the user being returned to the 'Home' page. | No post is created and the user is redirected to the 'Home' page. | Pass |
| 032 | When the user successfully creates a post, the post instance is created in the API and has the correct data. | Post instance is created and the data is correct. | Pass |
| 033 | 'Edit Post' form renders pre-filled with existing post data. | Each input has the existing post data when the form is loaded. | Pass |
| 034 | Users cannot edit a post if data is invalid in the 'Post Edit' form. | 'Edit Post' form handles invalid data when a user tries to submit the form (e.g. empty fields) and informs the user of the error as an alert message under the invalid field. | Pass |
| 035 | Clicking the 'Cancel' button in the 'Edit Post' form results in no post changes being saved and the user being returned to the 'Home' page. | No post data is changed and the user is redirected to the 'Home' page. | Pass ||
| 036 | When the user successfully edits a post, the post instance is updated in the API and has the correct data. | Post instance is updated and the data is correct. | Pass |
| 037 | Clicking the delete button in the 'MoreDropdown' on the 'Post' page results in post being deleted and the user is redirected to the 'Home' page. | The post is deleted and is no longer seen in the post feed. The user is redirected to the 'Home' page. | Pass |
| 038 | When the user successfully deletes a post, the post instance is deleted in the API. | Post instance is deleted. | Pass |

### Comments

| Test Case | Test Description | Test Outcome | Test Result |
| ----------- | ----------- | ----------- | ----------- |
| 039 | Logged in users can comment on posts. | Comment form is rendered on the 'Post' page for logged in users and they can successfully create comments. Comment can be seen under the comment form.| Pass | 
| 040 | Logged out users cannot comment on posts. | No comment form is rendered on the 'Post' page so they cannot make a comment. | Pass | 
| 041| Users cannot add a comment of empty content. | Submitting an empty comment form doesn't result in a comment being made. | Pass |
| 042 | When a user comments on a post, the count for comments is increased by 1. | Commenting on a post causes the number beside the button (count) to increase by one. | Pass | 
| 043 | When a user successfully creates a comment, a comment instance is created in the API. The post instance has its comments_count updated in the API. | A comment instance is created and the post instance is updated correctly in the API. | Pass |
| 044 | Authors of a comment, can edit their comment. | Comment authors can see a 'MoreDropdown' icon and click the edit button to render a 'Edit Comment' form. Updating the content and saving the form results in the comment being updated. | Pass |
| 045 | Users cannot edit a comment they are not the author of. | No 'MoreDropdown' icon is rendered on the comment so they cannot edit its content. | Pass |
| 046 | When a user successfully edits a comment, the comment instance is updated in the API. | A comment instance is created in the API. | Pass | 
| 047 | Authors of a comment, can delete their comment. | Comment authors can see a 'MoreDropdown' icon and click the delete button to delete the comment. | Pass |
| 048 | Users cannot delete a comment they are not the author of. | No 'MoreDropdown' icon is rendered on the comment so they cannot delete the comment. | Pass |
| 049 | When a user deletes a comment on a post, the count for comments is decreased by 1. | Deleting a comment on a post causes the number beside the button (count) to decrease by one. | Pass |
| 050 | When a user successfully deletes a comment, the comment instance is deleted in the API. The post instance has its comments_count updated in the API. | The comment instance is deleted and the post instance is updated correctly in the API. | Pass |

### Favourites

| Test Case | Test Description | Test Outcome | Test Result |
| ----------- | ----------- | ----------- | ----------- |
| 051 | Logged in users can favourite posts. | Logged in users can click the star icon to favourite a post. | Pass | 
| 052 | Users cannot favourite their own posts and are informed by an overlay. | Users cannot favourite their own posts and can notice an overlay message to explain the error when hovering over the favourite button. | Pass |
| 053 | When a user successfully favourites a post, the favourite button colour becomes solid. | A solid button colour is shown when the post is set as a favourite. | Pass |
| 054 | When a user successfully favourites a post, a favourite instance is created in the API. | Instance is created in the API. | Pass |
| 055 | Users can disable the favourite by clicking the favourite button again. | Clicking the favourite button again removes the favourite. | Pass |
| 056 | When a user successfully favourites a post, the favourite button colour becomes no longer solid. | Solid button colour disappears when the post is set to no longer be a favourite. | Pass |
| 057 | When a user successfully removes a favourite on a post, a favourite instance is deleted in the API. | Instance is deleted in the API. | Pass |

### Likes

| Test Case | Test Description | Test Outcome | Test Result |
| ----------- | ----------- | ----------- | ----------- |
| 058 | Logged in users can like posts. | Logged in users can click the heart icon to like a post. | Pass | 
| 059 | Users cannot like their own posts and are informed by an overlay. | Users cannot like their own posts and can notice an overlay message to explain the error when hovering over the like button. | Pass |
| 060 | When a user successfully like a post, the like button colour becomes solid. | A solid button colour is shown when the post is liked. | Pass |
| 061 | When a user successfully like a post, the like instance is created in the API. | Instance is created in the API. | Pass |
| 062 | Users can delete the like by clicking the like button again. | Clicking the like button again removes the favourite. | Pass |
| 063 | When a user successfully removes a like on a post, a favourite instance is deleted in the API. | Instance is deleted in the API. | Pass |

### Profiles 

| Test Case | Test Description | Test Outcome | Test Result |
| ----------- | ----------- | ----------- | ----------- |
| 064 | Users can view profiles by clicking on the profile image image or name link on a post. | Clicking on either link redirects the user to the to the profile page. | Pass |
| 065 | Logged in users can also access their own profile via the 'Profile' navlink. | Navlink is present and redirects the user correctly. | Pass |
| 066 | Profile page renders an information section (e.g. profile image, title, description), statistics (posts, followers, following) section and posts feed. | Profile page renders information, statistics and feed sections. | Pass |
| 067 | The statistics section shows the correct information. | Statistics accurately show the number of posts, followers and following by a user. | Pass |
| 068 | If a user creates a post or deletes a post and then returns to their profile, the post count updates correctly. | Creating a post increases the post count, and deleting a post decreases the post count. | Pass |
| 069 | The 'ProfileDropdown' icon (providing links to 'Edit Profile', 'Change Username' and 'Change Password') is only present for users visiting their own profile. | 'ProfileDropdown' icon visible on a user's own profile but not when visiting a different user's profile. | Pass |
| 070 | 'Edit Profile' form loads pre-filled with existing profile data. | The current profile data can be seen when loading the 'Edit Profile' form. | Pass |
| 071 | Users can update their profile image and description by submitting valid data in the 'EditProfile' form. | Users are able to update their profile by submitting valid data. | Pass |
| 072 | Users cannot submit the 'EditProfile' form with invalid data and are alerted with a message. | Invalid data cannot be submitted in the form and a message is present under the invalid data. | Pass |
| 073 | Clicking 'Cancel' in the 'EditProfile' form results in no data updates on the profile. | Clicking 'Cancel' does not update the profile and the user is redirected back to their profile. | Pass |
| 074 | When the profile is successfully updated, the 'Profile' instance is updated correctly in the API. | Instance is updated correctly in the API. | Pass |
| 075 | 'Change Username' form loads pre-filled with existing profile username. | The current username data can be seen when loading the 'Change Username' form. | Pass |
| 076 | Users can update their username by submitting valid data in the 'ChangeUsername' form. | Users are able to update their username by submitting valid data. | Pass |
| 077 | Users cannot submit the 'Change Username' form with invalid data and are alerted with a message. | Invalid data cannot be submitted in the form and a message is present under the invalid data. | Pass |
| 078 | Clicking 'Cancel' in the 'Change Username' form results in no data updates on the profile. | Clicking 'Cancel' does not update the username and the user is redirected back to their profile. | Pass |
| 079 | When the username is successfully updated, the 'Profile' instance is updated correctly in the API. | Instance is updated correctly in the API. | Pass |
| 080 | Users can update their password by submitting valid data in the 'Change Password' form. | Users are able to update their password by submitting valid data. | Pass |
| 081 | Users cannot submit the 'Change Password' form with invalid data and are alerted with a message. | Invalid data cannot be submitted in the form and a message is present under the invalid data. | Pass |
| 082 | Clicking 'Cancel' in the 'Change Password' form results in no data updates on the profile. | Clicking 'Cancel' does not update the password and the user is redirected back to their profile. | Pass |
| 083 | When the password is successfully updated, the 'Profile' instance is updated correctly in the API. | Instance is updated correctly in the API. | Pass |

## Code Validation

### Html

- No errors found

![html](/src/assets/readmefiles/w3validator.png) 

### Eslint

- Eslint was installed and configured locally. After running, for the first time got some errors "Function component is not a arrow function" and "`'` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;`". After fixing this errors Eslint returned without errors.

![html](/src/assets/readmefiles/eslint.png) 

### CSS

- The W3C CSS Validator Service was used to validate the project's custom CSS files to ensure there were no syntax errors.

![css](/src/assets/readmefiles/w3c.png) 

### Python

- Comments

![py](/src/assets/readmefiles/contactmodels.png) - Models

![py](/src/assets/readmefiles/contactserializer.png) - Serializer

![py](/src/assets/readmefiles/contactsviews.png) - Views

- Likes

![py](/src/assets/readmefiles/likesmodels.png) - Models

![py](/src/assets/readmefiles/likesserializer.png) - Serializer

![py](/src/assets/readmefiles/likesviews.png) - Views

- Profiles

![py](/src/assets/readmefiles/profilesodels.png) - Models

![py](/src/assets/readmefiles/postsserialzer.png) - Serializer

![py](/src/assets/readmefiles/profilesviews.png) - Views

- Favourites

![py](/src/assets/readmefiles/favouritesmodels.png) - Models

![py](/src/assets/readmefiles/favouritesserializer.png) - Serializer

![py](/src/assets/readmefiles/favouritesviews.png) - Views

- Contact

![py](/src/assets/readmefiles/contactmodels.png) - Models

![py](/src/assets/readmefiles/contactserializer.png) - Serializer

![py](/src/assets/readmefiles/contactsviews.png) - Views

- Posts

![py](/src/assets/readmefiles/postsmodels.png) - Models

![py](/src/assets/readmefiles/postsserialzer.png) - Serializer

![py](/src/assets/readmefiles/postsviews.png) - Views

### Lighthouse Scores

The site scored fine. Performance different a lot using live site vs incognito vs normal vs dev deployment.

- Main Page

![Lighthouse](/src/assets/readmefiles/lighouse.png) 

- Add Post

![Lighthouse](/src/assets/readmefiles/lighouseaddpost.png) 

- Favourite

![Lighthouse](/src/assets/readmefiles/lighousefavourite.png)

- Profile

![Lighthouse](/src/assets/readmefiles/lighouseprofile.png)

### Devices used for manual testing

Site was tested using the following desktops:

- Chrome  

![chrome](/src/assets/readmefiles/chrome.png) 

- Safari 

![safari](/src/assets/readmefiles/safari.png) 

- Edge

![edge](/src/assets/readmefiles/edge.png) 

- Opera

![edge](/src/assets/readmefiles/opera.png) 

### Bugs

### Remaining Bugs

- Some images detail don't render correct when add post or edit post.

![bug](/src/assets/readmefiles/bug.png) 

- Bug on IOS mobile devices, turn off ‘prevent cross site tracking’ in iOS settings is the only way to make the website works on iphones/iPads.

## Technologies Used

### Languages and Frameworks Used

- HTML

- JavaScript

- React

### Dependencies and Programs Used

- ReactJS - Used to build the components making up the front end website.

- React Bootstrap - Used to create layouts and styles on the front end website.

- Axios - Used to make HTTP requests from the front end website to the API.

- JWT-Decode - Used to extract information from JWTs.

- React-Infinte-Scroll - Used to automatically load more data from API when a user scrolls down a page.

- Google Fonts - Used to provide a custom font on the website.

- Font Awesome - Used to add custom icons on the website.

- Gitpod - Used as an IDE to build the project.

- GitHub - Used to store the project in a repository. Used as an agile tool.

- Free logo design - used to create logo.

- Freepik - used to add picture to the profiles.

- Heroku - Used to deploy and host the project.

## Deployment 

### Run Locally

Note that the API will also have to configured to allow access to local hosts.

- Manually Downloading the Repository:

    - Opening the project repository at: https://github.com/JoaoHigino/video-games-reviews

    - Opening the dropdown on the 'code' button.

    - Downloading the zip file.

    - Extracting the files from the zip file into a new folder on your computer.

    - Opening the folder in an IDE of your choice.

    - Updating the the "start" script value to "react-scripts --openssl-legacy-provider start".

    - running "npm install" in the terminal.

    - running "npm start" in the terminal.

- Cloning the Repository:

    - Opening the project repository at: https://github.com/JoaoHigino/video-games-reviews

    - Opening the dropdown on the 'code' button.

    - Copying the link under the HTTPS heading (https://github.com/JoaoHigino/video-games-reviews.git).

    - Opening an IDE of your choice (must have Git support or relevant git extension).

    - Open the terminal and create a directory to store the repository.

    - Type "git clone https://github.com/JoaoHigino/video-games-reviews.git" and press enter in the terminal.

    - Updating the the "start" script value to "react-scripts --openssl-legacy-provider start".

    - running "npm install" in the terminal.

    - running "npm start" in the terminal.
 
### Deploying to Heroku

During the development of the project, version control was used by committing and pushing the code to GitHub. The GitHub repository can be found here: https://github.com/JoaoHigino/video-games-reviews

This project was deployed to Heroku by:

- Committing and pushing the code to GitHub.

- Logging in to your Heroku account at Heroku.com.

- On the Heroku website, clicking 'New' and then 'Create New App'.

- Setting the name and region and pressing 'Create App'.

- Clicking the 'Deploy' tab.

- Clicking 'Connect to GitHub', search for repository, click 'Connect'.

- Enabling Manual Deploy. Check for successful message.

- Enabling Automatic Deploys.

- The live site can be found here: https://video-games-reviews.herokuapp.com/

### Connecting to the API

In axiosDefaults.js, the "axios.defaults.baseURL" variable needs to be set to the string 'https://video-games-reviews.herokuapp.com/' (deployed API URL). This sets the front end website to make requests to the specifc API built in this project. Additionally, the backend API project on Heroku needs a config var of "Client_ORIGIN" and the value of "https://video-games-reviews-api.herokuapp.com/" (deployed site URL). This allows the front end website to make requests to the API.

## Credits

- Code Institute's Moments project was used to lay the foundations of this project and was adapted on to create a unique project. (https://github.com/Code-Institute-Solutions/moments/tree/bb6657e265fb18360b841e10d9d633dad06f4e5c)

- To my amazing wife Sandra, my best friend, my mentor, and my safe haven, without her, all my dreams will be impossible to achieve. She is everything.

- To my two kids, Maria and Thomas, with them life is easy and light. They make me laugh and think that our future is bright.

- To my family and friends - for being a great support and providing a lot of the user testing for me, especially my friends from "Liga 7 BP" with their craziness helped me to clean my head.

- The Code Institute community on slack and my classmates its was a pleasure.