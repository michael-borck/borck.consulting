---
title: "Managing Context with AI"
description: "The underrated skill that turns long messy conversations into useful work"
slug: managing-context
order: 4
section: "Start here"
draft: false
---

## Introduction

One of the most underrated skills in working with AI is **managing context**: the information you give the model and how you structure the conversation around it.

Think of context as the AI's working memory. Unlike a colleague, who carries memory across days or weeks, the model has specific limitations:

- **Limited attention span:** conversations have a maximum effective length before older information stops influencing output.
- **Token limits:** every word in and every word out counts against the model's capacity.
- **Output token competition:** when you ask for many things in one prompt, the model splits its budget across them, producing shallow output.
- **Hallucination risk:** longer conversations increase the risk of confidently wrong output.

Managing context is a learnable skill. It directly improves output quality, saves time, and reduces error.

---

## The four problems

**Problem 1: the long conversation.** You have a productive thread going. After fifteen exchanges, the model gives an answer that contradicts something it said earlier. The model can technically "see" the whole conversation, but older information becomes less salient as the conversation grows.

**Problem 2: output token scarcity.** You ask for four things at once. You get four things, but each is shallow because the model split its output four ways.

**Problem 3: hallucination acceleration.** As conversations get longer, the model becomes more likely to fabricate: invented citations, made-up examples, drift from earlier statements.

**Problem 4: lost context across sessions.** You close the chat. Next week you continue the work. The model has no memory of the earlier session unless you explicitly give it.

---

## Six core strategies

### 1. Break complex tasks into steps

Before diving in, ask the model to help you structure the task.

**Instead of:**

> "Draft the SoA, summarise the matter for the file, write the client cover letter, and produce the file note."

**Do this. First, ask for a plan:**

> "I am preparing four deliverables for [client] on [matter]: SoA, file summary, client cover letter, and file note. Outline the order I should produce these in and what each one should contain so they are consistent with each other."

Then work through the plan one step at a time. Each step gets the model's full attention, and you get the chance to course-correct between them.

### 2. One task per prompt (usually)

Ask for one main thing per prompt. Each output gets full attention and full token budget. Quality goes up.

The exception: comparative tasks ("show me three different framings"), structured formats ("provide outline + key concepts + two questions"), or tight iterations ("now make that more concise"). The test: are the outputs comparable in scope? If yes, batching is fine. If one is much bigger, split.

### 3. Use output constraints to manage tokens

When asking for multiple things, specify the structure and length up front.

**Without constraints:**

> "What are the pros and cons of mediation versus litigation here?"

The model may spend most of its budget on one side.

**With constraints:**

> "Compare mediation versus litigation for this dispute. For each, give me:
>
> - Two key advantages
> - Two key risks
> - When it is the better choice (one sentence)
>
> Three to four sentences per section. Keep it to a single page."

The model now knows how to allocate. Output is balanced and tight.

### 4. Keep conversations focused and modular

Use separate conversations for separate matters or major topic shifts. Shorter threads = less hallucination risk, easier to find earlier outputs, cleaner record-keeping (especially if you ever need to produce the conversation in response to a complaint or insurer query).

Start a new conversation when:

- The matter or topic shifts substantially
- The conversation is past about thirty exchanges
- You want a clean record for the file

One conversation is fine when:

- You are iterating on the same draft or the same matter
- The follow-ups are tightly related to what came before

### 5. Summarise and handoff for long threads

When a conversation gets unwieldy, ask the model to summarise and start fresh.

**Prompt at the long thread:**

> "We have been working on [matter] for a while. Summarise concisely: the question we started with, the decisions we made, what we have produced, and what is still outstanding. Make it something I can paste into a fresh conversation to continue."

Copy that summary, start a new conversation, paste it at the top, and add the next instruction. You reset the model's attention and you have a clean handover document for the file at the same time.

### 6. Make context explicit and structured

Do not assume the model knows what you mean. State it.

**Poor context:**

> "How should I handle this with the client?"

(What is "this"? Which client? What has happened?)

**Good context:**

> "I act for a 67-year-old client who has just been advised of a moderate-severity diagnosis. They are asking whether to update their will and EPA. They have asked me twice in two days, and I sense anxiety rather than clarity. How should I structure the next conversation so they leave with a clear plan rather than another deferred decision?"

A useful checklist for explicit context:

- **Who**: client, audience, opposing party
- **What**: the specific task or problem
- **Why**: why it matters and to whom
- **Constraints**: time, fee, jurisdiction, sensitivity
- **History**: what has already been done or said

---

## Batch similar tasks efficiently

When you have multiple similar small tasks, do them in one well-structured prompt rather than five separate ones; each separate prompt repeats setup context wastefully.

**Inefficient:**

> "Draft me a discussion question on topic A." [review] "Now topic B." [repeat five times.]

**Better:**

> "I need five discussion prompts for our internal partner-meeting on AI use in the practice. Topics: (1) data classification, (2) supervision standards for AI-assisted drafts, (3) costs to clients, (4) staff training, (5) client communication. Each prompt should provoke disagreement, not agreement, and take five to ten minutes to discuss. Provide all five with a one-line note on why each will land."

Single exchange, much better quality.

---

## Common mistakes and fixes

| Mistake | Result | Fix |
|---|---|---|
| Asking for ten things at once | Shallow output, tokens split ten ways | Two or three prompts; one main task per prompt |
| Vague task description | Model misses what you wanted | Add explicit context: who, what, why, constraints |
| Leaving the conversation running indefinitely | Hallucination risk grows | Start a new conversation every twenty-five to fifty exchanges; summarise first |
| No format specification | Wall-of-text output | Specify length, structure, audience |
| Asking "what am I missing?" with no context | Model invents things that do not apply | Be specific: "What am I missing for [this matter / this jurisdiction]?" |
| Pasting whole documents with no framing | Model does not know what to focus on | Add a framing sentence: "Here is the contract. Focus only on clause 7 and the indemnity provisions." |

---

## A practical workflow

**Plan**

- Define the task in writing
- Ask the model for a plan before diving in
- Break the plan into sub-tasks
- Estimate roughly which sub-tasks need the most output

**Execute**

- One sub-task per prompt (usually)
- Review each output before moving forward
- Provide specific feedback to refine
- Save the prompt patterns that work

**Manage**

- Keep conversations focused on one matter
- When the thread gets long, summarise and move to a new conversation
- Use separate conversations for separate matters
- Save or archive what is worth keeping for the file

**Check**

- Verify any cited fact, statute, or section number
- Check for contradictions with earlier outputs
- Confirm completeness against the brief
- Iterate if needed

---

## Summary

1. Break complexity into steps.
2. One task per prompt (usually).
3. Keep conversations focused.
4. Be explicit with context.
5. Summarise and handoff when threads get long.
6. Verify everything material.
7. Iterate to refine, not to start over.

The underlying principle: context management is about respecting the model's limitations while making use of its strengths. You are not trying to have perfect conversations. You are trying to have *focused* ones that produce work the firm can use.

---

### About this work

borck.consulting helps regulated Australian small firms turn AI conversations into a reliable production process, including the small disciplines like the ones above that make the difference between novelty and tool. Engagements begin with the AI Readiness Diagnostic.
