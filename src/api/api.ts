export interface Good{
  categoryTypeId: string,
  id:string,
  img:string,
  label:string,
  description:string,
  price:number,
}
export interface Category {
   type:string,
   label:string,
   id:string,
}

interface RequestOption {
  method?: 'GET' | 'PUT' | 'POST',
  body?:string,
  params?: Record<string, any>
}


const filterEmptyValues = (obj: Record<string, any>): Record<string, any> => {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== undefined || value !== ''));
}

export class Api {
  private endPoints = {
    goods:'/api/goods',
    categories:'/api/categories',
    popularCategories:'/api/popular_categories',
    cart:'/api/cart',
  }
  
  public request = (url: string, { params = {}, ...restOptions }: RequestOption = {}) => {
    const requestOptions = { method: "GET", ...restOptions};

    const queryParams = new URLSearchParams(filterEmptyValues(params)).toString();
    const queryUrl = queryParams ? `${url}?${queryParams}` : url;

    return fetch(queryUrl, requestOptions).then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Connection Error while fetch ${url}`);
    });
  }

  public getGoods = (params: Record<string, any> = {}): Promise<{ items: Good[]; total: number }> => {
    return this.request(this.endPoints.goods, { params });
  }

  public getGoodsByCategory = (categoryTypeIds: string): Promise<{ items: Good[]; total: number }> => {
    return this.getGoods({ categoryTypeIds });
  }

  public getCategories = (): Promise<{ categories:Category []}> => {
    return this.request(this.endPoints.categories)
  }

  public getPopularCategories = (): Promise<{ category: Category; items: Good[] }[]> => {
    return this.request(this.endPoints.popularCategories)
  }

  public getSearch = (text: string): Promise<{ items: Good[]; total: number }> => {
    return this.getGoods({ text });
  }

  public updateCart = (good: Good, count: number) => { 
    console.log({ good });
    return this.request(this.endPoints.cart, { method: 'PUT', body: JSON.stringify({ good, count }) })
  }

  public getGoodFromCart = () => {
    return this.request(this.endPoints.cart);
  }
}
