import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest
} from "@angular/common/http";
import {filter, first, Observable, switchMap} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService: AuthService = inject(AuthService);


  return authService.getCurrentUserObservable().pipe(
    filter(user => !!user.id),
    first(),
    switchMap(user => {
      const cloned = req.clone({
        setHeaders: {
          'X-User-ID': user.id!,
        },
      });
      return next(cloned);
    })
  );

  // let user: User = authService.getCurrentUser();
  //
  // if (user) {
  //   const cloned = req.clone({
  //     setHeaders: {
  //       'X-User-ID': user.id,
  //     },
  //   });
  //   return next(cloned);
  // } else {
  //   return next(req);
  // }
};
