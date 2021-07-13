export interface DataNews {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  source: {
    id: number | null,
    name: string,
  }
  title: string,
  url: string,
  urlToImage: string,
}

export interface DataLoading {
  id: string,
  loading: boolean,
  data: DataNews[],
  err: any 
}