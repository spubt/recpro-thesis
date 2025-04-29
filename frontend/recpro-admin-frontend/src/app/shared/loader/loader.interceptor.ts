import {finalize, Observable} from "rxjs";
import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest
} from "@angular/common/http";
import {LoaderService} from "./loader.service";
import {inject} from "@angular/core";

export const loaderInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const loaderService: LoaderService = inject(LoaderService);

  loaderService.show();

  return next.call(null, req).pipe(
    finalize(() => loaderService.hide())
  );
};
