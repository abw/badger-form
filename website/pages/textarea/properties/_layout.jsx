import React         from 'react'
import TextareaPager from '@/site/Pager/TextareaPager.jsx'
import { Outlet }    from 'react-router-dom'

const TextareaPropertiesLayout = () =>
  <div className="prose flow">
    <h1>Textarea Properties</h1>
    <Outlet/>
    <TextareaPager/>
  </div>

export default TextareaPropertiesLayout