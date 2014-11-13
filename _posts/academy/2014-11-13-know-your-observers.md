---
layout: academy_post
title: Know Your Observers
permalink: /academy/know-your-observers
---

Observers are among the key components of Meteor. They take care of observing documents on MongoDB and they notify changes. We usually create observers inside publications. Here are a few common ways to create observers.

* When we return cursors from a publication
* When we create an advanced publication using `cursor.observeChanges`
* When we use one of the packages which permits reactive joins.

Creating observers results in higher CPU and RAM usage because they are one of the core components of Meteor. Fortunately, meteor doesn't create new observers for identical cursors that have the same query selector, fields and sort specifiers. This is normally knows as ["observer reuse"](http://support.kadira.io/knowledgebase/articles/372870-observer-reuse) and you can check it using Kadira's PubSub dashboard.

## Monitoring observers with Kadira

With Kadira, you can monitor observers and find out which publications are responsible for creating them. You can also use Kadira to detect observer leaks, especially if you are working with advance publications and [reactive joins](https://hub.kadira.io/posts/GhzxhT2GdsMiL2xrT).

Let’s discuss how to use Kadira’s Observer Monitoring to detect performance issues. We’re going to use a sample app which has several observers related performance issues. 

Let's see those problems and how to identify them with Kadira.

### High observer usage

This describes a situation in which a lot of observers are being created. We need to find out which publication is responsible and take appropriate action.

See following video:

<iframe width="640" height="480" src="https://www.youtube.com/embed/9OAWAIGkB4E" frameborder="0" allowfullscreen="1">
</iframe>

You can see how both “Observer Created” and “Observer Deleted” counts are high. Then we can sort publications by Observer Created and find out the exact publication. Then we can check whether that’s something legitimate or not.

### Observer leaks
High CPU and RAM usage(and growing) is detected in our app. With Observer Monitoring, we can easily find out which publications are responsible for this leak. See following video:

<iframe width="640" height="480" src="https://www.youtube.com/embed/z3aXAK4ru88" frameborder="0" allowfullscreen="1">
</iframe>

Observer Info shows that many observers are being created without being deleted. That’s the reason for the high CPU and RAM usage. This is termed an ‘observer leak’.

> Generally, both "Observer Created" and "Observer Deleted" needs to be identical in the long run (24 hours). If not, there seems be a observer leak in your app.

### Low observer reuse

Our sample app has a very low percentage of observer reuse. Observer Info shows us that a lot of observer handlers are being created with a very low percentage of reused observers. In most of these cases we can improve observer reuse and boost performance of both Mongo and Meteor.

> An observer handler is created every time `cursor.observeChanges` is invoked. However, Meteor does not create an observer for each observer handler. It will try to reuse an already cached observer: if it cannot, then a new observer will be created.

see follow video:

<iframe width="640" height="480" src="https://www.youtube.com/embed/bDLszm_sw8E" frameborder="0" allowfullscreen="1">
</iframe>

You can learn how to improve Observer Reuse by following [this article](https://kadira.io/academy/improve-cpu-and-network-usage/).

Observer Monitoring is a [paid](https://kadira.io/pricing.html) feature of Kadira and is available on all paid plans. More information is available in the Observer Info documentation.

> You need to have `meteorhacks:kadira` version 2.14.0 or higher installed on your app to activate these features.


