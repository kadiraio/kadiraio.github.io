---
layout: academy_post
title: Reducing PubSub Data Usage
permalink: /academy/reducing-pubsub-data-usage
---

Publications are the main place where your app sends data to the client when a client subscribes to it. Meteor caches a copy of each client's data in the server's memory. For example, let's say a single client has  approximately 2MB of subscription data. If you have 1000 concurrent clients connecting to your app, Meteor caches approximately 2GB (2MB * 1000) of client data in the server's memory.

If your app sends a large amount of data, it will take a considerable amount of time for it to reach the client (especially when utilizing mobile networks). So it is very important to reduce the amount of data your app sends to clients. Let’s see what we can do about it.

## Use Field Filtering

Most of the time, you don't need to publish all the fields of the MongoDB documents. Try using field filtering to remove the data your client doesn't need. For example, imagine your app is a blog, and a typical blog post looks like this in the MongoDB:

    {
      "_id": "this is the id",
      "title": "This is my summery",
      "content": "This is my content and it is very very long"
    }

Your home page contains a list of all blog posts and their titles. This is the publication for that.

    Meteor.publish('getTitles', function() {
      return Posts.find();
    });

In this case, you are also sending `content` to the client, but the client actually does not need the `content` field. Thus, the optimized version ignores the `content` by using field filtering.

    Meteor.publish('getTitles', function() {
      return Posts.find({}, {fields: {title: 1}});
    });

Use Meteor Documentation to learn more about [field filtering](http://docs.meteor.com/#fieldspecifiers).

## Restructure Your Application

Using small modifications, you can greatly reduce the amount of data you send to the client. Let's say you have 200 articles on your blog, and you are sending all of the titles to the client. However, in this case, let's say your users only need to know about the more recent articles, so instead you can send the last 20 articles instead of all of them. Making this change reduces the required memory by a factor of 10. The following example shows how to execute this modification:

    Meteor.publish('getTitles', function() {
      return Posts.find({}, {fields: {title: 1}, limit: 20});
    });

This is just an example. You can use paginations or implement a similar technique. Refer to this MeteorPedia [article](http://www.meteorpedia.com/read/Infinite_Scrolling) for implementing paginations with Meteor.

## Restructure Your Data

What if you want a content summary along with the title for your blog posts? In this case, you may decide to send the `content` to the client too, and you can show a summary based on that to the client. This works, but there is better way.

You can create a summary when you are creating and editing the blog post and assign it to a new field called `summary`. Then you can send that field instead of content, reducing the amount of data usage. See below.

    Meteor.publish('getTitles', function() {
      return Posts.find({}, {fields: {title: 1, summary: 1}, limit: 20});
    });

These are only some of the tips you can use to save subscription data, save server memory usage, and reduce latency. Try applying some of these; you can verify the results from the [Network Impact](http://support.meteorapm.com/knowledgebase/articles/347428-network-impact) metric in the Meteor APM.