---
layout: academy_post
title: How to Optimize Your Methods and Publications
permalink: /academy/how-to-optimize-your-methods-and-publications
---

This is a general guide that can be used to optimize the response time of your methods and publications. Since this is a general guide only, some of the tips won't work for you.

## See What's Happening Behind Your Method/Publication

With Meteor APM, it is very easy to see what’s happening inside your method/publication and understand what operations cost the most. This is how:
For this example I'm referring to Methods, but you can apply the same process to PubSub as well.

* First navigate to the Detailed View section.
* The topmost chart shows the response time of your app. Click on any point in that chart and you'll see traced method calls just below the chart.
* Click on a trace call and you'll get a Method Explorer view. This is a graphical stack trace for your method. With that you can identify which operations are responsible for the response time.

Watch the following video:

<iframe src="//player.vimeo.com/video/91842608" width="100%" height="500" frameborder="0" webkitallowfullscreen="1" mozallowfullscreen="1" allowfullscreen="1" color="ffffff">
</iframe>

How you can reduce the response time for those operations is shown below.

## Fetch, ForEach, Map, Count, Observe, ObserveChanges

This is a DB cursor operation in which you are invoking a query against your collection. Normally it should not take more than _**200ms**_ to complete an operation of this kind. If it takes longer than that, you can try implementing the following optimizations:

* Make sure you've added a correct index for your query. Refer to the official [MongoDB index guide](http://docs.mongodb.org/manual/applications/indexes/).
* If the indexes are already working, it may be a network delay. Check that your app and the DB are in the same data center. Are they close enough?
* Your query may return a lot of data. Click the SEE MORE section of the Method/PubSub Explorer to see how many documents you are getting back from the DB. Try to reduce the number of documents you are getting, or reduce the data size.
* You might also be carrying out some DB or similar operations inside a ForEach or Map operation. If so, try to ignore them if possible, or try to find some alternative way.

## Update, Remove

* Update and Remove operations can also take advantage of the index. So, make sure that the selection query is occupying an index. Refer to the official [MongoDB index guide](http://docs.mongodb.org/manual/applications/indexes/).
* You might invoke a query that affects a large set of documents. Try to reduce the number of affected documents if possible.
* Check whether you have too many indexes on your collections. If so, all your indexes need to be updated whenever a document gets changed. This is a costly operation compared with having few indexes. So, try to reduce the number of indexes by using [compound indexes](http://docs.mongodb.org/manual/core/index-compound/).
* Check that your app and the DB are in the same data center. Are they close enough?

## Insert

* Check whether you have too many indexes on your collections. If so, all your indexes need to be updated when a document gets changed. So, try to reduce the number of indexes by using [compound indexes](http://docs.mongodb.org/manual/core/index-compound/).
* Check that your app and the DB are in the same data center. Are they close enough?

## Higher HTTP, Email and Async Time

* Try to add `this.unblock` to the top of the method (not possible with publications) to avoid other methods and subscriptions being kept waiting on this method. Adding this.unblock is not always possible. Refer to [this guide](http://meteorhacks.com/understanding-meteor-wait-time-and-this-unblock.html).
* If this is a publication, you should not use these kinds of operation. [See why](http://support.meteorapm.com/knowledgebase/articles/347759)!

## Higher Wait Time

This is owing to your method/publication being kept waiting on one or many other methods/publications until those methods are completed. You can click on the SEE MORE button in front of the wait and see what methods and subscriptions you are waiting for.

If you can see what is causing your methods and subscriptions to have a higher response time, try to improve them using this guide.

Sometimes, you are subscribing to several publications at once or calling several methods at once (or a mix of both). If so, having a higher wait time will be familiar to you. If those methods' throughput is low, you might not need to worry, as the wait time affects only a small number of clients.

## Higher Compute Time

This is the time taken for a computation to happen in your app. Since Meteor runs on NodeJS, and NodeJS is based on [eventloop](http://meteorhacks.com/fibers-eventloop-and-meteor.html), all the other operations are getting blocked. It's wise to optimize your computation or use another algorithm.

These are some of the general guidelines you can apply to your app. But bear in mind that every app is unique and some of these tips might not work for you.

We can have a look at your app. Simply send us an email to `help[at]meteorhacks.com` with your issue. (Don't forget to send your appID as well.)