---
layout: academy_post
title: Getting Started With Meteor APM
permalink: /academy/getting-started-with-meteor-apm
---

This guide will help you get started with Meteor APM to identify how your app behaves and help you take necessary actions.

##Install and Configure Meteor APM

Adding APM support for your app is pretty simple. Simply add the APM smart-package as follows:

    mrt add apm

Then configure your app by adding this code into any file in your app's server directory.

    Apm.connect('<appId>', '<appSecret>')

> It is very important to add this code into server directory; if you do not, your Meteor APM app credentials will be exposed to the client.

## A Good Way to Configure

Normally, it is a good practice to not hard code API credentials. For that, you can use [`Meteor.settings`](http://docs.meteor.com/#meteor_settings) or Environmental Variables.

### Using Meteor.settings

Your `settings.json` file will look like this:

    {
      ...
      "apm": {
        "appId": "<your appId>",
        "appSecret": "<your appSecret>"
      }
      ...
    }

This is the code that runs on the server:

    if(Meteor.settings && Meteor.settings.apm) {
      var apmAuth = Meteor.settings.apm;
      Apm.connect(apmAuth.appId, apmAuth.appSecret);
    }

Deploy and run your app with the [`settings.json`](https://groups.google.com/forum/#!topic/meteor-talk/K79-i3LYL3g) file. If you have not provided APM credentials via Meteor.settings, you won't be connecting the APM. This is ideal for developing your app locally.

### Using Environmental Variables

Add the following environmental variables when you are running your app (possibly in your deployment environment):

    APM_APP_ID=<your appId>
    APM_APP_SECRET=<your apmSecret>

This is how your server code should look:

    var apmAppId = process.env.APM_APP_ID;
    var appAppSecret = process.env.APM_APP_SECRET;
    if(apmAppId && apmAppSecret) {
      Apm.connect(apmAppId, apmAppSecret);
    }

Deploy and run your app. As with `Meteor.settings`, if you have not exposed environmental variables, you won't be connecting to the APM. This is ideal for dev environments.

After you've successfully connected with APM, you'll be able to see messages like the ones below, which indicate you've successfully authenticated with APM.

![Successfully Connected to the APM](https://i.cloudup.com/w9hkMusPNE.png)

_**After about one minute, your data will be processed and will be available on the UI.**_

## Meteor APM Dashboard

The Meteor APM Dashboard is very nicely designed and super easy to use. Yep, it's a Meteor App too. This is the overview of the Meteor APM Dashboard.

![Meteor APM Dashboard](https://i.cloudup.com/awL09AN93C.png)

You should not need extra help to become familiar with the Dashboard. However, if you do need clarification, refer to this [guide](http://support.meteorapm.com/knowledgebase/articles/306862-page-navigation) or click the inline "Help" icons.

## How to Use Meteor APM

Let's assume you've added Meteor APM and it has enough information (about 30 minutes of runtime data) to provide a good analysis. There is no right or wrong way to use Meteor APM but I will suggest two simple ways to get started.

### Finding Bottlenecks in Meteor Methods and Fixing Them

Normally, for a typical Meteor application, the Average [Response Time](http://support.meteorapm.com/knowledgebase/articles/347424-response-time) of a Meteor Method should not be more than 200ms. If it is more than this, in many cases there are ways to improve performance.

* First click on **Methods** on the Main Menu and look at the Response Time.
* Also look at the Response Time graph for any spikes.
* If you find places where the Response Time is higher than 200ms, click the **Detailed View** button on the Sub Menu.
* Then find the Response Time and click on the spike in the graph.
* This will show a set of traced methods at that time.
* Click on a trace to see exactly what has happened on that method at that time.
* Follow this [guide](https://meteorapm.com/academy/how-to-optimize-your-methods-and-publications/) to understand the traced data and improve your method accordingly.

<iframe width="640" height="480" src="//www.youtube.com/embed/4vt2M7-bsDQ" frameborder="0" allowfullscreen="1">
</iframe>

> You can follow the [same process](https://www.youtube.com/watch?v=CQtmnzIlzE4&feature=youtu.be) for PubSub.

### Finding Methods You Need to Improve

In your app, you might be using many Meteor Methods. You may need to improve all of them. It is a good idea to start, though, with the ones that have more impact. We’ve identified that if you can improve a method with higher Throughput, it will impact more on the total performance gain. To do this, follow these steps:

* Click on the **Detailed View** of Methods.
* Sort the Methods Breakdown by [Throughput](http://support.meteorapm.com/knowledgebase/articles/347444-throughput) (the default sort criteria).
* Click on a method name in the Methods Breakdown.
* In the [Recommendations](http://support.meteorapm.com/knowledgebase/articles/347445-method-recommendations) section, you will see the impact you can have if you improve the selected method.
* Click on the Response Time Graph and find a trace.
* Analyze it with this [guide](https://meteorapm.com/academy/how-to-optimize-your-methods-and-publications/) and improve your method if possible.
* Do the same for all methods.

<iframe width="640" height="480" src="//www.youtube.com/embed/REUrBU7x6GU" frameborder="0" allowfullscreen="1">
</iframe>

> You can follow the [same process](https://www.youtube.com/watch?v=CTk0Qvj0n6Y&feature=youtu.be) for PubSub, but you will need to sort the Pub/Sub Breakdown by [SubRate](http://support.meteorapm.com/knowledgebase/articles/347439-subrate) instead of Throughput.

There are many more ways to improve your app with Meteor APM. Explore and [share](http://support.meteorapm.com/forums/224274-general) your discoveries with us. You can also refer the tutorials on the [Meteor APM Academy](https://meteorapm.com/academy/) to find more ways to improve your app.

If you need help or more information, contact arunoda at `arunoda [at] meteorhacks.com`. Good luck and don't forget to share your [experience](http://support.meteorapm.com/forums/224274-general) with us.