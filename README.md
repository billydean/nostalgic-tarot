# A Nostalgic Tarot Reading

A master of gift-giving, my brother (LINK) created a custom series of major arcana cards featuring highlights from games we played growing up. They were too good to keep to myself. 

## Deployment

See the current state of the project in action over at [Vercel](https://nostalgic-tarot.vercel.app/)


## Installation and Description

If you'd like to run this bad boy on your own machine, simply run

```
yarn run dev
```

This runs both front end and back end concurrently, although N.B. that the "back end" is currently a mock up using hard coded data (for Vercel's sake--while it is possible to make Vercel play nice, the data I was working with wasn't deep enough to justify it).

The user is greeted by a stacked fan of cards, face-down. After selecting five, pressing 'Start' triggers an API access function (currently wired to a mock-up) pulling image sources, card names, and interpretations for five random tarot cards. The five selected cards are moved from the stacked deck to five target positions on the page alongside their corresponding fetched data; along the way, each card is flipped to reveal its fetched face.

Pressing 'Restart' will reshuffle the deck, clear any fetched card data, and return the user to the app's initial state.

## Reflections

This was meant to be a tidy little project--a relatively straightforward and simple React app knocked out over the course of a week or weekend. The best laid plans of mice and men oft go awry. It's earned a warm place in my heart as an object lesson in how early design choices can explode into structural and functional difficulties downstream in the dev process. It can be difficult to know when to step back and re-assess, when to reconsider your approach and when to press ahead. I "pressed ahead" under the pretext of accepting it as a learning opportunity.

Early on, I decided to have the cards in the stacked deck persist throughout the user flow. The same card (the same element) selected by the user travels across the screen and then lives beside its interpretation. This means that, although it might appear to be a sibling element to its corresponding text, the two elements are actually unrelated. Positioning everything on the page (and accounting for different screen sizes) became a real kerfuffle. 

As a result, while I eventually wrestled it to the ground and made things responsive to different screen sizes, there are major limitations regarding accessibility. Separating cards from their card data in the flow of the document makes the site inscrutable to screen readers. And while sizing most of the app's elements with viewport units keeps everything positioned consistently across devices, the user is unable to resize any text (although they can zoom in if using a touch screen).

## Roadmap for Improvement(s)

1. Transitioning away from using hard coded responses for fetching card data (perhaps not deploying with Vercel).
2. Re-thinking both the card selection and reading review phases of the app with a more mobile-first design approach.
3. Adjusting or adding further transition rules to prevent elements from "sliding" unevenly when resizing the screen on desktop.

## Acknowledgments

* Although very little of it made its way into the project, I was initially inspired by [this resource](https://selfthinker.github.io/CSS-Playing-Cards/) for playing with playing cards from back in 2010.
* [Aejay Goehring](link) is not only responsible for the cards themselves--as a true blue full stack developer, he was an invaluable sounding board and emotional support as I wrested myself free from a prison of my own design (see above). 

## Built With

* React
* Sass
* Express

## License

This project is licensed under the MIT License.

Copyright (c) [2023] [Billy Dean Goehring]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.