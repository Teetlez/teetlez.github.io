+++
title = "3D Wireframe"
description = "A demonstration of 3D wireframe rendering without the use of 3D libraries or functions, built from scratch to illustrate fundamental concepts."
template = "page.html"
[extra]
author = "Timothy Clocksin"
[taxonomies]
tags = ["Rendering", "3D Graphics", "Old Projects"]
+++

This project showcases a **3D wireframe rendering system** built without the use of any external 3D libraries or functions. The purpose was to demonstrate an understanding of the fundamental processes behind rendering wireframes in 3D.

{{ js_canvas(script="/scripts/3DWireframe(scr).js", author="Timothy Clocksin", class="projectCanvas") }}

## Overview

- **Custom Implementation**: All 3D rendering logic was created from scratch.
- **Processing.js Environment**: Built within the constraints of Processing.js, which limits flexibility for certain advanced features such as shading.

While shading was omitted, this project highlights the foundational principles of 3D rendering.

---

## Reference

For more details on 3D rendering concepts, visit:
[Generating 3D Shapes - Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/programming-3d-shapes/a/generating-3d-shapes)

---

## Controls

- **UP & DOWN**: Rotate vertically
- **LEFT & RIGHT**: Rotate horizontally
- **Ctrl**: Rotate counter-clockwise
- **Alt**: Rotate clockwise

---

## Source Code

The full source code is available here:
[Download 3D Wireframe.txt](../Files/3DWireframe.txt)

---

## Additional Resources

- **[Processing.js](http://processingjs.org/)**
- **[3D Rendering Basics](https://en.wikipedia.org/wiki/3D_rendering)**
