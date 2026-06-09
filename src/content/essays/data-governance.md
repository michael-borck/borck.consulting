---
title: "Why Most AI Data Governance Policies Get It Wrong"
description: "A proportionate framework for regulated Australian small firms"
publishDate: 2026-09-01
slug: data-governance
draft: false
---

*This essay sits primarily under the* Are we ready? *and* How do we do AI? *questions of the practice's [methodology](/services#methodology) — separating the legitimate data-governance concerns from the misunderstandings that produce blanket-ban policies that quietly fail.*

## The blanket-ban reflex

Most small firms I work with — law practices, medical and allied-health practices, accounting and financial-advisory firms — have landed on roughly the same AI policy: *do not upload anything to AI*. The intent is right. The execution is not. Blanket prohibitions treat all AI interaction as equally risky and conflate several distinct concerns, some legitimate and some based on a misunderstanding of how the technology actually works.

Untangling them is the difference between a policy partners actually follow and a policy that gets quietly ignored — which is far worse than no policy at all, because it produces unsafe practice with the additional fiction of compliance.

## The legitimate concerns

The rational core of caution is about the **pipeline before training**: the transmission, processing, and storage of data, not what happens inside the model.

### Data residency and sovereignty

The Australian Privacy Act and the Australian Privacy Principles set expectations about cross-border disclosure of personal information (APP 8). Sector-specific obligations layer on top: the Legal Profession Uniform Law and the duty of confidentiality for solicitors; the Health Records Act analogues and AHPRA expectations for clinicians; APES 110, the *Code of Ethics for Professional Accountants*, and Tax Practitioners Board obligations for accountants and tax agents; the FOFA / RG 175 confidentiality and record-keeping framework for financial advisers.

When a staff member pastes a document into a consumer AI tool, that text is transmitted to and processed on external infrastructure, often offshore. That transmission may itself be the issue, regardless of what the AI provider does with the data afterwards.

### Contractual and professional confidentiality obligations

Engagement letters, NDAs, government contracts, and client retainers frequently constrain which systems may process covered information. For a law firm, legal professional privilege adds another layer — privilege is not lost lightly, but careless disclosure to a third party (including a SaaS vendor) raises hard questions. Sending data to a third-party AI service may breach contractual or professional terms even if the provider handles it perfectly. The question is not whether the AI is trustworthy. It is whether the engagement permits it.

### Logging and retention

AI providers may retain prompts and conversations for safety monitoring, abuse detection, or debugging. This is distinct from training. But it still means a sensitive document is sitting on someone else's servers for some period. Enterprise agreements typically negotiate specific terms around logging and retention — which is exactly why the distinction between consumer and enterprise tiers matters.

### Supply chain risk

AI providers, like any SaaS vendor, can be breached. This is not the model leaking data through its outputs. It is the company's servers being compromised and conversation logs being exfiltrated. This is standard information security, managed through vendor risk assessments, data processing agreements, and enterprise-tier controls — the same way you already manage your practice management system or your cloud accounting platform.

## Where the reasoning goes wrong

The problems start when firms conflate these legitimate infrastructure and legal concerns with fears about model behaviour — specifically, the belief that someone could extract uploaded documents from the model itself.

This fear misunderstands how large language models work. LLMs interpolate; they do not retrieve. If data is used for training at all (and enterprise tiers typically exclude it), it becomes a vanishingly small statistical signal distributed across billions of parameters. It is not stored as a retrievable file. It is not sitting in a searchable database. It is dissolved into the model's general capability like a drop of ink in a swimming pool. There is no mechanism by which another user could query the model and reconstruct your client file, because the model never stored it as a file in the first place.

When a policy does not draw this distinction, the result is blanket prohibition rather than proportionate risk management — and partners end up with a policy that bans the tools their staff are using anyway, on phones the firm cannot see.

## The double standard

The irony is that most firms enforcing strict AI prohibitions happily allow staff to paste sensitive content into email, cloud storage, Microsoft 365, Google Workspace, Dropbox, Slack, and dozens of other SaaS tools — all of which carry the same transmission, storage, and jurisdictional considerations. Some of those tools present greater practical risk: an email can be forwarded to anyone, a shared link can be passed around, a Slack message persists in searchable plaintext for years.

AI feels riskier because it is newer and less understood, not because the actual risk profile is meaningfully different from other cloud services. The governance framework should be consistent: if the firm has a data classification scheme and an approved-tools list for each classification level, AI tools should simply be evaluated against the same criteria.

## A more useful framework

Rather than "do not upload anything to AI," a proportionate policy addresses the actual risks:

1. **Classify the data.** Public, internal, confidential, or regulated? For a regulated practice, "regulated" effectively means client-identifiable, patient-identifiable, or personal information under the Privacy Act.
2. **Match the tool to the classification.** Enterprise AI tools with data processing agreements and Australian or contractually appropriate data residency are appropriate for internal and some confidential work. Consumer tools (free ChatGPT, Gemini, Claude) are appropriate for public and non-sensitive internal work — drafting marketing copy, brainstorming a meeting agenda, summarising a public document. Regulated data needs specific assessment against the relevant legislation and your professional obligations.
3. **Manage the real risks.** Never paste credentials, API keys, or access tokens. De-identify personal information before pasting it into a non-enterprise tool. Understand the provider's logging and retention terms. Document AI use in matter or client files where it materially affected the work — both for your own quality assurance and for any future complaint, audit, or insurer query.
4. **Drop the fictional risks.** Stop treating model extraction as a plausible threat. Stop conflating jailbreaking with data access. Focus governance effort where the actual exposure exists: transmission, storage, jurisdiction, and contractual or professional compliance.

The goal is professional data hygiene applied consistently across all tools, not AI exceptionalism driven by misunderstanding.

A final framing worth holding onto. Governance is, in the end, about *agency over data flows* — knowing where the firm's information goes, who has it, on what terms, and being able to choose accordingly. Both blanket bans and ungoverned use are agency failures: the first refuses to engage with the choice; the second refuses to make one. Proportionate policy puts the choice back where it belongs.

---

### About this work

borck.consulting helps regulated Australian small firms — law, medical and allied-health, accounting and financial-advisory — adopt AI as a collaborator rather than a delegate, with governance and data sovereignty built in from the start. Engagements begin with the AI Readiness Diagnostic: a paid two-hour conversation with leadership and a written recommendation that answers the question many partners are quietly asking themselves — *do we actually need to do anything yet?*
