export = useHooks;
export as namespace useHooks;

interface Attribute {
  bodyClientHeight: number
  bodyClientWidth: number
  bodyOffsetHeight: number
  bodyOffsetWidth: number
  bodyScrollHeight: number
  bodyScrollWidth: number
  bodyScrollLeft: number
  bodyScrollTop: number
  screenAvailHeight: number
  screenAvailWidth: number
  screenHeight: number
  screenWidth: number
  windowScreenLeft: number
  windowScreenTop: number
}

interface PageInfo {
  [name: string]: string
}

interface ListItem {
  [name: string]: string
}

interface Params {
  [name: string]: string
}

declare namespace useHooks {
  // visible, current, openModal, closeModal
  function useModal<T>(initItem?: T, initVisible?: boolean): [boolean, T, (item: T) => void, () => void];
  // list, pageInfo, loading, setList, setPageInfo, setLoading
  function usePage(): [Array<ListItem>, PageInfo, boolean, (list: Array<ListItem>) => void, (pageInfo: PageInfo) => void, (loading: boolean) => void];
  // attribute
  function useResize(): [Attribute];
  // refresh, params, setRefresh, setParams
  function useSearch(initParams?: object, initRefresh?: boolean): [boolean, object, (refresh: boolean) => void, (params: Params) => void];
}