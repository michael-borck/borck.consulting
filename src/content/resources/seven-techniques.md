---
title: "Seven Useful Prompt Techniques"
description: "Beyond CRAFT: specialised techniques worth knowing for partner-level work"
slug: seven-techniques
order: 5
section: "Going deeper"
draft: false
---

## A note on positioning

[CRAFT](craft-prompting-framework.qmd) and [RTCF](rtcf-prompting-framework.qmd) are *prompting frameworks*: how to structure any prompt clearly. The seven techniques in this guide are *specialised patterns*: particular shapes of prompt useful for particular kinds of professional thinking.

Use a framework to structure the prompt. Use a technique to choose the *kind* of thinking you want from the model.

---

## Why these seven

These are not random tricks. Each one builds a particular professional habit: scoping, balanced analysis, careful reasoning, perspective-taking, structured debate, low-stakes practice, and multi-perspective synthesis. They are the techniques most useful in the day-to-day decisions a partner or senior practitioner makes.

1. **Reverse Prompting**: for scoping a problem properly before solving it
2. **Pros and Cons**: structured comparison and decision-making
3. **Stepwise Chain of Thought**: making reasoning visible
4. **Role Play**: practising difficult conversations
5. **Debating**: stress-testing positions
6. **Formative Self-Assessment**: low-stakes practice with feedback
7. **The Expert Panel**: multiple perspectives on a single decision

Each works alone. Most also combine well with [Prompt Chaining](prompt-chaining.qmd).

---

## 1. Reverse prompting (scoping before solving)

**What it does:** instead of solving a problem, the model asks *you* questions to help scope it. You answer one at a time. By the end, you have considered ten or more aspects you might otherwise have missed.

**Why it matters:** complex professional problems get botched at the scoping stage more often than at the solving stage. This technique forces the work upstream, *before* you start drafting.

**A regulated-firm prompt:**

```
I am about to draft a Statement of Advice for a client with mixed
business and personal income, two dependants, and a recently inherited
holiday rental. I need to make sure I have scoped the advice properly.

Your task: ask me a series of yes/no or short-answer questions to
help me clarify the requirements, considerations, and potential
pitfalls. Ask one question at a time. Wait for each response.
Continue until you have helped me think through at least ten aspects.

Begin with your first question.
```

**Useful follow-up:** at the end, *"based on my answers, what are the three issues most likely to come back at me later, and how would I pre-empt them?"*

**Other applications:**

- **Legal:** scoping a new matter, scoping the terms of a settlement, scoping a discovery brief
- **Medical/allied health:** scoping a complex case, scoping a difficult conversation, scoping a clinical handover
- **Accounting:** scoping an audit, scoping a tax position, scoping a restructure
- **Financial advisory:** scoping an SoA, scoping an annual review

---

## 2. Pros and cons (decision-making)

**What it does:** the model systematically evaluates multiple options against specific criteria and offers a justified recommendation.

**Why it matters:** professionals must weigh trade-offs and justify choices. This technique builds the discipline of structured comparison rather than gut preference.

**A regulated-firm prompt:**

```
I am advising the client on three structuring options for the family
business: maintain sole trader, move to a Pty Ltd, or use a discretionary
trust. For each, provide:

1. Brief description of how it works
2. Three key advantages
3. Three key disadvantages

Evaluate each against:
- Asset protection
- Tax efficiency over a five-year horizon
- Ongoing compliance burden

Conclude with a recommendation suited to a $1.2m turnover business with
two adult children planned for entry into the business in three years.
Justify your recommendation.
```

**The follow-up that earns its keep:** challenge the model's recommendation. *"Argue strongly for one of the options you ranked second-best. What would I have to believe for that option to be correct?"* That second pass usually surfaces the assumptions worth checking.

---

## 3. Stepwise chain-of-thought (visible reasoning)

**What it does:** rather than asking for a conclusion, you ask the model to show its working step-by-step, then conclude.

**Why it matters:** in regulated work, *the reasoning* is part of the deliverable, not just the result. Forcing the model to show its working makes errors visible (and your verification possible).

**A regulated-firm prompt:**

```
Walk me through the analysis of whether this clause in the supplier
agreement triggers the indemnity at clause 7.2. Step by step:

1. Identify the relevant facts.
2. Identify the relevant clause text and any defined terms.
3. Apply the facts to the clause.
4. Identify any ambiguity or competing interpretation.
5. State the conclusion and the level of confidence.

Show your working at each step.
```

This is also how you catch the moments where the model would otherwise quietly skip a step, i.e. where it might fabricate.

---

## 4. Role play (difficult conversations)

**What it does:** the model takes on a specific role (sceptical client, opposing counsel, regulator) and you practise the conversation.

**Why it matters:** the conversations that matter most in regulated practice are often the ones we are least prepared for. Rehearsing them with a willing thinking partner is genuinely useful.

**A regulated-firm prompt:**

```
You are a long-standing client who has just been told that the firm
cannot continue acting because of a conflict that has emerged. You are
unhappy. You feel inconvenienced. You suspect we have favoured the
other side. You want to vent before you can hear our position.

I will play myself, the partner explaining the situation. Stay in
character. Do not break to give me advice. After ten minutes (or when
the conversation reaches a clear resolution), step out of role and
tell me what I handled well and what I would do better next time.

Begin with your opening reaction.
```

This is genuinely uncomfortable, which is the point. Better to be uncomfortable on the practice run.

---

## 5. Debating (stress-testing positions)

**What it does:** the model argues both sides of a question with equal vigour, surfacing the strongest objections.

**Why it matters:** professionals get attached to positions. The model is a useful adversary precisely because it is dispassionate.

**A regulated-firm prompt:**

```
Conduct a structured debate on whether our firm should establish a
limited fixed-fee offering for [specific service line].

You will play two roles:
- "The Advocate" argues we should do it now
- "The Sceptic" argues we should not, or not yet

Three rounds, three to four sentences per role per round. Then a
neutral observer summarises the strongest argument from each side
and states what additional information would resolve the question.
```

**Use:** any decision where you suspect you have already made up your mind. The model will tell you whether your decision survives serious challenge.

(For more on this, see [Strategic Prompting](strategic-prompting-guide.qmd).)

---

## 6. Formative self-assessment (low-stakes practice)

**What it does:** the model gives you (or a junior staff member) a low-stakes scenario, you respond, the model gives feedback. Repeat.

**Why it matters:** building professional capability requires practice. Real client work is too high-stakes for practice. Generated scenarios are not.

**A regulated-firm prompt for staff training:**

```
Generate three realistic scenarios I might face as a junior solicitor
during a difficult phone call with a client whose matter has just been
delayed. For each scenario:

- Set the scene in two sentences
- I will respond as I would on the call
- You will then assess my response: what worked, what did not, and what
  to try differently
- Then move to the next scenario

Keep the feedback specific and constructive. Begin with scenario 1.
```

**Adapt for:** intake calls, difficult clinical conversations, awkward fee discussions, complaint handling, or any situation where capability comes from reps.

---

## 7. The expert panel (multi-perspective synthesis)

**What it does:** the model role-plays multiple experts in turn, each with a distinct lens on the same question.

**Why it matters:** complex decisions benefit from being viewed through different professional lenses. The model can play those lenses faster than convening them in person.

**A regulated-firm prompt:**

```
I am considering whether to take on a particular new matter that sits
on the edge of my usual practice area. Below are the facts.

Convene a panel of four experts to give their take in turn:
1. A senior partner from a competitor firm who is risk-averse
2. The firm's PI insurance broker
3. A specialist in the unfamiliar area
4. A trusted long-term client

Each speaks for one paragraph from their perspective. After all four,
note the points of agreement, the points of disagreement, and the
question I should answer for myself before deciding.

Facts: [paste facts]
```

**The point:** any of those perspectives in isolation might miss what matters. Together, they tend to surface what one person alone would miss.

---

## How to use these techniques together

The seven are not in competition. Different stages of a piece of work benefit from different techniques.

A typical sequence on a complex decision:

1. **Reverse prompting** to scope it properly
2. **Stepwise chain-of-thought** for the analysis itself
3. **Pros and cons** for the comparison of options
4. **Debating** to stress-test the leading option
5. **The expert panel** for the final decision review

That sequence is itself a [chain](prompt-chaining.qmd). Each step uses CRAFT or RTCF for the prompt structure.

---

## Closing note

These techniques work because they each force a specific kind of thinking. The model is willing to play any of these roles: sceptic, examiner, panel of experts. The willingness is the point. You are not getting an answer. You are getting a thinking process you can apply your professional judgement to.

In regulated work, that judgement is the deliverable. The techniques just let you bring it to bear faster.

---

### About this work

borck.consulting helps regulated Australian small firms build a small repertoire of prompt patterns for the work the firm actually does, so AI becomes a thinking partner, not a content firehose. Engagements begin with the AI Readiness Diagnostic.
