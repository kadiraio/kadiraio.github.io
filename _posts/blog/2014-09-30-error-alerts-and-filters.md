---
layout: blog_post
title: New Pricing Model based on number of DDP connections
permalink: /blog/new-pricing-model
---

Today I am very happy to announce our new pricing model. This is the third time we are changing our pricing model. The reason is simple, we want Kadira to be an affordable solution for everyone.

## Host based pricing model

Earlier, we had host based pricing model and you've paid for the number of hosts each of your apps are using. It has few major issues.

### Hosting Provider Dependant

If you are using a deployment provider like "modulus.io", you need few hosts(servos) to run a decent production meteor app. If you are using a server from "AWS", you can run your Meteor app from a single host(server). 

If you are using modulus.io you need to pay for 3 hosts, but only one if you are using AWS for an identical meteor app with similar usage. That's unfair.

### Per app based pricing

Let's say, you want to share your staging app with your team. With our earlier pricing model, you need to pay for that app separately as well. That's an additional cost.

Because of these issues, we were looking for an new pricing model. And some of you've suggested few models. Thank you for that. 

## The New Pricing Model
Today, we are releasing a new pricing model based on the number of DDP connections your app is using. 

> a DDP connection is a realtime connection made to your Meteor server either from a browser or from a mobile app.

So, now you don't need to pay more if you are using a hosting provider like modulus.io. Additionally, the new pricing model has following characteristics as well. 

* Pricing is based on per account basic
* You can have any number of apps for an account
* You can have any number of hosts for an app
* Now we use Stripe 

Our normal plans starting from _**100,000 DDP**_ connections for $50. We also have a small plan of $10. It is designed for a single developer who needs to use Kadira's paid features.

[**Click here to learn more about all Kadira plans**](https://kadira.io/pricing)

Update your [**plan**](https://ui.kadira.io/account/plans/) and help us to help you.