import { Column } from "./index";

class HeaderTable {
  private _container: HTMLElement | null = null;
  private _data: unknown[] = [];
  private _columns: Column[] = [];
  constructor (container: HTMLElement | null) {
    if (!container) {
      throw new Error('需要指定表格容器');
    }
    this._container = container;

  }
  setOption = (columns: Column[]) => {
    this._columns = columns;
  }
  setData = (data: unknown[]) => {
    this._data = data;
  }
  private _clearTable = () => {

  }
  private _initTable = () => {
    const table = document.createElement('table');
    this._container?.appendChild(table);
    const thead = document.createElement('thead');
    table?.appendChild(thead);
    const data: number[][] = [];
    const tr = document.createElement('tr');
    thead?.appendChild(tr);
  }

  private _getHeaderRowSpan = (column: Column) => {
    if (!column) {
      return 0;
    }
    let num = 1;
    column.children?.forEach((child) => {
      num += this._getHeaderRowSpan(child);
    });
    return num;
  }
  
}

export default HeaderTable;