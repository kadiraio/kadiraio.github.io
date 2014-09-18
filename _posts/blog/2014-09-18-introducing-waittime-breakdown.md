---
layout: blog_post
title: Introducing Wait Time Breakdown
permalink: /blog/introducing-waittime-breakdown
---

From the very beginning, we had the support to find out waitTime in both methods and subscriptions. But you had no way to identify which method(s) or subscription(s) are blocking the request.

![Without waitTime breakdown](https://cldup.com/QXZVPJbtSw.png)

But, now you can easily identify that with the waitTime breakdown. See below:

![With waitTime breakdown](https://cldup.com/TAz3zSO4HO.png)

In order to apply this change, you need to update kadira smart package to the lastest version (2.9.0).

> You can do it via both `meteor` and `mrt`

We've also added a new Academy article, which shows how to ["manage waitTime"](https://kadira.io/academy/managing-waittime/). Hope you'll get the most out of these.