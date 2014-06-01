---
layout: academy_post
title: Reduce Bandwidth and CPU Waste
permalink: /academy/reduce-bandwidth-and-cpu-waste
---

Iron Router normally unsubscribes all previous subscriptions when entering into a new route.

Actually, this is not an Iron Router issue. It's a feature of Meteor's Deps package. Read [this article](http://meteorhacks.com/meteor-subscription-optimizations.html) to learn more about this.

## Why is this bad?

Although this is a nice feature it causes two main issues.

1. The user has to wait between routes, even for a recently visited route.
2. There is an increase in subscription rate, which introduces cpu and network issues.

## Identifying this issue

With meteor APM you can identify the subscriptions that have this issue and apply a fix.

First visit the Pubsub detailed view. Then sort publications by shortest lifespan. Next, Select publications with the lowest lifespan and high throughput.

![Sort with Shortest Lifespan](https://i.cloudup.com/xlVG39nzxr.png)

Publications identified by the above selection criteria have the shortest lifespan and high subscription rates, which means they change very rapidly. The following fixes can be applied to resolve the issue.

## Potential Fixes

Fixing this issue is not that hard. Subscribing to all the subscriptions that you need to keep in every route is the cure.

You can easily implement such logic in your code. The following code shows how to use this technique for a multi-room chat app.

~~~js
...
~~~

The other option is to use Subscription Manager, a general purpose library that has implemented the above logic. This is how we can fix the issue with Subscription Manager.

~~~js
...
~~~

See the Subscription Manager docs for more info.

If you have a lot of users, simply fixing this issue will help you greatly reduce CPU cycles in your application.
