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

type StateAction<T> = React.Dispatch<React.SetStateAction<T>>

declare namespace useHooks {
  // visible, current, openModal, closeModal
  function useModal<T>(initItem?: T, initVisible?: boolean): [boolean, T, (item?: T) => void, () => void];
  // list, pageInfo, loading, setList, setPageInfo, setLoading
  function usePage<T, U = undefined>(): [T, U, boolean, StateAction<T>, StateAction<U>, StateAction<BooleanConstructor>];
  // attribute
  function useResize(): [Attribute];
  // attribute
  function useBasicResize(): BasicAttribute;
  // refresh, params, setRefresh, setParams
  function useSearch<T>(initParams?: T, initRefresh?: boolean): [boolean, T, StateAction<boolean>, StateAction<T>];
}