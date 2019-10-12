const updateTitle = ({ getState, dispatch }) => next => action => {
  const result = next(action);
  const title = getState().entries.filterKey || 'rails-class-table-v2';
  if (document.title !== title) {
    document.title = title;
  }
  return result;
};

export default updateTitle;
