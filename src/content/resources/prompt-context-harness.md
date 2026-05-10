---
title: "Prompt, Context, Harness"
description: "The three layers of AI engineering — and where the leverage actually is for a small firm"
slug: prompt-context-harness
order: 9
section: "Going deeper"
draft: false
---

## Introduction

When people talk about "prompt engineering," they are naming one slice of a much bigger picture. There are actually three layers of engineering between you and useful AI output. Getting good at AI in a small firm means getting comfortable in all three — and knowing which layer to invest in next.

The three layers, from inside the call to around it:

1. **Prompt engineering** — what you put in
2. **Context engineering** — what surrounds it
3. **Harness engineering** — what happens around multiple calls

You are already doing prompt engineering whether you have named it or not. Context and harness engineering are where the leverage gets bigger.

---

## Layer 1: prompt engineering — what you put in

**What it is:** the words, structure, and instructions in a single message to the AI.

When you write *"help me draft an email to the client"* you are prompting. When you write *"You are an Australian solicitor experienced in residential conveyancing. Draft a 150-word email to a vendor explaining a settlement delay caused by a defective discharge, calmly and constructively, ready to send"* — you are prompt-engineering.

Useful frameworks at this layer:

- [CRAFT](craft-prompting-framework.qmd) — Context, Role, Action, Format, Tone — five-part structure that consistently lifts output quality.
- [RTCF](rtcf-prompting-framework.qmd) — leaner four-part variant. The one I reach for first.
- [RE2 (read twice)](re2-prompting.qmd) — telling the model to re-read the question before answering, which catches misunderstandings on complex prompts.
- [Focused prompting](focused-prompting.qmd) — narrowing the model's attention to one task at a time.

**When this layer is enough:** short, self-contained tasks. A single client email, a quick rewrite, a one-off summary. If you can fit everything the model needs into one well-structured message, you are done at this layer.

**When you outgrow it:** when you find yourself pasting the same five paragraphs of firm context into every conversation. When you notice the model "forgetting" things you told it earlier. When tasks span multiple steps.

---

## Layer 2: context engineering — what surrounds the call

**What it is:** everything around the prompt that shapes the model's behaviour without being part of any single message — persistent instructions, reference documents, memory of past interactions, tools the model can call, and the conversation history itself.

If prompt engineering is *what you say*, context engineering is *what is true about the room you are talking in*.

Examples in everyday firm use:

- **Custom instructions / system prompts** — telling Claude or ChatGPT once that you are an Australian financial adviser writing in Australian English, conservative on uncertainty, allergic to legalese — instead of saying it every conversation.
- **Project files / workspaces** in Claude Projects, ChatGPT Custom GPTs, Gemini Gems, or NotebookLM — uploading firm precedents, internal style guides, or reference documents the model can draw on without you re-pasting them.
- **Memory features** — letting the model remember preferences and recurring details across sessions (within enterprise terms appropriate for your data).
- **Conversation hygiene** — knowing when to start a fresh conversation (because the current one is getting confused) versus when to continue (because the accumulated context is doing useful work). See [Managing Context](managing-context.qmd).

**When this layer matters:** anything the firm will do more than once. Repeated client-letter drafting. A specific kind of advice you produce regularly. Internal-summarisation workflows. Any working relationship with AI that needs to remember the firm's voice and standards.

**The shift:** prompt engineering is *per message*. Context engineering is *per relationship*. Once you set the context up well, every prompt becomes shorter and more effective, because the model already knows things you would otherwise have to repeat.

For most small firms, this is where the disproportionate gain sits: a small set of well-set-up project workspaces with the firm's voice, examples, and constraints baked in, used by everyone, beats a thousand individual cleverer prompts.

---

## Layer 3: harness engineering — what happens around multiple calls

**What it is:** the structure around multiple AI calls — how they connect, verify each other, refine, and combine. This is where AI stops looking like a chatbot and starts looking like a system.

You have encountered harness engineering whenever you have used:

- **AI-powered search** that retrieves relevant documents *before* answering — one call to find sources, another to answer using them
- **Coding assistants** that read a file, plan changes, edit code, run tests — multiple calls coordinated by the tool
- **Research assistants** that ground every answer in cited sources from a defined corpus (NotebookLM is the most common)
- **Agentic tools** that perform multi-step tasks with verification along the way (see [Agentic AI](agentic-ai.qmd))
- **Prompt chains** you build yourself (see [Prompt Chaining](prompt-chaining.qmd))

**Why this layer matters for regulated work:** a single AI call is unreliable in predictable ways — it may hallucinate, oversimplify, miss the jurisdiction, or invent a citation. A harness lets you build verification, multiple perspectives, and self-correction into the workflow — turning an unreliable single step into a reliable multi-step process. For a regulated firm, that reliability is the difference between AI being a curiosity and being usable.

**Where you can experiment with this safely:** most enterprise AI tools now expose some harness. Microsoft 365 Copilot grounds answers in your tenant. Claude Projects, Custom GPTs, and Gemini Gems are small harnesses you can build yourself. Vendor-embedded AI in your practice management or accounting platform is often the most regulated-firm-appropriate harness, because it lives inside an existing data agreement.

---

## The important point: lower layers do not go away

When people learn about a "newer" layer, there is a temptation to treat the older ones as obsolete. Prompt engineering is not dead. Context engineering is not dead. They become the **foundations** of the higher layers.

There is also a question of *agency* that runs through all three layers: at every layer, who is steering? A weak prompt cedes agency to the model's defaults. A weak context setup cedes it across the whole working relationship. A weak harness cedes it across the whole workflow. Layer-by-layer engineering is, in the end, layer-by-layer choices about where the firm is willing to keep the steering wheel.

A well-designed harness still depends on each individual call having a good prompt. A good prompt still depends on the surrounding context being set up well. If the firm's prompts are weak, the harness will just produce weak output faster. **The layers compound — benefits and problems both.**

This matters especially for firms thinking about smaller or locally-hosted models — useful when sensitivity rules out cloud calls. Smaller models have less raw capability than frontier ones, which means the engineering layers carry *more* weight, not less. Every framework, every well-managed context, every verification step in a harness contributes more to the final result. Engineering technique substitutes, in part, for raw model size — which is what makes local AI viable for genuinely sensitive work.

---

## A mental map for where to invest

| If your firm is… | Focus on… |
|---|---|
| Just starting out with AI | Prompt engineering — get RTCF or CRAFT into everyday use |
| Doing the same kind of task repeatedly | Add context engineering — set up project workspaces with firm voice and references |
| Building workflows that need to be reliable | Add harness engineering, or pick a tool whose harness fits the work |
| Considering AI on truly sensitive matters | All three layers, with extra weight on context and harness, and likely a local-model option |

Most small firms get the biggest gain by going deeper at Layers 1 and 2. Layer 3 usually comes built into the tools you choose — but knowing the layer exists helps you choose the right tool for the right work.

---

## Where to read more

**Prompt frameworks**

- [CRAFT](craft-prompting-framework.qmd)
- [RTCF](rtcf-prompting-framework.qmd)
- [RE2 (read twice)](re2-prompting.qmd)
- [Focused prompting](focused-prompting.qmd)
- [Strategic prompting](strategic-prompting-guide.qmd)

**Context**

- [Managing context](managing-context.qmd)
- [Conversation, not delegation](conversation-not-delegation.qmd)

**Harness and agents**

- [Agentic AI](agentic-ai.qmd)
- [Using agentic AI](using-agentic-ai-practical-guide.qmd)
- [Prompt chaining](prompt-chaining.qmd)
- [The critique toolkit](critique-toolkit.qmd)

---

### About this work

borck.consulting helps regulated Australian small firms decide which of these three layers to invest in *first*, given the firm's actual work — not the vendor's pitch. Engagements begin with the AI Readiness Diagnostic.
