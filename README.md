# Homework Project 5

This week we’re going to extend homework 4 by developing the same functions using the [Svelte](https://svelte.dev) framwork.

In addition to the [Svelte](https://svelte.dev) documentation itself you can find many useful videos and tutorials. Here are a few that I think are pretty good:

* [Svelte Tutorial](https://svelte.dev/tutorial/basics)
* [Li Hau: Writing your first Svelte Component](https://youtu.be/fhQ3o6tbhKQ)
* [Joy Of Code: Svelte for Beginners](https://joyofcode.xyz/svelte-for-beginners)
* [Bitfumes: Full Svelte Course](https://youtu.be/AilOdkZGeOk)
* [Mozilla: Getting Started with Svelte](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)

# Requirements

The idea is to move your HW4 code to Svelte. Think about how best to do this given the features that Svelte has to offer. Don't use `querySelector()`, or `getElementById()`, but use the built-in features of Svelte to connect Typescript variables to element values.

Rather than using `addEventListener()` or attribute assignment (e.g., `element.onsomething = ...`) use a Svelte mechanism (e.g., `on:action = {() => ...)`) to connection event handlers to specific element related events.

Points will be distributed as follows:

- 20% Includes a form with a Svelte action that correctly uses `preventDefault`
- 20% Attaches multiple event handlers using the Svelte `on:action = ...` mechanism
- 20% Modifies the style of a DOM element in a useful way
- 20% Uses correct Typescript typing
- 20% Uses consistent and clean style
