import React, { FC, useEffect, useRef } from "react";
import { data, columns } from '../test-data.json';
import XMTable from '../../index';
import styes from './index.less';

const Table: FC = () => {
  const ref = useRef(null);
  useEffect(() => {
    const table = new XMTable(ref.current);
    table.setOption(columns);
  }, [1]);
  return <div ref={ref} className={styes.root}></div>;
};

export default Table;