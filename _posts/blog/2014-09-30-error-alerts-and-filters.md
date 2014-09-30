---
layout: blog_post
title: Kadira Error Alerts and Filters
permalink: /blog/kadira-error-alerts-and-filters
---

We've launched an [Error Tracking solution for Meteor](https://kadira.io/blog/awesome-error-tracking-solution-for-meteor-apps-with-kadira/) early September and now almost all Kadira apps are using it. With your help, we've fixed bunch of issues and now there is a huge list of features to build over coming months. **Thank You!**

Today, I want to announce some of the essential features we've added recently to the Kadira Error Tracking. Let me show you them.

## Error Alerts

Now you can create alerts targeting errors via our existing [alert system](https://kadira.io/blog/stay-alert-with-your-meteor-app/). Just click on the "Alerts" button on the main menu and create your first Error Alert.

![Kadira Error Alerts](https://cldup.com/jNu35j7Dki.png)

> I recommend you to create at least an alert for **"Server Crash Count"**. Then you'll get an email when your server got crashed due to an error.

## Error Filtering

Sometimes, you might won't need to track some errors in your app. Now you can easily filter them out by writing rules inside your app. For an examples, let's say "you need to filter all client errors which includes the word `heartbeat`". 

This is how you can filter out those errors.

~~~js
// inside client/kadira.js

Kadira.errors.addFilter(function(type, message, err) {
  if(type == 'client' && /heartbeat/.test(message)) {
    return false; // filter out this error
  }

  return true;
});
~~~

Check our [documentation](http://support.kadira.io/knowledgebase/articles/431539-filtering-errors) to learn more about error filters.
(We've also created few default rules for you. Check [the](http://support.kadira.io/knowledgebase/articles/431539-filtering-errors) also.)

Although these are two small features, I hope they'll make your life easier on maintaining errors.