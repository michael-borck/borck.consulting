---
title: "RE2 Prompting"
description: "Re-read for better reasoning — the simplest improvement you can make to a complex prompt"
slug: re2-prompting
order: 6
section: "Going deeper"
draft: false
---

## The simple version

Want better results from AI on a complex question? Repeat the question.

That is the technique.

```
Q: [your question]

Read the question again: [your question]
```

This is **RE2 (Re-Reading) prompting**. It looks too simple to work, and yet it consistently improves model reasoning across arithmetic, commonsense, and complex analysis tasks. The technique has been validated across 14 benchmarks and 112 experiments.

---

## Why it works

Large language models read text **left to right, one token at a time**. Each token can only attend to what came before it, never what comes after. This is called **causal masking**, and it has a practical consequence:

- Early parts of your prompt are processed without full context.
- Instructions buried at the end may not influence how the model interpreted the beginning.
- Key details can be missed because the model commits to an interpretation before it has all the information.

When you repeat the question, the model gets two passes:

1. **First pass:** the question is processed normally, with the causal masking limitation.
2. **Second pass:** every token in the second copy can attend to *all* tokens in the first copy. The model now has full context when processing the question again.

The first copy effectively acts as a scratchpad. By the time the model reaches the second copy, it has already seen the entire question once. The second reading happens with the benefit of complete context.

It is not just "saying it twice." It is making the model see the whole picture before answering.

---

## Evidence

In head-to-head comparisons across seven major models (including GPT-4, Claude, and Gemini), RE2 won 47 of 70 tests with no losses — meaning it either helped or made no difference, but never made things worse.

Notable result: on a "needle in a haystack" retrieval task, Gemini 2 Flash went from 21.3% accuracy to 97.3% with the technique applied.

The original paper: Xu et al. (2024), "Re-Reading Improves Reasoning in Large Language Models," *ACL EMNLP.*

---

## How to use it

### Basic template

```
Q: [your question]

Read the question again: [your question]
```

Copy the question, add the directive *Read the question again:*, paste the question a second time.

### Combined with chain-of-thought

```
Q: [your question]

Read the question again: [your question]

A: Let's think step by step.
```

RE2 improves the model's *comprehension* of the question. Chain-of-thought improves its *reasoning* toward the answer. Together they cover both ends.

---

## A regulated-firm example

```
Q: I am drafting a position paper for the client on whether to
defend or settle a commercial dispute over scope under a services
agreement. Counterparty has signalled willingness to mediate.
Client cares about cost containment but also about reputation
in the sector. Identify the strongest argument for defending,
the strongest argument for settling, and the three questions
I should put to the client before recommending one.

Read the question again: I am drafting a position paper for the
client on whether to defend or settle a commercial dispute over
scope under a services agreement. Counterparty has signalled
willingness to mediate. Client cares about cost containment but
also about reputation in the sector. Identify the strongest
argument for defending, the strongest argument for settling, and
the three questions I should put to the client before recommending
one.

A: Let's think step by step.
```

On a complex prompt with multiple constraints like this, the difference between RE2 and a single pass is often visible: more parts of the question actually addressed, fewer constraints quietly dropped, less drift toward the model's default answer shape.

---

## When to use RE2

**Most useful for:**

- Multi-part questions where the model might focus on one part and forget another
- Long prompts with context where key details might be buried
- Reasoning tasks requiring careful attention to constraints
- Retrieval tasks where the model needs to find specific information in supplied text
- Analysis tasks with multiple evaluation criteria

**Less necessary for:**

- Very simple, single-part questions
- Short prompts with no ambiguity
- Creative generation where precision matters less than fluency

---

## Cost and best practices

RE2 increases input length (you are sending the question twice), which means slightly higher token costs and marginally longer processing time. Input tokens are cheap and fast, so the cost is minimal compared to the gain.

- **Use the exact phrase** "Read the question again:". Directive language works better than vague instructions.
- **Repeat verbatim.** Do not paraphrase. The value comes from the model processing the identical tokens with full context from the first pass.
- **Once, not multiple times.** One repetition captures most of the benefit. More wastes tokens.
- **Position the repetition before the answer instruction.** The re-read should be the last thing before the model starts generating.
- **Combine with chain-of-thought** for complex reasoning.
- **Do not pad with filler.** Adding random text to match length does not work. It is the information that matters.

---

## How RE2 fits with other techniques

| Technique | Focus | What it does |
|---|---|---|
| RE2 (re-reading) | Input comprehension | Improves the model's understanding of your question |
| Chain-of-thought | Output reasoning | Improves the model's step-by-step thinking |
| CRAFT / RTCF | Prompt structure | Organises the prompt for clarity |
| Few-shot examples | Style matching | Teaches the model your preferred format |
| Iterative refinement | Output quality | Improves results through follow-up prompts |

RE2 is complementary to all of these. It focuses on the input side, making sure the model fully understands your question before it starts generating.

---

## Try it now

Take a prompt you have used recently that gave a mediocre result on a multi-part professional question. Apply the template. Compare the output to what you got before. For complex, multi-part, or detail-sensitive questions, the improvement is usually visible.

It is the simplest prompting upgrade available, and it costs almost nothing.

---

### About this work

borck.consulting helps regulated Australian small firms turn AI techniques like this into firm-wide habits — small disciplines that stack into much better output. Engagements begin with the AI Readiness Diagnostic.
