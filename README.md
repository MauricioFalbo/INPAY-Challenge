# Selenium Google Search Automation - INPAY

This is a Node.js for automating Google searches using the Selenium.

## Prerequisites

- Node.js installed
- Chrome browser installed

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the script with a search term as a command-line argument:

   ```bash
   npm run start "your search term"
   ```

## Description

This script uses the Selenium WebDriver to perform the following actions:

1. Opens the Google homepage.
2. Clicks on the 5th button on the page to close modal.
3. Enters the provided search term in the search bar and presses Enter.
4. Waits for the search results page to load.
5. Retrieves and prints the text of the first 10 links on the search results page.