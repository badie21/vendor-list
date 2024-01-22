import InfinitScroll from '@/components/infinit-scroll';
import { TVendorItem } from '@/redux/services/vendors/interface';
import { useLazyGetVendorsQuery } from '@/redux/services/vendors/vendorsApi';
import {
  addListItems,
  incrementPage,
  setHasNextPage,
  setLoading,
} from '@/redux/slices/vendor-slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useCallback, useEffect } from 'react';
import VendorCard from './vendor-card';

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
      />
    )
  );
};

export default VendorList;
