---
title: "Prompt Chaining"
description: "Structured multi-step AI workflows — the difference between a clever chatbot and a working production line"
slug: prompt-chaining
order: 8
section: "Going deeper"
draft: false
---

## Introduction

Prompt chaining is the practice of using multiple, sequential prompts to break a complex task into manageable steps. Rather than asking AI to "do everything at once," you guide it through a structured workflow.

This is particularly valuable for:

- Complex analysis or position-building
- Multi-stage drafting (advice, position papers, clinical letters)
- Iterative refinement and review
- Building arguments or evidence chains
- Turning unstructured material (transcripts, file notes, discovery bundles) into structured outputs

> Think of it as scaffolding. Each prompt builds on previous output, creating a stronger final result.

A reminder from earlier in the toolkit: chaining works *only when you stay in the loop*. Chaining tasks without verification at each step is exactly the failure mode described in [Amplify Your Thinking, Not the Hallucinations](amplify-thinking-not-hallucinations.qmd). Use chaining as a discipline, not a delegation.

---

## Why prompt chaining works

1. **Better reasoning.** Breaking tasks into steps produces more thoughtful outputs.
2. **Control.** You review and adjust after each step.
3. **Flexibility.** You can change direction without starting over.
4. **Quality.** Multi-step outputs have fewer errors.
5. **Visibility.** You see the model's reasoning, not just the final answer — which is also what makes it supervisable.

---

## Three approaches

### Approach 1: guided workflow (full chain in one prompt)

**When to use:** you want multi-step processing with single-prompt efficiency.

**How:** provide all steps in a single prompt with explicit instructions.

**Example for legal practice:**

```
You are an Australian solicitor experienced in commercial disputes.
I am preparing a position paper on a contract dispute over scope.

Follow these steps:
1. Summarise the dispute in three sentences.
2. Identify the three strongest arguments for our client (the
   respondent).
3. Identify the three strongest counter-arguments the applicant
   would make.
4. List the three factual matters I should confirm with the
   client before finalising the paper.

Here are the relevant facts: [paste facts]

Output each step clearly labelled.
```

### Approach 2: modular chain (explicit sequential steps)

**When to use:** you want more control; you may review and modify between steps.

**How:** submit one prompt, review, then submit follow-up prompts.

**Example for accounting practice:**

**Step 1 — analysis:**

> "I am preparing advice on whether a client should restructure from a sole trader to a Pty Ltd structure for next financial year. Here are the client's circumstances: [paste]. Identify the three biggest factors that would affect this decision."

[Review output. Discuss with the partner if needed.]

**Step 2 — options:**

> "Based on those factors, set out two structuring options and the trade-offs of each, in plain English suitable for a client who is not a tax professional."

[Review.]

**Step 3 — draft:**

> "Now draft a one-page client letter setting out the recommended option and the next step. Conservative tone, plain English, no commitments beyond what we can stand behind."

[Review and refine.]

### Approach 3: interactive chain (pause between steps)

**When to use:** you want the model to guide you through a process, pausing for your input.

**How:** the model completes a step, then waits for your feedback.

**Example for clinical correspondence:**

> "I need to draft a letter to a patient declining further appointments due to a clinical conflict of interest, while also offering them a clear referral pathway. Let's work through this in steps: (1) you draft a first version, (2) I review and tell you what to adjust, (3) you produce a revised version, (4) we repeat until I am happy. Start with step 1. Wait for my feedback before continuing."

---

## Practical templates

### Analysis chain

```
Context: [the matter / data / document]
Goal: [the decision or output we need]

Step 1: Summarise [the situation].
Step 2: Identify [key issues, risks, or factors].
Step 3: Assess [impact, severity, or significance].
Step 4: Recommend [specific actions].

Output each step clearly. After step 1, I will review before we
continue.
```

### Drafting chain

```
Context: [client / matter / audience]

Step 1: Outline the structure of the deliverable.
Step 2: Draft section 1.
Step 3: Draft section 2.
[etc.]
Step N: Tighten and produce a final version.

I will review after each step.
```

### Argument chain

```
Position: [the position we want to take]

Step 1: Define the key concepts and the legal/factual basis.
Step 2: Provide the strongest supporting evidence.
Step 3: Identify the strongest counter-arguments.
Step 4: Respond to those counter-arguments.
Step 5: Synthesise into a one-paragraph position statement.

Output each step. I will give feedback before each next step.
```

---

## Advanced techniques

### Iterative refinement

After completing a chain, push deeper without restarting:

> "That analysis is useful. Now go deeper on the second risk. Add: a likelihood assessment, the most likely consequence if we ignore it, and one mitigation we could implement inside this fee."

### Format shifting

Take one piece of analysis and reshape it for different audiences:

```
Prompt 1: "Analyse this matter for the file. [Full analysis request]"

Prompt 2: "Now turn that analysis into:
- A two-paragraph internal summary for the partner
- A one-paragraph note for the client
- A short list of action items for the file"
```

### Perspective shifting

Re-do the analysis from different viewpoints:

> "Now redo that analysis from the perspective of:
> - The opposing party
> - The regulator most likely to read this
> - A senior partner who is risk-averse
>
> What does each perspective change?"

### Evidence layering

Build an argument incrementally:

```
Prompt 1: "What is the core argument for [position]?"
Prompt 2: "What evidence supports it? Three categories."
Prompt 3: "What are the strongest counters?"
Prompt 4: "How would you respond to those?"
Prompt 5: "Synthesise this into a 200-word position statement."
```

---

## When *not* to use chaining

- Simple, one-step tasks — a single clear prompt is more efficient
- Real-time feedback situations
- Open-ended exploratory work where structure would constrain
- When the underlying context is too thin to support a chain

---

## Best practices

1. Start clear — the first prompt sets the tone. Use CRAFT or RTCF.
2. Review every step. Do not blindly proceed.
3. Provide specific feedback, not just "make it better."
4. Build incrementally. Small steps beat big jumps.
5. Save the chains that work. You will use them again.
6. Stop when iteration is producing diminishing returns.
7. Keep related prompts in the same conversation for context.
8. **Verify all material claims at every step.** Chaining is faster than single-prompt work but it is also faster at compounding errors.

---

### About this work

borck.consulting helps regulated Australian small firms build a small library of prompt chains for the work the firm actually does — so AI becomes a repeatable production tool, not a one-off curiosity. Engagements begin with the AI Readiness Diagnostic.
