import React from 'react';
import LinkCell from './LinkCell';
import NumberCell from './NumberCell';

export default function TableRow({ entry }) {
  return (
    <tr>
      <LinkCell entry={entry} />
      <NumberCell number={entry.class_desc} />
      <NumberCell number={entry.method_count} />
      <NumberCell number={entry.method_desc} />
      <NumberCell number={entry.total} />
    </tr>
  );
};
