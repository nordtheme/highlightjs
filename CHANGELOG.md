<p align="center"><a href="https://www.nordtheme.com/ports/highlightjs" target="_blank"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/main/assets/images/ports/highlightjs/repository-hero.svg?sanitize=true"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/nord-highlightjs/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-highlightjs.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://www.nordtheme.com/docs/ports/highlightjs"><img src="https://img.shields.io/github/release/arcticicestudio/nord-highlightjs.svg?style=flat-square&label=Docs&colorA=4c566a&colorB=88c0d0&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI%2BCiAgICA8cGF0aCBmaWxsPSIjZDhkZWU5IiBkPSJNMTMuNzQ2IDIuODEzYS42Ny42NyAwIDAgMC0uNTU5LS4xMzNMOCAzLjg0OGwtNS4xODgtMS4xOGEuNjY5LjY2OSAwIDAgMC0uNTcuMTMzLjY3Ny42NzcgMCAwIDAtLjI0Mi41MzF2OC4xMzNjLS4wMDguMzIuMjEuNTk4LjUyLjY2OGw1LjMzMiAxLjE5OWguMjk2bDUuMzMyLTEuMmEuNjY4LjY2OCAwIDAgMCAuNTItLjY2N1YzLjMzMmEuNjU5LjY1OSAwIDAgMC0uMjU0LS41MnpNMy4zMzIgNC4xNjhsNCAuODk4djYuNzY2bC00LS44OTh6bTkuMzM2IDYuNzY2bC00IC44OThWNS4wNjZsNC0uODk4em0wIDAiLz4KPC9zdmc%2BCg%3D%3D"/></a></p>

<p align="center">Changelog for <a href="https://www.nordtheme.com/ports/highlightjs" target="_blank">Nord highlight.js</a> — An arctic, north-bluish clean and elegant <a href="https://highlightjs.org" target="_blank">highlight.js</a> theme.</p>

<!--lint disable no-duplicate-headings no-duplicate-headings-in-section-->

# 0.2.0

![Release Date: 2019-12-20](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2019-12-20&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.2.0&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0)](https://github.com/arcticicestudio/nord-highlightjs/projects/3) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.2.0&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0)](https://github.com/arcticicestudio/nord-highlightjs/milestone/2)

## Features

**Nord Docs Transition** — #13 ⇄ #14 (⊶ f0afc5e0)
↠ Transferred all documentations, assets and from „Nord highlight.js“ to [Nord Docs][nord].
Please see the [corresponding issue in the Nord Docs repository][gh-nord-docs#188] to get an overview of what has changed for Nord highlight.js and what has been done to migrate to Nord Docs.

<p align="center">Landing Page</p>
<p align="center"><a href="https://www.nordtheme.com/ports/highlightjs" target="_blank"><img src="https://user-images.githubusercontent.com/7836623/71248061-4ad7cd00-231a-11ea-8e3b-18d8793deafd.png" alt="Preview: Nord highlight.js Port Project Landing Page"/></a></p>

<p align="center">Docs Page</p>
<p align="center"><a href="https://www.nordtheme.com/docs/ports/highlightjs" target="_blank"><img src="https://user-images.githubusercontent.com/7836623/71248059-4ad7cd00-231a-11ea-8bf7-6397ec997efd.png" alt="Preview: Nord highlight.js Docs Page"/></a></p>

<p align="center">Installation & Usage Guide</p>
<p align="center"><a href="https://www.nordtheme.com/docs/ports/highlightjs/installation" target="_blank"><img src="https://user-images.githubusercontent.com/7836623/71106476-bc4f3880-21bf-11ea-8812-079bb6425777.pnghttps://user-images.githubusercontent.com/7836623/71248060-4ad7cd00-231a-11ea-9cc6-5fd14d45b1eb.png" alt="Preview: Nord highlight.js Installation & Usage Guide Page"/></a></p>

## Improvements

### Syntax

**Comment Color Brightness** — #10 ⇄ #11 (⊶ 29f57b43)
↠ Implemented the frequently requested and long-time outstanding increase of the comment color (`nord3`) brightness by 10% from a lightness level of ~35% to ~45%.

➜ **Please see [arcticicestudio/nord#94][gh-nord#94] for all details about this design change decision**!

<p align="center"><strong>Before</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/57566979-e5f6e480-73d2-11e9-8802-27ffd1cbb84e.png" alt="Nord highlight.js syntax before increased comment color brightness change"/></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/57566980-e5f6e480-73d2-11e9-82a6-5b2a69895dd1.png" alt="Nord highlight.js syntax before increased comment color brightness change"/></p>

<p align="center"><strong>After</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/57566984-f018e300-73d2-11e9-89b6-ff72107173b8.png" alt="Nord highlight.js syntax after increased comment color brightness change"/></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/57566985-f0b17980-73d2-11e9-8a28-e142aeb74a57.png" alt="Nord highlight.js syntax after increased comment color brightness change"/></p>

## Bug Fixes

### Documentation

**MIT License Migration** — #7 ⇄ #8 (⊶ 89c7578b)
↠ Migrated to the MIT license to adapt to the migration of the main [Nord][gh-nord] project. Detailed information can be found in the [main task ticket][gh-nord#55].

## Tasks

### Documentation

**README Typos** — #9 (⊶ 13a4c589) by [@controversial][gh-user-controversial] and [@lukaskollmer][gh-user-lukaskollmer]
↠ Fixed multiple typos in the project README documentation.

# 0.1.0

![Release Date: 2017-10-20](https://img.shields.io/badge/Release_Date-2017--10--20-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-highlightjs/projects/2) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-highlightjs/milestone/1)

## Feature

Detailed information about features and install instructions can be found in the [README](https://github.com/arcticicestudio/nord-highlightjs/blob/develop/README.md#installation) and in the [project wiki](https://github.com/arcticicestudio/nord-highlightjs/wiki).

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/develop/assets/scrot-hero.png"/></p>

❯ Implemented the main theme classes as documented in the official [style guide][hljs-style-guide] and [CSS classes reference][hljs-css-class-ref] and according to the [Nord Style Guidelines][gh-nord]. All sources are written with [Sass][sass]. The CSS selectors are separated as SCSS modules by the sections defined in the documentation.

All [modules][nord-hljs-modules] are imported from the main [`nord.scss`][nord-hljs-scss] file. (@arcticicestudio, #1 in PR #3, 445f4f0e)

❯ Implemented language-specific styles to adhere to the [Nord Style Guidelines][gh-nord]. (@arcticicestudio, #2 in PR #4 / #5 in PR #6, 2f74d76d / 15ffa3f9)

<p align="center"><strong>Bash</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-bash.png"/></p>

<p align="center"><strong>C</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-c.png"/></p>

<p align="center"><strong>C++</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-cpp.png"/></p>

<p align="center"><strong>C#</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-cs.png"/></p>

<p align="center"><strong>CSS</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-css.png"/></p>

<p align="center"><strong>diff</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-diff.png"/></p>

<p align="center"><strong>Go</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-go.png"/></p>

<p align="center"><strong>HTML</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-html.png"/></p>

<p align="center"><strong>Java</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-java.png"/></p>

<p align="center"><strong>JOSN</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-json.png"/></p>

<p align="center"><strong>PHP</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-php.png"/></p>

<p align="center"><strong>Ruby</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-ruby.png"/></p>

<p align="center"><strong>Rust</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-rust.png"/></p>

<p align="center"><strong>Scala</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-scala.png"/></p>

<p align="center"><strong>SQL</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-sql.png"/></p>

<p align="center"><strong>Swift</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-swift.png"/></p>

<p align="center"><strong>YAML</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-highlightjs/v0.1.0/assets/scrot-lang-yaml.png"/></p>

---

<!--
+------------------+
+ Symbol Reference +
+------------------+
↠ (U+21A0): Start of a log section description
— (U+2014): Separator between a log section title and the metadata
⇄ (U+21C4): Separator between a issue ID and pull request ID in a log metadata
⊶ (U+22B6): Icon prefix for the short commit SHA checksum in a log metadata
-->

<!--lint disable final-definition-->

<!-- Base Links -->

[gh-nord]: https://github.com/arcticicestudio/nord
[nord]: https://www.nordtheme.com
[sass]: http://sass-lang.com

<!-- v0.1.0 -->

[hljs-css-class-ref]: http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html
[hljs-style-guide]: http://highlightjs.readthedocs.io/en/latest/style-guide.html
[nord-hljs-modules]: https://github.com/arcticicestudio/nord-highlightjs/tree/develop/src/modules
[nord-hljs-scss]: https://github.com/arcticicestudio/nord-highlightjs/blob/develop/src/nord.scss

<!-- v0.2.0 -->

[gh-nord-docs#188]: https://github.com/arcticicestudio/nord-docs/issues/188
[gh-nord#55]: https://github.com/arcticicestudio/nord/issues/55
[gh-nord#94]: https://github.com/arcticicestudio/nord/issues/94
[gh-user-controversial]: https://github.com/controversial
[gh-user-lukaskollmer]: https://github.com/lukaskollmer
