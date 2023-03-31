---
theme: academic
layout: cover
class: text-white
coverAuthor: beau hilton 
coverAuthorUrl: https://www.beauhilton.com
coverDate: "2023-xx-xx"
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [1]
title: template!
info: |
  # Template
  Case Conference 2023-xx-xx, [Beau Hilton](https://www.beauhilton.com)

---

# Topic of great interest and deep import

---

# Copyable things

<v-clicks>

</v-clicks>

Footnotable.<sup>1</sup>

<Footnotes separator>
  <Footnote :number=1><a href="https://beauhilton.com">Footnote</a></Footnote>
</Footnotes>

---

# Set up js

Don't forget to add the entry to `topics.js`

```js {1,5-9}
import <<Something>> from "./<<something>>/assets/logo.svg?url";
import Octopus from "./template/assets/logo.svg?url";

export default [
  {
    title: '<<Something>>',
    logo: <<Something>>,
    route: '/<<something>>/',
  },
  {
    title: 'template',
    logo: Octopus,
    route: '/template/',
  },
].sort((a,b) => (a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0))
```

---

# Set up package.json

`package.json`

`<<something>>` goes in *4* places below.

```json {6-7}
{
  "version": "0.0.0",
  "private": false,
  "scripts": {
    "dev": "slidev",
    "build": "slidev build --base /<<something>>/ --out ../../dist/<<something>>",
    "export": "slidev export --output ../../dist/<<something>>/<<something>>.pdf"
  }
}

```

---

# Case presentation

Once upon a time...

---

# Case presentation

<v-clicks>

Exam notable for ...

</v-clicks>

---

# Questions

How.<sup>1</sup>

<Footnotes separator>
  <Footnote :number=1><a href="https://beauhilton.com">Footnote</a></Footnote>
</Footnotes>

---
layout: figure-side
figureFootnoteNumber: 1
figureUrl: http://placekitten.com/200/300
---


# Epidemiology

<v-clicks>

- errbody got it

</v-clicks>


<Footnotes separator>
  <Footnote :number=1><a href="https://beauhilton.com">Footnote</a></Footnote>
</Footnotes>

---

# Prognosis

<v-clicks>

## heyo <sup>1</sup>

- yup <sup>2</sup>

</v-clicks>

<Footnotes separator>
  <Footnote :number=1><a href="https://doi.org/10.1210/jc.2018-01968">link</a></Footnote>
  <Footnote :number=2><a href="https://doi.org/10.3803%2FEnM.2020.35.1.157">link</a></Footnote>
</Footnotes>

---

# Management

---
layout: index
indexEntries:
  - { title: "HemOnc.org entry", uri: "https://hemonc.org" }
  - { title: "NCCN Guidelines", uri: "https://www.nccn.org/professionals/physician_gls" }
  - { title: "PathologyOutline", uri: "https://www.pathologyoutlines.com" }
  - { title: "", uri: "" }
indexRedirectType: external
---

# Resources

---

# Bibliography

Use HTML export from Zotero. 
It's great.

- R-click on the collection name (or highlight all the citations you want)
- "Create Bibliography from Collection" (APA is pretty good, doesn't include numbering [which is good], does include hyperlinks)
- Output Mode: Bibliography 
- Output Method: Save as HTML
- copy all the div/span cites and replace the inner stuff below

Looks kinda like the following 
(note I changed the text size with `text-sm` from WindiCSS):

<div class="csl-bib-body text-sm" style="line-height: 1.35; margin-left: 2em; text-indent:-2em;">

  <div class="csl-entry">Al Subhi, Abdul Rahman, Veronica Boyle, and Marianne S. Elston. “Systematic Review: Incidence of Pheochromocytoma and Paraganglioma Over 70 Years.” <i>Journal of the Endocrine Society</i> 6, no. 9 (September 1, 2022): bvac105. <a href="https://doi.org/10.1210/jendso/bvac105">https://doi.org/10.1210/jendso/bvac105</a>.</div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.1210%2Fjendso%2Fbvac105&amp;rft_id=info%3Apmid%2F35919261&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Systematic%20Review%3A%20Incidence%20of%20Pheochromocytoma%20and%20Paraganglioma%20Over%2070%20Years&amp;rft.jtitle=Journal%20of%20the%20Endocrine%20Society&amp;rft.stitle=J%20Endocr%20Soc&amp;rft.volume=6&amp;rft.issue=9&amp;rft.aufirst=Abdul%20Rahman&amp;rft.aulast=Al%20Subhi&amp;rft.au=Abdul%20Rahman%20Al%20Subhi&amp;rft.au=Veronica%20Boyle&amp;rft.au=Marianne%20S.%20Elston&amp;rft.date=2022-09-01&amp;rft.pages=bvac105&amp;rft.issn=2472-1972&amp;rft.language=eng"></span>

</div>
