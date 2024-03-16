---
title: "How to use this site" 
date: "2024-03-6"
category: "Guides"
mainImage: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Let's get this party started"
---

# How to use this site
What to change and how

## The Main Layout


The main layout of the website is located in the `/layouts/main` directory. This layout serves as the primary template for your pages.

### Understanding the Main Layout

The main layout includes elements that are common across multiple pages such as the header, navigation bar, footer, and so on. It also includes the main `<router-outlet>` where the content of individual pages is displayed based on the current route.

### How to Modify

To modify the main layout, navigate to the `./layouts/main` directory in your project. Inside this directory, you will find the files that make up the layout. This are a single HTML file  `main.component.html`, the css styles and the typescript component.

Open the file you want to modify in your text editor. Make the necessary changes, then save the file. Your changes should now be reflected on the website.

Remember, any changes you make to the main layout will affect tghe whole app. So, be careful when making modifications.

### Example

If you were to change the layout of this website from a stacked layout to a sidebar layout you'd be first changing things here

## The Navbar

The navbar of the website is located in the `./components/navbar` directory. This component is typically used to navigate between different pages of your website.

### Understanding the Navbar Component

The navbar component usually contains a list of links, each corresponding to a different route in your application. It might also include other UI elements such as a logo or a search bar.

### How to Modify

To modify the navbar, navigate to the `./components/navbar` directory in your project. Inside this directory, you should find the files that make up the navbar component. This could be a single HTML file (e.g., `navbar.component.html`), or it could be a combination of HTML, CSS, and JavaScript/TypeScript files.

Open the file you want to modify in your text editor. Make the necessary changes, then save the file. Your changes should now be reflected on the website.

### Adding Links

To add a new link to the navbar, you would typically modify the `navbar.component.html` file. Here's an example of how you might add a new link:

```html
<nav>
  <!-- Existing links -->
  <a routerLink="/existing-page">Existing Page</a>

  <!-- New link -->
  <a routerLink="/new-page">New Page</a>
</nav>
```

In this example, a new link is added that navigates to `/new-page` when clicked. The `routerLink` directive is used to bind the link to a route.

## The Breadcrumbs
The Breadcrumbs component in an Angular application is typically used to provide a navigational aid for users. It allows users to keep track of their locations within the application relative to the application's hierarchical structure.

### Location of the Breadcrumbs Component

The Breadcrumbs component is located in the `./components/breadcrumbs` directory. Inside this directory, you should find the TypeScript file (`breadcrumbs.component.ts`), the HTML template file (`breadcrumbs.component.html`), and the CSS file (`breadcrumbs.component.css`).

### Understanding the Breadcrumbs Component

The Breadcrumbs component uses the `BreadcrumbsService` to get the breadcrumb data. The breadcrumb data is an array of `IBreadcrumb` objects, where each object represents a breadcrumb link.

The `breadcrumbs.component.html` file is the template for the Breadcrumbs component. It uses Angular's structural directives like `*ngFor` to loop over the breadcrumb data and generate the breadcrumb links.

### Modifying the Breadcrumbs Component

To modify the Breadcrumbs component, you can edit the corresponding TypeScript, HTML, or CSS file in your text editor.

For example, if you want to change the appearance of the breadcrumbs, you can modify the CSS rules in the `breadcrumbs.component.css` file.

If you want to change the structure of the breadcrumb links, you can modify the HTML in the `breadcrumbs.component.html` file.

Remember to test your changes thoroughly to ensure that the Breadcrumbs component still works as expected after modification.


## The Footer

The Footer component in an Angular application is typically used to display information at the bottom of the page, such as copyright notices, links to social media profiles, and other site-wide links or information.

### Location of the Footer Component

The Footer component is located in the `./components/footer` directory. Inside this directory, you should find the TypeScript file (`footer.component.ts`), the HTML template file (`footer.component.html`), and the CSS file (`footer.component.css`).

### Understanding the Footer Component

The Footer component contains links to various social media profiles and a copyright notice. The links and the current year are defined in the `footer.component.ts` file and used in the `footer.component.html` file.

The `footer.component.html` file is the template for the Footer component. It uses Angular's interpolation syntax `{{ }}` to bind the data from the TypeScript file to the HTML.

### Modifying the Footer Component

To modify the Footer component, you can edit the corresponding TypeScript, HTML, or CSS file in your text editor.

For example, if you want to change the appearance of the footer, you can modify the CSS rules in the `footer.component.css` file.

If you want to add a new social media link, you can add the link to the TypeScript file and then add the corresponding HTML in the `footer.component.html` file.

To customise the links already in place please modify the variables found in the `footer.component.ts` file.

## The Content
The pages and content of this site are found the the `pages` and in the `content` subdirectories.

The pages directory contains the code to display the page and its content while the content directory contains the actual text and images youy might want to add.

For pages like the `home` page or the `about` page where the content doesn't ghange much it's up to you whether you want to hardcode it into the html or separate it into a markdown filr in the content folder.
If this is a collaborative project it might make more sense to separate the two as editing markdown is easier than code.

In the `about.page.ts` you will notice this snippet

```typescript
export default class AboutPageComponent {
  readonly page$ = injectContent<IPage>({
    customFilename: 'about',
  });
}
```

this is used to load the content page so if you are going to separate the two you will need this snippet adjusted as per need.

You'll also notice in the htmnl template this line

```html
 <ng-container *ngIf="page$ | async as page">
```

that is used to load the page into your template and access its properties.

The properties are defined in the `frontmatter` which is in you .md file and looks like this:

```markdown
---
title: Hi, I'm the owner of this corner of the internet.
headline: Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
data: 
    image: images/portrait.jpg
---
```

This is written in YAML for more info check the [official docs](https://www.redhat.com/en/topics/automation/what-is-yaml#)

Any property added in the front matter should be reflected in the `iPage.ts` file to be accessed safely in the template.

### List pages

List pages work similarly but a few things that have been mentioned in the analog basics guide should be kept in mind:

1. any list of pages like blog posts should be put in a subdirectory called `blog` in this case or anything you deem appropriate
2. on the same level defining a page with the same name such as `blog.page.ts` will define the layout of all the content in the `blog` folder
3. inside the `blog` folder you will find an `index.page.ts`, that corresponds to page listing all of the blog posts it has snippets to load the all the content from the corresponding content folder in this case `content/blog/`
   1. ```typescript
       //load the content and filter it as needed
       export default class BlogListComponent {
            readonly posts = injectContentFiles<IBlogPost>((contentFile) =>
                contentFile.filename.includes('blog/')
            ).filter((post) => !post.attributes.draft
            ).sort((a, b) => (a.attributes.date < b.attributes.date ? -1 : 1));
        }
      ```
    2. ```html
       <!--load in the content for the template-->
       <article *ngFor="let post of posts" class="flex flex-col items-start justify-between">
       ```
4. The `[slug].page.ts` represent a dynamic page built from the content and will display the content of whatever blog post you are loading.

[PREV: Analog Basics](./docs/analog-basics)

[NEXT: Markdown Cheatsheet](./docs/markdown-cheatsheet)
