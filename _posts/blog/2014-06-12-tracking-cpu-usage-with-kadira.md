---
layout: blog_post
title: Tracking Meteor CPU Usage with Kadira
permalink: /blog/tracking-cpu-usage-with-kadira
---

You might have seen the [EventLoop Utilization](http://support.kadira.io/knowledgebase/articles/372876-event-loop-utilization) chart in our Dashboard. But, it was not correctly working across different hosting platforms. Actually, that value does not reflect any meaning in some situations.

![CPU Usage tracking with Kadira](https://i.cloudup.com/eisfJAuiJW.gif)

So, we've replaced EventLoop Utilization with [CPU Usage](http://support.kadira.io/knowledgebase/articles/378890-cpu-usage). It's the actual percentage of CPU spent on your app. Still, you need to be [careful](http://support.kadira.io/knowledgebase/articles/378890-cpu-usage) with analyzing CPU Usage because, some hosting providers have implemented CPU restrictions. But you can see the correct CPU Usage of your app.

> Please upgrade [kadira](https://atmospherejs.com/package/kadira) smart package in order to track CPU Usage. Apply following code:
>
> `mrt update`

## How do we track CPU Usage?

There is no direct API to track CPU usage of your app within your app. But, we are using [usage](https://github.com/arunoda/node-usage) npm module for that. In Linux and Solaris, it uses the **/proc** filesystem to read the CPU usage. So, it is very efficient.

Have a good time with improving your application.
