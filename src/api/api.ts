
export interface Good{
  categoryTypeId: string,
  id:string,
  img:string,
  label:string,
  price:number,
}
export interface Category {
   type:string,
   label:string,
   id:string,
}

export class Api {
  apiBase = '/api/goods';
  apiCategory='/api/categories'
  

    request = (url:string, params?:{categoryTypeIds:string}) => {
  const urlParams = new URLSearchParams(params).toString();

  return fetch(`${url}?${urlParams}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('some error');
  });
};
/*getResource = async (url:string):Promise<{categories:Category []}> => {
    const res = await fetch(`${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };*/
  
getGoodsByCategory=(categoryTypeId:string):Promise<{ items: Good[]; total: number }>=>{
  return this.request(this.apiBase,{categoryTypeIds:`${categoryTypeId}`})
}
getCategories=():Promise<{categories:Category []}>=>{
  return this.request(this.apiCategory)
}
}