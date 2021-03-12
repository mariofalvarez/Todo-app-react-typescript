# Collab Standards

## Consistency
- variables: camelCase
- components: PascalCase
  - funtional components
  - arrow functions

## Data
```json
[
  {
    "id": 1,
    "note": "the task",
    "completed": false
  },
  {}
]
```

## Component
```jsx
import React from 'react'
import './Comp.css'

const Comp = () => {
  return (
    <div>
      <h1>Vercada</h1>
    </div>
  )
}

export default Comp
```

```jsx
// with hooks
import React, { useState , useEffect } from 'react'
import './Comp.css'

const Comp = () => {
  const [count, setCount] = useState(0)
  useEffect(() => { console.log('check state update:',count) }, [ count ])
  const handleClick = (e: any) => { setCount(count + 1) }

  return (
    <div>
      <h2>Hooks Example: <code>{ count }</code></h2>
      <button onClick={ handleClick }>+</button>
    </div>
  )
}

export default Comp
```