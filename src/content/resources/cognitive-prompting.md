---
title: "Cognitive Prompting"
description: "Designing prompts that build judgement, not just produce output"
slug: cognitive-prompting
order: 7
section: "Going deeper"
draft: false
---

## The shift

Most prompting advice treats AI as a content engine: ask cleanly, get usable output. That works, up to a point. But for a regulated firm, content is rarely the constraint. Capability is. And underneath capability sits agency — the practitioner's ability to steer rather than merely edit. The question worth asking is not *"how do we get better answers from AI?"* It is *"how do we use AI in a way that keeps agency with the practitioner and builds judgement instead of eroding it?"*

That is the shift from prompting-as-extraction to **cognitive prompting** — designing prompts that scaffold thinking rather than skip past it.

This piece sits alongside [Conversation, Not Delegation](conversation-not-delegation.qmd), [The Question Architect](question-architect.qmd), and [Strategic Prompting](strategic-prompting-guide.qmd). They are different lenses on the same idea: the value AI creates depends on the kind of thinking it provokes.

---

## Two different prompts, one task

Consider a junior solicitor preparing a position note on a contract dispute.

**Extraction prompt:**

> "Draft a position note on this contract dispute. The client wants to argue X. Make it concise."

**Cognitive prompt:**

> "I am preparing a position note on this dispute. I am inclined to argue X. Before I draft, walk me through three steps:
>
> 1. What are the strongest legal grounds for X?
> 2. What is the strongest counter-argument the other side could make?
> 3. Which counter-arguments are plausible enough that I should pre-empt them in the note?
>
> Show your reasoning. Then I will draft."

Both prompts produce something. The first produces a draft. The second produces a draft *and* a junior solicitor who is now better at thinking about contract disputes. The second prompt is doing developmental work the first one is not.

That is the design move worth practising.

---

## Why this matters in a regulated firm

In a small firm, capability is the asset. The senior partner's judgement was built over decades of exactly the kind of thinking the extraction-style prompt skips. If your team is using AI in extraction mode, you get faster output but slower professional development — exactly the *cognitive offload* problem (see [Cognitive Offload and the AI Makes Us Dumber Question](cognitive-offload.qmd)).

If your team is using AI in cognitive mode, the work goes faster *and* their underlying capability grows. The output is better; the people are better; the firm is more durable. That is the version of AI adoption that compounds.

The catch: cognitive prompting is harder. It takes more thought to design. It does not feel as immediately efficient. But the gap between extraction and cognitive prompting is the gap between AI-as-output and AI-as-collaborator.

---

## Three design moves

### 1. Make reasoning the deliverable, not just the answer

Ask the model to show its working at each step. Use prompts that begin with *"walk me through how you would approach this,"* *"step by step,"* or *"show your reasoning."* See [stepwise chain-of-thought](seven-techniques.qmd) for the technique.

The reasoning is what your team is supposed to internalise. The answer is just the artefact.

### 2. Force evaluation, not acceptance

Build the critique into the prompt:

- *"What are the three weakest points in this argument?"*
- *"What would a sceptical partner ask before signing this?"*
- *"What assumptions am I making that this matter does not actually support?"*

The act of evaluating is where capability is built. AI is happy to play the sceptic — and the time-saving still happens, because the model surfaces the critique in seconds rather than minutes.

### 3. Surface the question behind the question

When a team member asks the model to do something, the *attempted solution* often hides the actual problem. A cognitive prompt steps back:

- *"Before I draft, what is the actual question I am trying to answer?"*
- *"What would I need to be true for this approach to be the right one?"*
- *"What is the smaller, sharper question that would make this easier?"*

This is the move from delegation ("do this for me") to conversation ("think with me").

---

## A pattern for staff development

If you are responsible for developing staff capability — partners with juniors, senior practitioners with new staff — cognitive prompting becomes a teaching tool.

**Old pattern:** the junior produces the draft; the partner reviews and corrects; the junior internalises the feedback (sometimes).

**New pattern:** the junior uses cognitive prompts during the work; the partner reviews not only the output but the *reasoning trail* the model produced; the partner can see where the junior accepted the model's first answer versus where they pushed back.

This makes professional development supervisable in a way it never was before. You can see the thinking. You can teach into it.

The supervision question becomes: *"Show me where you challenged the AI's first answer. What changed when you did?"* That is a richer conversation than reviewing a clean final draft.

---

## A short list of cognitive prompts to keep handy

For the firm's own prompt library, useful starting points:

1. *"Before answering, walk me through how you would approach this. Then give your answer."*
2. *"What are the three weakest points in what I have just drafted?"*
3. *"What would a thoughtful sceptic say about this position?"*
4. *"What assumptions are you (the model) making? List them, then re-do the analysis if any of them are wrong."*
5. *"What is the question I should be asking instead of the one I asked?"*
6. *"Stress-test this from the perspective of [opposing counsel / the regulator / a long-term client / a sceptical partner]."*
7. *"What did you (the model) get wrong in the first pass that I should be checking?"*

Save the ones that produce useful thinking. Discard the ones that just produce more text. Over time, the firm builds a library of *thinking prompts*, not just drafting prompts.

---

## The bottom line

Prompting is not really about getting better AI responses. It is about thinking more intentionally about your goals and methods — and designing the way AI sits inside the work so that capability builds rather than erodes.

> Cognitive prompting is the design move that turns AI from a tool into a catalyst for professional development.

In a small firm, that distinction is the difference between an AI rollout that quietly hollows the practice out and one that compounds capability for years. The mechanics are not complicated. The discipline is.

---

### About this work

borck.consulting helps regulated Australian small firms build cognitive prompting habits across the practice — so AI strengthens the firm's underlying capability rather than substituting for it. Engagements begin with the AI Readiness Diagnostic.

---

## Further reading

- Bloom, B. S. (Ed.). (1956). *Taxonomy of educational objectives: handbook I, cognitive domain.* David McKay Company.
- Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). *A taxonomy for learning, teaching, and assessing: a revision of Bloom's taxonomy of educational objectives* (Complete ed.). Longman.
- Federiakin, D., Molerov, D., Zlatkin-Troitschanskaia, O., & Maur, A. (2024). Prompt engineering as a new 21st century skill. *Frontiers in Education, 9*, 1366434. <https://doi.org/10.3389/feduc.2024.1366434>
- Knoth, N., Tolzin, A., Janson, A., & Leimeister, J. M. (2024). AI literacy and its implications for prompt engineering strategies. *Computers and Education: Artificial Intelligence, 6*, 100225. <https://doi.org/10.1016/j.caeai.2024.100225>
