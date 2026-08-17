---
title: "The AI Landscape"
description: "Which tool does the firm actually need? Start with the work, not the vendors"
publishDate: 2026-07-07
slug: ai-landscape
draft: false
---

*This essay sits primarily under the* Should we do AI? *question of the practice's [methodology](/services#methodology): starting with the work the firm actually does, not with the vendor landscape.*

## Start here, not with the tools

Before we talk about models, platforms, and features, one thing matters more than all of them:

**Every AI tool is built on the same foundation: the prompt.**

Whether the firm uses ChatGPT, Claude, Gemini, Microsoft 365 Copilot, vendor-embedded AI, or a local model, the core interaction is the same: someone writes a prompt, AI responds, the person refines.

If you build the prompting and supervision discipline, you can move between tools without losing momentum. The tool is secondary. The skill is primary.

If you are feeling overwhelmed by the number of tools available: relax. Learn the fundamentals (see [CRAFT](craft-prompting-framework.qmd) and [Conversation, Not Delegation](conversation-not-delegation.qmd)) and the specific tools become interchangeable.

---

## The chat interface

All major AI tools share the same basic loop:

1. You type a prompt.
2. The model generates a response.
3. You refine, follow up, or start again.

Master the conversation, and the rest follows.

### Different providers, different feel

| Provider | Known for |
|---|---|
| ChatGPT (OpenAI) | Versatile, conversational, widely adopted |
| Claude (Anthropic) | Thoughtful, careful, strong on long documents and nuance |
| Gemini (Google) | Integrated with Workspace, strong on search and multimodal |
| Microsoft 365 Copilot | Embedded across Word, Excel, Outlook, Teams |

Differences are real but subtle. Each model has its own tone, phrasing, and tendencies. You may find one "clicks" with how you think more than another. Use what feels productive. The core skills transfer.

---

## Model tiers

### Frontier models

Most capable, most expensive:

- GPT-4o / GPT-4.5 (OpenAI)
- Claude Opus / Sonnet (Anthropic)
- Gemini Pro / Ultra (Google)

They excel at complex reasoning, long-document handling, and multi-step analysis. Available through paid subscriptions (typically $20–$30/month per seat) or API access.

**Do you need a frontier model?** For everyday brainstorming, drafting, and iteration, often not. The free and bundled tiers are surprisingly capable for most regulated-firm work. Frontier models matter when the task is genuinely complex (long documents, multi-step legal analysis, nuanced clinical or financial reasoning) or where higher accuracy materially affects exposure.

(See [Do I Need the Best Model?](do-i-need-the-best-model.qmd) for the procurement question.)

### Free and bundled tiers

| Provider | Free / bundled access |
|---|---|
| ChatGPT | Free tier with GPT-4o mini |
| Claude | Free tier with usage limits |
| Gemini | Free tier; integrated with Google |
| Microsoft 365 Copilot | Bundled into many Microsoft 365 enterprise tiers |

For most exploration and learning, and for non-sensitive work, the free or bundled tiers are more than sufficient. Start here.

### A note on FOMO

There is constant pressure to have the latest model. New version, new benchmark, new headline. Take a breath.

If you are having genuine conversations with AI (brainstorming, iterating, thinking together), you do not need the latest and greatest. You need a tool that helps you think. Last quarter's model does that. The goal is to amplify thinking, not to chase benchmarks. A thoughtful conversation with a "lesser" model will outperform a lazy prompt to the most advanced model every time.

---

## Beyond chat: specialised tools

### NotebookLM (Google)

Upload PDFs, documents, web pages, even YouTube videos. Ask questions. The model answers based *only* on your uploaded sources, which significantly reduces hallucination. Generates podcast-style audio summaries. Free with a Google account.

**Best for:** firm-specific research, summarising documents, building internal study aids, getting up to speed on an unfamiliar matter using your own source materials.

### AI for images and design

DALL·E (via ChatGPT), Midjourney, Adobe Firefly, Google Imagen (via Gemini). Useful for marketing assets, internal slides, illustrations. Verify any depiction of a real person, place, or institution.

### AI for audio

Suno (text-to-music), NotebookLM Audio (document-to-podcast), ElevenLabs (text-to-speech). Useful for internal training audio, accessibility, and CPD content.

### AI for video

Runway, Synthesia, Google Veo. Useful for explainer videos, internal communications. Be cautious with anything client-facing; synthetic video has trust implications.

### AI for code

GitHub Copilot, Claude Code, Cursor, Replit, Google AI Studio. Most regulated small firms will not need these directly, but practice management and accounting platforms increasingly embed similar tools internally.

---

## Running AI locally

You do not have to send data to the cloud. Open-source models can run on your own machine.

### Why local matters for regulated firms

- **Privacy.** Data does not leave the machine.
- **No subscription.** Free after initial setup.
- **Offline.** Works without internet.
- **Control.** You choose the model.

This is genuinely useful when sensitivity, contractual obligations, or professional duties make cloud AI difficult: for example on sealed matters, certain advisory work, or material that should not cross borders.

### How to get started

- **Ollama**: the simplest way to run open-source models locally. Install from [ollama.com](https://ollama.com), then `ollama run llama3` (or mistral, gemma, phi). Chat in a terminal.
- **LM Studio**: a desktop app with a visual interface and a built-in catalogue of models. Download from [lmstudio.ai](https://lmstudio.ai).

### Popular open-source models

| Model | Developer | Strengths |
|---|---|---|
| Llama 3 | Meta | General-purpose, very capable |
| Mistral / Mixtral | Mistral AI | Efficient, good reasoning |
| Phi | Microsoft | Small but capable |
| Gemma | Google | Lightweight, good for experimentation |

### Honest limitations

- Generally less capable than frontier cloud models, though good prompting closes more of the gap than people expect (see [Prompt, Context, Harness](prompt-context-harness.qmd)).
- Requires reasonable hardware (16 GB RAM and up; better with a GPU).
- Some setup effort.
- No built-in browsing.

**Best for:** privacy-sensitive work, learning how AI works, situations where cloud calls are not appropriate.

---

## Choosing the right tool for the work

### For partners and senior practitioners

| Use case | Where to start |
|---|---|
| Strategic thinking, partner conversations | ChatGPT or Claude (free or paid); see [Strategic Prompting](strategic-prompting-guide.qmd) |
| Research grounded in firm documents | NotebookLM |
| Drafts of advice, position papers, internal memos | Claude or ChatGPT (free for non-sensitive; enterprise tier for client-affecting work) |
| Working inside Microsoft 365 | Microsoft 365 Copilot |
| Highly sensitive material | Local model via Ollama or LM Studio |

### For staff doing day-to-day work

| Use case | Where to start |
|---|---|
| Drafting client and internal correspondence | Microsoft 365 Copilot or Gemini for Workspace (whichever the firm uses) |
| Summarising long documents | Claude or NotebookLM (with appropriate data terms) |
| Cleaning up data and producing simple reports | Microsoft 365 Copilot in Excel; vendor-embedded AI in your accounting or PM platform |
| Drafting policy or procedure | ChatGPT or Claude for first drafts; partner review essential |
| Meeting notes and action items | Microsoft 365 Copilot (Teams) |

### For specific sectors

**Legal:** vendor-embedded AI in your DMS or PM platform is increasingly the most defensible answer for matter-specific work. Supplement with consumer tools (mock data only) for learning and non-sensitive drafting.

**Medical and allied health:** clinical software vendors are rapidly adding embedded AI. Verify what the vendor's data terms actually are. AHPRA expectations apply regardless of tooling.

**Accounting and financial advice:** practice management, tax, and SoA-tooling vendors are the appropriate starting point for regulated work. APES 110, TPB, and ASIC RG 175 obligations do not change because a model produced the draft.

---

## Data governance: a reminder

Before using any AI tool with firm data, consider:

**Use enterprise tiers when available.** Enterprise versions typically include:

- Data processing agreements
- Data not used for model training
- Logging and retention you can negotiate
- Administrative controls

**Do not put into consumer free tiers:**

- Client- or patient-identifiable information
- Privileged material
- Financial or sensitive firm information
- Anything covered by NDA, court order, or confidentiality

**When in doubt:** use the enterprise version, use a local model, or de-identify the data first.

See [Why Most AI Data Governance Policies Get It Wrong](data-governance.qmd) and [Secure and Sustainable AI Use](secure-sustainable-ai.qmd) for the longer treatment.

---

## The landscape changes fast, and that is fine

New models launch monthly. Features change. Pricing shifts. Today's breakthrough is tomorrow's baseline. This can feel overwhelming.

The fundamentals do not change:

- Prompting well matters more than which model you use.
- Conversation and iteration beat one-shot queries on any model.
- Professional judgement, and the agency that sits underneath it, remains the firm's contribution regardless of model capability.
- Privacy, professional obligations, and ethics apply to every tool.

Learn the fundamentals. Pick a tool that fits the firm. Use it well. When something better comes along, your skills transfer.

The AI landscape is a buffet, not a race. Sample what is useful. Ignore the hype. Focus on what helps the firm think better.

---

### About this work

borck.consulting helps regulated Australian small firms cut through the vendor noise and make tooling decisions that match the work, the obligations, and the firm's actual capacity. Engagements begin with the AI Readiness Diagnostic.
