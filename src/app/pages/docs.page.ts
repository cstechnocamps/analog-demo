import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const routeMeta: RouteMeta = {
    title: 'Docs',
    data: {
        breadcrumb: 'Docs'
    }
};

@Component({
    standalone: true,
    imports: [RouterOutlet],
    template: `
    <div class="bg-gray-900 bg-gradient-to-b from-indigo-100/20 ">
        <div class="py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-3xl font-bold text-white sm:text-4xl">This website's docs</h2>
                    <p class="mt-2 text-lg leading-8 text-white">Learn how to use and customise this website to your liking.</p>
                </div>
                    <router-outlet />
            </div>
        </div>
    </div>
  `,
})
export default class DocsPage { } 