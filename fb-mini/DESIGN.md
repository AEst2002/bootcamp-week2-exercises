users
+ id (int)
- firstname (str)
- lastname (str)
- email (str)
- occupation (str)
- bio (str)
- password (str)
- dob (Date!) (str)


posts
++ id (int)
- text (str)
- date_posted (Date!) (str)
- likes (int)
+ user_id (int)

friends
+ requestor_id (int)
+ requested_id (int)
- status (str) (accepted/denied/pending)

likes
++ post_id (int)
+ user_id (int)

comments
- id (int)
- text (str)
++ post_id (int)
+ user_id



Relations marked by + or ++
user id relates to: posts (user_id), friends (requestor_id and requested_id), likes (user_id)
post id relates to: likes (post_id)