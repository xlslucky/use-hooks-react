export = useHooks;
export as namespace useHooks;

declare namespace useHooks {
  // visible, current, openModal, closeModal
  function useModal(initItem: any, initVisible: boolean): [];
  // list, pageInfo, loading, setList, setPageInfo, setLoading
  function usePage(): [];
  // attribute
  function useResize(): [];
  // refresh, params, setRefresh, setParams
  function useSearch(initParams: object, initRefresh: boolean): [];
}