Reaction Time Tester
Project Description

Reaction Time Tester is a browser-based interactive web application that measures how quickly a user reacts to a visual signal.
The application challenges the user to click the correct circle as fast as possible while avoiding distractions.
Difficulty increases automatically over time, making the test more challenging as the user improves.

This project is built using Vanilla JavaScript, HTML, and CSS, with a strong focus on DOM manipulation and event-driven logic.

Problem Statement

Many people want to test and improve their reaction speed in a simple and engaging way.
This project provides a clean and interactive reaction testing environment where users must respond quickly to a visual cue while handling distractions.
The goal is to measure reaction time accurately and provide immediate feedback to the user.

Features Implemented

Reaction time measurement using visual cues

Random delay before target appears

Target appears at random positions on the screen

Optional visual distractions (toggle on/off)

Same-looking target and distraction elements to test focus

Friendly feedback for different user actions

Session-based leaderboard showing top reaction times

Attempts and streak tracking

Automatic hidden difficulty scaling

Clean and responsive user interface

DOM Concepts Used

Dynamic creation and removal of DOM elements

Event listeners for click events

Event delegation for handling different click targets

Conditional rendering based on application state

Updating text and styles dynamically using JavaScript

Managing UI state using JavaScript variables

Application Flow

User clicks Start

Application waits for a random delay

Target circle appears on the screen

User clicks:

Correct circle → reaction time is recorded

Distraction circle → failure message shown

Empty area → miss message shown

Too early → “Too soon” message shown

Difficulty increases internally

User can repeat the test and try to improve their score

Technologies Used

HTML5

CSS3

Vanilla JavaScript (ES6+)

No external libraries or frameworks are used.

How to Run the Project

Clone or download the repository

Open index.html in any modern web browser

Click Start to begin the test

(Optional) Enable distractions using the toggle

Known Limitations

Leaderboard data is session-based and resets on page refresh

No backend or database is used

Keyboard input is not supported (mouse interaction only)

Conclusion

This project demonstrates practical usage of JavaScript fundamentals, DOM manipulation, and user interaction handling.
The application is designed to be simple, interactive, and easy to understand, while still behaving like a real frontend application.
