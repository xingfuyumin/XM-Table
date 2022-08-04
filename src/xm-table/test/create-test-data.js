/**
 * 生成表格测试数据
 * 其中各列类型占比如下
 * number: 30%, float: 30%, string: 30%, 长string: 10%
 */
const fs = require('fs');

const count = Number(process.argv[2] || 10);

const getData = (i) => {
  if (i <= count * 0.1) {
    return Math.floor(Math.random() * 100);
  } else if (i <= count * 0.2) {
    return Math.floor(Math.random() * 10000);
  } else if (i <= count * 0.3) {
    return Math.floor(Math.random() * 1000000);
  } else if (i <= count * 0.4) {
    return Math.random() * 100;
  } else if (i <= count * 0.5) {
    return Math.random() * 10000;
  } else if (i <= count * 0.6) {
    return Math.random() * 1000000;
  } else if (i <= count * 0.7) {
    return new Array(2).fill('字符串').join('');
  } else if (i <= count * 0.8) {
    return new Array(20).fill('字符串').join('');
  } else if (i <= count * 0.9) {
    return new Array(200).fill('字符串').join('');
  } else if (i <= count) {
    return new Array(2000).fill('字符串').join('');
  }
};


const data = [];
const columns = [];
for (let i = 0; i < count; i += 1) {
  columns.push({
    code: `column-${i}`,
    title: `column-${i}`,
    width: 50,
  });
  for (let j = 0; j < count; j += 1) {
    if (!data[j]) {
      data[j] = {};
    }
    data[j][`column-${i}`] = getData(j);
  }
}

fs.writeFileSync('src/xm-table/test/test-data.json', JSON.stringify({ data, columns }, 2));