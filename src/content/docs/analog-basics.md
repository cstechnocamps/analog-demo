---
title: "Analog Basics" 
date: "2024-03-5"
category: "Guides"
mainImage: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "The angular static site generator"
---

# Analog Basics

## What is a static site generator

A static site generator is a tool used in web development to produce static HTML pages from templates or components. Unlike traditional websites which are dynamically generated and served by a web server in real-time, static websites are pre-built during a build process. Each page is a separate HTML file, which means they can be served directly to the browser without the need for a database or server-side processing. This results in faster load times, improved security, and easier deployment.

Static site generators combine the benefits of a "static" website (fast, secure, easy to deploy) with the advantages of a "dynamic" CMS (content management system), such as the ability to use templates and dynamically generate content from markdown files or external sources. 

By using a static site generator, developers and content creators can focus on the content and design, while the generator takes care of the technical aspects of building and deploying the website.

AnalogJS is an example of such a tool, specifically designed for Angular applications, allowing developers to easily create and manage static sites with Angular's powerful features.


## Why Analog

AnalogJS stands out as a unique choice for web development, especially for those who are familiar with Angular. It brings the concept of a meta-framework to Angular developers, offering a streamlined and enhanced development experience. Here are a few reasons why AnalogJS is a great choice:

### Simplified Development Process

AnalogJS simplifies the development process by providing a structured framework that includes file-based routing, pre-rendering, and server-side rendering capabilities. This makes it easier to develop complex applications and static sites with less setup and configuration.

### Enhanced Performance

By generating static sites, AnalogJS improves the performance of your applications. Static sites load faster than dynamic sites since the content is pre-built and served directly to the user without any server-side processing. This leads to a better user experience and can also improve your site's SEO.

### Angular Ecosystem Compatibility

AnalogJS leverages the power and flexibility of Angular, making it a seamless choice for developers already familiar with Angular. It integrates well with Angular's ecosystem, allowing you to use existing Angular features, libraries, and tools alongside AnalogJS-specific enhancements.

### Easy Deployment

Static sites generated with AnalogJS can be easily deployed to various hosting services, such as Netlify, Vercel, and GitHub Pages, often with just a few clicks. This ease of deployment makes it straightforward to get your site live and accessible to users worldwide.

### Community and Support

As a framework designed for the Angular community, AnalogJS benefits from the support and contributions of a large and active community of developers. This ensures that the framework is continuously improved and updated, and help is readily available when needed.

Choosing AnalogJS for your web development projects means leveraging the strengths of Angular within a meta-framework designed to enhance productivity, performance, and deployment ease.


## Where to find the Docs

You can find the docs on how to use analog [here](https://analogjs.org)

## Routing

Routing in AnalogJS is straightforward and powerful, leveraging Angular's capabilities alongside file-based routing to simplify page creation and navigation. Here’s how it works:

### File-Based Routing

AnalogJS adopts a file-based routing system similar to other meta-frameworks like Next.js. This means that the structure of your routes (URL paths) is determined by the file structure within your project's `pages` directory.

For example, if you create a file named `about.ts` in the `pages` directory, AnalogJS automatically creates a route to `yourdomain.com/about`. This approach makes it incredibly easy to set up new routes without manually updating a routing configuration.

**Example:**

```plaintext
src/
└── app/
    └── pages/
        ├── index.ts    // Maps to yourdomain.com/
        └── about.ts    // Maps to yourdomain.com/about
```

### Dynamic Routing

AnalogJS also supports dynamic routing, allowing you to create routes that can adapt based on the URL parameters. To define a dynamic route, you simply name your file or directory with square brackets. For instance, `[id].ts` will match any route of the form `/yourdomain.com/some-id`, where `some-id` can be any value.

**Example:**

```plaintext
src/
└── app/
    └── pages/
        └── blog/
            └── [slug].ts  // Matches any route like yourdomain.com/blog/hello-world
```

### Linking Between Pages

To navigate between pages, you use Angular's `<a routerLink="/path-to-link">` directive, ensuring smooth transitions and state management within your AnalogJS application.

**Example:**

```html
<!-- Navigation from the index page to the about page -->
<a routerLink="/about">About Us</a>
```

This system allows for intuitive and efficient routing, making it easier for developers to build and manage their site architecture without the hassle of complex routing configurations.

### Catch-All Routes

For handling wildcard or not-found (404) pages, AnalogJS supports catch-all routes by using the `[...wildcard].ts` filename. This route will match any paths that do not correspond to existing files or directories in your `pages` folder.

**Example:**

```plaintext
src/
└── app/
    └── pages/
        └── [...notfound].ts  // Catches any undefined routes, useful for displaying a custom 404 page
```


## Layouts

While we have implemented a main layout as a component in the layouts folder, AnalogJS allows you to specify layouts for individual pages directly in the file structure. This is achieved through special layout routes.

1. **Defining a Layout Route:** Create a layout component that will serve as the template for other pages. For example, `main-layout.component.ts` could include your application's header, footer, and a `<router-outlet>` for nested routes.

2. **Applying Layouts to Pages:** To use a layout with a specific page, you simply structure your project's directory to reflect this relationship. Place the page component within a directory named after the layout. For instance, having a `blog` directory and on the same leve a `blog.page.ts` file would apply the `blog.page.ts` layout to any of the content in the `blog folder` such as `index.page,ts` and  `[slug].page.ts`.

```plaintext
src/
  app/
    pages/
      blog/
        index.page.ts // shows the list og blog posts
        [slug].page.ts //loads the blog post
    blog.page.ts //defines the /blog route layout
```

### Advantages of Layout-Specific Routing

- **Enhanced Organization:** This approach keeps your application's structure clear and organized, with a direct correlation between the file system and the routing logic.
- **Effortless Layout Management:** Applying different layouts to pages becomes a matter of placing components in the right directories, reducing the need for explicit routing configuration.
- **Scalability:** As your application grows, this system makes it easy to add new routes and layouts without complicating your routing setup.

For more detailed information and examples, refer to the [AnalogJS Routing Overview](https://analogjs.org/docs/features/routing/overview#layout-routes).


## Content

AnalogJS simplifies the process of creating and managing content for your website or application. By utilizing a special `content` folder, you can easily add blog posts, articles, or page content in Markdown format, which AnalogJS then automatically converts into HTML. This feature allows content creators and developers to work more efficiently, focusing on writing and structuring content without worrying about the underlying HTML.

### The `content` Folder Structure

To get started, you'll place your Markdown files within the `content` directory of your AnalogJS project. This directory acts as the central hub for all your textual content, making it easy to organize and manage.

```
project-root/
  ├── content/
  │   ├── blog/
  │   │   ├── my-first-post.md
  │   │   ├── my-second-post.md
  │   │── about.md
  │   |── contact.md
```

In this structure, `blog` ia a subdirectory within `content` that help organize your content by type or purpose. Each Markdown file represents a single piece of content, such as a blog post or a static page.

### Writing Content in Markdown

Markdown is a lightweight markup language that allows you to write content using an easy-to-read, easy-to-write plain text format. Here's a simple example of a blog post written in Markdown:

```markdown
---
title: "My First Post"
date: "2024-03-14"
author: "Jane Doe"
---

# Welcome to My First Blog Post

Welcome to my blog! This is a space where I share my thoughts, insights, and experiences with you. I hope you find my posts interesting and engaging.

## My Journey Begins

Here, I'll talk about my journey into the world of web development, the challenges I've faced, and the triumphs I've celebrated...

```

The front matter (enclosed in `---`) at the beginning of the file provides metadata about the post, such as the title, date, and author, which AnalogJS can use to render the post with the appropriate context.

### How AnalogJS Processes Markdown Content

When you build your AnalogJS project, the framework processes each Markdown file in the `content` folder, converting it into HTML. It also takes the metadata from the front matter and uses it to populate predefined templates or components, creating a dynamic, rendered page for each piece of content.

This system allows for a highly flexible and efficient workflow for adding and updating content, making it ideal for blogs, portfolios, and any site that requires regular content updates.

By leveraging Markdown and the `content` folder, AnalogJS offers a straightforward and powerful solution for content management, allowing developers and content creators alike to focus on what matters most: delivering valuable and engaging content to users.


## Pre Rendering

Pre-rendering is a powerful feature of AnalogJS that generates static HTML files for each page of your application at build time. This process improves the performance and SEO of your site by serving pre-built pages to your users, reducing load times and ensuring content is crawlable by search engines. Here's how to utilize pre-rendering in your AnalogJS project:

### Why Pre-Render Your Pages?

- **Improved Performance:** Pre-rendered pages load faster since the server delivers a static HTML file directly to the browser, without needing to wait for JavaScript to render the page content.
- **SEO Benefits:** Search engines can easily index pre-rendered pages, improving your site's visibility and ranking.
- **Reliability:** Pre-rendering reduces the reliance on client-side JavaScript, making your site more accessible to users with JavaScript disabled or on slow connections.

### How to Implement Pre-Rendering

AnalogJS makes pre-rendering straightforward. Here's a simplified overview of the steps involved:

1. **Configure Your Routes for Pre-Rendering:** Ensure that your AnalogJS project's routing is correctly set up. AnalogJS will pre-render pages based on your routing configuration in the file `vite.config.ts`.

```typescript
//To prerender pages, use the prerender property to configure routes to be rendered at build time. The routes to be prerendered can be provided asynchronously also.

import { defineConfig } from 'vite';
import analog, { type PrerenderContentFile } from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    analog({
      prerender: {
        routes: async () => [
          '/',
          '/blog',
          {
            contentDir: 'src/content/blog',
            transform: (file: PrerenderContentFile) => {
              // do not include files marked as draft in frontmatter
              if (file.attributes.draft) {
                return false;
              }
              // use the slug from frontmatter if defined, otherwise use the files basename
              const slug = file.attributes.slug || file.name;
              return `/blog/${slug}`;
            },
          },
        ],
      },
    }),
  ],
}));
```

2. **Deploy Your Pre-Rendered Site:** After the build process completes, deploy your site to your hosting provider. Your pre-rendered pages are now static HTML files, ready to be served to users.

### Best Practices for Pre-Rendering

- **Dynamic Content:** For content that changes frequently, consider using a hybrid approach with pre-rendering for static content and client-side rendering or server-side rendering (SSR) for dynamic content.
- **Fallback Pages:** Ensure you have a fallback mechanism for routes not pre-rendered, such as a generic 404 page.
- **Optimize Assets:** Along with pre-rendering, optimize your images, CSS, and JavaScript to further improve load times and performance.


## SEO

In AnalogJS, you can enhance your routes with additional metadata using the `RouteMeta` type. This allows for specifying page titles, guards, resolvers, providers, and more directly within your route configurations. You can also create redirect routes by adding `redirectTo` and `pathMatch` properties to your route metadata. Furthermore, AnalogJS supports adding meta tags, including Open Graph tags, to your routes for SEO and social media optimization, making your content more shareable and discoverable. For detailed examples and a deeper understanding, visit the [AnalogJS Route Metadata documentation](https://analogjs.org/docs/features/routing/metadata).

## Building

Node.js deployment is the default Analog output preset for production builds.

When running npm run build with the default preset, the result will be an entry point that launches a ready-to-run Node server.

To start up the standalone server, run:

```bash
$ node dist/analog/server/index.mjs
```
Listening on http://localhost:3000



[PREV: Core Concepts](./docs/core-concepts)

[NEXT: How to Use this Site](./docs/how-to-use-this-site)
