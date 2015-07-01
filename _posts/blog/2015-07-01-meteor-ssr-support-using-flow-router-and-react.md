---
layout: blog_post
title: Meteor Server Side Rendering Support with FlowRouter and React
permalink: /blog/meteor-ssr-support-using-flow-router-and-react
---

Today is holiday for Sri Lanka. But for me, it's a hackday. I started playing with React and wrote few simple apps. That's a nice experience.

So, I started thinking why not trying to implement SSR support. It's worth trying since now we've all the tools we need.

**Guys, It was a successful experience. Now we've pure SSR support for Meteor.**

### How It Works.

Let's have a look at first.

* Demo App: <http://flow-react-ssr.meteor.com/>
* Demo App Code: <https://github.com/arunoda/hello-react-meteor>

<iframe width="960" height="720" src="https://www.youtube.com/embed/Qj2eppT27BU?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="1">
</iframe>

Basically, you just write your Meteor app as you do normally, but using React as the frontend. You use generic Meteor pub/sub to fetch data to the client and render your pages. 

Here, you need to use [FlowRouter](https://atmospherejs.com/meteorhacks/flow-router-ssr) and [ReactLayout](https://github.com/arunoda/hello-react-meteor/blob/master/lib/react_layout.js) to render react components. ReactLayout is a pretty simple wrapper around `React.render()` which works both on the server and the client.

In the server, there is very interesting thing is happening. FlowRouter generate an isolated environment for each route. It use existing subscriptions to fetch data and assign them to collections in that environment. So, you don't need to change any of your code for the SSR support. 

Then when ReactLayout render components, it gets the data filtered by subscriptions for that route. (You can also use component level subscriptions.) 

After that ReactLayout handover the generate HTML to FlowRouter. This is designed in a way that we can add other layout engine support as well. So, FlowRrouter still doesn't directly works with the layout engine.

### Where we can go

This is just the base work for SSR and there's a lot to be done to build a production ready version. But, now everything is clear and it's a matter of time we build and ship it. 

> This is the something we are going to release with FlowRouter 3.0. We are very close to release FlowRouter 2.0.

I'll talk more about this in the upcoming **Kadira Show** and if you like to work on this, just drop me a message.