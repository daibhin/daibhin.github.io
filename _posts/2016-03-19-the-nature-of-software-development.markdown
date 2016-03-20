---
layout: post
title:  "Revision Notes: The Nature of Software Development"
date:   2016-03-19 20:00:00
---

<b>The philosophy:</b>

We want __value__.
Teams must be given responsibility for creating value.
They must be __guided__ to understand needs and time constraints.
These teams must be __organised__.
We organise around features.
We __plan__ by selecting the features we need, and in what order.
We __build__ feature by feature to ensure frequent delivery of value.
This ensures that we can see how things are progressing, early and often.
__Slicing__ features down enhances this.
A capable product can be enhanced and grown.
You must always remain ready to ship.
We must ensure __quality__ as we go to ensure value remains continuous, sustainable and indefinite.

<br/>

<h4><b>Value</b></h4>
* Value is what we want.
* Features (minimum marketable features) deliver value.
* Work incrementally for each new feature.
* Value is only achieved once software is shipped. Value must be delivered early.
* Features: Everyone may want something different, but no one wants everything.
* Ship early, ship often.
* Focus on high value, low cost features first. The next features mightn't be worth the time and money once the time comes to make them (so don't!).

<br/>

<h4><b>Guiding</b></h4>
* Don't follow the Analysis, Design, Coding, Testing in series method. Analysis doesn't give insight to Design or Coding. Testing at the end leaves no time to readjust.
* Monolith projects are bad.
* You'll waste time planning for things you'll never complete by the deadline = Wasted work!
* Multiple releases are easier manage and show value sooner.
* Projects that deliver feature by feature are more predictable.
* You get a better sense of the projects cadence.

<br/>

<h4><b>Organizing</b></h4>
* If teams are organized by skills-set, scheduling and delays will arise during handoffs between teams.
* Organize by 'Feature Teams', each with all the necessary skills to build the __entire__ feature.
* If you don't have enough specialists for all your teams, just make do. Assigning the best to the most important features. Creates a training/learning opportunity on the other teams. A Community of Practice!
* Build Communities of Practice around around skills. However, people still belong to their feature teams.
* Community experts now must bring everyone else up to speed in the community.
* Experts are not paid because they are so, but because they help others become an expert too.

<br/>

<h4><b>Planning</b></h4>
* Move from grand visions to tiny bites.
* Don't make plans too detailed - it will waste time and cause confusion.
* Key features are important to identify.
* Defer low value ideas indefinitely.
* Think about the product deeply, not just at the beginning, but all the time.
* Stay loose and ready to change plans during the project.
* Make time and money budgets, producing the most valuable features first. Stop when the clock runs out.
* Break two week sprints into two/three day stories.
* Larger stories (often broken into technical tasks) are hard for business-side people to evaluate until the end of the two-week sprint.
* Teams should choose how much work they can get done. They know better and will feel more commitment/determination to see the work through.
* Have planning sessions where features are presented one at a time.
* Don't estimate individual pieces of work, look at the aggregate and decide how much the team can do.
* 'Yesterday's Weather' - You'll get as much done today as you did yesterday.
* Estimates are risky - they want to be improved, compared. What is achieved by estimating?
* Get started immediately, if a prediction of how long things will take is needed, just count the things done.
* Stretch goals are destructive. Teams will try and unconsciously hurry - forgotten tests, unclean code.
* Hurrying introduces defects.
* Defects take longer to fix than they do to prevent.
* Estimates focus on the cost of things rather than the value.
* If there is too much food don't eat it, therein lies obesity and lethargy.
* In it for the whole project, staying healthy is critical.

<br/>

<h4><b>Building</b></h4>
* Go through a complete product development cycle from concept to ready to ship (requirements, design, coding and testing) in the one- or two-week cycles.
* Large, vague, sweeping requirements must be broken into small, practical next steps.
* Strive for maximum value with minimum effort.
* Features are either done or not done. There is no middle ground.
* Eliminate the test-and-fix finish. They drag on forever.
* Software should be free of defects __all__ the time.
* Design as you go.
* Too much and all features won't be completed.
* Too little and features will be hard to execute.
* Manage through observation. Tweak, observe, tweak again.

<br/>

<h4><b>Slicing in Parallel</b></h4>
* Every feature needs a solid infrastructure, a "foundation".
* If foundation is built first, too much of it will be built. Resulting in fewer features.
* Building foundations first inhibits features being shipped. This restricts value creation.
* Build features to be complete enough (a simple functional version). Do not start by building each feature to its full glory.
* We still need to build __all__ the features that are important, not just a few.
* Fill these features to as much capability as time permits.
* Small versions of each necessary feature, with just enough foundation to be solid is best.
* Having the best product at every moment, means we have the best possible project when we decide to ship.
* Don't design an entire system upfront, as we never know upfront what the system will be.

<br/>

<h4><b>Bug Free</b></h4>
* Product is built up of a set of correctly working features.
* Defects amount to negative features.
* Progress becomes uncertain.
* Eliminating defects as you go provides clarity on whats done.
* Defect repair is an unknown time delay.
* Repair as you go.
* Bugs are introduced when design evolves and when features are added or enhanced.
* Continuous comprehensive testing is required to catch new bugs.
* Business-level Tests: Verify we have received what we asked for.
* WE must test everything. This means more and better tests over time.
* Test burden grows over time. We need to keep up with it.
* Acceptance Test-Driven Development: Expressing features in terms of tests they must pass.
* Programmer Tests: Use TDD to ensure the code works as expected.
* More tests makes the team go faster.
* It takes longer to find and fix a problem that to prevent one in the first place.
* Design improvements must keep up, like testing practices.
* Every change tends to break our current design.
* Design must be refactored.
* Deteriorating design costs us in the same way a lack of tests do.
* We get slower unless the design remains fresh.
* Testing and refactoring are required to make feature-by-feature development possible.

<br/>

<h4><b>Recap</b></h4>
* Value is what we want.
* Features deliver value.
* Manage by looking at value, not by dates/artifacts that don't deliver value.
* Planning by feature is easy.
* Don't estimate if possible. Using 'Yesterday's Weather' works best
* Build features as small complete products every week.
* Products must always work correctly and be well designed.
