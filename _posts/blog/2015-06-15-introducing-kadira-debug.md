---
layout: blog_post
title: Introducing Kadira Debug
permalink: /blog/introducing-kadira-debug
---

Over the last 12 months, we have experimented with Kadira and introduced new ways to monitor the performance of Meteor apps. We hope, that we have helped a lot of developers to find and fix issues in their apps. Our feature set is mostly targeted at production apps although everyone uses Kadira for debugging apps locally.

Today, we have made it super easy to use Kadira while you are **developing** an app. You can debug apps quickly and your data won't leave your machine. **Most importantly, now Kadira can monitor Blaze and client-side activities.**

## Say Hello to Kadira Debug

Kadira Debug helps you to understand the activities happening inside your app in real time. It can track what's happening in both client and server at once. It includes DDP monitoring, route changes and Blaze monitoring and many more goodies. Based on this information, you can understand how your app is behaving and tune it accordingly. 

[![Kadira Debug Demo](https://cldup.com/TTxFy3ICHD.png)](https://www.youtube.com/watch?v=LLxajQmJ-xo)

Using Kadira Debug is simple:

* Install [Kadira Debug](https://github.com/meteorhacks/kadira-debug) with `meteor add meteorhacks:kadira-debug`. 
* Then visit <http://debug.kadiraio.com/debug> and see what's happening inside your app. 

> It even supports Cordova apps without any additional configuration.  

We have also created a guide on [how to understand your Meteor app](/academy/understandin-your-meteor-app) using Kadira Debug. We'll add more resources in coming weeks.

If you find a issue with [Kadira Debug](https://github.com/meteorhacks/kadira-debug) or you are looking for a feature, submit it to our [GitHub repo](https://github.com/meteorhacks/kadira-debug). 
