//install import use
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({description: 'water bill', amount: 20}))
store.dispatch(addExpense({description: 'gas bill', amount: 1232}))
store.dispatch(addExpense({description: 'rent', amount: 123}))
// store.dispatch(setTextFilter('bill'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'))
// },3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)
console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))

