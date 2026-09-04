+++
title = "Secret Ink"
description = "A 'top secret' SCP-like document generator with redactions"
template = "article.html"
date = 2025-06-26
[extra]
author = "Timothy Clocksin"
banner = "ink-banner.webp"
[taxonomies]
tags = ["Font Rendering", "Font Layout", "backburner"]
+++

This project started because I simply couldn't find the thing I wanted: A good SCP-like-generator-with-built-in-redactions that looked like it was actually typed on paper. However, as I started working on it, I soon came to realize that this was hard to find for a reason.

## A puddle as deep as an ocean

{{ <image url="xkcd.avif" alt="Picture depicting how Harfbuzz holds up of all modern infrastructure" end={true} /> }}
If you never went down the rabbit hole of how you get from the **char** primitive of 8-bit binary to _these words on the screen_ (shut up about utf-8, I know, it's more than 1 byte, kinda), you will soon realize that it is way more complicated than you think. This modified xkcd comic from the [HarfBuzz github](https://github.com/harfbuzz/harfbuzz) page should at least give you some idea of the strange complexity we are dealing with here, and HarfBuzz isn't even the whole of it, that's just for _text shaping_. That doesn't even cover:

- Rasterizing
- Word-Wrapping
- UTF-8
- Fonts
- Locales
- Inevitable hopelessness

{{ <image url="ink-banner.webp" alt="Secret Ink banner" start={true} /> }}
So, needless to say, I had a lot more work cut out for me than I thought. Hopefully I can go more in depth with all of that, but right now, I am putting this on the backburner. I will make it avalible to anyone who wants to look at my awful code.

[![Teetlez/secret-ink - GitHub](https://gh-card.dev/repos/Teetlez/secret-ink.svg?fullname=)](https://github.com/Teetlez/secret-ink)

### Config file

I did add a config file to make the setup somewhat easier, but just keep in mind that you will have to download/specify your own fonts and page textures, since I didn't want to put those on my repo.

{% <crt> %}

<div class="container" style="text-align: left">
<pre class="asciiart" style="display: inline-block; text-align: left">

page_width = 2048
page_height = 2048
margin_top = 100
margin_bottom = 200
margin_left = 100
margin_right = 100

letter_spacing = 20.0
line_spacing = 20.0

default_font = "fonts/Special_Elite/SpecialElite-Regular.ttf"
heading_font = "fonts/Pica/Pica.ttf"
stamp_font = "fonts/stampwriter_kit/STAMPWRITER-KIT.ttf"
font_size = 32.0
heading_size = 64.0
stamp_size = 72.0

jitter_px = 2.0
blur_sigma = 0.3
ink_opacity = 0.95

redaction_marker = "=="
stamp_marker = "!!"

paper_albedo = "paper/CC0-Texture-Paper01/PaperAlbedo.png"
paper_normal = "paper/CC0-Texture-Paper01/PaperNormal.png"
paper_roughness = "paper/CC0-Texture-Paper01/PaperRough.png"

</pre>
</div>

{% </crt> %}
