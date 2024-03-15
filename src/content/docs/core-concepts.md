---
title: "Core Concepts" 
date: "2024-03-4"
category: "Guides"
mainImage: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "The basic theory behind this site and its technology"
---

# Core Concepts
The basics on this project and how it works

## What is HTML?

[Official Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)

HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It is the backbone of any website and communicates to the browser how to structure the web content.

HTML documents are made up of HTML elements. Each element is represented by a tag and can have attributes that define its additional properties.

### Basic Syntax

An HTML document starts with a `<!DOCTYPE html>` declaration that helps with browser compatibility. The HTML content is then wrapped within `<html>` tags.

The `<head>` element contains meta-information about the document, such as its title, which is defined within the `<title>` tags.

The `<body>` element contains the main content of the HTML document, such as text, images, and links.

Here's a basic example of an HTML document:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://example.com">This is a link</a>
  </body>
</html>
```

In this example, `<h1>` is a heading element, `<p>` is a paragraph element, and `<a>` is a link element. The `href` attribute in the `<a>` tag defines the URL the link goes to.

### HTML Elements, IDs, and Classes

HTML elements can have attributes that provide additional information about the element. Two of the most common attributes are `id` and `class`.

The `id` attribute provides a unique identifier for an element. This can be used to target a specific element with CSS or JavaScript. An `id` should be unique within a page.

The `class` attribute is used to specify one or more class names for an element. Unlike `id`, the `class` attribute can be shared among multiple elements. This is useful for applying the same style to multiple elements.

Here's an example:

```html
<div id="header" class="container">
  <h1 class="title">Welcome to My Website</h1>
  <p class="description">This is a paragraph of text.</p>
</div>
```

In this example, the `div` element has an `id` of "header" and a `class` of "container". The `h1` and `p` elements both have a `class` of "title" and "description", respectively.

### HTML Lists

HTML provides tags for creating lists. An unordered list starts with the `<ul>` tag and each item is wrapped in an `<li>` tag. An ordered list starts with the `<ol>` tag and also wraps each item in an `<li>` tag.

Here's an example of an unordered list:

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

And here's an example of an ordered list:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

## What is CSS

[Official Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)

CSS, or Cascading Style Sheets, is a stylesheet language used to describe the look and formatting of a document written in HTML. CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, and many other aspects of a webpage's appearance.

### Basic Syntax

A CSS rule-set consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.

Here's a basic example of a CSS rule-set:

```css
h1 {
  color: blue;
  font-size: 20px;
}
```

In this example, `h1` is the selector, `color` and `font-size` are properties, and `blue` and `20px` are the corresponding values.

## CSS Selectors

CSS selectors are used to select the HTML element(s) you want to style. There are several types of selectors in CSS:

- **Element Selector**: Selects HTML elements based on the element name. For example, `p { color: red; }` will apply the style to all `<p>` elements.

- **Id Selector**: Selects the HTML element with a specific id. It is written with a hash character (`#`), followed by the id of the element. For example, `#myId { color: blue; }` will apply the style to the element with id="myId".

- **Class Selector**: Selects HTML elements with a specific class. It is written with a period (`.`), followed by the class name. For example, `.myClass { font-size: 20px; }` will apply the style to all elements with class="myClass".

Here's an example that uses all three types of selectors:

```css
p {
  color: red;
}

#myId {
  color: blue;
}

.myClass {
  font-size: 20px;
}
```

### Commonly Used CSS Properties

Here are some commonly used CSS properties:

- **color**: Sets the color of text.

- **background-color**: Sets the background color of an element.

- **font-size**: Sets the size of the font.

- **font-family**: Specifies the font for text.

- **text-align**: Specifies the horizontal alignment of text.

- **margin**: Specifies the space around an element.

- **padding**: Specifies the space between an element's content and its border.

- **border**: Sets the border around an element.

- **width** and **height**: Set the width and height of an element.

- **display**: Specifies the display behavior of an element.

Here's an example that uses these properties:

```css
p {
  color: red;
  background-color: yellow;
  font-size: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  width: 200px;
  height: 50px;
  display: block;
}
```

## What is Tailwind CSS?

[Tailwind CSS](https://tailwindcss.com/docs) is a utility-first CSS framework that provides low-level utility classes to build custom designs. Instead of pre-designed components, Tailwind allows you to construct your design directly in your markup.

## Basic Usage

Tailwind CSS uses utility classes to style elements. These classes are added to your HTML elements in the class attribute.

Here's a basic example:

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

In this example, `p-6` is a padding utility, `max-w-sm` sets the maximum width, `mx-auto` centers the element horizontally, `bg-white` sets the background color, and so on.

## Commonly Used Utilities

Here are some commonly used utilities in Tailwind CSS:

- **Spacing**: Tailwind provides a set of spacing and sizing utilities (like `p-6` for padding and `mx-auto` for horizontal centering).

- **Colors**: You can set text color with utilities like `text-white` and background color with utilities like `bg-red-500`.

- **Typography**: Tailwind provides utilities for typography, like `text-center` for center-aligned text and `font-bold` for bold text.

- **Flexbox**: Tailwind provides utilities for working with flexbox, like `flex` to create a flex container and `items-center` to center items vertically.

- **Grid**: Tailwind provides utilities for working with CSS Grid, like `grid` to create a grid container and `grid-cols-3` to create a 3-column grid.

Remember to check out the [Tailwind CSS documentation](https://tailwindcss.com/docs) for a full list of utilities and how to use them.


This block of code can be copied and pasted into your Markdown file. It provides a brief introduction to Tailwind CSS, including a link to the official documentation and examples of commonly used utilities.

## What is Typescript

[Official Docs](https://www.typescriptlang.org/)


[TypeScript](https://www.typescriptlang.org/docs/) is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional types, classes, and modules to JavaScript, and supports tools for large-scale JavaScript applications.

### Basic Syntax

TypeScript syntax is a superset of ECMAScript 2015 (ES6) syntax. Any JavaScript code is also a TypeScript code. TypeScript adds type annotations to enable static type checking at compile time.

Here's a basic example:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

greet('Alice');  // OK
greet(123);  // Error: argument of type '123' is not assignable to parameter of type 'string'
```

In this example, `name` is a parameter of type `string`, and `greet` is a function that returns a string.

### Commonly Used Features

TypeScript, being a superset of JavaScript, includes all the built-in functions and utilities of JavaScript. In addition, TypeScript provides several features for type checking and manipulation.

Here are some commonly used TypeScript functions and utilities:

- **Type Annotations**: TypeScript allows you to explicitly specify the type of a variable using type annotations. For example:

```typescript
let name: string = 'Alice';
```

- **Interfaces**: Interfaces are a powerful way to define contracts within your code. They are used to type-check whether an object fits a certain structure. For example:

```typescript
interface Person {
  name: string;
  age: number;
}

let bob: Person = { name: 'Bob', age: 25 };
```

- **Type Guards**: TypeScript has several ways to test the type of a variable at runtime, known as type guards. For example, the `instanceof` and `typeof` operators:

```typescript
if (variable instanceof SomeClass) { ... }
if (typeof variable === 'string') { ... }
```

- **Enums**: Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. For example:

```typescript
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
```

- **Generics**: Generics provide a way to make components work with any data type and not restrict to one data type. For example:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
```

Remember to check out the [TypeScript documentation](https://www.typescriptlang.org/docs/) for a full list of features and how to use them.


## What is Angular


## What are components
## What are Static Site Generators 
## What is Analog

[PREV: Getting Started](./docs/getting-started)

[NEXT: Analog Basics](./docs/analog-basics)
