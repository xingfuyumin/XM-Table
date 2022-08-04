import BodyTable from "./body-table";
import HeaderTable from "./header-table";

export type Column = {
  title: string,
  code: string,
  width: number | string | null,
  children?: Column[],
};


class XMTable {
  private _container: HTMLElement | null = null;
  private _data: unknown[] = [];
  private _columns: Column[] = [];
  private _bodyTable: BodyTable | undefined;
  private _headerTable: HeaderTable | undefined;
  private _bodyTableContainer: HTMLElement | null | undefined;
  private _headerTableContainer: HTMLElement | null | undefined;

  constructor (container: HTMLElement | null) {
    if (!container) {
      throw new Error('需要指定表格容器');
    }
    this._container = container;
  }
  setOption = (_columns: Column[]) => {
    this._clearBodyTable();
    this._initBodyTable();
    this._clearHeaderTable();
    this._initHeaderTable();
    this._columns = _columns;
    this._headerTable?.setOption(_columns);
  }
  setData = (data: unknown[]) => {
    this._data = data;
    this._headerTable?.setData(data);
  }
  private _initBodyTable = () => {
    if (!this._container) {
      return;
    }
    if (!this._bodyTableContainer) {
      this._bodyTableContainer = document.createElement('div');
      this._container.appendChild(this._bodyTableContainer);
    }
    if (!this._bodyTable) {
      this._bodyTable = new BodyTable(this._bodyTableContainer);
    }
  }
  private _clearBodyTable = () => {
    if (!this._container || !this._bodyTableContainer) {
      return;
    }
    this._container.removeChild(this._bodyTableContainer);
  }
  private _initHeaderTable = () => {
    if (!this._container) {
      return;
    }
    if (!this._headerTableContainer) {
      this._headerTableContainer = document.createElement('div');
      this._container.appendChild(this._headerTableContainer);
    }
    if (!this._headerTable) {
      this._headerTable = new HeaderTable(this._headerTableContainer);
    }
  }
  private _clearHeaderTable = () => {
    if (!this._container || !this._headerTableContainer) {
      return;
    }
    this._container.removeChild(this._headerTableContainer);
  }
  
}

export default XMTable;