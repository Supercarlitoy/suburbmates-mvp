# MCP Usage Guide

This guide outlines how to leverage available MCPs for automation, testing, and validation in your project.

---

## 1. Filesystem MCP
- Manage files and directories: create, read, write, move, list, search, and get metadata.
- Use for storing screenshots, baseline images, accessibility reports, and test artifacts.

## 2. Playwright MCP
- Automate browser interactions: click, fill forms, navigate, drag-and-drop, select, hover, type, press keys.
- Take screenshots and generate PDFs of pages.
- Capture accessibility tree snapshots for ARIA/WCAG validation.
- Run UI regression tests by comparing screenshots or DOM snapshots.

## 3. GitHub MCP
- Manage repositories, issues, pull requests, commits, notifications, discussions, gists, and security alerts.
- Use for tracking test results, reporting bugs, and collaborating on code changes.

## 4. Prisma Postgres MCP
- Manage databases, backups, connection strings, and execute SQL queries/schema updates.
- Use for validating data integrity after UI flows or for test data setup/teardown.

## 5. Firecrawl MCP
- Crawl, map, scrape, and extract structured data from websites.
- Use for automated content validation, link checking, and data extraction.

## 6. Python Environment MCP
- Configure Python environments, install packages, and run Python scripts.
- Use for custom test scripts, data analysis, or generating reports.

---

## Example Workflow
1. Use Playwright MCP to run UI flows and take screenshots.
2. Use Filesystem MCP to save screenshots and compare for regression.
3. Use Playwright MCP to validate accessibility tree.
4. Use GitHub MCP to report issues if tests fail.
5. Use Prisma MCP to set up/validate test data.

---

For more details or to run a specific workflow, specify the MCP and task.
