---
layout: post
title:  "Final Year: CI using Travis CI and Heroku"
date:   2016-08-31 20:00:00
---

As I wait to be assigned a 'Final Year Project' I used the time to investigate what it might look like to setup a Continuous Integration (CI) and Continuous Deployment (CD) system for the project.

<br/>

I chose one of my existing Rails app as an example as I do not yet know what I will actually be using to for my project. Having never done this before I started by using as many existing solutions as possible - namely [Travis CI](https://travis-ci.org/) and [Heroku](https://www.heroku.com/).

I started by setting up a CI provider which would be used to run my tests. There are a bunch of these out there including [CircleCI](https://circleci.com/) and [Codeship](https://codeship.com/). These are both good but perhaps a better solution is [Travis CI](https://travis-ci.org/) as it is free for open source projects. Setup couldn't be simpler - just sign into Travis CI with your Github account and enable the toggle switches in your Account settings for the repositories you wish to run tests.

The only other thing you need to do is add a ```.travis.yml``` file to your root directory. This should be really simple and do no more than define your language, version and the commands needed to run your test suite. Here's my six liner:

```
language: ruby
rvm:
  - 2.2.3
script:
  - bundle exec rake
```

Now every time you create a PR on Github your tests should automatically run with a link to Travis.

<br/>

Next, you will need to have your project setup to [deploy on Heroku](https://devcenter.heroku.com/articles/getting-started-with-rails4).
Once done, visit the deploy tab for the project on Heroku and click to connect with Github. All you will have to do is search for your repo on Github and click connect.

You probably want to keep the branch to deploy from as ```master``` but could change it if you are using Heroku as a ```development``` or ```staging``` environment and have branches to reflect that. I'd advise clicking the _'Wait for CI to pass before deploy'_ checkbox because you already have Travis CI setup and it should work perfectly. Click _'Enable Automatic Deploys'_ and all should be good to go.

There are some drawbacks to this simple system. For example post deploy commands such as ```rake db:migrate``` should really be run. There are [ways around this](http://gunpowderlabs.com/blog/automatically-run-migrations-when-deploying-to-heroku/) but I chose not to fully investigate them until I knew exactly what would be required in my project.

As you can see there is virtually nothing involved in getting a simple CI and CD system in place for a small side or college project. Perhaps I'll look into getting something setup with [Jenkins](https://jenkins.io) later on but for now this is good enough to 🚢.
