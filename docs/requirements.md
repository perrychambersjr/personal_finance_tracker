💸 MERN Full-Stack Finance Tracker Challenge
1. Project Overview

A dashboard app for tracking personal finances. Users can:

Add/edit/delete income and expenses

Set monthly budgets per category

View spending trends and summaries

Track recurring transactions

Export reports (CSV/PDF)

The goal is to practice full-stack CRUD, authentication, charts, responsive dashboards, and optional API integration.

2. Suggested Pages / Components
Page / Component	Purpose
DashboardPage	Overview of total income, expenses, net savings; charts for trends & category breakdown; budget summary bars
TransactionsPage	Table/list of all transactions; filters by category/date; add/edit/delete modal
BudgetsPage	Set budgets per category; progress bars; alert when over budget
ReportsPage	Export CSV/PDF of transactions; monthly summaries
SettingsPage	Profile management; dark/light mode toggle
AddTransactionModal	Form for adding income/expense with category, amount, date, notes, optional receipt
RecurringTransactionHandler	Cron job / backend handler to auto-add recurring transactions monthly
3. Suggested Figma Layout

High-Level Layout:

Sidebar: Navigation (Dashboard, Transactions, Budgets, Reports, Settings)

Header: Current month, total balance, “Quick Add Transaction” button

Main Content:

Cards Row: Total Income, Total Expenses, Net Savings

Charts Section:

Line chart: Income vs Expenses over time

Pie chart: Category breakdown

Recent Transactions Table

Responsive Design:

Desktop: Sidebar + main content grid

Mobile: Collapsible sidebar, stacked cards, scrollable charts

You can use Figma Community free dashboard templates

and adapt them for this challenge.

4. Tech Stack
Layer	Suggested Tools
Frontend	React (functional components + hooks), Context API or Redux, Tailwind CSS / Chakra UI
Backend	Node.js + Express
Database	MongoDB (via Mongoose)
Authentication	JWT, bcrypt for password hashing
Charts	Recharts, Chart.js, or ApexCharts
Optional	Cloudinary for receipt image uploads, node-cron for recurring transactions
5. Data Models

User

{
  _id: ObjectId,
  name: String,
  email: String,
  passwordHash: String,
  createdAt: Date
}


Transaction

{
  _id: ObjectId,
  userId: ObjectId,
  type: "income" | "expense",
  category: String,
  amount: Number,
  date: Date,
  notes: String,
  receiptUrl: String,       // optional file
  recurring: Boolean,
  recurrenceInterval: "weekly" | "monthly" | "yearly"
}


Budget

{
  _id: ObjectId,
  userId: ObjectId,
  category: String,
  amount: Number,  // budget for the month
  month: Number,
  year: Number
}

6. Backend API Endpoints
Auth

POST /auth/signup → create user

POST /auth/login → login, return JWT

GET /auth/me → get logged-in user

Transactions

GET /transactions?startDate=&endDate=&category= → list transactions with filters

POST /transactions → add transaction

PUT /transactions/:id → edit transaction

DELETE /transactions/:id → delete transaction

Budgets

GET /budgets/:month/:year → get budgets for month

POST /budgets → add budget

PUT /budgets/:id → update budget

DELETE /budgets/:id → delete budget

7. Frontend Features / Flow

Dashboard Page

Fetch summary (total income, expenses, net savings)

Fetch chart data (line chart: daily/monthly trends; pie chart: category breakdown)

Display budget progress bars

Transactions Page

Fetch transaction list

Filter by category, date range

Add/Edit/Delete modal

Optional: upload receipt images

Budgets Page

Fetch current month’s budgets

Update budgets with form

Display progress bars per category

Show alerts if budget exceeded

Reports Page

Generate CSV/PDF from transactions

Optional: download charts or summary data

8. Styling / UI Guide

Color Scheme:

Background: #F9FAFB (light gray)

Cards: white with subtle shadow

Primary color: green (#10B981) for income/savings

Negative / expenses: red (#EF4444)

Typography: Clean, modern font (Inter, Poppins)

Cards: Rounded corners, drop shadows

Charts: Distinct colors for income/expense, labels, tooltips

Responsive:

Desktop: 3–4 cards per row, charts side-by-side

Tablet/Mobile: stacked cards, single-column charts, collapsible sidebar

9. Bonus / Advanced Features

Recurring Transactions: node-cron job to auto-add monthly recurring income/expenses

API Integration: Connect to Plaid or Yodlee to fetch real bank transactions

Notifications: Alert when spending exceeds budget in any category

Theme Toggle: Dark/light mode with Tailwind CSS

Predictive Insights: Suggest future budget adjustments based on trends

Mobile App Companion: Build a React Native version for on-the-go tracking

10. Suggested Roadmap / MVP Steps

Setup MERN stack + authentication (signup/login/logout)

Build Transaction CRUD (add/edit/delete)

Build Dashboard summary cards (total income, expenses, savings)

Add charts: line chart for trends, pie chart for categories

Build Budget CRUD + progress bars

Filter transactions by date/category

Optional: recurring transactions, CSV export, receipt upload

Styling: responsive, clean cards, color-coded charts

Bonus: dark mode, predictive insights, API integration


