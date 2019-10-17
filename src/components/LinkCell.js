import React from 'react';
import classnames from 'classnames';

export default function LinkCell({ entry }) {
  return (
    <td>
      <a href={`https://api.rubyonrails.org/${entry.path}`}
        className={classnames({'text-secondary': entry.total === 0})}
        target="_blank"
        rel="noopener noreferrer"
      >{entry.class_name}</a>
    </td>
  );
}
