import React from "react";
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
function List<T extends { id: number }>({ items, onClick }: ListProps<T>) {
  // function List<T extends string | number>({ items, onClick }: ListProps<T>) {

  return (
    <div>
      <h1>list of items</h1>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {JSON.stringify(item)}
          </div>
        );
      })}
    </div>
  );
}

export default List;
