Wireframes:

http://i.imgur.com/g9yA23M.jpg
http://i.imgur.com/SEJhTPI.jpg

As a customer-user, I want to be able to check off parts of my construction project as they're completed by my contractor.

I want to have payments loaded into the app, ready to be delivered when the tasks have been completed

I don't want my contractor to be able to receive payment until every task has been completed and checked off by both myself and the contractor.

As a contractor-user, I want to be able to check off all the parts of my current project as they're completed.

I want to be able to receive payments once they're released by my customer.

All agreed-upon tasks must be completed and checked off by both the customer-user and the contractor-user, before payment can be released and transferred to the contractor.

Eventually I want the functionality that will allow the contractor-users to have searchable profiles, listing their skills, availability, reviews, etc.

I also want customer-users to eventually be able to list their needs, which will send an alert out to contractor-users in the area they select with the scope of the project, for an initial bid.

Customer-users have many tasks
Customer-users have many payments
Customer-users have one contractor-user

Contractor-users have many tasks
Contractor-users have many customers
Contractor-users have many payments

The contractor and customer will have to own the same list? Or will the logic just be "if both lists are not complete, do not release payment. If both are complete, allow payment to be released and accepted".  Have the logic point to the release and the acceptance of payment.

Dependent: :destroy on both lists
Customer-user tasks

Customer-user:
username
firstname
lastname
dob

Contractor-user:
companyname
lirstname
lastname
founded
licensenumber
Contractor-user tasks
