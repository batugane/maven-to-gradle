# Maven to Gradle Converter

## Introduction

Maven to Gradle Converter is a web application that allows users to convert Maven dependencies to Gradle format and vice versa.
This tool simplifies the process of switching between these two popular build automation tools.

## Setup

To get the converter running on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone [URL of your repo]
   ```

2. Navigate to the project directory:

   ```bash
   cd maven-to-gradle
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:<port>`.

## Usage

Using the Maven to Gradle Converter is straightforward:

1. **Maven to Gradle Conversion:**

   - Paste your Maven dependency XML into the left text area.
   - Select the desired Gradle configuration (e.g., `implementation`, `api`).
   - Click the 'Convert' button.
   - The converted Gradle dependency will appear in the right text area.

2. **Gradle to Maven Conversion:**
   - Paste your Gradle dependency declaration into the left text area.
   - Click the 'Convert' button.
   - The converted Maven dependency XML will appear in the right text area.

## Contributing

Contributions to the Maven to Gradle Converter are welcome. Please feel free to submit pull requests or open issues to discuss proposed changes or enhancements.

---

This project was bootstrapped with [Vite](https://vitejs.dev/) and React.
