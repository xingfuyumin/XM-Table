import { Column } from "./index";

class BodyTable {
  private _container: HTMLElement | null = null;
  private _data: unknown[] = [];
  private _columns: Column[] = [];
  constructor (container: HTMLElement | null) {
    if (!container) {
      throw new Error('需要指定表格容器');
    }
    this._container = container;

  }
  setOption = (option: Column[]) => {

  }
  setData = (data: unknown[]) => {

  }
  
}

export default BodyTable;