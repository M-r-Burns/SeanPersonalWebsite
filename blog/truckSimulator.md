---
title: 'Class 8 EV Truck Simulator'
date: '2025-05-01'
excerpt: 'Trucking Simulator – From Code to Real Utility'
imageUrl: 'images/trucklogo.png'
dataAiHint: 'Trucking Simulator/Software'
---

This project started as a logistics case competition, but it ended up being the first time I felt like I was actually building software that could solve a real-world problem.

The case focused on a simple but high-impact question: what are the costs (financial, time, and environmental) of switching from gas to electric trucking fleets? We had to evaluate everything from upfront vehicle costs and ongoing maintenance to gas prices across states and emissions outputs. But the real challenge, I realized quickly, wasn’t just the cost differences, it was the time costs.

**Time Is the Real Cost**

Electric trucks have far more limited ranges and much longer recharge times. That means more frequent stops and longer delays, delays that don’t just affect delivery windows but also tie into Department of Transportation (DOT) rest rules that truckers are legally required to follow.

For example:

A gas truck might drive for 6 hours straight before stopping for fuel.

An electric truck might hit its range limit after 200 miles, need a 90-minute charge, and fall out of sync with legally required rest breaks.

But what if that charging time overlaps with a mandated 10-hour overnight break? Does that make the time cost irrelevant for that segment?

These kinds of questions made it immediately clear: trying to calculate these routes by hand would be virtually impossible. We had thousands potential trips, and I couldn’t manually track every break, charge, and rule across each one.

**So I Built a Simulator**

That’s when I decided to stop guessing and start building.

Using Python, I wrote a simulation that mimicked a trucker's entire journey. It used rule-based logic to account for:

Maximum continuous driving hours

Required 30-minute breaks after 8 hours of work

Daily 10-hour sleep breaks

Truck-specific range limits

Charging and fueling time

Charging frequency based on battery capacity and percentage

And many more requirements(visit the app)

The simulator tracked every hour of the route. It asked:

“Has the truck driven X miles?” → Time to charge.

“Has the driver worked more than Y hours?” → Mandatory rest.

“Can charging align with rest to minimize lost time?” → If yes, combine them.

This was a huge unlock. Suddenly, I could simulate any route and generate logs that showed minute-by-minute how long the trip would take in a gas truck versus an electric truck, and where all the delays came from. And because it was automated, I could do this for every route in our massive dataset.

**From Python Script to Product**

But the best part came next. I realized this wasn’t just a personal tool, it could actually be useful to someone else. So I built a clean, interactive front-end that let a user input two cities, adjust truck specs (battery %, maintenance cost, charge time, etc.), and instantly see:

A full comparison of gas vs. electric costs

Emissions savings

A breakdown of how time was spent, driving, resting, charging, for each truck type

And all of it was wrapped in a responsive, accessible web interface powered by the Google Maps API for real routing data.

**What I Learned**

This project taught me more than any class ever could.

**Automation is essential:** when complexity grows. If it feels like you'd have to do it a hundred times by hand, write code to do it once instead.

**Small tools scale ideas:** A simple simulator becomes way more powerful when paired with a UI that others can use.

**Real-world logic is messy:** You can’t ignore constraints like DOT mandates or range variability if you're aiming for an accurate solution.

**It’s not just about building, it's about showing:** I could’ve submitted a spreadsheet. But turning this into a live demo with clear, interactive visuals? That’s what made it stick.

What started as a Python script turned into a real product, a way for stakeholders to explore an issue that’s complex, high-stakes, and deeply relevant. And for me, it was a step into something I’d always wanted to do: make software that solves real-world problems.





