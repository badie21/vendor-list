type TGetVendorListQueryParam = {
  page: number;
  page_size: number;
  lat: 35.754;
  long: 51.328;
};

enum VendorTypeEnum {
  VENDOR = 'VENDOR',
}

type TVendor = {
  title: string;
  logo: string;
  backgroundImage: string;
  rate: number;
  description: string;
  isZFExpress: boolean;
  deliveryFee: number;
  countReview: number;
};

type TVendorItem = {
  type: VendorTypeEnum;
  data: TVendor;
};

type TResponseVendorsListQuery = {
  data: {
    count: number;
    finalResult: TVendorItem[];
  };
};

export type {
  TResponseVendorsListQuery,
  TVendor,
  TVendorItem,
  TGetVendorListQueryParam,
};
