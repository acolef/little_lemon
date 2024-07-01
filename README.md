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

Despite all the customer ratings being 5 stars, I avoided hard-coding the ratings and instead went the automated route. To do this, I stored the numerical ratings (each one being 5) in the `testimonials` array's objects; thereafter, the `TestimonialCard` component stores the rating prop in a variable named `numStars`, and then forms a new array, of undefined values, with a length set to the rating number, by way of `const starRating = Array.from({ length: numStars });`. (Note that the `Array.from()` method's argument is an object with a single property,`length`.) In the `testimonial-rating` container of each `TestimonialCard` component, I use the `.map()` method to generate the appropriate amount of stars. Since I do not need the values of `starRating`'s members, I represent this using `_` in the first argument of the map method. The second argument, the numerical index `i`, is all I need, in order to assign keys to each star.

As for the styling, each card is given a maximum width of 350 pixels. I did not use a scrolling environment for the testimonials, to add variety to the page. The stars are given a subtle drop shadow to make them "pop," as they need to be immediately obvious. They are also scaled down to 36x36 pixels, from 96x96 pixels. Since the cards themselves have fixed widths, I decided to set the widths of each customer's image to an invariant 150 pixels. These settings help keep the card tidy, as originally I ran into trouble of longer customer names approaching their associated images too closely at smaller screen resolutions. Since they cannot scroll, I let the testimonial cards wrap to new lines when needed.

### The about section
There is not much to say about this section. Using the negative margin trick from the hero section, I got the responsive images to overlap slightly and also offset them a bit vertically, for visual interest. Their default, mobile-first arrangement is below the textual content, but at the large screen breakpoint (i.e., greater than 992 pixels) they are pushed to the right of the text by changing the flex direction, and their container receives a constant maximum height value of 22em. This results in the images getting laterally squished during the flexing, but I do not think it is to an unacceptable degree.

This section is also accessible by clicking the "About" link in the navbar or footer. Clicking the link solely renders the `About` component in the body of the page, thus I skip another discussion regarding this page below.

### The footer section
For quite a while, I could not get things to position properly here. It turned out that I forgot to put the footer image in its own `div` container. Everything looked perfectly fine in Firefox, but Brave highlighted this issue by breaking the arrangement of the elements. (Namely, the image would not resize during the flexing process, and it pushed the text outside of the content wrapper at large resolutions.)

I imported the site's internal links from the `Nav` component instead of defining another, identical array, in accordance with the DRY ("don't repeat yourself") maxim. This also makes any changes to the internal links get automatically reflected in both the navbar and the footer site map. The contact links I left as placeholders, but I went ahead and included links to the homepages of a few social media sites.

## The navbar
The site's internal links live in the `Nav` component. They are stored in an array of objects, each object possessing an `info` and a `url` property; `info` contains the link's visible label, whereas the `url` property controls the actual routing. The navbar itself is always visible at the top of the page, because I set the header element's position to `fixed` with a `z-index` of 2, rendering it above the rest of the page's contents.

For this section, I went a bit "above and beyond" what we were requested to do. I included a hamburger icon[^1] that replaces the link list on smaller devices; clicking or tapping the icon will open an animated, non-intrusive navigation menu with the links arranged vertically; in addition, the hamburger icon updates to an "x"[^2]. Clicking or tapping anywhere outside of the menu (or clicking the icon again) will close it and reset the icon to the hamburger. The hamburger icon is a React button element of class `.hamburger`, so I can control its display in the media queries. Since I am adhering to the mobile first approach, the navbar's link list is hidden by default by setting `display: none;` for the `.nav-links`.

The menu controlled by the hamburger icon is always rendered, but it is off-screen by default. Originally the menu would undesirably appear on page load and then slide off the right side of the screen. I addressed this by initializing the menu's state variable to `null` on initial app render: `const [isMenuOpen, setIsMenuOpen] = useState(null);`. I then added a `.hidden` class for the hamburger menu, which the menu receives only if `isMenuOpen` is `null`. If the hamburger icon is clicked, the `toggleMenu` function fires and either opens or closes the menu by conditionally adding or removing `.open` from the menu's classes, facilitated by setting `isMenuOpen` to either `true` or `false`. This is all controlled by

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
// Links
</div>
```

Note that the `toggleMenu` function includes `e.stopPropagation();`! This is because upon clicking the hamburger icon, the menu would open and then immediately close, due to event bubbling.

The closing of the menu upon clicking outside of it is controlled by a `useEffect` hook. The hook sets up a click event listener upon component mount, accompanied by an associated `clickHandler` function. At first, I intended to use a do-while loop to traverse the virtual DOM and determine the location of the click event; however, this method utilized `document.querySelector()`, which *bypasses* React's virtual DOM. Since this is not consistent with React's best practices, I embraced an ultimately simpler approach and used the obvious solution of `useRef`, giving me direct access to the DOM node:

```
const handleClick = (e) => {
    if (menuRef.current && menuRef.current.contains(e.target))
        return;

    setIsMenuOpen(false);
};
```

This code checks to see if the click event's target (`e.target`) is a descendant of the `current` node - namely, if the clicked element is "inside" the menu. If so, it does nothing. Otherwise, it invokes `setIsMenuOpen(false)`.

But how is the menu positioned? When the menu is closed, it lives just off the right side of the screen. When opened, it slides to the left into the visible area by an amount equal to its width, and just under the bottom edge of the header, where the navbar resides. To accomplish this, we need:

- the header's height (so we can ensure that the menu is below it)
- the menu's width (so the menu slides in and out by the correct amount)

Either of these values are subject to change during the website's lifetime, so I did not want to hard-code these values in. Instead, I have them calculated dynamically by two functions, respectively: `getHeaderHeight()` and `getMenuWidth()`:

```
const getHeaderHeight = () => {
    if (headerRef.current)
        return `${headerRef.current.offsetHeight}px`;
    return 0;
};

const getMenuWidth = () => {
    if (menuRef.current)
        return menuRef.current.offsetWidth;
    return 0;
};
```

The menu's vertical position is always determined by the header's height, so I reflect this in the CSS with the following JavaScript: `menuRef.current.style.top = menuVerticalPosition;`. However, the menu's horizontal position is conditional: if closed, it needs to be off-screen, and when open, it needs to be on-screen. I decided to make it stay *just* off-screen by an amount equal to its dynamic width plus 2 additional pixels. Why? Well, without the extra 2 pixel buffer, rounding issues and sub-pixel rendering can make the left edge of the menu appear on the right edge of the screen. So I define another function:

```
const getMenuHorizontalPosition = () => {
    return isMenuOpen ? "0" : `calc(-${getMenuWidth()}px - 2px)`;
};
```

The values `0` and `` `calc(-${getMenuWidth()}px - 2px)` `` (note the minus sign!) represent the opened and closed `right` CSS property values for the opened and closed states, respectively.

This all comes to fruition in a `useEffect` hook (because we are manipulating the DOM) which updates every time `isMenuOpen`'s Boolean value switches:

```
useEffect(() => {
    const menuHorizontalPosition = getMenuHorizontalPosition();
    const menuVerticalPosition = getHeaderHeight();

    if (menuRef.current) {
        menuRef.current.style.top = menuVerticalPosition;
        menuRef.current.style.right = menuHorizontalPosition;
    };
}, [isMenuOpen]);
```

And there you have it! To animate the menu, we simply need to add a transition property to the CSS for `.hamburger-menu`: `transition: right 200ms ease-in-out;`.

## The table reservation page
The table booking page features a reservation form with a conditionally enabled (or disabled) submit button. The form features client-side form validation, and the required fields (all of the fields, as I think these are all necessary for a table booking) are denoted by red asterisks. Making the asterisks red helps bring attention to them, but for those that cannot perceive red or have visual impairments, the presence of the asterisk is still widely understood to indicate required fields. Furthermore, ARIA attributes have been associated with each form input. Fields have custom CSS to make form interaction easy and, hopefully, fairly obvious. All form fields are controlled inputs, and no payment info is recorded.

The booking page is rendered via the `Booking` component, which is responsible for rendering the actual form, which resides in the `BookingForm` component. `Booking` interfaces with an API which simulates the availabilities for the booking time slots. The API was provided to us, and it basically generates random times from 17:00 to 23:30 with a granularity of 30 minutes, and seeded with the day passed to the API. `Booking` is therefore stateful, and is endowed with the `availableTimes` array state variable for managing the times open for booking. Since the state logic is somewhat complex, `useReducer` is the ideal implementation. The hook receives an `updateTimes` reducer function responsible for updating the list of available booking times, whereas `initializeTimes()` populates the time list with the current day's times. Upon submission of the form, the API is consulted again, this time calling the `submitAPI` function, which returns `true` upon receipt of the (client-side) validated form data, and `useNavigate` sends the user to a simple confirmation page.

The `BookingForm` component naturally comprises the bulk of the working parts of the booking process. It accepts a few props from its parent: the `availableTimes` array, a dispatch for the reducer, and the form submission function. It has multiple state variables:

- `formData` - This is where the form's input values are stored
- `allTimesDisabled` - A Boolean that denotes whether *all* the booking times for the day have already passed
- `selectedDay` - The day from the `Date()` object associated with the intended booking date

It also possesses a number of functions:

- `handleChange(e)` - Responsible for updating form data as the user makes inputs. It spreads the `formData` state variable and injects any given update, encapsulated in `e.target.value`, by referring to the event target's (i.e., the input's) HTML `name` attribute via `[e.target.name]`
- `handleDate(e)` - Saves the user's selected booking day in the `selectedDay` state variable. Note that by default JavaScript uses the UTC time here, so we have to offset this to the user's locale time by adding the time zone difference (in minutes) to the `selectedDay`'s minutes. This should work regardless of the user's time zone!
- `handleSubmit(e)` - Prevents the default HTML form submission behavior and instead fires `submitForm(formData)` upon submission
- `formatDate(date)` - Formats the given `Date()` object in HTML-ready form (YYYY-MM-DD)
- `formatTime(date)` - Extracts the time from the given `Date()` object and converts it to a numerical value of the form hh.mm, for making easy comparisons
- `formatAvailableTime(time)` - Essentially the same as above, but in lieu of formatting the time portion of a `Date()` object, it formats a time value from `availableTimes`. It does this by taking the sub-string before the colon and the sub-string following the colon in a time value and joins them together in a numerical value, again of the form hh.mm
- `isTimeDisabled(time)` - Checks if any given values in `availableTimes` have already passed, and returns `true` if so, `false` otherwise. The logic checks if an available time is less than the user's locale time, *and* the selected day is prior or equal to the actual current day
- `isButtonDisabled()` - Indicates if the submit button is disabled. The function validates that the first name, last name, time, and occassion fields are filled out; every other field (the date and guest amount) is filled with a value by default and possesses a minimum value, and thus cannot ever be empty

Every field is hooked up to the `handleChange` function through their `onChange` attributes. A `useEffect` hook is utilized to help ensure initializion of the guest amount (which originally was not occurring on render) and the current date, based on the user's locale. The date input fires two additional functions on change: `handleDate(e)` and the reducer's dispatch function. In the latter case, the dispatch's payload object is equipped with whatever date the user selects for the booking. The booking times list is populated with the times from `availableTimes`, as determined by the API. However, I added some additional functionality: it does not make sense to include times which are in the past, so I conditionally render the available times via

```
{availableTimes.map((time, i) => {
    return (
        !isTimeDisabled(time) && <option key={i}>{time}</option>
    );
})}
```

As you can see, the map method loops over the `availableTimes` array, checking if each time is "disabled" (i.e., has already passed). If so, it avoids using that time at all. If no times are left for the day, the user is notified via a message:

```
{
    allTimesDisabled && <p className="times-disabled">No times left for today - try a different day</p>
}
```

The `allTimesDisabled` variable is modified using another `useEffect` hook. By employing `useRef`, it creates a reference to the time input and then creates an array of the time input's options; if the array is empty, `allTimesDisabled` is set to `true`, `false` otherwise. The dependency array for the `useEffect` contains `selectedDay` and `allTimesDisabled`, so the message will display upon the user selecting a day during which all the times have passed, or when selecting a day when they have not. Altogether we have:

```
useEffect(() => {
    const timeSelect = timeSelectRef.current;
    const times = timeSelect.options;

    if (Array.from(times).length === 0)
        setAllTimesDisabled(true);
    else
        setAllTimesDisabled(false);
}, [selectedDay, allTimesDisabled]);
```

The submit button is either enabled or disabled, according to `disabled=isButtonDisabled()`. Note that we pass the *result* of `isButtonDisabled`, rather than a mere function reference. For a while, my button was not disabling properly in Brave. This was the culprit!

As an additional exercise, I decided to customize the range input for the guests. Tinkering with the range input is inherently a messy task,[^3] but I had my heart set on making Little Lemon's eponymous fruit star in the show: the slider thumb is indeed a little lemon. Positioning the thumb and coloring the progress indicator differs between browser families, so hopefully I covered all my bases when styling the input. If you are using a Chromium-based browser, the entire slider should be the primary yellow color stipulated in the design document. For Firefox, the track should fill with the color as you slide the thumb. The CSS I applied should cover other major browsers too, but I have not tested them.

[^1]: [Hamburger menu icon source](https://icons8.com/icon/36389/menu)
[^2]: ["x" icon source](https://icons8.com/icon/95771/multiply)
[^3]: Ana Tudor's article [here](https://css-tricks.com/sliding-nightmare-understanding-range-input/) should suffice to demonstrate how tricky it can be