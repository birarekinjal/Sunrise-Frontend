export interface IApiObject<T>{
  data?: T,
}

export type apiHooksValues = {
  accessPath?:string,
  apiFunction?:any,
  apiParams?:any,
  dependencyArray?:any,
  apiCallCondition?: boolean,
  defaultResponseValue ?:any,
  hideErrorMessage?:boolean,
  errorMessage?:string,
  showSuccessMessage?:string,
  successMessage?:string
};
