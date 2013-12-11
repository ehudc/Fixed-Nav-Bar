## Fixed Navigation Bar

A jQuery plugin to fix an element to the top of the browser window when scrolling down the page.

Though primarily designed for use with those sites that have a header and a navigation bar, it can also be used for any child div element as long as you specify a parent div.

### Using fixedNav.js

In your `<head>` include a version of jQuery above 1.7 (so that .on() can be utilized), as well as the location of `fixedNav.js`.

Use the plugin like so:

    <script>
    $(document).ready(function () {
        $("#navbar").fix({
            parentDiv: "#header",
            center: true
        });
    });
    </script>
    
There are two options to include:

*  parentDiv -- The id of the parent element (default: ' ' )
*  center -- Whether or not the navbar should be centered when fixed (default: false). If the navigation bar's width is not 100% it may float to one side of the window when its position is fixed.
