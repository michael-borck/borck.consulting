---
title: "One Prompt, One Job"
description: "The simplest improvement you can make to AI output — stop asking for ten things at once"
slug: focused-prompting
order: 1
section: "Start here"
draft: false
---

## The idea

When you ask AI to do ten things at once, you get ten shallow answers. When you ask it to do one thing, you get one deep answer.

This is not a hard rule. It is a reliable pattern.

## Why it happens

Models read the *shape* of your request before they respond. A prompt with ten tasks looks like a checklist, so the model responds in checklist mode: brief, surface-level, one line per item.

A single focused task looks like work that deserves attention, and the model gives it that — more reasoning, more nuance, more useful output.

It is less about the model running out of room and more about it calibrating depth to match what the request looks like.

## What it looks like in practice

**Instead of:**

> Summarise the matter, identify the key risks, suggest three positions, draft the client letter, and check the tone.

**Do:**

> Summarise the matter in three to four sentences, focusing on what is actually in dispute.

Then in the next message:

> Now identify the three biggest risks to the client's preferred position.

And so on.

Each message gets the model's full attention. Each response is noticeably better, and you get a chance to course-correct between steps.

## The underlying principle

Treat AI as a colleague you are working *with*, not a checklist you are handing off on the way out the door. In a good professional conversation, you deal with one thing at a time. You follow up. You build.

Splitting a complex request across ten items in one prompt is a shortcut that costs you quality. Working through it one prompt at a time is slower in theory, faster in practice — because you spend less time fixing weak output.

## A simple test

Next time you have a multi-part task — drafting an advice, working up a position, reviewing a long document — try it both ways. Ask everything at once, then start a fresh session and work through it one prompt at a time. The difference in usefulness is usually obvious within two minutes.

---

### About this work

borck.consulting helps regulated Australian small firms develop the everyday habits — like this one — that turn AI from a gimmick into a workable assistant. Engagements begin with the AI Readiness Diagnostic.
