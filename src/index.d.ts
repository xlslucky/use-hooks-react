export = useHooks;
export as namespace useHooks;

declare namespace useHooks {
  function useModal(): void;
  function usePage(): void;
  function useResize(): void;
  function useSearch(initParams: object, initRefresh: boolean): void;
}