# Schema Information

## Adventures
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
list_id     | integer   | foreign key (references lists), indexed
draw        | text      | not null
skill       | string    | not null
season      | string    | not null
activities  | string    | not null

## Lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    | 

## AdventureLists (join table - joins lists with their contained adventures)

column name | data type | details
------------|-----------|----------------
id          | integer   | not null, primary key
adventure_id| integer   | not null, foreign key (references adventures), indexed
list_id     | integer   | not null, foreign key (references lists), indexed

## UserAdventures (join table - joins users with their liked adventures / seperate from adventure authorship)
column name | data type | detais
------------|-----------|----------------------
id          | integer   | not null, primary key
adventuree_id| integer   | not null, foreign key (references user), indexed
adventure_id| integer   | not null, foreign key (references adventures), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
