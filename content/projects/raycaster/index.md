+++
title = "Ray-Casting"
description = "A recreation of the ray-casting method used in early 3D video games like DOOM and Wolfenstein 3D."
template = "article.html"
date = 2016-04-03
[extra]
author = "Timothy Clocksin"
archive = true
[taxonomies]
tags = ["Ray-casting", "3D Rendering", "Old Projects"]
+++

This project recreates the **ray-casting method** used in classic 3D video games such as _DOOM_ and _Wolfenstein 3D_. The method involves shooting rays through a 2D array for every vertical row of pixels, where the height of the darkened "wall" is determined by the length of each ray.

{{ proc_js_canvas(script="RaycastEngine.js", author="Timothy Clocksin") }}

## Overview

- **Ray-casting Technique**: Simulates a pseudo-3D environment by calculating wall heights based on ray distances.
- **Early 3D Games**: Inspired by the mechanics and graphics of _DOOM_ and _Wolfenstein 3D_.

For a detailed technical explanation of the ray-casting technique, refer to [Lode Vandevenne's tutorial](https://lodev.org/cgtutor/raycasting.html).

## Controls

- **<kbd>↑</kbd>**: Move forward
- **<kbd>↓</kbd>**: Move backward
- **<kbd>←</kbd>**: Turn left
- **<kbd>→</kbd>**: Turn right

## Source Code

The source code for the engine can be found here:
[Download RaycastEngine.js](RaycastEngine.js)

[Processing.js](http://processingjs.org/)

---

## Additional Resources

- **[DOOM (1993)](<https://en.wikipedia.org/wiki/Doom_(1993_video_game)>)**
- **[Wolfenstein 3D](https://en.wikipedia.org/wiki/Wolfenstein_3D)**
