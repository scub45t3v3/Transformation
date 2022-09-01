interface Iopt {
  flatten: boolean;
}

declare function toArray(value?: any, opt?: Iopt): any[];

export default toArray;