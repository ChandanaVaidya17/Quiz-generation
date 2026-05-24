# Quiz-generation
Google form Quiz generation 

# Google Forms Quiz Automation Script

A lightweight Google Apps Script utility that automatically generates a fully structured, self-grading **Developer & Tech Fundamentals Quiz** within Google Forms. The generated form automatically tracks right answers, allocates points, and enables immediate score display for respondents.

## Features
- **Instant Generation:** Dynamically maps out a 20-question tech quiz using Google Apps Script's `FormApp` API.
- **Auto-Grading Enforced:** Programmatically enables the Google Forms Quiz mode (`form.setIsQuiz(true)`).
- **Point Allocation:** Assigns custom weights (default: 1 point) and designates exact correct answer keys dynamically.
- **UX Form Configurations:** Limits responses, enforces required items, and enables instant publishing summaries.

## Tech Stack
- **Language:** JavaScript / Google Apps Script
- **Platform:** Google Workspace Developer Ecosystem

---

## Instructions to Run

To run this automation tool and generate your own copy of the form, follow these steps:

### Step 1: Open Google Apps Script
1. Navigate to [script.google.com](https://script.google.com/) in your web browser.
2. Sign in using your preferred Google or Gmail account.
3. Click on **New Project** in the upper left corner of the dashboard.

### Step 2: Paste the Script Engine
1. Delete any boilerplate placeholder code (like `function myFunction() {}`) currently visible in the editor.
2. Copy the full block of code from your `script.js` file and paste it directly into the online script editor.
3. Click the **Save** icon (the floppy disk graphic) at the top of the interface, or press `Ctrl + S` (`Cmd + S` on Mac).

### Step 3: Authorize & Execute
1. Select `createQuizForm` from the function dropdown menu on the top toolbar.
2. Click the **Run** button (the play triangle icon).
3. **Authorization Requirement:** An "Authorization Required" popup window will appear since the script needs permissions to provision a form file inside your personal Google Drive account.
   - Click **Review Permissions**.
   - Choose your active Google Account.
   - Click **Advanced** and then click **Go to Untitled project (unsafe)** *(Note: This warning appears simply because your custom script is unverified by Google externally)*.
   - Click **Allow**.

### Step 4: Retrieve Your Form
1. Once execution finishes, view the **Execution Log** at the very bottom pane of your script console window.
2. Copy the custom `getEditUrl()` link generated in the logs and paste it into a new browser tab.
3. You can now customize, preview, and distribute your automated quiz!
