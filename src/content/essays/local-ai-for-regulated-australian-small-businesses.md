---
title: "Local AI for regulated Australian small businesses"
description: "Cloud AI is a defensible default for casual use. For a regulated Australian small firm, it has become the harder position to defend, and local AI is now a viable alternative on hardware most professionals already own."
publishDate: 2026-06-09
slug: local-ai-for-regulated-australian-small-businesses
draft: false
---

*This essay sits primarily under the* Are we ready? *question of the practice's [methodology](/services#methodology): the readiness check covering data, technology, and the firm's actual deployment options.*

The dominant model for accessing AI today is metered service. A subscriber pays a monthly fee and calls a model hosted in a third-party data centre. The arrangement works for most users and the underlying models are capable. For low-stakes use it is a reasonable trade-off.

For a regulated small firm operating under Australian privacy and professional-conduct obligations, the same arrangement deserves more careful assessment. "Reasonable for most users" is a weaker proposition than it appears once a regulator, a client questionnaire, or a professional-conduct review enters the picture. The case for local AI in this segment is now substantively stronger than the case for cloud, and the technical viability has shifted faster than most firms have noticed.

Three concerns drive the shift. The first is economic. The second is regulatory. The third is operational.

## The economic argument

The current generative AI subscription market is not in equilibrium. Tiers like ChatGPT Plus or Claude Pro are priced below the marginal cost of serving a serious user, supported by venture capital and the expectation that token costs will fall faster than frontier capability scales. The historical pattern in enterprise software categories that began with subsidised consumer adoption is that prices eventually rise to reflect underlying costs, and capability tiering follows. Three trajectories are plausible: usage-based pricing that exposes actual cost, tiered access that reserves the most capable models for enterprise contracts, and capability walls that price small firms out of the most useful tools.

For a small accounting practice planning a workflow around a current cloud subscription, this matters. The price paid today does not reflect the value of the service rendered, and the model behind the subscription will change: its terms, its pricing, its data-handling, its capability ceiling. A workflow built on it is a workflow built on a substrate someone else can move underneath the firm.

Owned infrastructure is a different category of substrate. Once the hardware is purchased, the marginal cost per query is approximately the cost of electricity. Workflows that would not be economic in a metered environment (continuous summarisation across a large document corpus, internal Q&A across years of files, draft-and-redraft cycles that exceed plausible token budgets) become viable. The change is not just cost. It is the disappearance of the meter, which permits use cases that the meter would have killed.

## The regulatory argument

When a prompt is sent to a cloud AI, data is sent to a third party. For most casual use, this is acceptable. For a regulated Australian small firm, several frames overlap to make the same act consequential.

A law firm operates under the Legal Profession Uniform Law's confidentiality requirements. These do not contemplate a default routing of client material to a third-party model in another jurisdiction, and the relevant professional-conduct rules do not provide a "I did not realise the tool worked that way" exception. A medical practice operates under the Privacy Act 1988 and state-level health-records legislation, with OAIC enforcement powers materially strengthened by the 2024 amendments. An accounting or financial-advisory practice operates under both privacy obligations and professional-conduct rules, alongside a competitive-confidentiality concern about the firm's working knowledge being absorbed into a third-party model.

In each case, the relevant question is not whether AI tools are permitted in the abstract (they are), but whether the specific deployment can be defended to a regulator, a professional body, or a client asking how their material is handled. A client questionnaire from a corporate buyer asking how a firm uses AI is, in 2026, increasingly common. The answer "we use ChatGPT Plus through partner accounts" is a defensible answer for some matters and not for others, and most firms have not yet drawn that line.

Local AI is the only deployment model that resolves the question without a workaround. The data does not leave the building. The same model can serve sensitive and non-sensitive use without a triage step. The audit trail, where one is needed, is at the firm's perimeter rather than at a vendor's. Most importantly, the firm can answer the question.

## The operational argument

The third concern is the one least often raised, and arguably the most consequential over a five-year horizon: dependence.

A firm whose document drafting, client correspondence, and internal Q&A flow through a single cloud subscription has a single point of failure that did not previously exist in its operations. A regional outage, a vendor policy change, a content-policy adjustment that classifies a routine professional task as "violative": any of these is sufficient to interrupt the firm. In a category as new as cloud AI, all three have already happened to some users.

Local AI distributes this risk. The model is on the firm's own hardware. The infrastructure is independent of any vendor's continued operation. The capability available to the firm a year from now is whatever the firm chooses to install, not whatever a vendor chooses to offer. The mainframe-to-PC analogy is overused but accurate: a useful amount of compute, owned, removes a class of dependence that a metered service cannot.

## What is technically viable now

The "local AI is too weak to be useful" objection is two years out of date. Three changes have shifted the picture.

The first is unified memory architecture. Apple's M-series machines and increasingly AMD's Strix Halo allow the NPU and GPU to share a single high-speed memory pool, removing the PCIe bottleneck that traditionally throttled local inference. A current-generation Mac Studio with 64–192GB of unified memory can run models that would have required a small server rack three years ago.

The second is quantisation. A 70-billion-parameter model that required 140GB of memory at full precision now fits in 32–96GB at 4-bit or 8-bit precision, with marginal accuracy loss for most professional drafting and summarisation work. The quality difference between a current 30B-parameter local model and the model behind a $30/month cloud subscription is small enough, for most regulated-SMB use cases, to be unnoticeable.

The third is architecture. Mixture-of-Experts models activate only a fraction of their parameters per inference, meaning a 26B model can deliver near-30B quality. Newer 1.58-bit architectures point further still, toward capable models running on a CPU with no specialised hardware at all.

The hardware decision for a regulated AU small firm has shifted from "build a server room" to "buy a Mac Studio (or two) and put it in a locked cupboard." The capital cost is in the same bracket as a workstation refresh.

## Three positions a firm can take

A firm-wide ChatGPT Plus subscription is not infrastructure; it is a workaround that routes the disclosure question through a corporate account that still sends client material to a third party. A blanket ban on AI use is a refusal to take a position, which staff will quietly route around. Three deliberate positions are credible.

The first is **literacy with controlled cloud use**. The firm forms a clear, articulable position on which kinds of material can go to which tools, and trains staff in a shared framework for AI use. Cloud subscriptions are appropriate for non-sensitive work; sensitive work follows a different protocol.

The second is **literacy plus local AI for sensitive workloads**. Most firm work flows through controlled cloud setups; the most sensitive five-to-fifteen percent (matters where the client expectation, the regulatory frame, or the firm's professional obligations make any cloud routing indefensible) runs on local infrastructure that does not transmit data.

The third is **fully local**. All AI work runs on the firm's own hardware. Rare today; viable for firms whose practice mix concentrates in highly sensitive matters.

The right position depends on the firm's practice mix, client base, regulatory frame, and the questions its most demanding clients are beginning to ask. None of the three is wrong. What is wrong, and what will be increasingly difficult to defend, is having no position at all.

## The narrow point

Local AI is not a research project. It is hardware available this month, models installable this afternoon, and a set of trade-offs that have shifted decisively in favour of small regulated firms. The reason most Australian professional-services firms have not adopted it is not technical. The distribution story has been written for either consumers or large enterprises, and the case for the regulated SMB segment has not been made in its own language.

In *Conversation not Delegation* I argue that AI adoption in professional services is fundamentally a literacy problem before it is a technology problem. The local-versus-cloud question is the natural follow-on once the literacy work has been done: a firm that has formed a deliberate position on AI use is in a position to choose its infrastructure. A firm that has not is, by default, choosing whatever its staff choose, in whatever way they choose it. That default is the harder one to defend.

---

*Michael Borck is a Lecturer in AI and Cyber Security at Curtin University and runs `borck.consulting`, a private practice for regulated Australian SMBs adopting AI. To assess where your firm sits on this transition, [book an AI Readiness Diagnostic](/services).*
