(function () {
   'use strict';

// Linear interpolate between v0 and v1 at percent t
   function lerp(v0, v1, t) {
      return v0 * (1 - t) + v1 * t
   }

// Convert a hex triplet (#XXXXXX) to an array containing red, green, and blue
   function hex_to_rgb(hex) {
      return hex.replace('#', '').match(/.{1,2}/g).map(
         x => parseInt(x, 16)
      );
   }

// Color all lines in the page
   function applyGradient(colours, color_text, gradient_size, choice1, choice2, choice3, RG_blind) {
      if (choice1) {
         colours = ["#0000ff", "#007c07"];
      } else if (choice2) {
         colours = ["#037900", "#6e0068"];
      } else if (choice3) {
         colours = ["#a80008", "#09006e"];
      } else if (RG_blind) {
			colours = ["#080078", "#9e9b00"];
		}

      const paragraphs = document.getElementsByTagName('p');
      const base_color = hex_to_rgb(color_text);
      let coloridx = 0;
      let lineno = 0;

      for (let paragraph of paragraphs) {
         const lines = lineWrapDetector.getLines(paragraph);

         for (let line of lines) {
            // Alternate between left and right for every color
            const active_color = hex_to_rgb(colours[coloridx]);

            // Flip array around if on left to color correctly
            const is_left = (lineno % 2 === 0);
            if (is_left) {
               line = Array.from(line).reverse();
            }

            // Color lines using lerp of RGB values
            for (let loc in line) {
               const t = 1 - (loc / (line.length * gradient_size / 50));
               const red = lerp(base_color[0], active_color[0], t);
               const green = lerp(base_color[1], active_color[1], t);
               const blue = lerp(base_color[2], active_color[2], t);

               line[loc].style.color = "rgb(" + (red | 0) + "," + (green | 0) + "," + (blue | 0) + ")";
            }

            // Increment color index after every left/right pair, and lineno
            // after every line
            if (!is_left) {
               coloridx = (coloridx + 1) % colours.length;
            }
            lineno += 1;
         }
      }
   }

// Listen for messages in background script
   chrome.runtime.onMessage.addListener((message) => {
      if (message.command === "apply_gradient") {
         applyGradient(
            message.colours, message.color_text, message.gradient_size,
				message.choice1, message.choice2, message.choice3, message.RG_blind
         );
      } else if (message.command === "reset") {
         // TODO: Make function to remove line detection spans
         applyGradient(
            [message.color_text], message.color_text, 0
         );
      }
   });


})();