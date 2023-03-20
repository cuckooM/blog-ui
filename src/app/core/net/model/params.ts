import { Sort } from './page';

/**
 * 参数实体
 */
export interface Params {
  [key: string]: any;
}
/**
 * 请求参数中的排序信息
 */
export interface PageRequest {
  /** 当前页数，从 0 开始 */
  page?: number;
  /** 单页数量 */
  size?: number;
  /** 排序信息 */
  sort?: Sort;
}
/**
 * 分页请求参数实体
 */
export interface PageParams extends PageRequest, Params {}
