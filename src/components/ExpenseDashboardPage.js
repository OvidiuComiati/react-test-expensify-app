import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseListItem from './ExpenseListItem'
import ExpensesSummary from './ExpensesSummary'

const ExposeDashBoardPage = () => (
    <div>
    <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExposeDashBoardPage