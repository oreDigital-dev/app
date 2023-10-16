import { RootState, store } from '@/stores/store'
import { Root } from 'postcss'
import React from 'react'
import { useSelector } from 'react-redux'

function CreateEmployee() {
    const isCreateEmployeeFormVisible = useSelector(
        (store:RootState) => store.appPages.isCreateEmployeeVisible
    )

  return (
    <div>
        {isCreateEmployeeFormVisible && (
    <div>Create My Employee</div>
        )}
    </div>
  )
}

export default CreateEmployee