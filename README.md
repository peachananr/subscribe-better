#Subscribe Better by Pete R.
Create a better, highly customizable subscription modal or newsletter signup window with jQuery Subscribe Better


Created by [Pete R.](http://www.thepetedesign.com), Founder of [Travelistly](http://www.travelistly.com) and [BucketListly](http://www.bucketlistly.com)

License: [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US)

[![Subscribe Better](http://www.thepetedesign.com/images/subscribe-better_image.png "Subscribe Better")](http://www.thepetedesign.com/demos/subscribe-better_demo.html)


## Demo
[View demo](http://www.thepetedesign.com/demos/subscribe-better.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari on both desktop and mobile have been tested. Not tested on IE.

## Basic Usage
To use this plugin, simply include the latest jQuery library (preferably version 2.0.0 or higher) together with `jquery.subscribe-better.js` and `subscribe-better.css` into your document's `<head>` follow by an HTML markup as follows:

````html
<body>
  ..
  <div class="subscribe-me">
    <a href="#close" class="sb-close-btn">x</a>
    ...
  </div>
  ..
</body>

````

Anything inside the `subscribe-me` container will be displayed as a modal window when the user scrolls down to the end of the page. This is where your newsletter signup form will situated. The `sb-close-btn` link act as a close button and it is optional. Now that the HTML is ready, simply call the function like this:


````javascript
$(".subscribe-me").subscribeBetter({
  trigger: "atendpage",       // You can choose which kind of trigger you want for the subscription modal to appear. Available triggers are "atendpage" which will display when the user scrolls to the bottom of the page, "onload" which will display once the page is loaded, and "onidle" which will display after you've scrolled.
  animation: "fade",          // You can set the entrance animation here. Available options are "fade", "flyInRight", "flyInLeft", "flyInUp", and "flyInDown". The default value is "fade".
  delay: 0,                   // You can set the delay between the trigger and the appearance of the modal window. This works on all triggers. The value should be in milliseconds. The default value is 0.
  showOnce: true,             // Toggle this to false if you hate your users. :)
  autoClose: false,           // Toggle this to true to automatically close the modal window when the user continue to scroll to make it less intrusive. The default value is false.
  scrollableModal: false      //  If the modal window is long and you need the ability for the form to be scrollable, toggle this to true. The default value is false.
});

````

Now you will have full control over how your subscription window displays to your viewers. Remarks: I hate websites that do this but if you insist on doing it, then at least use this plugin to better time the appearance of your modal window without disturbing your users.

If you want to see more of my plugins, visit [The Pete Design](http://www.thepetedesign.com/#plugins), or follow me on [Twitter](http://www.twitter.com/peachananr) and [Github](http://www.github.com/peachananr).

## Other Resources
- Tutorial (Coming Soon)
