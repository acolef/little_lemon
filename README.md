# Little Lemon Capstone Project
## Preface
This is my project submission for the Meta Front-End Developer Capstone course on Coursera. Included is a React application for a fictitious restaurant, Little Lemon, in Chicago, Illinois. As per the requirements, the site currently includes a few completed pages:

1. The homepage
2. An about page
3. A table reservation page

The website's design was inspired by a Figma mock-up of the homepage, which we were tasked with creating, and a simple design document, with which we were provided:

- [Homepage mock-up](https://www.figma.com/design/ugZ4DJawwBa4pEYhoACKbq/canvas?node-id=0-1&t=1Qo05Yzsq3xmAWMN-1)
- [Design document](https://www.figma.com/design/ekIgzNFuWd5TzEOLA8dhv6/Little-Lemon-prototype?node-id=1-142&t=17BLUr9q3bBLOvOP-1)
- [Higher resolution style guide reference](https://github.com/acolef/little_lemon/blob/main/style-guide/PG_LittleLemon_StyleGuide.pdf)

I have tried to stay faithful to both while designing the site, while prioritzing clarity, stylistic consistency, readability, accessibility, semantics, and functionality. (Note that the other pages in the design document link were created as Figma exercises, and were not intended to reflect the actual site design.)

During development, I decided to add some additional functionalities which we were not required to implement. I felt that these functionalities were imperative for an operable and responsive website, and creating them presented significant learning opportunities, as well as skill refreshers.

The app has been tested in the Brave browser (Chromium-based) and Mozilla Firefox; however, some rudimentary automated tests (using Jest) are included as well. It was designed according to the "mobile first" philosophy, targetting by default screens of widths ranging from 600 and 768 pixels. Of course, media queries are present to make the site readily accessible to as many devices as possible. The site, on my Linux machine, is best viewed in Firefox, but it should work fine in any major browser. Chromium browsers use a different font rendering method which makes the header font less appealing, in my experience. Perhaps you will not encounter these issues on your system.

If you are interested, I share some of my thoughts and trials during the development process below; however, ultimately the site should speak for itself! At the very end, I feature a to-do list, with ideas for enhancing the site. The discussion below may be helpful to others tackling this project.

## The homepage
In addition to a responsive navbar (which is present on all pages), the homepage consists of several components:

1. The hero section
2. The weekly specials section
3. The testimonials section
4. The about section (which also receives its own page)
5. The footer section

Note that every part of the homepage is given a `.page-section` class, and also a `.content-wrapper` class. Each page section spans the width of the viewport, allowing for full coverage of background colors. The content wrapper is responsible for adjusting how far from the left and right screen edges the content lies.

### The hero section
The app's hero features a functioning link, in the form of a button, to the table reservation system. You will notice that the site's colored buttons receive both active and focus CSS styles, to aid in accessibility. The offset hero image was interesting to implement; I think that my first instinct was to remove the image's container from the document's normal flow to achieve the "break out" effect - namely, the image slightly overlaps the weekly specials section - using `position: absolute;` and manually positioning the image, but this approach did not result in a consistent appearance across browsers, and would likely make adjustments to the homepage difficult or tedious. Thus, I employed a negative margin trick to achieve the same effect, which does not affect the size of the image's `div` container at all. Much more elegant and facile to use!

At very small resolutions (less than 600 pixels) the image is fully absorbed into the hero section. I think that this does not negatively impact the site's aesthetic, while looking much better on tiny devices.

### The weekly specials section
This section was particularly entertaining to create! It features a non-functioning button link to an online menu (we were not given a menu to work with, nor were we supposed to create the menu page), card components for the weekly specials, and a horizontal scroll environment for the cards. If you compare this section to the Figma mock-up, you will notice that I have made minor edits to the dish descriptions for grammatical and readability reasons. I felt that this enhanced the professionalism.

The card contents (the dish properties) are stored in an array of objects, each with an id number as per React's key requirement. I map over each object of the array, passing as props to the `SpecialCard` component each dish's properties. This automated approach makes it trivial to adjust the specials each week, or even grab the specials from another source.

The cards were not too difficult to create, but admittedly I did encounter challenges with the food image sizes. The dimensions across the set of images are not uniform. I addressed this by using `flex: 1;` for the image containers, fixing the widths of the images to 100%, assigning an absolute height of 250 pixels to each image, and using `object-fit: cover;` to ensure the images filled their `div`s. Of course, `flex: 1;` is needed for the cards too, so that they scale equally in their container. The result is a set of uniform cards with equivalent dimensions for their images that looks attractive (in my opinion) on any device. Each card has a non-functioning link to order a delivery. I did not create a focus style for each link, allowing for the browser agent's default focusing mechanism.

The scrolling container is very simple; it renders its children (the cards) and is handled in CSS by virtue of its `.horizontal-scroller` class name. The scrollbar is hidden when unnecessary (i.e., on larger devices). The scrolling environment applies a constant gap of 3em between its children. It achieves the horizontal scrolling effect by employing the `overflow-x: auto;` and `flex-wrap: nowrap;` CSS properties. Since the scroller is allowed to flex, it adjusts to the adequate vertical size for its children. This is good, because who knows how much vertical space the largest special card will occupy?

### The testimonials section
Our mock-up did not specify the background colors for the remaining sections of the homepage, so I took cues from the design document and decided to use its colors to add flair to the page. The testimonials section features testimonial cards, similar to the specials section: each testimonial card gets it content from an object in an array. I map over the `testimonials` array, feeding as props to the card the data from the array.

Despite all the customer ratings being 5 stars, I avoided hard-coding the ratings and instead went the automated route. To do this, I stored the numerical ratings (each one being 5) in the `testimonials` array's objects; thereafter, the `TestimonialCard` component stores the rating prop in a variable named `numStars`, and then forms a new array, of undefined values, with a length set to the rating number, by way of `const starRating = Array.from({ length: numStars });`. (Note that the `Array.from()` method's argument is an object with a single property,`length`.) In the `testimonial-rating` container of each `TestimonialCard` component, I use the `.map()` method to generate the appropriate amount of stars. Since I don't need the values of `starRating`'s members, I represent this using `_` in the first argument of the map method. The second argument, the numerical index `i`, is all I need, in order to assign keys to each star.

As for the styling, each card is given a maximum width of 350 pixels. I did not use a scrolling environment for the testimonials, to add variety to the page. The stars are given a subtle drop shadow to make them "pop," as they need to be immediately obvious. They are also scaled down to 36x36 pixels, from 96x96 pixels. Since the cards themselves have fixed widths, I decided to set the widths of each customer's image to an invariant 150 pixels. These settings help keep the card tidy, as originally I ran into trouble of longer customer names approaching their respective images too closely at smaller screen resolutions. Since they cannot scroll, I let the testimonial cards wrap to new lines when needed.

### The about section
There is not much to say about this section. Using the negative margin trick from the hero section, I got the responsive images to overlap slightly and also offset them a bit vertically, for visual interest. Their default, mobile-first arrangement is below the textual content, but at the large screen breakpoint (i.e., greater than 992 pixels) they are pushed to the right of the text by changing the flex direction, and their container receives a constant maximum height value of 22em. This results in the images getting laterally squished during the flexing, but I do not think it is to an unacceptable degree.

This section is also accessible by clicking the "About" link in the navbar or footer. Clicking the link solely renders the `About` component in the body of the page, thus I skip another discussion regarding this page below.

### The footer section
For quite a while, I could not get things to position properly here. It turned out that I forgot to put the footer image in its own `div` container. Everything looked perfectly fine in Firefox, but Brave highlighted this issue by breaking the arrangement of the elements. (Namely, the image would not resize during the flexing process, and it pushed the text outside of the content wrapper at large resolutions.)

I imported the site's internal links from the `Nav` component instead of defining another, identical array, in accordance with the DRY ("don't repeat yourself") maxim. This also makes any changes to the internal links get automatically reflected in both the navbar and the footer site map. The contact links I left as placeholders, but I went ahead and included links to the homepages of a few social media sites.

## The navbar
The site's internal links live in the `Nav` component. They are stored in an array of objects, each object possessing an `info` and a `url` property; `info` contains the link's visible label, whereas the `url` property controls the actual routing. The navbar itself is always visible at the top of the page, because I set the header element's position to `fixed` with a `z-index` of 2, rendering it above the rest of the page's contents.

For this section, I went a bit "above and beyond" what we were requested to do. I included a hamburger icon that replaces the link list on smaller devices; clicking or tapping the icon will open an animated, non-intrusive navigation menu with the links arranged vertically. Clicking or tapping anywhere outside of the menu will close it, causing it to slide off the page. The hamburger icon is a React button element of class `.hamburger`, so I can control its display in the media queries. Since I am adhering to the mobile first approach, the navbar's link list is hidden by default by setting `display: none;` for the `.nav-links`.

The menu controlled by the hamburger icon is always rendered, but it is off-screen by default. Originally the menu would undesirably appear on page load and then slide off the right side of the screen. I addressed this by initializing the menu's state variable to `null` on initial app render: `const [isMenuOpen, setIsMenuOpen] = useState(null);`. I then added a `.hidden` class for the hamburger menu, which the menu receives only if `isMenuOpen` is `null`. If the hamburger icon is clicked, the `toggleMenu` function fires and either opens or closes the menu by conditionally adding or removing `.open` from the menu's classes, facilitated by setting `isMenuOpen` to either true or false. This is all controlled by

```
const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
};
```

and


```
<div
    ref={menuRef}
    className={`hamburger-menu ${isMenuOpen === null ? "hidden" : isMenuOpen ? "open" : ""}`}
>
```

Note that the `toggleMenu` function includes `e.stopPropagation();`! This is because upon clicking the hamburger icon, it would open and then immediately close, due to event bubbling.