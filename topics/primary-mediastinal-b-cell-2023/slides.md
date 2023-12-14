---
theme: academic
layout: cover
class: text-white
coverAuthor: beau hilton
coverAuthorUrl: https://www.beauhilton.com
coverDate: "2023-12-15"
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [1]
title: Primary Mediastinal B-Cell Lymphoma
info: |
  # Primary Mediastinal B-Cell Lymphoma
  Case Conference 2023-12-15, [Beau Hilton](https://www.beauhilton.com)
---

# Primary Mediastinal B-Cell Lymphoma

---

# Presentation

35M, athlete, no known medical problems.

<v-clicks>

Working in the crawl space under his house, developed progressive and eventually severe L arm pain and swelling.

Went to local ED: LUE DVT, put on rivaroxaban. CT scan same day had ?supraclav nodule, o/p f/u recommended.

Progressive dyspnea, facial plethora.

Presented to VA ED. CT: ++mediastinal mass w locoregional LAD. Radiographic and symptomatic SVC syndrome.

Core bx prelim read: mostly fibrotic tissue. Sx improved w supportie care, d/c home.

Day after d/c, bx returned: large B-cell lymphoma.
Primary team contacted him w prelim dx, he was feeling relatively well so deferred readmission to o/p appt.

</v-clicks>

---

# Outpatient visit

<v-clicks>

HR 130s, plethoric, dyspneic, but able to get around w/o assistance and speak in complete sentences.

Discussed DLBCL vs PMBCL, possibility of cure in either case, recommended admission for expedited w/u and tx start.

</v-clicks>

---

# CT

<!-- If I was smart I would write a Vue component to make interactive imaging.
     It would be really nice to take in a folder of images,
     rather than a manually typed list of discrete links.
     But this works:
     bastardized list css and layered jpgs.
-->

<style>
li{
    position:absolute;
    top:30;
    left:100;
    list-style-type: none;
}
</style>

<v-clicks class="fixed top-0 left-50 right-0">

- ![img](/images/ct-06.jpg)
- ![img](/images/ct-14.jpg)
- ![img](/images/ct-23.jpg)
- ![img](/images/ct-33.jpg)
- ![img](/images/ct-41.jpg)
- ![img](/images/ct-49.jpg)
- ![img](/images/ct-57.jpg)
- ![img](/images/ct-66.jpg)
- ![img](/images/ct-74.jpg)
- ![img](/images/ct-82.jpg)
- ![img](/images/ct-93.jpg)

</v-clicks>

<div class="-translate-x-11 translate-y-105"><a class="text-xs">https://radiopaedia.org/cases/8655</a></div>

---

# First admission

<v-clicks>

Contacted thoracic team for mediastinoscopy, accommodated same-day.

Mostly fibrotic tissue, rare large B-cells.

"Chopping through wood"

Wrote for R-EPOCH to start next day.

Nursing/pharmacy error: G-CSF released that night. \*\*\* might leave this out

</v-clicks>

---

# Subsequent admissions

<v-clicks>

- DA-R-EPOCH (dose adjustments list out here)
- Scan results

</v-clicks>

---

# Questions

- How common is it, who gets it, and what is the general prognosis?
- What is the typical presentation?
- What are the key parts of the workup?
- How common are nondiagnostic biopsies?
- What are the key parts of treatment?
- What is the role of radiotherapy?
- How should we approach post-treatment surveillance?
- What are the long-term adverse effects of surviving therapy?

How.<sup>1</sup>

<Footnotes separator>
  <Footnote :number=1><a href="https://beauhilton.com">Footnote</a></Footnote>
</Footnotes>

---

# Epidemiology

---

# S/sx prevalence at presentation (~%)


<table class="tg">
<tbody>

<tr>
 <td> Tumor size &ge;10cm<sup>1</sup> </td>
 <td> 60 </td>
</tr>

<tr>
 <td> Clinical SVC syndrome<sup>1</sup> </td>
 <td> 55 </td>
</tr>

<tr>
 <td> Radiographic SVC compromise<sup>1</sup> </td>
 <td> 80 </td>
</tr>

<tr>
 <td> Pleural effusion<sup>2</sup> </td>
 <td> 50 </td>
</tr>

<tr>
 <td> VTE<sup>3</sup> </td>
 <td> 35 </td>
</tr>

<tr>
 <td> B symptoms<sup>4</sup> </td>
 <td> 30-50 </td>
</tr>

</tbody>
</table>

<Footnotes separator>
  <Footnote :number=1><a href="https://doi.org/10.1002/1097-0142(19881101)62:9%3C1893::aid-cncr2820620904%3E3.0.co;2-x">Cancer 1988</a></Footnote>
  <Footnote :number=2><a href="https://doi.org/10.1056/NEJMoa1214561">NEJM 2013</a></Footnote>
  <Footnote :number=3><a href="https://doi.org/10.1016/j.thromres.2010.08.017">Thrombosis Research 2010</a></Footnote>
  <Footnote :number=4><a href="https://doi.org/10.1093/annonc/mdj030">Annals of Oncology 2006</a></Footnote>
</Footnotes>

<!-- Cancer 1988 paper:
     Mass Gen 1976-1985,
     20F and 10M,
     median age 34,
     CHOP+RT = 80% CR, 60% PFS at 5y,
     tumor bulk predicted tx failure.

     Plenty of older papers correlated pleural effusion, VTE, and tumor bulk with worse outcomes,
     but the new treatments (DA-R-EPOCH) are so good that the old prognostic indicators are less important.
     Extent of extranodal disease still seems to matter (more predictive of CNS involvement, maybe relapse),
     but less than it used to.
-->

---

# Selected clinicopathological features (~%)


<table class="tg">
<tbody>


<tr>
 <td> Bone marrow involvement<sup>1</sup> </td>
 <td> 1-5 </td>
</tr>

<!-- No need for BMBx. -->
<!-- If you're having a hard time getting tissue from elsewhere -->
<!-- and the PET lights up in the marrow, would be reasonable to BMBx. -->
<!-- Al Shemmar 2014 reported 11% BMBx+ (and I've seen reviews cite this number since it's more recent), -->
<!-- but that was 3/28 pts, every other study that reports BMBx data shows low single digits. -->

<tr>
 <td> CNS involvement<sup>2</sup> </td>
 <td> 5-10 </td>
</tr>

<!-- Also no need for LP and IT Cx. -->
<!-- Most studies don't report out CNS involvement. -->
<!-- The higher end of the range seems to be related to extensive extranodal disease -->
<!-- (i.e. if there's not much extranodal disease, v unlikely to have CNS disease). -->
<!-- Relapsed disease also has a higher propensity for the CNS. -->
<!-- One reasonable approach would be to save LP and IT Cx for presentations w extensive extranodal disease, -->
<!-- CNS sx, and relapses. -->

<tr>
 <td> Marked fibrosis<sup>3</sup> </td>
 <td> 25 </td>
</tr>

<!-- Most samples have some fibrosis. -->
<!-- A significant amount have so much fibrosis that it's hard to make a diagnosis. -->
<!-- (as with cHL, difficulty in getting a tissue diagnosis is itself a clue) -->
<!-- Core bx are often not enough. -->
<!-- Mediastinoscopy or similarly invasive and comprehensive bx approaches are needed in many cases. -->
<!-- There are rare cases that do not have apparent disease in the mediastinum, -->
<!-- in which case you need a smart pathologist to run all the right IHC and genetic tests to get to an answer. -->
<!-- The fibrosis also suggests some of the difficulties -->
<!-- in interpreting PET-CT (and images in general): some residual scar tissue is common. -->

</tbody>
</table>

<Footnotes separator>
  <Footnote :number=1><a href="https://doi.org/10.3389/fonc.2021.654854">Frontiers in Oncology 2021</a></Footnote>
  <Footnote :number=2><a href="https://doi.org/10.1200/jco.1999.17.8.2479">JCO 1999</a></Footnote>
  <Footnote :number=3><a href="https://doi.org/10.1097/00000478-199607000-00012">Am J Surg Pathol 1996</a></Footnote>
</Footnotes>

<!-- Cancer 1988 paper:
     Mass Gen 1976-1985,
     20F and 10M,
     median age 34,
     CHOP+RT = 80% CR, 60% PFS at 5y,
     tumor bulk predicted tx failure.
-->

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
