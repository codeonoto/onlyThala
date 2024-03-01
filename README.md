# onlyThala

## Overview
This project is a fun web application that checks if a given input corresponds to certain predefined names and triggers celebrations accordingly. It features special celebrations for "Thala" and "Gopi Bhau" and handles various scenarios.

## Usage
1. Enter names or numeric values in the input field.
2. Click the "DRS ?" button to check for special events.
3. Enjoy the celebrations based on the entered names or numeric values.

## Code Explanation
The JavaScript code (`script.js`) contains utility functions to check if a string is numeric (`isNumeric`), handle events checking (`checkEvents`), and display celebrations for "Thala" and "Gopi Bhau" (`celebrateThala` and `celebrateGopiBhau`). It also includes a function for displaying messages when the input doesn't match any predefined scenarios (`faltuEvents`) and a function for confetti animation (`confettiAnimation`).

The HTML file (`index.html`) provides a simple user interface with an input field and a button to trigger the events check. It includes the necessary audio elements for the celebrations and links to external stylesheets and scripts.

## Dependencies
- [SweetAlert2](https://sweetalert2.github.io/): Used for displaying custom alerts.
- [Tailwind CSS](https://tailwindcss.com/): (Note: Uncomment the link in the head to enable Tailwind CSS)

## Installation
1. Clone the repository.
2. Open `index.html` in a web browser.

## Customization
Feel free to customize the allowed names and celebrations in the JavaScript code based on your preferences.

## License
This project is licensed under the [MIT License](LICENSE).

---

**Note:** Ensure that the necessary audio and video files referenced in the script are present in the specified locations for the celebrations to work properly.
