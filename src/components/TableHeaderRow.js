import React from 'react';
import TableHeaderCell from './TableHeaderCell';

export default function TableHeaderRow() {
  return (
    <tr>
      <TableHeaderCell label="クラス名" sortKey="class_name" isNumber={false} />
      <TableHeaderCell label="クラス概要" sortKey="class_desc" isNumber={true} width="8em" />
      <TableHeaderCell label="メソッド数" sortKey="method_count" isNumber={true} width="8em" />
      <TableHeaderCell label="メソッド概要" sortKey="method_desc" isNumber={true} width="9em" />
      <TableHeaderCell label="合計" sortKey="total" isNumber={true} width="5em" />
    </tr>
  );
};
