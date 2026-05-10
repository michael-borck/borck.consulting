---
title: "Secure and Sustainable AI Use"
description: "What's safe, what's smart, what's sustainable — for a regulated firm"
publishDate: 2027-03-16
slug: secure-sustainable-ai
draft: false
---

*This essay sits primarily under the* Are we ready? *question of the practice's [methodology](/services#methodology) — practical security and sustainability decisions for a regulated firm choosing how to use AI over the long term.*

## Purpose

To ground your firm's AI practice in responsible use: what you *can* do now without putting client data, professional obligations, or insurance at risk, and how to think long-term about integrating AI in secure, governed ways.

> Even if the AI gets the right answer, using the wrong data in the wrong tool can create serious risk. The first conversation is not about which model to choose. It is about what is safe, what is smart, and what is sustainable in your specific setting.

---

## Core principles

### 1. People-first design (and the agency that flows from it)

AI should enhance professional capability, not replace professional judgement. Practitioners — solicitors, clinicians, accountants, advisers — remain central to the work and the registration that goes with it. AI is an assistant. It is not a substitute for the person whose name goes on the file.

This is, at root, a principle about *agency*. Every other element of governance below — classification, tooling, oversight, file-note discipline — exists to make sure agency stays with the practitioner instead of drifting silently into the tool.

### 2. Responsible and ethical use

Consider the impact on clients, staff, and your professional obligations. Ensure transparency where it matters: clients should not be surprised to learn that AI was involved, and staff should not be hiding it from supervisors. Your code of ethics, the Australian Privacy Principles, and your insurer all apply regardless of whether a model touched the work.

### 3. Secure and proportionate design

Align AI use with your existing information security posture and your professional obligations: the Privacy Act and APPs, the Legal Profession Uniform Law and the duty of confidentiality (and privilege), AHPRA expectations and the Health Records Act analogues, APES 110 and TPB obligations, ASIC and RG 175 record-keeping and confidentiality requirements. Most of the answers you need already exist in your existing data classification — AI just needs to be slotted into it.

---

## Practical safety guidelines

1. **Use mock or non-identifiable data when experimenting.** Test prompts with sample matters, fictional clients, or de-identified data. Never paste real client- or patient-identifiable information into a tool you have not specifically approved for that purpose.

2. **Assume anything entered into a consumer chat tool is *out* of the firm.** Unless you *know* the tool is configured for enterprise use with appropriate data terms, do not paste anything you would not be comfortable handing to a third party.

3. **Use enterprise tools for sensitive work.** Most small firms in Australia run Microsoft 365 or Google Workspace. Both have AI offerings that operate inside your tenant under your existing data agreements (Microsoft 365 Copilot, Gemini for Workspace). Practice-management, accounting, clinical, and DMS vendors increasingly embed AI under their existing data agreements. These are the right tools for sensitive work.

4. **Prototype in chat tools, deploy in secure environments.** Test prompts and workflows with mock data in a consumer model, then migrate the workflow to your enterprise tool. This pattern lets staff experiment safely while keeping client data in the right environment.

5. **Governance is a team activity.** Involve your IT provider, your insurance broker, and (for larger firms) your professional standards lead before formalising AI use. Document approved tools. Keep a written record of how AI is used in matters where it materially affected the work.

---

## AI tools: what is actually inside?

A practical, non-technical primer for partners.

### LLMs (large language models)

The engines behind ChatGPT, Claude, Gemini, Copilot, and others. They are pattern-matching systems trained on enormous amounts of text. They predict the next plausible piece of language given what has come before. They do not "know" anything. They are very good at producing fluent text that *resembles* knowing something.

### Consumer vs enterprise tiers

The same model can sit behind very different commercial arrangements. Consumer ChatGPT, free Gemini, and free Claude ship with permissive defaults — your input may be retained, may be reviewed by humans, may train future models. Enterprise tiers (ChatGPT Enterprise/Team, Microsoft 365 Copilot, Gemini for Workspace, Anthropic's enterprise offerings) operate under data processing agreements that exclude training and tighten retention. The model is the same. The contract is not.

### Prompt engineering

Just structuring your input so the model can do something useful. Frameworks like CRAFT or RTCF (Role / Task / Context / Format) give a repeatable shape to the prompt — they are scaffolding, not magic.

### Agents

Tools that reason and act in multiple steps — searching, drafting, reviewing, calling other tools. They raise the supervision bar significantly. A good rule for regulated firms: do not deploy agentic tools on client-affecting work without human review at every consequential step.

### Context window

How much information the model can consider at once. Larger windows let you give the model more of a matter file, but bigger context is not the same as better judgement.

### MCP (Model Context Protocol)

An open protocol that lets AI assistants connect to your firm's tools and data sources in a more controlled way than copy-and-paste. Useful in due course; not where most small firms should start.

---

## A simple platform-governance comparison

This is illustrative; the right answer depends on your specific licensing and configuration.

| Tool | Use case | Governance notes |
|---|---|---|
| Microsoft 365 Copilot / Gemini for Workspace | Primary tool for firm work that touches client information | Operates inside your tenant under your existing DPA. Data does not leave your enterprise environment for training. |
| Vendor-embedded AI (practice management, DMS, accounting, clinical software) | Targeted workflows the vendor has built | Check the vendor's data terms and where the model is hosted. Often the most defensible answer for regulated workflows. |
| Consumer ChatGPT / Claude / Gemini | Personal exploration, generic content, public information | Suitable for non-sensitive work, marketing copy, learning, mock-data experiments. Not for client-identifiable information. |
| Local / on-device models | Sensitive work where you cannot send data anywhere | Higher setup cost; growing rapidly in capability. Worth watching. |

---

## A simple strategy: prompt, process, protect

1. **Prompt it.** Use AI chat with mock data to test your thinking, generate ideas, and shape a workflow.
2. **Process it.** Move successful workflows into approved enterprise tools where they touch real client data.
3. **Protect it.** Document the workflow, the tool, the approval, and how staff are supervised when using it.

This sequence keeps experimentation low-risk and production work compliant.

---

## What to say if a partner asks "can we use this for real client data?"

> "Yes — but only in tools governed by our enterprise environment with appropriate data terms (Microsoft 365 Copilot, our practice-management vendor's AI features, etc.). Staff can prototype freely in consumer AI with mock data, but real client information stays inside our approved systems."

That answer is short, accurate, and gives the firm room to grow into AI without exposure.

---

## Key takeaway

> AI is only as smart as the context you give it, and only as safe as the systems you run it in. The work is to match each piece of work to the right tool, document the choice, and supervise the output.

---

### About this work

borck.consulting helps regulated Australian small firms build the secure, sustainable AI footing described above — without the heavy enterprise-style governance program small firms cannot afford. Engagements begin with the AI Readiness Diagnostic.
