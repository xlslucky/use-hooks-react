export = useHooks;
export as namespace useHooks;

interface Attribute {
  bodyClientWidth: number
  bodyClientHeight: number
  bodyOffsetWidth: number
  bodyOffsetHeight: number
  bodyScrollWidth: number
  bodyScrollHeight: number
  bodyScrollTop: number
  bodyScrollLeft: number
  windowScreenTop: number
  windowScreenLeft: number
  screenHeight: number
  screenWidth: number
  screenAvailHeight: number
  screenAvailWidth: number
}

declare namespace useHooks {
  // visible, current, openModal, closeModal
  function useModal(initItem?: any, initVisible?: boolean): [boolean, any, Function, Function];
  // list, pageInfo, loading, setList, setPageInfo, setLoading
  function usePage(): [Array<any>, any, boolean, Function, Function, Function];
  // attribute
  function useResize(): [Attribute];
  // refresh, params, setRefresh, setParams
  function useSearch(initParams?: object, initRefresh?: boolean): [boolean, any, Function, Function];
}