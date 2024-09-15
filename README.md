# my-lint

This repository contains a custom `.eslintrc.js` configuration file that stores linting rules meant to be reused across multiple projects. The goal of this project is to provide a centralized location for maintaining consistent code quality standards.

## Why `.js` Instead of JSON?

The `.eslintrc.js` format is used because JavaScript files allow for comments, unlike JSON. This enables us to add explanations, clarifications, or documentation directly within the configuration file, making it easier to understand and maintain the lint rules.

## Purpose

The primary objective of this project is to:
- Maintain a reusable set of ESLint rules.
- Ensure consistent code formatting and quality across various projects.
- Facilitate easy integration of these rules by copying the `.eslintrc.js` file into other projects.

## How to Use

1. Clone or download this repository.
2. Copy the `.eslintrc.js` file to the root directory of your project.
3. Adjust any project-specific configurations if necessary.
4. Install the required ESLint dependencies for your project.

## Contribution

Feel free to propose updates or add new lint rules by creating a pull request. Collaboration is encouraged to keep the rules up-to-date and improve code quality across all projects using these rules.

## License

This project is licensed under the MIT License.
