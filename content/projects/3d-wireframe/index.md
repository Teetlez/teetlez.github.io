+++
title = "3D Wireframe"
description = "A demonstration of 3D wireframe rendering without the use of 3D libraries or functions, built from scratch to illustrate fundamental concepts."
template = "article.html"
date = 2016-04-16
[extra]
author = "Timothy Clocksin"
# banner = "3DWireframe.avif"
archive = true
[taxonomies]
tags = ["Rendering", "3D Graphics", "Old Projects"]
+++

This project showcases a **3D wireframe rendering system** built without the use of any external 3D libraries or functions. The purpose was to demonstrate an understanding of the fundamental processes behind rendering wireframes in 3D.

{{ proc_js_canvas(script="3DWireframe.js", author="Timothy Clocksin") }}

## Overview

- **Custom Implementation**: All 3D rendering logic was created from scratch.
- **Processing.js Environment**: Built within the constraints of Processing.js, which limits flexibility for certain advanced features such as shading.

While shading was omitted, this project highlights the foundational principles of 3D rendering.

## Reference

For more details on 3D rendering concepts, visit:
[Generating 3D Shapes - Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/programming-3d-shapes/a/generating-3d-shapes)

## Controls

- **<kbd>↑</kbd>/<kbd>↓</kbd>**: Rotate vertically
- **<kbd>←</kbd>/<kbd>→</kbd>**: Rotate horizontally
- **<kbd>Ctrl</kbd>**: Rotate counter-clockwise
- **<kbd>Alt</kbd>**: Rotate clockwise

## Source Code

The full source code is available here:
[3DWireframe.js](3DWireframe.js)

[Processing.js](http://processingjs.org/)

---

## Additional Resources

- **[Processing.js](http://processingjs.org/)**
- **[3D Rendering Basics](https://en.wikipedia.org/wiki/3D_rendering)**
