[FRONTEND DEPLOYED](https://rowlandhill.github.io/frontend-capstone/)

# What build + together does, and will do:

### build + together is an app that allows homeowners to stay on the same page as their contractors.  Both parties will know exactly where they stand before, during and after the process.

The application works by using a PostgreSQL database on the backend to store the users credentials and projects.  Using AJAX calls, users can access the information they require.  Users may only have one Project in existence at one time, but this will change as the app evolves.

Like my previous app, my approach to this changed very quickly.  Originally, I wanted to build the front-end with Ember.js.  However, since I also originally wanted to have a join table, Ember.js became an obstacle, and I eventually had to give up the join table to focus on CRUD actions for the relationships between the users and projects.
I wanted to have 4 tables: contractors, customers, projects and tasks, but that was too complex for the timeframe.

I began the process by sketching wireframes and user stories, and then built a rough HTML and CSS layout.  Once the basic layout was complete, I began going through the authentication requests, to make sure users could be signed-up, -in, -out and change their passwords.

Once that was out of the way, I began testing CRUD actions for the Projects.

After all the CRUD actions worked, I began styling the website a little bit.  I didn’t get to everything I wanted, since I spent a day trying to build the app in Ember.js, and had to nuke the entire front-end.

Some of the unsolved problems are:
  - Join table.  I would like to have tasks be a part of the Project, and allow the user to check off the tasks as they move to complete the project.
  - Different users.  I want to have contractors and homeowners sharing one Project, and allow them to check off everything they’ve done.  However, the project can’t be completed until both lists are completely checked off.
  - Adding onto the above, I would like to have the payments in the middle of this.  Only when both parties have checked everything off, can payment then be released.
  - Tasks would also have timelines attached, so the contractor could communicated when those tasks should be completed, or why there’s a 4-5 day gap from the last time they worked on the house.

# User Stories:

As a customer-user, I want to have a complete rundown of the project of my house.  I want an easy way to access this.

I want to be able to edit the project if need-be, and also delete it if the project has ended.

I want the project to be secure, and only accessible by me.

Eventually….

I want to be able to check off parts of my construction project as they're completed by my contractor.

I also want to have payments loaded into the app, ready to be delivered when the tasks have been completed

I don't want my contractor to be able to receive payment until every task has been completed and checked off by both myself and the contractor.

As a contractor-user, I want to be able to check off all the parts of my current project as they're completed.

I want to be able to receive payments once they're released by my customer.

All agreed-upon tasks must be completed and checked off by both the customer-user and the contractor-user, before payment can be released and transferred to the contractor.

I want the functionality that will allow the contractor-users to have searchable profiles, listing their skills, availability, reviews, etc.

I also want customer-users to eventually be able to list their needs, which will send an alert out to contractor-users in the area they select with the scope of the project, for an initial bid.


## Technologies used:

  - Ruby
  - PostgreSQL
  - JavaScript
  - jQuery
  - HTML
  - CSS
  - SCSS
  - Bootstrap
  - Handlebars

## Wireframe:

[Wireframe link 1](http://i.imgur.com/g9yA23M.jpg)
[Wireframe link 2](http://i.imgur.com/SEJhTPI.jpg)

## Screenshot of App:

!['application' View](http://i.imgur.com/M3RrMbU.png)

## ERD:

Users have one Project
Projects belong to User

## Links to the application:

[FRONTEND DEPLOYED](https://rowlandhill.github.io/frontend-capstone/)
[BACKEND DEPLOYED](https://infinite-lake-73977.herokuapp.com/)
[FRONTEND REPO](https://github.com/rowlandhill/frontend-capstone)
[BACKEND REPO](https://github.com/rowlandhill/backend-capstone)
