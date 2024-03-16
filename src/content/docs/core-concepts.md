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

### Basic Usage

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

### Commonly Used Utilities

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


[Angular](https://angular.io/docs) is a platform for building web applications. It provides a way to organize your application using components and modules, and it has powerful features like two-way data binding, dependency injection, and more.

### Basic Syntax

An Angular application is made up of modules and components. A module is a way to group directives, services, and components. The component controls a patch of screen called a view.

Here's a basic example of an Angular component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>`,
})
export class AppComponent {
  title = 'Hello, Angular!';
}
```

In this example, `AppComponent` is a component that displays a title. The `@Component` decorator provides metadata about the component, including its selector (used to identify the component in a template) and its template (the HTML that defines the component's view).

### Commonly Used Features

Here are some commonly used features in Angular:

- **Components**: Components are the building blocks of Angular applications. They control a patch of screen called a view.

- **Directives**: Directives are classes that add additional behavior to elements in your Angular templates.

- **Services and Dependency Injection**: Services are a great way to share information among classes that don't know each other. Dependency Injection (DI) lets you keep your component classes lean and efficient.

- **Routing**: The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your app.

- **Forms**: Angular provides two ways to handle user input through forms: reactive and template-driven. Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.

- **HTTP Client**: Angular's `HttpClient` module provides methods for HTTP requests. This allows your application to communicate with backend services over HTTP.

Remember to check out the [Angular documentation](https://angular.io/docs) for a full list of features and how to use them.


This block of code can be copied and pasted into your Markdown file. It provides a brief introduction to Angular, including a link to the official documentation and examples of commonly used features.

## What are components

In Angular, components are the main way you build and specify elements and logic on the page. Through the use of selectors, components become the building blocks of your Angular application as they encapsulate the data, template, and logic that is needed on the page.

## Basic Syntax

A component in Angular is a class that is decorated with the `@Component` decorator. The `@Component` decorator allows you to specify the metadata for the component, such as the selector, template, and style URLs.

Here's a basic example of an Angular component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  title = 'Hello, Angular!';
}
```

In this example, `HelloWorldComponent` is a component that displays a title. The `@Component` decorator provides metadata about the component, including its selector (used to identify the component in a template), templateUrl (the location of the component's template file), and styleUrls (the location of the component's styles).

### Component Interaction

Components can interact with each other in various ways, including:

- **Input and Output**: Parent components can interact with their child components by sending inputs and listening for outputs. Inputs are set using square brackets `[]`, and outputs are listened to using parentheses `()`.

- **Via Services**: Components can also interact with each other through services. A service is a class that can be shared across components, and it can be used to share data and functionality.

- **Via Router**: Components can be linked to specific routes using the Angular Router, and parameters can be passed via the route to configure the component.

## What are services

In Angular, a service is a class with a specific purpose. Services are commonly used to share data and functionality across components. The main objective of a service is to organize and share business logic, models, or data and functions with different components of an enterprise application.

### Basic Syntax

A service in Angular is a class that is decorated with the `@Injectable` decorator. The `@Injectable` decorator tells Angular that this service might itself have injected dependencies.

Here's a basic example of an Angular service:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = 'Hello, Angular!';
}
```

In this example, `DataService` is a service that provides a data string. The `@Injectable` decorator provides metadata about the service, including where it should be provided.

### Using Services

To use a service, you would typically inject it into a component using Angular's dependency injection system. Here's an example of a component using the `DataService`:

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-hello-world',
  template: `<h1>{{title}}</h1>`,
})
export class HelloWorldComponent {
  title: string;

  constructor(private dataService: DataService) {
    this.title = this.dataService.data;
  }
}
```

In this example, `DataService` is injected into `HelloWorldComponent` through the constructor. The component can then use the service to get the data it needs.

Remember to check out the [Angular documentation](https://angular.io/guide/architecture-services) for a full overview of services and how to use them.

This block of code can be copied and pasted into your Markdown file. It provides a brief introduction to services in Angular, including a link to the official documentation and examples of how to create and use services.

## What are models and interfaces


In TypeScript, interfaces and classes can both play the role of naming data types. They can be used to define the shape of an object or function.

In Angular, models are typically used to define data structures for domain objects. Interfaces can be used to define contracts for complex objects, enforce that a class meets a contract, or just to have a type to work with that isn't tied to an implementation.

### Basic Syntax

Here's a basic example of a TypeScript interface:

```typescript
interface Person {
  name: string;
  age: number;
}
```

In this example, `Person` is an interface that describes an object that has a `name` of type `string` and an `age` of type `number`.

Here's a basic example of a TypeScript class (often used as a model in Angular):

```typescript
class Person {
  constructor(public name: string, public age: number) {}
}
```

In this example, `Person` is a class with a constructor that initializes `name` and `age`.

### Using Models and Interfaces

To use a model or interface, you would typically define a variable or function parameter with the type of the model or interface. Here's an example:

```typescript
let bob: Person = { name: 'Bob', age: 25 };
```

In this example, `bob` is a variable of type `Person`. The object assigned to `bob` must conform to the structure defined by the `Person` interface or class.

Remember to check out the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/interfaces.html) and the [Angular Style Guide](https://angular.io/guide/styleguide#interfaces) for more information on using models and interfaces.

## What are assets

In an Angular project, the `assets` folder is a special directory where you can put static assets like images, icons, stylesheets, scripts, or any other static files that your application needs.

These files are served directly by the web server and are not processed by Angular. This means that they retain their original file name and are not renamed or hashed like the rest of your Angular application files.

You can reference these files in your application code using a relative path. For example, if you have an image called `logo.png` in your `assets` folder, you can display it in your Angular application like this:

```html
<img src="assets/logo.png" alt="Logo">
```

Remember to include the `assets` folder or any subdirectories in the `assets` array of the `angular.json` file so that they are included when the project is built:

```json
"assets": [
  "src/favicon.ico",
  "src/assets"
],
```

This ensures that the static assets are copied to the distribution (`dist`) folder when you build your Angular application.


[PREV: Getting Started](./docs/getting-started)

[NEXT: Analog Basics](./docs/analog-basics)
