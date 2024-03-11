import { injectContent } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { IPage } from '../models/iPage';
import { AsyncPipe, NgIf } from '@angular/common';

export const routeMeta: RouteMeta = {
    title: 'About',
    data: {
      breadcrumb: 'About'
    }
  };

@Component({
  standalone: true,
  imports: [NgIf, AsyncPipe],
  template: `
    <ng-container *ngIf="page$ | async as page">
      <div class="bg-gray-900 bg-gradient-to-b from-indigo-100/20 pb-24 sm:pb-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
              <div
                  class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                  <h1
                      class="max-w-2xl text-4xl font-bold text-white sm:text-6xl lg:col-span-2 xl:col-auto">
                      {{page.attributes.title}}</h1>
                  <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                      <p class="text-lg leading-8 text-white">{{page.attributes.headline}}</p>
                  </div>
                  <img src="{{page.attributes.data.image}}"
                      alt=""
                      class="aspect-[3/4] w-full max-w-lg rounded-2xl object-cover lg:mt-0 mt-10 lg:max-w-none xl:row-span-3 xl:row-end-2">
              </div>
          </div>
      </div>
      </div>
    </ng-container>
  `,
})
export default class AboutPageComponent {
  readonly page$ = injectContent<IPage>({
    customFilename: 'about',
  });
}