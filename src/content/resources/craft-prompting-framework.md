---
title: "The CRAFT Prompting Framework"
description: "Five slots that turn vague AI output into something a partner would sign"
slug: craft-prompting-framework
order: 3
section: "Start here"
draft: false
---

## Why structure matters

Most disappointing AI output is the result of a vague prompt. The same model that gives a partner a useless three-paragraph response on request will produce something genuinely useful when the request is structured. The fix is not better AI. It is a clearer brief.

Think of prompting like briefing a junior in a hurry. The clearer the brief, the better the draft. CRAFT is one structured way to give that brief.

> A reminder: a structured prompt is necessary for good output but not sufficient. The conversation, not the first answer, is where the value lives. See [The Conversation Loop](the-conversation-loop.qmd).

---

## The CRAFT framework

Five elements. You do not need all of them every time.

| Letter | Element | What it means | Practical example |
|---|---|---|---|
| **C** | **Context** | What is the background? What facts or material is the AI working with? | "I am drafting a Statement of Advice for a self-employed client with mixed business and personal income." |
| **R** | **Role** | What expertise should AI take on? | "You are a financial adviser experienced with small-business owners under FOFA." |
| **A** | **Action** | What specifically should the AI do? | "Stress-test the recommendations and identify the two weakest points." |
| **F** | **Format** | How should the output be structured? | "Bullet points, with each weakness followed by a one-line counter-argument." |
| **T** | **Tone/target** | What tone, and who is the audience? | "Plain language suitable for a peer review by another adviser." |

---

## Why CRAFT works

1. **Clarity**: removes ambiguity from the request
2. **Consistency**: works across ChatGPT, Claude, Copilot, Gemini, and vendor-embedded tools
3. **Quality**: typically reduces rework substantially
4. **Speed**: a few extra seconds of structure saves minutes of revision
5. **Discipline**: makes you state what you actually want, which is often the work

---

## CRAFT is a starting point, not a rule

CRAFT is one structure among many. If you find five slots too many, [RTCF](rtcf-prompting-framework.qmd) is the same idea with four. If you want even less structure, just write clearly. The point is clarity, not adherence to a framework.

Other techniques that work well, alone or alongside CRAFT:

- **Ask for explicit reasoning before the answer.** *"Walk me through how you would approach this. Then give the recommendation."*
- **Give good and bad examples.** *"Here is a strong client letter. Here is a weak one. Now draft three in the style of the strong one."*
- **Comparative framing.** *"Show me three ways to phrase this finding. Compare the trade-offs."*
- **Constraints up front.** *"Under 300 words. Plain English. No legal jargon. Suitable for the client's adult son."*
- **Request revision.** *"That is a good first pass. Now make it tighter, more specific, and remove anything I cannot defend with evidence."*

---

## Examples for regulated practice

### Example 1: a client letter

**Weak prompt**

> "Write a letter to my client."

**CRAFT-improved prompt**

> *Context:* I act for the trustee of a family discretionary trust. The client wants advice on whether to make a top-up super contribution before 30 June. They are 58, still working, and have unused concessional cap from the prior two years.
> *Role:* You are an Australian accountant familiar with Division 293 and carry-forward concessional contributions.
> *Action:* Draft a one-page letter outlining the options, the trade-offs, and the questions I should put to the client before recommending one.
> *Format:* Letter format, three short sections (situation, options, questions). No greetings or sign-off.
> *Tone:* Plain English, suitable for a sophisticated client who is not a tax expert. Conservative and clear about uncertainty.

**Why it is better:** the model now knows the jurisdiction, the actual context, what to produce, what shape the output should take, and who is reading it.

### Example 2: stress-testing a position

**Weak prompt**

> "Is this argument any good?"

**CRAFT-improved prompt**

> *Context:* Below is the draft argument I propose to make on behalf of the respondent in a civil dispute over a contractor's scope. The relevant clauses are at sections 4.2 and 7.1 of the agreement.
> *Role:* You are senior counsel acting for the applicant.
> *Action:* Identify the three weakest points in this argument. For each, state the strongest counter you would make.
> *Format:* Numbered list. Each point in two or three sentences.
> *Tone:* Direct. Adversarial. Do not flatter the draft.

### Example 3: a clinical handout

**Weak prompt**

> "Write a handout about diabetes."

**CRAFT-improved prompt**

> *Context:* I see patients newly diagnosed with type 2 diabetes in a regional GP practice. Many are over 60, English-speaking, with limited prior health literacy.
> *Role:* You are a GP experienced in chronic disease management.
> *Action:* Draft a one-page handout covering what type 2 diabetes is, what changes the patient can make in the next four weeks, and when they should call the practice.
> *Format:* Single page. Three sections with simple headings. No bullet lists deeper than one level. No medical jargon without a plain-language gloss.
> *Tone:* Calm, practical, not alarmist. Reading age 12.

(Verify all clinical content against current guidelines before use. The model may default to US guidance.)

---

## Conversation, not just prompts

A note that applies to every framework on this page: a single, structured prompt produces a draft. The thinking lives in the follow-ups.

A typical productive sequence on regulated work looks like this:

1. CRAFT prompt: produces a first draft.
2. *"What are the three weakest points in this draft?"*
3. *"Now rewrite addressing those weaknesses, but keep the tone."*
4. *"What citations or sources have you assumed exist? Quote the actual text I should verify."*
5. *"This needs to fit inside a fixed-fee engagement. Cut anything that does not earn its place."*

The draft from step one is not the deliverable. The output of step five, after you have personally checked everything material, is.

---

## When CRAFT is overkill

- A quick rephrase or one-line definition: just ask.
- Open-ended exploration: start conversational, let structure emerge as you narrow.
- Multi-step work: use CRAFT (or RTCF) for each step and chain them together.

The goal is clarity, not adherence to a framework.

---

## Common mistakes

| Mistake | What happens | Fix |
|---|---|---|
| No context | Generic output that misses the matter | Provide the relevant facts (jurisdiction, client situation, fee constraints) |
| Vague role | Output lacks appropriate perspective | Be specific: *"experienced Australian financial adviser"* not *"expert"* |
| Unclear action | The model does something, but not what you needed | State exactly what you want produced |
| No format specification | Wall-of-text response | Specify length, structure, and audience |
| Wrong tone for the audience | Right content, wrong voice | Name the audience: *"for a partner review,"* *"for a client who is not a lawyer"* |

---

### About this work

borck.consulting helps regulated Australian small firms build prompt patterns that match the firm's standards, so AI work looks and reads like firm work, not like ChatGPT. Engagements begin with the AI Readiness Diagnostic.
