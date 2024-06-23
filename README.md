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

If you are interested, I share some of my thoughts and trials during the development process below; however, ultimately the site should speak for itself!

## The homepage
In addition to a responsive navbar (which is present on all pages), the homepage consists of several components:

1. The hero section
2. The weekly specials section
3. The testimonials section
4. The about section (which also receives its own page)
5. The footer section

### 1. The hero section
The app's hero features a functioning link, in the form of a button, to the table reservation system. You will notice that the site's colored buttons receive both active and focus CSS styles, to aid in accessibility. The offset hero image was interesting to implement; I think that my first instinct was to remove the image's container from the document's normal flow to achieve the "break out" effect - namely, the image slightly overlaps the weekly specials section - using `position: absolute;` and manually positioning the image, but this approach did not result in a consistent appearance across browsers, and would likely make adjustments to the homepage difficult or tedious. Thus, I employed a negative margin trick to achieve the same effect, which does not affect the size of the image's `div` container at all. Much more elegant and facile to use!