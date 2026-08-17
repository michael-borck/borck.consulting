---
title: "Strategic Prompting"
description: "Three techniques for partner-level decisions: when you want AI as a thinking partner, not a content generator"
slug: strategic-prompting-guide
order: 10
section: "At partner level"
draft: false
---

A reference guide for using AI tools in strategic analysis: the kind of thinking partners do when deciding whether to take on a matter, expand a service line, replace a system, or restructure an engagement model.

---

## Three core techniques

1. **Risk deep-dive**: ask AI to identify what you are missing or underestimating.
2. **Reverse prompting**: have AI ask *you* questions to reveal what you are not seeing.
3. **AI debate**: use multiple AIs (or one AI in two roles) to stress-test a decision.

---

## 1. Risk deep-dive

**Use when** evaluating a strategic decision: a new service line, a major investment, a competitive threat, a system replacement.

```
You are a senior consultant familiar with Australian regulated
small firms in [law / medicine / accounting / financial advice].

Our firm is considering: [describe the decision].

We have already identified these risks:
- [risk 1]
- [risk 2]
- [risk 3]

Help us think more deeply:
1. What risks are we missing or underestimating?
2. What second-order effects should we consider?
3. Which risk is most likely to be existential to a firm of our
   size?
4. What early warning signs should we watch for?

Be specific to our sector. Challenge our assumptions. Give a
concrete example from a comparable firm where relevant.
```

**Useful follow-ups:**

- "Which risk should we address first and why?"
- "What would a mitigation plan for [specific risk] look like inside our existing budget and capability?"
- "If this initiative fails in eighteen months, what is the most likely cause?"

**What it is good for:** identifying blind spots, connecting dots between related risks, importing perspective from comparable practices, challenging overly optimistic assumptions.

**What it is *not* good for:** knowing your firm's internal politics, accessing your competitive intelligence, or making the decision. The decision is yours.

---

## 2. Reverse prompting

**Use when** looking for opportunities or trying to break out of conventional thinking. The shift: instead of asking AI for answers, ask it to ask *you* questions.

```
You are an expert on AI adoption in Australian regulated small
firms.

Your role is to ask ME probing questions to help me discover
opportunities I am overlooking.

About my situation:
- Sector: [law / medicine / accounting / financial advice]
- Firm size: [partners and staff]
- Current challenge: [the question I am stuck on]
- Current approach: [what I am leaning toward]

Your task: ask me five probing questions that will reveal:
- Hidden opportunities I am not seeing
- Assumptions I should challenge
- Alternative approaches I should consider

IMPORTANT: ask one question at a time. Wait for my answer before
asking the next.

Start with your first question now.
```

How to respond: be honest and specific. If a question confuses you, that is often where the insight is; ask for clarification rather than dodging.

**Worked example:**

> *AI:* "What manual workflow takes the most senior partner time in your firm that you have never seriously thought about changing?"
>
> *You:* "Probably weekly file review meetings: three hours every Tuesday with all six fee earners."
>
> *AI:* "What is the meeting actually producing: supervision, decisions, or something else?"
>
> *You:* "Mostly status updates. The actual supervision happens one-on-one anyway."
>
> *AI:* "If the status updates were captured asynchronously, what would the senior partners do with the three hours instead?"
>
> *You:* "Honestly, client work or new business. We are leaving real money on the table."

After the five questions, ask: *"Based on my answers, what is the one opportunity I should prioritise, and why?"*

---

## 3. AI debate

**Use when** facing a tough decision with valid arguments on both sides. The setup: give two AIs (or one AI in two roles) opposing positions and let them debate.

### Method A: two different AIs

**Prompt for AI #1:**

```
Context: we are considering [the decision].

Current situation:
- [key fact 1]
- [key fact 2]
- [key constraint]

Your role: you are "The Advocate."

Make the strongest case for [option A, e.g., proceeding now,
investing aggressively].

Address: why this is strategically necessary, what we lose if we
wait, how to mitigate the obvious risks.

Three to four sentences. Persuasive but acknowledging real
concerns.

Present your opening argument now.
```

**Prompt for AI #2:**

```
[Same context]

Your role: you are "The Sceptic."

Make the strongest case for [option B, e.g., waiting, proceeding
cautiously].

Address: what risks we are underestimating, why timing matters,
what we should do before committing.

Three to four sentences. Persuasive but acknowledging the
opportunity cost.

Present your opening argument now.
```

Then facilitate the debate: copy the Advocate's argument into the Sceptic's chat with *"respond to this"*, copy the Sceptic's response into the Advocate's chat with *"counter this"*, and let them go two or three rounds.

### Method B: one AI, two roles

```
You are facilitating a debate about [the decision].

Participants:
- "The Advocate" argues for [option A]
- "The Sceptic" argues for [option B]

Context: [key facts]

Conduct a debate:
1. Advocate opening (3–4 sentences)
2. Sceptic counter (3–4 sentences)
3. Advocate counter (3–4 sentences)
4. Sceptic final (3–4 sentences)

Label each speaker. Be substantive.

Begin.
```

**What to look for:**

- Which arguments resonate with your gut instinct?
- Are there considerations you had not thought of?
- Does one side have stronger evidence?
- What is the synthesis position? (Often: "Do X in the short term while preparing for Y.")

After the debate, ask:

```
If you were the decision-maker, what would you decide and why?
What additional information would you need to be confident?
```

---

## Principles of effective strategic prompting

1. **Provide context.** "Should we adopt AI?" gets a useless answer. "We are a six-partner suburban legal practice with two locations and an average matter value of $X. Should we adopt AI for [specific workflow]?" gets a useful one.
2. **Be specific about output.** "Tell me about AI risks" produces a list everyone has seen. "List the top five AI-specific risks for a small firm offering family law services in Australia, ranked by likelihood and impact" gets you something usable.
3. **Assign a role.** "What do you think?" gets bland output. "You are an insurance broker who specialises in PI cover for small legal practices; what concerns would you raise about this approach?" gets you the actual concerns.
4. **Request structured output.** "Analyse this" produces a wall of text. "Analyse this in three parts: strengths, weaknesses, recommended decision with rationale" produces something a partner can act on.
5. **Ask AI to challenge you.** "Is this a good idea?" produces flattery. "Play devil's advocate. Identify the strongest argument against this." produces useful critique.
6. **Use follow-up prompts.** Do not accept the first response. Go deeper.

---

## Common use cases

**Strategic planning**

> "You are a strategy consultant for Australian small professional services firms. We are developing a three-year AI roadmap. Ask me ten questions to ensure we are thinking comprehensively about threats, opportunities, and our firm's readiness."

**Investment evaluation**

> "We are evaluating an AI investment: [details]. Assess: data appropriateness, dependence on the vendor, accuracy requirements for our work, ability to explain output to a regulator, ethical risk, fit with our practice management system. Be critical."

**Competitive analysis**

> "You are our largest local competitor. They have just hired a partner with a strong AI background. Outline their plausible eighteen-month strategy to take share from a firm like ours. Be aggressive and specific."

**Risk pre-mortem**

> "We are launching this AI workflow: [details]. Imagine it fails badly six months in. Walk me through the most likely failure scenarios from initial warning sign to complete failure."

**Change management**

> "You are a sceptical senior practitioner who does not trust AI. I am pitching this AI initiative: [details]. Push back. What are your strongest objections?"

---

## What AI is good at, and what it is not

**Use it for**

- Generating alternatives: "Give me ten different ways to approach this."
- Challenging assumptions: "What am I taking for granted?"
- Importing breadth: examples from comparable firms or sectors
- Structured analysis: breaking complex decisions into parts
- Playing roles: devil's advocate, regulator, opposing party
- Connecting dots: "If we do X, what second-order effects?"
- Identifying patterns: common failure modes for this type of initiative

**Do not use it for**

- Knowing your firm's history, politics, or internal capability
- Proprietary competitive intelligence you have not given it
- Replacing partner experience and intuition
- Making the actual decision (you are still accountable)
- Real-time data (knowledge cutoffs are real)
- Nuanced ethical, regulatory, or relationship trade-offs

---

## The mental model

AI is a strategic thought partner, not your boss. The practical test of whether you have used these techniques well is whether the partner remains the *agent* of the decision (choosing, weighing, deciding) or has slipped into the role of editor for the model's preferred answer. The whole point of the three techniques above is to keep that line clear.

Think of AI as a smart colleague who challenges your thinking; a research assistant who brings different perspectives; a brainstorming partner who never gets tired; a devil's advocate who stress-tests assumptions.

Not as an oracle that provides the answer; not as a replacement for your judgement and experience; not as the decision-maker; not as a source of truth about your specific situation.

**Best results: human expertise + AI analysis.**

*You bring:* deep context about the firm, sector experience, understanding of stakeholders and relationships, ability to judge what is realistic, accountability for the decision.

*AI brings:* breadth, the ability to generate many alternatives quickly, structured frameworks, tireless questioning, a different angle.

Together: better strategic decisions than either alone.

---

## A note on confidentiality

When using AI for strategic decisions:

- Do not paste proprietary financials, competitive intelligence, or anything client-identifiable into a tool that is not appropriate for that data. (See [Why Most AI Data Governance Policies Get It Wrong](data-governance.qmd).)
- Use generic descriptions where possible: *"a six-partner suburban legal practice"* not your actual numbers.
- Verify any specific claim or statistic the model produces.
- If AI insight influenced a strategic decision, note it in the file or board paper. It models good practice and helps colleagues understand the reasoning.

---

### About this work

borck.consulting helps regulated Australian small firms run strategic AI conversations like the ones above: internally, between partners, *before* committing to a vendor or a direction. The AI Readiness Diagnostic is exactly this kind of conversation, with structure and a written outcome.
