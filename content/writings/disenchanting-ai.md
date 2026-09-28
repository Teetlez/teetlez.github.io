+++
title = "The Ghostless Machine"
description = "Made in the image of Man"
date = 2026-09-03
draft = true
[taxonomies]
tags = ["technology", "philosophy", "Artificial Intelligence", "Draft"]
[extra]
author = "Timothy Clocksin"
katex = true
toc = true
go_to_top = true
+++

{% <crt> %}

```
We stand at the absolute precipice of a brave new era where
artificial intelligence is no longer a distant science-fiction
dream—it’s the very heartbeat of our modern existence.

It’s not merely a collection of cold, unfeeling algorithms, it’s
a _transformative paradigm shift_ that invites us to _delve_
into the boundless digital tapestry of tomorrow.

As we deftly navigate this ever-evolving technological landscape,
demystifying machine learning requires more than just raw
compute—it demands a holistic synergy of human curiosity and
artificial brilliance.

By fully embracing this unprecedented journey, we can unlock
a symphony of boundless innovation—because at the ultimate
intersection of data and destiny,

the future isn't just arriving, it's already singing.
```

{% </crt> %}

If your soul hurt from just reading that, I doubt that you're alone. Bombardment
from all things AI feels inescapable at the moment. And at this point
I'm willing to bet that you too feel exhausted from it all.

Not that it's not useful, or a tool, or something that we have to get rid of,
but something that weighs on us in a strange way other technological
advancements haven't. I think one reason for this is the strange assumption
that statistically correct answers somehow equate directly to both intelligence
and sentience.

## Zombies aren't people.

In Plato's Meno, there's a lot of discussion of questions about virtue, but one
thing I remember is the positing that there is a difference between actually
knowing something, and knowing what to say about something. While their main
concern was about virtue, the example was later tweaked in the 1900s when discussing
the hard problem on consciousness to create what is called the `philosophical zombie`.

A philosophical zombie is a thing that resembles a human in all physical aspects and
reacts to all external stimuli exactly how an average human would, yet completely
lacks consciousness (what might be called "phenomenal experience"). An example
given is that if you poked one with something sharp, it wouldn't experience the pain,
but would recoil from it. This goes beyond passing the fallible `turing test`
(based on subjective appearance) and sets a theoretical ceiling for AI as we know it.

With this ceiling in place, we can then use it as a model for interpreting all the buzz
occurring around us. But I think I need to explain in depth why I think that this applies
to AI in the first place.

## Two problems

I think my bones to pick are twofold: The first is that what everyone calls AI isn't even
understood correctly, and second is that intelligence and agency are attributed to the
wrong things.

### It's all just statistics

I won't go too in depth on the technical side of LLMs (what 90% of people mean right now
when they say the word AI) because I haven't yet created my own and am ignorant with
the finer details. However, I have trained a few neural networks and understand the
majority of what is actually happening under the hood. It's all just statistics and linear
algebra. I'll try to explain in my own way, but I will admit that there are are better
resources for learning the basics of this.

When I said that "_AI_" is actually just LLMs, here's the categorical path breakdown:
Computer Science -> Artificial Intelligence -> Machine Learning -> Neural Networks
-> Deep Learning -> Large Language Models. So you can see that when most people refer
to AI, a lot of the time they aren't really referring to the grand scope, and a lot of
the time the problems that are proposed that AI can fix, aren't even good LLM problems.

The other part is that LLMs aren't designed for giving the correct answer, they are
made to predict what the average answer might look like, two slight but very different
things. You probably have heard the explication "all it's doing is picking what word
probably will come next". Which is true with some added spice, because sometimes, a less
likely word is picked because sometimes, that is how language simply is.

This randomness though, actually shifts the model's goal into an analogous field that I am also
interested in: light transport (i.e. [pathtracing](/projects/pathtracer/)). This is because
the method of arriving at a solution incorporates basically Monte Carlo or Stochastic sampling for
approximating the infinite solution space of language completion. When we are asking this model
a question, our desired outcome is for it to give us the best completion or answer to the question,
but the issue is that there is a practically infinite amount of ways this can be completed. Even
the most obviously wrong answers could still be valid completions to an answer if the phrase
"... is the most obviously wrong answer..." or "... is the incorrect way of formulating it..." is
tacked onto the end of it. So because our brains and computers don't like handling infinite
possibilities very well, we collapse the solutions space and create random (or algorithmic)
sampling to approximate the response as best we are able to.

> [!NOTE]
> Also, this response isn't the answer, but the approximated best response to the question asked
> based on trillions of datapoints, which leads into the second issue.

### LLMs aren't intelligent, language is

...continue from here...
