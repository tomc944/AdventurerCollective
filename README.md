# AdventurerCollective

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

AdventurerCollective is a web application inspired by OutBoundCollective built using Ruby on Rails
and React.js. AdventurerCollective allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, save and delete adventures
- [ ] Organize adventures within lists (e.g. Southwest Utah Hikes)
- [ ] Tag adventures with multiple tags and search adventures by tag (e.g. Biking, Running, Backpacking)
- [ ] Follow other adventurers/have others follow you
- [ ] Can leave reviews of adventure
- [ ] Adventures will show location on map using Google Maps API

AdventurerCollective doesn't have following functionality (i.e. where the inspiration departs from the original)

- [ ] No articles
- [ ] No sharing via external social media APIs (twitter, FB)
- [ ] No explorers (sponsored athletes/vagabonds)

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/wireframes
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Adventure Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup (which will be the Adventures
index page). This index page will be seeded with several adventures. There will also be a barebones
User show page which will be added with new React components as their corresponding 
backends are completed. In this phase the view will be blank.

[Details][phase-one]

### Phase 2: Flux Architecture and Adventure CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Adventure store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Adventures `AdventureIndex`, `AdventureIndexItem` and `AdventureForm`. At the end of Phase 2,
Adventures can be created, read, edited and destroyed in the browser. Adventures should
save to the database when the form loses focus or is left idle after editing.
Lastly, while constructing the views I will start using basic bootstrap for
styling. (Copied most of this from Charles example - very applicable to my design)

[Details][phase-two]

### Phase 3: Lists/Activities (2 days)

Phase 3 adds organization to the Adventures. Adventures can belong to a List, which has
its own `Index` view. Create JSON API for Lists. Adventures can also now be
tagged with multiple activities. Users can bring up adventures in a separate `SearchIndex`
view by searching for their tags. 

[Details][phase-three]

### Phase 4: Followers/Followees (1 day)

Phase 4 adds a social element to AdventurerCollective. Users can follow or be followed by
other participants of the website. Backend will be set up so queries can be made to
find users that can be followed. Search bar will be a react component that is available in all
views except for new user/new sessions.


[Details][phase-four]

### Phase 5: Reviews (1.5 days)

Phase 5 allows for Adventures to be reviewed by other users. A review form will be available
at the bottom of each Adventures `IndexItem` page. A review store will be implemented and the
corresponding CRUD functionality created.

[Details][phase-five]

### Phase 6: User profile (2 days)

Phase 6 shows a user profile which links all of the functionality together. React components will
be on the user profile. A large part of thhis stage will be focused on making sure the displayed react component
is the that was clicked on in the User profile (i.e. User show page)

[Details][phase-six]


### Bonus-features

- Implement Google Maps API to show where the adventures are
- Have a completed button on all adventures. (Toggle between having an adventure completed or not)
- Have CSS transitions on each `AdventureIndexItem` to have a sidebar pop out with different actions
- Drag and drop options to move adventures into different lists

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
