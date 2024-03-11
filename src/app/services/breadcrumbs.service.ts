import { Injectable } from '@angular/core';
import { IBreadcrumb } from '../models/iBreadcrumb';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for building breadcrumbs according to the activated route.
 */
export class BreadcrumbsService {

  constructor() { }

  /**
   * Recursively build breadcrumb according to activated route.
   * @param route - The activated route.
   * @param url - The current URL.
   * @param breadcrumbs - The array of breadcrumbs.
   * @returns The array of breadcrumbs.
   */
  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    //If no routeConfig is avalailable we are on the root path
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    // If the route is dynamic route such as ':id', remove it
    if (path) {
      const lastRoutePart = path.split('/').pop();
      if (lastRoutePart) {
        const isDynamicRoute = lastRoutePart.startsWith(':');
        if (isDynamicRoute && !!route.snapshot) {
          const paramName = lastRoutePart.split(':')[1];
          path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
          label = route.snapshot.params[paramName];
        }
      }
    }

    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadcrumb = {
      label: label,
      url: nextUrl,
    };
    // Only adding route with non-empty label
    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      //If we are not on our current path yet,
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}


