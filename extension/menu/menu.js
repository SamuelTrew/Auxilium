'use strict';
// Define references to DOM elements
const color_text = document.getElementById('color_text');
const gradient_size = document.getElementById('gradient_size');
const enabled = document.getElementById('enabled');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const RG_blind = document.getElementById('RG_blind');

// Listen for clicks on the input elements, and send the appropriate message
// to the content script in the page.
function eventHandler(e) {
   // Send message to content script to color lines
   function apply_gradient(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
         command: "apply_gradient",
         colours: ["#000", "#000"],
         color_text: color_text.value,
         gradient_size: gradient_size.value,
         choice1: choice1.checked,
         choice2: choice2.checked,
         choice3: choice3.checked,
         RG_blind: RG_blind.checked
      });
   }

   // Send message to content script to reset lines
   function reset(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
         command: "reset",
         color_text: color_text.value
      });
   }

   // Just log the error to the console.
   function reportError(error) {
      console.error(`${error}`);
   }

   // Store attributes into local storage
   chrome.storage.local.set({
      color_text: color_text.value,
      gradient_size: gradient_size.value,
      enabled: enabled.checked,
      choice1: choice1,
      choice2: choice2,
      choice3: choice3,
      RG_blind: RG_blind
   });

   // Dispatch depending on checkbox enabled state
   if (enabled.checked) {
      try {
         chrome.tabs.query({active: true, currentWindow: true}, apply_gradient);
      } catch (e) {
         reportError(e);
      }
   } else {
      try {
         chrome.tabs.query({active: true, currentWindow: true}, reset);
      } catch (e) {
         reportError(e);
      }
   }
}

// Load settings from local storage, or use these defaults
chrome.storage.local.get({
   color_text: "#000000",
   gradient_size: 100,
   enabled: true,
}, function (result) {
   color_text.value = result.color_text;
   gradient_size.value = result.gradient_size;
   enabled.checked = result.enabled;
});

// Register event listeners to update page when options change
document.getElementById("enabled").addEventListener("change", eventHandler);
document.getElementById("gradient_size").addEventListener("change", eventHandler);
document.getElementById("color_text").addEventListener("change", eventHandler);
document.getElementById("choice1").addEventListener("change", eventHandler);
document.getElementById("choice2").addEventListener("change", eventHandler);
document.getElementById("choice3").addEventListener("change", eventHandler);
document.getElementById("RG_blind").addEventListener("change", eventHandler);