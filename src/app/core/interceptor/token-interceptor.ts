import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token')

  if(token){
    const clonedRequest = req.clone({
      setHeaders : {
        Authorization : `Bearer ${token}`
      }
    })

    //console.log(clonedRequest);
    
    return next(clonedRequest)
  }

  return next(req);
};
