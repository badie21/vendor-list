import { useVirtualizer } from '@tanstack/react-virtual';
import { FC, useEffect, useRef } from 'react';

interface Props<T> {
  hasNextPage: boolean;
  allRows: T[];
  fetchNextPage: () => void;
  count: number;
  isFetching: boolean;
  renderItemFn: (row: T) => JSX.Element;
}

const InfinitScroll = <T,>({
  allRows,
  count,
  fetchNextPage,
  hasNextPage,
  isFetching,
  renderItemFn,
}: Props<T>) => {
  const rowVirtualizer = useVirtualizer({
    count: count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 300,
    overscan: 3,
  });

  const parentRef = useRef(null);

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

    console.log(lastItem);

    if (!lastItem) {
      return;
    }

    console.log(
      'here',
      lastItem.index >= allRows.length,
      hasNextPage,
      isFetching
    );

    // return;
    if (lastItem.index >= allRows.length && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetching,
    rowVirtualizer.getVirtualItems(),
  ]);

  return (
    <div
      ref={parentRef}
      className='List'
      style={{
        height: `100vh`,
        width: `100%`,
        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const isLoaderRow = virtualRow.index > allRows.length - 1;
          const item = allRows[virtualRow.index];
          console.log(virtualRow);
          return (
            <div
              key={virtualRow.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {isLoaderRow
                ? hasNextPage
                  ? 'Loading more...'
                  : 'Nothing more to load'
                : renderItemFn(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfinitScroll;
