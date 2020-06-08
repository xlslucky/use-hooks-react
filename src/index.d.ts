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

declare namespace useHooks {
  // visible, current, openModal, closeModal
  function useModal(initItem?: any, initVisible?: boolean): [boolean, any, any, any];
  // list, pageInfo, loading, setList, setPageInfo, setLoading
  function usePage(): [Array<any>, object, boolean, any, any, any];
  // attribute
  function useResize(): [Attribute];
  // refresh, params, setRefresh, setParams
  function useSearch(initParams: object, initRefresh: boolean): [boolean, object, any, any];
}