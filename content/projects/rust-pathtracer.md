+++
title = "Path-Tracing"
description = "A Monte Carlo path-tracer written in Rust, inspired by the 'Raytracing in One Weekend' book."
template = "page.html"
[extra]
author = "Timothy Clocksin"
[taxonomies]
tags = ["Path-Tracing", "Rust", "Rendering", "Monte Carlo", "Graphics"]
+++

This project is a **Monte Carlo path-tracer** implemented in **Rust**, inspired by the book _Raytracing in One Weekend_. The primary goal was to enhance my understanding of both **rendering techniques** and **Rust programming**.

---

## Overview

### Key Features

- **Rust Implementation**: Developed entirely in Rust for performance and safety.
- **Monte Carlo Path-Tracing**: Realistic light simulation through randomized sampling.
- **Custom Scenes**: Flexible scene input allows users to tailor rendering setups.

---

## Gallery

### Rendered Images

Click an image to view it in full size.

{{ gallery(items=[
    {image="Images/PathTracing/OneWeekend4.png", caption="Scene 1"},
    {image="Images/PathTracing/Teaset3.png", caption="Teaset"},
    {image="Images/PathTracing/Cornell.png", caption="Cornell Box"},
    {image="Images/PathTracing/OneWeekend2.png", caption="Scene 2"}
]) }}

---

## Usage

To run the path-tracer, use the following command-line options:

{% crt() %}
<div class="container" style="text-align: center">
<pre class="asciiart" style="display: inline-block; text-align: left">

rust_raytracer.exe [OPTIONS] [SCENE]

Arguments:
[SCENE]  Scene file to use

Options:
-s, --samples [SAMPLES]          Number of samples per pixel [default: 128]
-p, --passes [PASSES]            Number of frames to cumulate [default: 64]
-b, --bounces [BOUNCES]          Max number of times a ray can bounce [default: 8]
    --width [WIDTH]              Pixel width of frame [default: 640]
    --height [HEIGHT]            Pixel height of frame [default: 480]
-g, --gamma [GAMMA]              Gamma level [default: 2.2]
-l, --light-clamp [LIGHT_CLAMP]  Max light brightness [default: inf]
-f, --filter                     Apply bilateral filter after render to reduce noise
-h, --help                       Print help
-V, --version                    Print version

</pre>
</div>

{% end %}

---

Downloads
Download the compiled binary from the latest release:
Download Rust-Raytracer

---

Source Code
The source code for this project is available on GitHub:
Github Repository

---

Additional Resources
Raytracing in One Weekend
Rust Programming Language
