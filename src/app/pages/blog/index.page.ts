import { injectContentFiles } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IBlogPost } from 'src/app/models/iBlogPost';

@Component({
  standalone: true,
  imports: [RouterLink, DatePipe, NgFor],
  template: `
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article *ngFor="let post of posts" class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <a [routerLink]="['/blog', post.slug]">
                <img src="{{post.attributes.mainImage}}" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
            </a>
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-white">{{post.attributes.date | date: "short" }}</time>
              <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-primary-500 hover:bg-gray-100">{{post.attributes.category}}</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                <a [routerLink]="['/blog', post.slug]">
                  <span class="absolute inset-0"></span>
                  {{post.attributes.title}}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-white">{{post.attributes.description}}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img src="{{post.attributes.authorImage}}" alt="" class="h-10 w-10 rounded-full bg-gray-100">
              <div class="text-sm leading-6">
                <p class="font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    {{post.attributes.authorName}}
                  </a>
                </p>
                <p class="text-white">{{post.attributes.authorRole}}</p>
              </div>
            </div>
          </div>
        </article>
  
        <!-- More posts... -->
      </div>
  `,
})
export default class BlogListComponent {
  readonly posts = injectContentFiles<IBlogPost>((contentFile) =>
    contentFile.filename.includes('blog/')
  ).sort((a, b) => (a.attributes.date < b.attributes.date ? -1 : 1));
}