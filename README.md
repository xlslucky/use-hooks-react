# use-hooks-react

> This project is still in the test phase, use it carefully! 😈

## Install

```shell
$ npm install use-hooks-react
```

## Usage

```js
import { useModal, usePage, useResize, useSearch } from 'use-hooks-react'

...
const [visible, current, openModal, closeModal] = useModal()
const [list, pageInfo, loading, setList, setPageInfo, setLoading] = usePage()
const [attribute] = useResize()
const [refresh, params, setRefresh, setParams] = useSearch()
...
```

## Demo

#### useModal

```jsx
import { Modal, Button } from 'antd'
import { useModal } from 'use-hooks-react'

const InfoModal = props => {
  const { visble, onCancel, onOk, user = {} } = props
  return (
  	<Modal
      visible={visble}
      title="info"
      onCancel={onCancel}
      onOk={onOk}
     >
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
   	</Modal>
  )
}

const UseModalDemo = () => {
  const [visible, current, openModal, closeModal] = useModal()
 
  const handleBtn = () => {
    openModal({
      name: 'Xlslucky'
      age: 24,
    })
  }
 
  return (
  	<>
    	<Button onClick={handleBtn}>
      	Show UserInfo
   		</Button>
    	<InfoModal user={current} onCancel={closeModal} onOk={() => {}} />
    </>
  )
}

export default UseModalDemo
```

#### usePage & useSearch

```jsx
import { Button, Input } from 'antd'
import { useEffect } from 'react'
import { usePage } from 'use-hooks-react'

const UsePageDemo = () => {
  const [list, , loading, setList, , setLoading] = usePage()
  const [refresh, params, setRefresh, setParams] = useSearch({ name: '' }, true)
 
  useEffect(() => {
    const getList = async () => {
      setLoading(true)
      const url = `https://api.github.com/users?xxx=${params.name}`
			const data = await window.fetch(url).then(resp => resp.json())
      setList(data)
      setLoading(false)
      setRefresh(false)
  	}
    
    if (refresh) {
      getList()
    }
  }, [refresh])
  
  const onSubmit = e => {
    e.preventDefault()
    setRefresh(true)
  }
 
  const onChangeInput = name => ({ target }) => {
    setParams({
      [name]: target.value,
    })
  }

  return (
    <>
    	<form onSubmit={onSubmit}>
    		<Input value={params.name} onChange={onChangeInput('name')} />
      	<Button htmlType="submit">Submit</Button>
    	</form>
    	<div>
    		{
          loading ?
            'loading...'
            :
            list.map(item => <div>{item.login}</div>)
      	}
    	</div>
    </>
  )
}

export default UsePageDemo
```

#### useResize

```jsx
import { useResize } from 'use-hooks-react'

const UseResizeDemo = () => {
  const [attribute] = useResize()
  
  return (
  	<>
    	<p>bodyClientWidth: {attribute.bodyClientWidth}</p>
      <p>bodyClientHeight: {attribute.bodyClientHeight}</p>
    	...
    </>
  )
}

export default UseResizeDemo
```

