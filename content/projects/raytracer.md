+++
title = "Ray-Tracing"
description = "A GLSL ray-tracing project inspired by an old OpenGL school assignment."
template = "article.html"
date = 2023-01-26
[extra]
author = "Timothy Clocksin"
[taxonomies]
tags = ["Graphics", "3D Rendering", "GLSL", "Ray-casting", "Light Transport"]
+++

This project is a GLSL-based ray-tracer that I ported from an older OpenGL school project. While the transition posed challenges—particularly the lack of recursion in GLSL—it also provided opportunities to improve upon the original code.

---

## Interactive Demo

Explore the ray-tracer in action below:

<iframe width="480" height="480" frameborder="0" src="https://www.shadertoy.com/embed/DllSWH?gui=true&t=10&paused=true&muted=true" allowfullscreen></iframe>

---

## Controls

- **Click & Drag**: Move the camera around.

---

## Project Notes

The lack of recursion in GLSL was a significant limitation during the conversion. However, I managed to implement iterative methods to mimic recursive behavior, resulting in a functional and improved ray-tracer.

Let me know if you'd like more details about the implementation or need help with similar projects!
