export interface ResponseMain<T> {
    data: T,
    message: string,
    page: number,
    pageSize: number,
    success: boolean,
    totalCount: number,
    totalPage: number
}
