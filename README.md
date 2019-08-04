# use-hooks-react

> This project is still in the test phase, use it carefully! 😈

## Install

```shell
$ npm install use-hooks-react
```

## Usage

```js
import {
  useModal,
	usePage,
	useResize,
	useSearch,
} from 'use-hooks-react'

...
const [visible, current, openModal, closeModal] = useModal()
const [list, pageInfo, loading, setList, setPageInfo, setLoading] = usePage()
const [attribute] = useResize()
const [refresh, params, setRefresh, setParams] = useSearch()
...
```



