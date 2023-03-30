/**
 * 分页信息
 */
export interface PageInfo {
  /** 总页数，从 0 开始 */
  number: number;
  /** 单页数量 */
  size: number;
  /** 当前页数量 */
  numberOfElements: number;
  /** 总页数 */
  totalPages: number;
  /** 总数量 */
  totalElements: number;
  /** 排序信息 */
  sort?: Sort;
  /** 是否第一页 */
  first: boolean;
  /** 是否最后一页 */
  last: boolean;
  /** 是否有下一页 */
  next: boolean;
  /** 是否有上一页 */
  previous: boolean;
}
/**
 * 空白分页
 */
export class PageInfoEmpty implements PageInfo {
  number: number = 0;
  size: number = 0;
  numberOfElements: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  sort?: Sort | undefined = undefined;
  first: boolean = false;
  last: boolean = false;
  next: boolean = false;
  previous: boolean = false;
}
/**
 * 分页数据
 */
export interface Page<T> extends PageInfo {
  /** 数据列表 */
  content: T[];
}
/**
 * 空白分页数据
 */
export class PageEmpty<T> extends PageInfoEmpty implements Page<T> {
  content: T[] = [];
}
/**
 * 分页排序信息
 */
export interface Sort {
  /** 排序字段信息 */
  orders: Order[];
}
/**
 * 单个属性排序信息
 */
export interface Order {
  /** 顺序方向 */
  direction: Direction;
  /** 属性名称 */
  property: string;
  /** 忽略大小写 */
  ignoreCase?: boolean;
}
/**
 * 排序顺序
 */
export enum Direction {
  /** 正序 */
  ASC,
  /** 逆序 */
  DESC
}
