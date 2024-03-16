---
title: "Typescript Cheatsheet" 
date: "2024-03-5"
category: "Guides"
mainImage: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "A Typescript cheatsheet"
---

# TypeScript Cheatsheet

## Basic Types

```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
```

## Array

```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];  // generic array type
```

## Tuple

```typescript
let x: [string, number];
x = ["hello", 10];  // OK
```

## Enum

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

## Any

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
```

## Void

```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

## Null and Undefined

```typescript
let u: undefined = undefined;
let n: null = null;
```

## Never

```typescript
function error(message: string): never {
    throw new Error(message);
}
```

## Object

```typescript
declare function create(o: object | null): void;
create({ prop: 0 });  // OK
```

## Type assertions

```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
```

## Interfaces

```typescript
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
```

## Classes

```typescript
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

## Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

Remember to check out the [TypeScript documentation](https://www.typescriptlang.org/docs/) for a full list of features and how to use them.
