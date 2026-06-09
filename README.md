# My Blog

![App Preview](https://imgix.cosmicjs.com/2d3f5330-641d-11f1-ac8c-330ac011d850-autopilot-photo-1526772662000-3f88f10405ff-1781021190104.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive creative blog and portfolio built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Browse posts, explore categories, and discover the authors behind the content.

## Features

- 📝 **Posts** with featured images, rich content, tags, authors, and categories
- 👤 **Author Profiles** with avatars, bios, and their published posts
- 🏷️ **Category Pages** with filtered post listings
- 🎨 **Modern, Responsive Design** with smooth hover effects and clean typography
- ⚡ **Server Components** for fast, SEO-friendly data fetching
- 🖼️ **Optimized Images** via imgix
- 🔍 **Dynamic Routing** for posts, authors, and categories

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a2839d27da35436b10ea0a8&clone_repository=6a283a917da35436b10ea0dc)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic SDK](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a bucket containing `authors`, `categories`, and `posts`

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set the following environment variables (provided automatically when cloned in Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Cosmic SDK Examples

```typescript
// Fetch all posts with related authors and categories
const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const posts = response.objects

// Fetch a single post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post' })
  .depth(1)
```

## Cosmic CMS Integration

This application reads content directly from your Cosmic bucket using the [Cosmic SDK](https://www.cosmicjs.com/docs). It leverages three object types:

- **posts** — title, content, featured_image, tags, author (object relationship), category (object relationship)
- **authors** — name, bio, avatar, email
- **categories** — name, description

All data fetching happens server-side in Server Components for performance and security.

## Deployment Options

- **Vercel** — Connect your repo and add the environment variables in the dashboard
- **Netlify** — Deploy with the Next.js runtime and set environment variables

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform.

<!-- README_END -->