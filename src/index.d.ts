export = useHooks;
export as namespace useHooks;

declare namespace useHooks {
  function useModal(): [];
  function usePage(): [];
  function useResize(): [];
  function useSearch(initParams: object, initRefresh: boolean): [];
}