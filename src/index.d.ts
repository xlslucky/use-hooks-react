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

interface BasicAttribute {
  bodyClientHeight: number
  bodyClientWidth: number
  bodyOffsetHeight: number
  bodyOffsetWidth: number
}

declare namespace useHooks {
  // visible, current, openModal, closeModal
  function useModal<T>(initItem?: T, initVisible?: boolean): [boolean, T, (item?: T) => void, () => void];
  // list, pageInfo, loading, setList, setPageInfo, setLoading
  function usePage(): [Array<Record<string, string>>, Record<string, string>, boolean, (list: Array<Record<string, string>>) => void, (pageInfo: Record<string, string>) => void, (loading: boolean) => void];
  // attribute
  function useResize(): [Attribute];
  // attribute
  function useBasicResize(): BasicAttribute;
  // refresh, params, setRefresh, setParams
  function useSearch<T>(initParams?: T, initRefresh?: boolean): [boolean, object, (refresh: boolean) => void, (params: T) => void];
}