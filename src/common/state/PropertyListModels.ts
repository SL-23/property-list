export interface PropertyItem {
  price: string;
  agency: {
    brandingColors: {
      primary: string
    },
    logo: string;
  };
  id: string;
  mainImage: string;
  saved: boolean;
  expired: boolean;
}

export interface PropertyListState {
  empty: boolean;
  ready: boolean;
  // use hashmap
  propertyList: Record<string, PropertyItem>
}