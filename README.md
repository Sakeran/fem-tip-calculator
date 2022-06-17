# fem-tip-calculator

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Notes

(June 17, 2022)

This is the first project I’ve submitted to the Front End Mentor platform in several months, after taking a break to focus on other things. I initially had my eye on a more complex project, but this tip calculator seemed like a good opportunity to familiarize myself with some of the tools I’d need for it.

In particular, I needed to get more comfortable working with reactive animations, which I’ve always found somewhat cumbersome with JSX-based frameworks like React and SolidJS. This led to me try out Svelte for the first time, which, thanks to its built-in transitions and other helpers, will probably become my go-to framework for animation-heavy projects going forward.

In order to get some animation practice in, I implemented a “rolling” animation for the calculated dollar amounts: rather than immediately snapping to an updated value, the display is set up to emulate an analog counter, with each digit spinning into its new place. Svelte’s built-in ‘spring’ helper made this very easy to set up.

One thing I did struggle with was the accessibility of the application. While the mockup was simple enough to make keyboard-based navigation effectively free, I also tried my best to make it usable via screen readers.  It turns out that “my best” isn’t quite enough to handle these kinds of interactive components, however. I will need to do a deeper dive into the WAI-ARIA docs (and learn to use screen readers more proficiently) before trying something like this again.