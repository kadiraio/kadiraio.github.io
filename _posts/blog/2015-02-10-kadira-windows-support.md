---
layout: blog_post
title: Kadira Windows Support
permalink: /blog/kadira-windows-support
---

Windows support is one of the most requested features on the [Meteor Roadmap](https://trello.com/c/ZMvnfMfI/11-official-windows-support). Meteor core team is working on the Windows support since last December and now it's [almost ready](https://github.com/meteor/meteor/wiki/Preview-of-Meteor-on-Windows).

From today onwards, you can use Kadira on Windows too. Just install the kadira package and it'll work:

~~~shell
meteor add meteorhacks:kadira
~~~

![Kadira: It's over 9000](https://cldup.com/YoCEbzrKLA.png)

## Why it didn't work earlier?

This is very interesting. We've used some NPM binary modules to track CPU usage and profile CPU. Because of that, we need to build a binary version of Kadira for all platforms(linux and mac) and publish it to the Meteor packaging system. But, that functionality is not yet implemented for Windows.

But recently, a lot of users were asking to use Kadira on Windows. So, we were looking to get around with the above problem and we came up with a solution.

Now we are using some alternative methods to track CPU usage without using binary NPM modules.

**Then, what about CPU profiling?**

> Edit: Now [Kadira Profiler](https://github.com/meteorhacks/kadira-profiler)  works on Windows too.

Unfortunately for [CPU profiling](https://kadira.io/academy/meteor-cpu-profiling/), there is no workaround. So, we split the CPU profiling functionality into an [another package](https://github.com/meteorhacks/kadira-profiler). With that, Windows users can use all the features of Kadira except CPU profiling.

After Meteor for Windows comes with the binary module building support, Windows users can get the CPU profiling support as well. I'll keep you posted.

Build awesome apps with performance in mind. Check out [BulletProof Meteor](https://bulletproofmeteor.com/) and [Kadira Academy](https://kadira.io/academy/).
