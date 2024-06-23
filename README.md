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

The app has been tested in the Brave browser (Chromium-based) and Mozilla Firefox; however, some rudimentary automated tests (using Jest) are included as well. It was designed according to the "mobile first" philosophy, targetting by default screens of widths ranging from 600 and 768 pixels. Of course, media queries are present to make the site readily accessible to as many devices as possible.

If you are interested, I share some of my thoughts and trials during the development process below; however, ultimately the site should speak for itself! At the very end, I feature a to-do list, with ideas for enhancing the site.

## The homepage
In addition to a responsive navbar (which is present on all pages), the homepage consists of several components:

1. The hero section
2. The weekly specials section
3. The testimonials section
4. The about section (which also receives its own page)
5. The footer section

### 1. The hero section
The app's hero features a functioning link, in the form of a button, to the table reservation system. You will notice that the site's colored buttons receive both active and focus CSS styles, to aid in accessibility. The offset hero image was interesting to implement; I think that my first instinct was to remove the image's container from the document's normal flow to achieve the "break out" effect - namely, the image slightly overlaps the weekly specials section - using `position: absolute;` and manually positioning the image, but this approach did not result in a consistent appearance across browsers, and would likely make adjustments to the homepage difficult or tedious. Thus, I employed a negative margin trick to achieve the same effect, which does not affect the size of the image's `div` container at all. Much more elegant and facile to use!

At very small resolutions (less than 600 pixels) the image is fully absorbed into the hero section. I think that this does not negatively impact the site's aesthetic, while looking much better on tiny devices.

### 2. The weekly specials section
This section was particularly entertaining to create! It features a non-functioning button link to an online menu (we were not given a menu to work with, nor were we supposed to create the menu page), card components for the weekly specials, and a horizontal scroll environment for the cards. If you compare this section to the Figma mock-up, you will notice that I have made minor edits to the dish descriptions for grammatical and readability reasons. I felt that this enhanced the professionalism.

The card contents (the dish properties) are stored in an array of objects, each with an id number as per React's requirements. I map over each object of the array, passing as props to the `SpecialCard` component each dish's properties. This automated approach makes it trivial to adjust the specials each week, or even grab the specials from another source.

The cards were not too difficult to create, but admittedly I did encounter challenges with the food image sizes. The dimensions across the set of images are not uniform. I addressed this by using `flex: 1;` for the image containers, fixing the widths of the images to 100%, assigning an absolute height of 250 pixels to each image, and using `object-fit: cover;` to ensure the images filled their `div`s. Of course, `flex: 1;` is needed for the cards too, so that they scale equally in their container. The result is a set of uniform cards with equivalent dimensions for their images that looks attractive (in my opinion) on any device. Each card has a non-functioning link to order a delivery. I did not create a focus style for each link, allowing for the browser agent's default focusing mechanism.

The scrolling container is very simple; it renders its children (the cards) and is handled in CSS by virtue of its `horizontal-scroller` class name. The scrollbar is hidden when unnecessary (i.e., on larger devices). The scrolling environment applies a constant gap of 3em between its children. It achieves the horizontal scrolling effect by employing the `overflow-x: auto;` and `flex-wrap: nowrap;` CSS properties. Since the scroller is allowed to flex, it adjusts to the adequate vertical size for its children. This is good, because who knows how much vertical space the largest special card will occupy?