<div align="center">
    <img src="./public/logo.png" alt="The Wild Oasis" />
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [👋Introduction](#introduction)
- [⚪Tech Stack](#tech-stack)
- [🌟Features](#features)
- [⬇️Installation](#️installation)
- [🔧Usage](#usage)
- [🌐Deployed Application](#deployed-application)

## 👋Introduction

The Wild Oasis App is a web application created with Next.js & React, allowing users to reserve the perfect cabins for a wonderful holiday experience.

## ⚪Tech Stack

- **Frontend**:

  - Next.js 14 (Using App Router)
  - React
  - Tailwind CSS (responsive design)
  - Hero Icons

- **Backend**:

  - Supabase (Database)
  - NextAuth.js with Google Provider (Authentication)

- **Utilities**:
  - Date-fns
  - React-Day-Picker
  - Suspense (for non-blocking async UI)
  - Exporting metadata for SEO improvement

## 🌟Features

- **User Authentication**:

  - Sign in as guest using Google account.
  - Secure log out.

- **Cabin Reservation**:

  - Filter cabins by guest capacity.
  - Reserve available dates after login.
  - Display, edit, or delete previous reservations.

- **User Profile**:
  - Configure profile information.

## ⬇️Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devmaniac1/the-wild-oasis.git
   cd the-wild-oasis
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## 🔧Usage

1. Run the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to [http://localhost:3000/](http://localhost:3000/) to access The Wild Oasis application.

3. Start by creating and account and reserving the cabin.

## 🌐Deployed Application

Check out the live version of The Wild Oasis [here](https://me-wild-oasis.vercel.app/).
