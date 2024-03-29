import { useCallback, useEffect } from 'react';

import InfinitScroll from '@/components/infinit-scroll';

import VendorCard from './vendor-card';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import {
  addListItems,
  incrementPage,
  setHasNextPage,
  setLoading,
} from '@/redux/slices/vendor-slice';
import { useLazyGetVendorsQuery } from '@/redux/services/vendors/vendorsApi';

import { TVendorItem } from '@/redux/services/vendors/interface';

const VendorList = () => {
  const dispatch = useAppDispatch();
  const { currentPage, isLoading, hasNextPage, list } = useAppSelector(
    (state) => state.vendorList
  );
  const [fetchVendors, { data: currentData, isFetching }] =
    useLazyGetVendorsQuery();

  const fetchNextpage = useCallback(() => {
    dispatch(setLoading(true));

    fetchVendors({
      lat: 35.754,
      long: 51.328,
      page: currentPage + 1,
      page_size: 10,
    })
      .unwrap()
      .then((res) => {
        if (res.data?.finalResult) {
          const hasMorePage =
            list.length + res.data.finalResult.length < res.data.count;
          dispatch(setHasNextPage(hasMorePage));
          dispatch(addListItems(res.data.finalResult));
          dispatch(setLoading(false));
          dispatch(incrementPage());
        }
      });
  }, [currentPage, dispatch, fetchVendors, list.length]);

  useEffect(() => {
    fetchNextpage();
  }, []);

  const renderCardHandler = (item: TVendorItem) => <VendorCard card={item} />;

  return (
    currentData && (
      <InfinitScroll
        count={currentData.data.count}
        hasNextPage={hasNextPage}
        allRows={list}
        isFetching={isLoading || isFetching}
        fetchNextPage={fetchNextpage}
        renderItemFn={renderCardHandler}
        cardSize={250}
      />
    )
  );
};

export default VendorList;
