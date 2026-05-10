---
title: "The RTCF Prompting Framework"
description: "Four slots when CRAFT is too many — the framework I reach for first"
slug: rtcf-prompting-framework
order: 2
section: "Start here"
draft: false
---

## Introduction

The R.T.C.F. framework is a four-part approach to writing better prompts. Same underlying idea as [CRAFT](craft-prompting-framework.qmd) — give the model enough structure to do good work — but with fewer moving parts.

When a four-part framework gets the job done, a five-part framework is overhead. RTCF is the one I reach for first.

> Think of RTCF as briefing a capable colleague in a hurry: who you want them to be, what you need produced, what they need to know, and how you want it back.

---

## The framework

| Letter | Element | What it means | Example |
|---|---|---|---|
| **R** | **Role** | Who should the AI be? What expertise? | "You are an Australian solicitor experienced in residential conveyancing." |
| **T** | **Task** | What should it produce? | "Draft a 200-word email to a vendor explaining a delay in settlement and our proposed remedy." |
| **C** | **Context** | What does it need to know to do the task well? | "We received a defective discharge today. The other side is unaware. The client wants to remain cooperative." |
| **F** | **Format** | Structure, length, voice, audience | "Plain English, calm and constructive, no legalese, ready to send." |

Tone lives inside Format in RTCF. That is a deliberate compression: tone is part of how you want the answer back, so it sits with the other formatting choices rather than as a separate slot.

You do not need all four every time. A short rewrite might just need a Task. A nuanced policy summary might need all four. RTCF is a checklist, not a rule.

---

## Why RTCF works

1. **Fewer slots, faster setup.** Four elements is usually enough. You spend less time building the prompt and more time iterating on the output.
2. **Role-first ordering.** Stating the role first frames everything that follows — the model knows whose voice it is writing in before it knows what it is writing.
3. **Task before context.** Naming the deliverable up front prevents the common failure mode of *"I gave it lots of context and it still didn't do what I wanted."* If the task is clear, the model knows which bits of context matter.
4. **Format as a single slot.** Combining tone with format makes you think about the output as a whole — what it looks like, what voice it is in, who is reading it.
5. **Travels well.** Works across ChatGPT, Claude, Copilot, Gemini, vendor-embedded AI, and smaller local models.

---

## RTCF or CRAFT?

Both work. They are variants of the same idea: structured prompts produce dramatically better results than vague ones.

| | RTCF | CRAFT |
|---|---|---|
| Slots | 4 | 5 |
| Order | Role → Task → Context → Format | Context → Role → Action → Format → Tone |
| Tone | Folded into Format | Separate slot |
| Best when | You want a lean, repeatable structure | Tone is make-or-break and you want it called out as its own decision |

A useful rule of thumb: **RTCF for everyday work where you want speed and consistency. CRAFT when tone is critical** (sensitive client communication, complaint responses, regulator correspondence).

---

## Examples for regulated practice

### Example: a difficult client email

**Weak prompt:** "Write an email to my client about the missed deadline."

**RTCF prompt:**

> *Role:* You are an Australian financial adviser with experience in difficult client conversations.
> *Task:* Draft a 200-word email to a client whose advice has been delayed by two weeks beyond the original commitment.
> *Context:* Client is a long-standing relationship, normally patient. Reason for delay was a complication on our side, not the client's. We will deliver next week. We do not propose to charge for the additional time.
> *Format:* Plain text, ready to send. Calm, accountable, no excuses, no over-apology. Reading age 14.

### Example: a position paper

**Weak prompt:** "Help me write up this case position."

**RTCF prompt:**

> *Role:* You are an Australian solicitor with experience in commercial dispute work.
> *Task:* Draft a one-page position note for the client setting out our preferred argument, the main risks, and what we would need from them.
> *Context:* The dispute is over scope under sections 4 and 6 of a services agreement. Counterparty has signalled willingness to mediate. We have asked the client to confirm three factual points — those go in the "what we need" section.
> *Format:* One page. Three labelled sections. Plain English. Suitable for the client to read once and act on.

### Example: a clinical letter

**Weak prompt:** "Write a referral letter."

**RTCF prompt:**

> *Role:* You are an Australian GP writing to a specialist colleague.
> *Task:* Draft a referral letter to a cardiologist for assessment of new-onset atrial fibrillation in a patient with stable type 2 diabetes.
> *Context:* Patient is 67, otherwise well, on metformin only. AF picked up at routine check, asymptomatic. ECG attached.
> *Format:* Standard referral letter format. Clinical but plain. Half a page. Ready for me to review and sign.

(Verify the clinical detail before sending. Always.)

---

## Common mistakes

| Mistake | What happens | Fix |
|---|---|---|
| Role too generic | Output reads as "AI advice," not expert advice | Use a specific role — *"Australian solicitor with conveyancing experience"* not *"expert"* |
| Task buried in context | Model does the wrong thing because it had to guess | Lead with what you want produced |
| Context dump | Long irrelevant background; model weights wrong details | Include only what changes the output |
| No format slot | Output structure is unpredictable, often a wall of text | Always say at least one thing about format |
| Voice forgotten | Right content, wrong tone | Name the audience inside Format |

---

## When to reach for something else

RTCF is a good first move. It is not the only move.

- **Very short tasks** — just ask. The framework is overhead.
- **Exploratory thinking** — start conversational, let RTCF emerge as you narrow.
- **High-stakes nuance** — switch to [CRAFT](craft-prompting-framework.qmd) so tone gets its own slot.
- **Multi-step work** — RTCF for each step, plus [Prompt Chaining](prompt-chaining.qmd) to link them.

The goal is clarity, not adherence to a framework.

---

### About this work

borck.consulting helps regulated Australian small firms build a small library of prompt patterns that match the firm's voice and obligations. Engagements begin with the AI Readiness Diagnostic.
