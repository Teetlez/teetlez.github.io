+++
title = "Procedural Terrain"
description = "A procedural terrain generator utilizing Perlin noise to simulate natural landscapes."
template = "page.html"
[extra]
author = "Timothy Clocksin"
[taxonomies]
tags = ["Procedural Generation", "Perlin Noise", "Isometric View", "Terrain Generator", "3D Visualization"]
+++

This project showcases a **non-interactive terrain generator** capable of creating natural-looking environments, including **trees**, **grass**, **mountains**, **snow**, **beaches**, **lakes/ponds**, **clouds**, and **hills**. The generator leverages **Perlin noise** for smooth, realistic transitions and an **isometric viewpoint** for a stylized aesthetic.

---

## Overview

### Key Features

- **Perlin Noise**: Generates natural-looking terrain shapes and textures.
- **Isometric Viewpoint**: Provides a clean and stylized perspective.
- **Procedural Generation**: Every render is unique.

For more information about the mathematics behind Perlin Noise, see the article:
[en.wikipedia.org/wiki/Perlin_noise](https://en.wikipedia.org/wiki/Perlin_noise)

---

## Demo

### Terrain Generator Demo

A script embedded into this project creates the terrain:

<script async src="../Files/Scripts/ProceduralTerain(scr).js"></script>

---

## Gallery

### Sample Outputs

Click an image to view it in full size.

{{ gallery(items=[
    {image="Images/ProceduralTerrain/Sample1.jpg", caption="Mountain Landscape"},
    {image="Images/ProceduralTerrain/Sample2.jpg", caption="Snowy Peaks"},
    {image="Images/ProceduralTerrain/Sample3.jpg", caption="Lush Forest"},
    {image="Images/ProceduralTerrain/Sample4.jpg", caption="Coastal View"},
    {image="Images/ProceduralTerrain/Sample5.jpg", caption="Cloudy Skies"}
]) }}

---

## Controls

No controls are necessary for this generator—just enjoy the results as they appear!

---

## Source Code

The source code for this project can be found here:
[ProceduralTerrain.txt](../Files/ProceduralTerrain.txt)

---

## Additional Resources

- **[Perlin Noise on Wikipedia](https://en.wikipedia.org/wiki/Perlin_noise)**
