---
title: "From metered AI to owned infrastructure: the case for regulated Australian practices"
description: "Cloud AI is currently subsidised by venture capital. The firms with the most exposure to that subsidy ending — regulated Australian small practices — also have the most reason to consider an alternative."
publishDate: 2026-06-23
slug: from-metered-ai-to-owned-infrastructure
draft: false
---

*This essay sits primarily under the* What's the value? *question of the practice's [methodology](/services#methodology) — framing the economic and risk-reduction case for owning AI infrastructure rather than renting it. It also touches the* Are we ready? *question by surfacing the technical viability that makes the case actionable.*

The dominant assumption of the current AI moment is that intelligence is rented. A subscriber pays a monthly fee, calls an API or uses a managed interface, and receives output from a model owned and operated elsewhere. The arrangement has become so universal that few users describe it as an architectural choice. It is, however, a choice — and for a regulated Australian small firm, an increasingly consequential one.

Three considerations are pulling against the rental model. The first is economic. The second concerns physical control of sensitive material. The third concerns operational resilience. Each is independently sufficient reason for a regulated SMB to evaluate alternatives. Taken together, they constitute a substantive case that the metered model is not the long-term default it currently appears to be.

## The economics of the meter

The current generative AI subscription market is not in equilibrium. Public commentary from frontier-lab leadership has acknowledged that consumer-tier subscriptions are loss-making for serious users; the cost of serving a capable model often exceeds the price collected. The market is currently sustained by venture capital, by enterprise contracts that subsidise consumer pricing, and by the expectation that token costs will fall faster than capability scales.

The historical pattern in enterprise software categories that begin with subsidised consumer adoption is well-established. Prices rise to reflect underlying costs. Capability tiering follows. The frontier capability gets priced into eight-figure enterprise contracts; consumers and small firms get a smaller, cheaper variant. Three trajectories are plausible from the current state: usage-based pricing that exposes actual costs, tiered access that gates the most capable models, and capability walls priced beyond what most small firms will pay.

For a regulated Australian small firm, the consequence is that workflows built today on a current cloud subscription are built on a substrate that will move. The model behind the subscription will change, the terms will change, the pricing will change, and the data-handling commitments will change. None of these are catastrophic in isolation. The compounding effect across a five-year planning horizon, however, is that what looks today like a stable foundation is a series of vendor decisions the firm has no influence over.

Owned infrastructure is a different category. Once the hardware is purchased, the marginal cost per query approximates the cost of electricity. Workflows that would not be economic in a metered environment — continuous summarisation across a large corpus, internal Q&A across years of files, draft cycles that exceed plausible token budgets — become viable. The economic shift is not only that compute is cheaper. It is that the meter, which constrains use cases regardless of underlying value, is removed.

## The "physical control" question

For high-stakes Australian professional services — law, medicine, financial advisory, accounting — the cloud-default arrangement faces a regulatory and professional-conduct question that has not been adequately resolved at the deployment layer.

A practitioner cannot represent to a client or a regulator that sensitive work product never left their physical control if the material was processed by a model running in an undisclosed data centre. Vendor-managed "private cloud" solutions and cryptographic attestations provide some assurance, but they fail what might be called the *physical control* standard: a clear, auditable answer to the question "where exactly does this data live, and who else can access it?" Most current cloud-AI deployments cannot meet this standard, because the answer involves multiple jurisdictions, multiple subprocessors, and multiple layers of vendor abstraction.

This is not yet codified in the most relevant regulatory texts. It is a direction of travel, visible in the Privacy Act 1988 amendments through 2024, in OAIC enforcement signalling, in the volume of professional-conduct guidance now being produced by Australian state law societies and medical boards, and in the questionnaires regulated firms are receiving from corporate clients. The firms that get ahead of this trajectory will be in a meaningfully different position by 2028 from those that don't.

The improvised response — small clusters of consumer-grade Apple Silicon machines running open-weight models in office back-rooms — is informal but increasingly common in Australian legal and medical practices. It is not yet a polished story. It is, however, a working one, and it exists because the alternative is to opt out of AI entirely or to accept a deployment risk that is increasingly difficult to justify.

In *Conversation not Delegation* I argue that AI adoption in professional services is fundamentally a literacy problem before it is a technology problem. The infrastructure question follows: a firm that has formed a deliberate position on AI use is then in a position to make the infrastructure choice that supports that position. A firm without a deliberate position defaults to whatever its vendors offer, which is currently a metered cloud arrangement that fails the physical-control standard.

## Resilience and the absence of a meter

The third consideration is operational, and has received less attention than economics or privacy. A firm whose document drafting, client correspondence, and internal Q&A flow through a single cloud subscription has acquired a single point of failure that did not previously exist in its operations.

A vendor outage is one form of this. A vendor policy change that classifies a routine professional task as out of scope is another. A regional throttling decision is a third. In a category as new as cloud AI, all three of these events have already happened to some users in 2024 and 2025. None has been catastrophic at scale. Each, however, is sufficient evidence that the dependency is real.

The 1970s mainframe-to-personal-computer transition is the most useful analogy. Computing was then rented by the hour, accessible only to those with the right institutional relationships. The personal computer did not win because it was more powerful than a mainframe — it was substantially less powerful for years — but because it moved a useful amount of compute onto a device the user owned. That ownership permitted continuous use that the meter would have killed. VisiCalc, the first spreadsheet, was economically impossible in a metered environment.

The contemporary equivalent is a local model running 1,000 tool-calls an hour against a firm's own knowledge base, drafting and re-drafting and exploring without watching a token counter. Use cases of this kind are not exotic. They are simply unavailable in a metered environment because no one will pay for them at the unit cost. They become available when the marginal cost is approximately zero.

## What the technology now permits

The "local AI is too weak to be useful" objection is two years out of date. Three changes have shifted the picture.

The first is unified memory architecture. Apple's M-series and AMD's Strix Halo allow the NPU and GPU to share a single high-speed memory pool, removing the PCIe bottleneck that traditionally throttled local inference. A current Mac Studio with 64–192GB of unified memory runs models that would have required a small server rack three years ago.

The second is quantisation. A 70-billion-parameter model that required 140GB of memory at full precision now fits in 32–96GB at 4-bit or 8-bit precision, with marginal accuracy loss for most professional drafting and summarisation work.

The third is architectural. Mixture-of-Experts models activate only a fraction of their parameters per inference, so a 26B model can deliver near-30B quality. Newer 1.58-bit architectures, of which Microsoft's BitNet is the most-discussed example, point further still — toward capable models running on a CPU with no specialised hardware at all.

For a regulated Australian small firm, the consequence is that the hardware decision has moved out of the "build a server room" category and into the "buy a Mac Studio (or two) and put it in a locked cupboard" category. The capital cost is in the same bracket as a workstation refresh.

## What follows for a firm now

Three operational moves follow from this picture.

The first is to form a deliberate position on AI use across the firm. Most firms today are using AI without a position, which is the worst available state — neither the protections of a deliberate restriction nor the consistency of a deliberate framework. The position need not be sophisticated. It does need to be articulable.

The second is to consolidate infrastructure. A firm using three cloud AI tools is, in most cases, using two of them redundantly. Consolidation to the smallest defensible set, with documented data flows, is the precondition for any meaningful local-AI evaluation.

The third is to develop a credible local-AI option for sensitive workloads. This does not mean every workflow runs locally. It means the firm has an answer to the question "what would we do with a matter we cannot route through any cloud service?" Today, for most regulated Australian SMBs, the answer is "we don't know," which is the same answer their most demanding clients will eventually find unsatisfactory.

The transition from AI as a service to AI as infrastructure for sensitive professional work is not a forecast. It is a process already underway, visible in the back rooms of practices that have made the move quietly. The 2030 picture is one in which routine professional drafting, summarisation, and tool-calling run locally because the economics, the resilience, and the regulatory frame all push that direction. The firms that arrive there ahead of the regulatory curve will not have done anything heroic. They will have decided early.

---

*Michael Borck is a Lecturer in AI and Cyber Security at Curtin University and runs `borck.consulting`, a private practice for regulated Australian SMBs adopting AI. To assess where your firm sits on this transition, [book an AI Readiness Diagnostic](/services).*
