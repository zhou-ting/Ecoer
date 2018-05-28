/**
 * Created by ZhouTing on 2018-05-28 15:00
 * 此页面时acList页面的model
 */


import {createAction} from '../../utils'

export default {
    namespace: 'acList',
    state: {
        changeText:'Test',
        changeTextA:'AAAAAAAA'
    },
    reducers: {
        updateState(state, {payload}) {
            return {...state, ...payload}
        }
    },
    effects: {

    },
    subscriptions: {
        setup({dispatch}) {
            dispatch({type: 'loadStorage'})
        },
    }
}