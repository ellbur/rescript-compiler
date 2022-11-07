type t<'a> = {
  url: string,
  method: Warp_Types_Method.t,
  timeout: int,
  async: bool,
  withCredentials: bool,
  username: option<string>,
  password: option<string>,
  overrideMimeType: option<string>,
  queryString: option<string>,
  formData: option<string>,
  headers: list<(string, string)>,
  responseType: 'a,
  requestType: string,
  onLoad: option<Belt.Result.t<'a, string> => unit>,
  onLoadWithStatusCode: option<(Belt.Result.t<'a, string>, int) => unit>,
  onProgess: option<Dom.progressEvent => unit>,
  onAbort: option<unit => unit>,
}