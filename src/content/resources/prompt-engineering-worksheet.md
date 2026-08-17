---
title: "Prompt Engineering Worksheet"
description: "Six regulated-firm scenarios: work through one in three rounds and you will see the difference structure makes"
slug: prompt-engineering-worksheet
order: 12
section: "At partner level"
draft: false
---

## How this works

You will work through any one (or more) of six firm scenarios in three rounds:

| Round | What you do |
|---|---|
| **Round 1: Baseline** | Pick a scenario. Write a quick, natural prompt. Note the result. |
| **Round 2: Apply RTCF or CRAFT** | Redo the same scenario using a structured framework. Compare. |
| **Round 3: Advanced** | Try chain-of-thought, iterative refinement, or multi-turn techniques. |
| **Debrief** | Reflect. Save your best prompts. |

A quick reference for the framework is at the bottom.

---

## Scenario 1: The difficult client email (legal practice)

### Situation

You act for a long-standing commercial client. They have just sent a terse email saying they are *"extremely disappointed"* with your most recent advice; they feel it was *"too generic"* and *"didn't reflect what we actually need."* You believe the advice is sound and addresses the question they actually asked. You suspect the wider context shifted after a board meeting you were not part of. You need to respond professionally, acknowledge the frustration without conceding the work, and propose a path forward.

### What you know

- Eighteen-month relationship, generally constructive
- The advice took two days of senior associate time and partner review
- A short alignment call would likely resolve it
- Tone matters: escalating helps no one

**Round 1 (baseline). Your natural prompt:**

> _Your prompt:_

**Quality of output (circle one):** Usable as-is / Needs heavy editing / Not usable

**What is wrong with the output?**

---

**Round 2 (RTCF). Fill the table:**

| Component | Your input |
|---|---|
| **Role** | |
| **Task** | |
| **Context** | |
| **Format** | |

**Quality (circle one):** Usable as-is / Needs minor editing / Needs heavy editing

**What improved?**

---

**Round 3 (advanced):** ask the model to *"think step by step about what the client is really concerned about before drafting the response,"* or have it draft three versions at different levels of directness and explain which is best.

**What did you try? Did it improve further?**

---

## Scenario 2: Drafting a complex client letter (accounting)

### Situation

A client running a family business asks for written guidance on whether to make a top-up super contribution before 30 June using carry-forward concessional cap. The client is 58, still working, and has unused cap from the prior two years. They have also recently inherited a small holiday rental which complicates matters. You need to draft a one-page letter setting out the options, trade-offs, and the questions you should put to the client before recommending one.

### What you know

- The client is a sophisticated reader but not a tax professional
- Conservative tone: clear about uncertainty
- The letter will be reviewed by the partner before sending
- APES 110 and TPB obligations apply

**Run the three rounds.** For Round 3 try: *"identify the three weakest points in this draft from the perspective of a senior partner reviewing it,"* then revise.

---

## Scenario 3: A clinical referral (medical practice)

### Situation

You see a 67-year-old patient newly noted with atrial fibrillation. They are asymptomatic and otherwise well, on metformin only for stable type 2 diabetes. ECG is attached. You need a referral letter to a cardiologist colleague that is clinically accurate, plain, and ready for your review and signature.

### What you know

- Standard referral format
- Half a page; clinical but plain
- Verify clinical content against current Australian guidance before sending
- Patient information should not leave your enterprise environment

**Run the three rounds.** For Round 3 try: *"flag any clinical claims in this draft that I should verify against current Australian guidance before signing."*

---

## Scenario 4: A practice policy summary (any sector)

### Situation

The firm has just released a new ten-page Information Security Policy. Partners want a summary the team will actually read. Length: under 400 words. The team mostly cares about: what they can and cannot do with email and personal devices, how to handle client information on the road, and what changes if anything for staff working from home.

### What you know

- Audience: mixed (partners, fee earners, support staff)
- Tone: practical and constructive, not corporate
- Format: an internal email the partner can forward
- The full policy is the source: paste or upload it (using an enterprise tool with appropriate data terms)

**Run the three rounds.** For Round 3 try: *"identify what each role group will care about and what they will skim past; restructure the summary so it puts the relevant points to each group up front."*

---

## Scenario 5: A vendor decision analysis (financial advisory)

### Situation

The firm's current SoA-tooling vendor is up for renewal in three months. Annual cost is $X. A competitor has appeared with newer features and a lower price. There is also a third option (building more of the workflow inside Microsoft 365) that nobody has properly explored. You need a one-page brief for the partner meeting that lays out the three options, the key trade-offs, and a recommendation, with the assumptions the partners should challenge.

### What you know

- The brief is a discussion starter, not the decision
- The partners want it concise and structured
- The trade-offs are not just price; they include data residency, integration, change cost, and risk
- The recommendation should be defensible if the firm goes a different way

**Run the three rounds.** For Round 3 try: *"argue strongly for each of the three options in turn, then step back and tell me which one would be hardest to defend in twelve months and why."*

---

## Scenario 6: Documenting an undocumented process

### Situation

You are the only person who knows how to run the firm's end-of-month process: pulling time data, reconciling against the rate card, generating invoices in your accounting platform, applying client-specific PO numbers from a separate sheet, and updating the internal tracker. It lives in your head. The senior partner has rightly pointed out this is a risk. You need a step-by-step process document that another staff member could follow if you were on leave.

### What you know

- Three systems involved (practice management, accounting, internal tracker)
- About 12–15 clients per month
- Three hours, give or take
- The document needs to be specific enough that someone following it does not need to interpret

Provide the model with a verbal walk-through of the process (in your own words), then run the three rounds. For Round 3 try: *"identify any step that is ambiguous or assumes knowledge a new staff member would not have. Suggest how to make each clearer."*

---

## Debrief

After completing your scenarios, reflect:

**1. What was the single biggest improvement from Round 1 to Round 2?**

**2. Which component of the framework made the most difference?**
- [ ] Role
- [ ] Task
- [ ] Context
- [ ] Format

**3. Your top prompting lesson from this exercise?**

**4. Save your best prompt**: copy your strongest structured prompt into a personal template library.

| Task type | My template prompt |
|---|---|
| | |
| | |
| | |

---

## RTCF/CRAFT quick reference

Use this while writing prompts.

| Component | Ask yourself | Example |
|---|---|---|
| **R: Role** | Who should the AI be? | "You are an Australian solicitor experienced in commercial disputes." |
| **T: Task** | What exactly should it do? | "Draft a 200-word client letter explaining…" |
| **C: Context** | What background does it need? | "Long-standing client; conservative tone; partner will review." |
| **F: Format** | How should the output look? | "Plain text, ready to send. No headings. Reading age 14." |

Not every prompt needs all four. Simple tasks may only need T and F. Complex tasks benefit from all four.

The RTCF framework maps closely to CRAFT (Context, Role, Action, Format, Tone). Both are structured approaches to the same goal: helping the model understand exactly what you need.

---

### About this work

borck.consulting helps regulated Australian small firms turn exercises like this into a small library of firm-specific prompt patterns, so AI work looks and reads like firm work, not like generic AI output. Engagements begin with the AI Readiness Diagnostic.
