import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf],
  template: `
    <ng-container *ngIf="post$ | async as post">
      <analog-markdown [content]="post.content" class="blog-post text-white"></analog-markdown>
    </ng-container>
  `,
  styles: `
    ::ng-deep .blog-post {
      max-width: 800px;
      margin: 0 auto;
      padding: 1em;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.6;
      font-size: 16px;
    }

    ::ng-deep .blog-post h1 {
      font-size: 2em;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }

    ::ng-deep .blog-post h2 {
      font-size: 1.75em;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }

    ::ng-deep .blog-post h3 {
      font-size: 1.5em;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }

    ::ng-deep .blog-post h4 {
      font-size: 1.25em;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }

    ::ng-deep .blog-post h5 {
      font-size: 1em;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }

    ::ng-deep .blog-post h6 {
      font-size: 0.875em;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }

    ::ng-deep .blog-post p {
      font-size: 1em;
      margin-bottom: 1em;
    }

    ::ng-deep .blog-post a {
      font-size: 1em;
      color: #3490dc;
      text-decoration: none;
    }

    ::ng-deep .blog-post a:hover {
      text-decoration: underline;
    }

    ::ng-deep .blog-post img {
      max-width: 100%;
      height: auto;
    }

    ::ng-deep .blog-post blockquote {
      font-size: 1em;
      padding: 0 1em;
      color: #6c757d;
      border-left: 0.25em solid #d1d5db;
    }

    ::ng-deep .blog-post code {
      font-size: 0.875em;
      font-family: 'Courier New', Courier, monospace;
      background-color: #f8f9fa;
      padding: 0.2em 0.4em;
      border-radius: 0.2em;
    }

    ::ng-deep .blog-post pre {
      font-size: 0.875em;
      background-color: #f8f9fa;
      padding: 1em;
      overflow-x: auto;
    }
`
})
export default class DocsPostComponent {
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'docs'
  });
}