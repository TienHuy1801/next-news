export interface DataCovidLoading {
  loading: boolean,
  data: DataCovid[] | any,
  err: any 
}

export interface DataCovid {
  infected: number,
  treated: number,
  recovered: number,
  deceased: number
}