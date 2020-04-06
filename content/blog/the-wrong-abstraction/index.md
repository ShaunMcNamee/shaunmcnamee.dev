---
slug: the-wrong-abstraction
date: 2020-01-31
title: 'The Wrong Abstraction'
description: 'Is the wrong abstraction better than none at all?'
published: true
banner: './banner.jpg'
bannerCredit:
  'Photo by [JJ Ying](https://unsplash.com/photos/7JX0-bfiuxQ) on
  [Unsplash](https://unsplash.com/)'
---

Months ago at work, we decided to introduce TypeScript into our project (it is a full stack JavaScript web application).  We wanted the protections TypeScript provided us as a medium sized remote team, and wanted to stop whole classes of bugs before they were even written. Since this project was already almost a year old, we had a lot of JavaScript, making it unwieldy to stop and convert everything. We decided to write new things in TS, and convert old JS files as needed. 

A few days ago, I picked up the task of converting one of our shared React components to TypeScript. It is a complex component, and it is used many places in the application. Because of some other choices we made in the past, I was also removing a lot of the Higher-order Component and Render Props usage and replacing it with Hooks. We like the behavior and styling this component has, so I had to make sure those things were left intact.

This refactor took me more time than I thought that it would - around 5-6 hours when I expected it to take 2-3. Not a big deal in the grand scheme of things. The reason it took so long is what got me thinking; are we going about this particular component the right way? In trying to create types for the props of this component, I was stymied by the best way to represent what this component needed to function. It was then that it hit me - this might be the wrong abstraction.

If I was unable to clearly articulate what the consumer of this component needed to send it, was it really easy enough to use? Could I expect problems from future developers, either by using the component or needing to add features to it? These are things that were not thought about when this component was created, but that I had to wrestle with now. I examined some places the component was used, investigated options to change or replace this component, and thought about how it might be used in other ways. 

In the end, getting the task out the door won out (as it usually does) and I was able to get it refactored to TypeScript using the same props and structure as before. I think this has made me more cognizant of creating the wrong abstraction in the future, since they are so hard to get rid of. As it turns out, no abstraction is usually better than the wrong one.