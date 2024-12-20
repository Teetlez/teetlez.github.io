+++
title = "Ray-Casting"
description = "A recreation of the ray-casting method used in early 3D video games like DOOM and Wolfenstein 3D."
template = "page.html"
[extra]
author = "Timothy Clocksin"
[taxonomies]
tags = ["Ray-casting", "3D Rendering", "Old Projects"]
+++

This project recreates the **ray-casting method** used in classic 3D video games such as *DOOM* and *Wolfenstein 3D*. The method involves shooting rays through a 2D array for every vertical row of pixels, where the height of the darkened "wall" is determined by the length of each ray.

{{ js_canvas(script="/scripts/Raycasting(scr).js", author="Timothy Clocksin", class="projectCanvas") }}

## Overview

- **Ray-casting Technique**: Simulates a pseudo-3D environment by calculating wall heights based on ray distances.
- **Early 3D Games**: Inspired by the mechanics and graphics of *DOOM* and *Wolfenstein 3D*.

For a detailed technical explanation of the ray-casting technique, refer to [Lode Vandevenne's tutorial](https://lodev.org/cgtutor/raycasting.html).

---

## Controls

- **UP**: Move forward
- **DOWN**: Move backward
- **LEFT**: Turn counter-clockwise
- **RIGHT**: Turn clockwise

---

## Source Code

The source code for the engine can be found here:
[Download RaycastEngine.txt](../Files/RaycastEngine.txt)

---

## Additional Resources

- **[Lode Vandevenne's Ray-casting Tutorial](https://lodev.org/cgtutor/raycasting.html)**
- **[DOOM (1993)](https://en.wikipedia.org/wiki/Doom_(1993_video_game))**
- **[Wolfenstein 3D](https://en.wikipedia.org/wiki/Wolfenstein_3D)**
