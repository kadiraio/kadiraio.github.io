---
layout: blog_post
title: Improvements For The Meteor APM Client
permalink: /blog/improvements-for-the-meteor-apm-client
---

Last week, we spent some time optimizing the [Meteor APM client package](https://atmospherejs.com/package/apm) and adding some useful features.

We were able to reduce the Meteor APM client's CPU usage, which is now negligible.

> Simply update your Meteor APM client package with `mrt update` to benefit the CPU improvements.

Now we've added a few useful features to help you to identify the root causes of performance problems or bugs very easily.

## Access Parameters for Methods and PubSub

Now when you are looking at a Method or PubSub [trace](http://support.meteorapm.com/knowledgebase/articles/347453-response-time-with-traces), you can view the params you've sent along with it. You can use that information to identify the root cause:

![Params on Trace](https://i.cloudup.com/zFwFSKkVP9.png)

## Number of Documents Fetched and Updated

If one of your DB operations is slow, it is very important to find the number of documents fetched. Similarly, if you are invoking an update or remove operation, it is valuable to get the number of documents affected by that operation. Now you can check these numbers with Meteor APM:

![DocsFetched on DB Fetch](https://i.cloudup.com/EhaFWJknEN.png)
![DocsUpdated on DB Update](https://i.cloudup.com/UiqKqNdGBT.png)

## Caching Information For ObserveChanges

When you've returned a cursor from a publication, Meteor applies an [observeChanges](http://docs.meteor.com/#observe_changes) operation on it. If there is a cached observer based on the same query and options, Meteor will reuse it. You can now identify that with Meteor APM:

![Caching and ObserveChanges](https://i.cloudup.com/WgzL_svron.png)

This shows that `noOfHandles` is greater than one. This means you are utilizing the cache and the data is not fetched again from the DB.

And also, you can see the number of documents the cache contains. All these documents will be sent to the client eventually.

> To get all these new features, simply update the Meteor APM client package with `mrt update` and deploy your app again.