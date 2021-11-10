import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'

import { MSG003 } from '@britania-crm/constants/feedbackMessages.constants'
import {
  deleteBuyer,
  postBuyer,
  putBuyer
} from '@britania-crm/services/apis/crmApi/resources/buyer.service'

import { AppActions } from '../app/app.actions'
import {  BuyerTypes } from './buyer.actions'

function* saveBuyer ({
  params, onSuccess = () => {}, onError = () => {}
}) {
  try {
    yield call(postBuyer, params)
    yield call(onSuccess)
    yield put(AppActions.addAlert({ type: 'success', message: MSG003 }))
  } catch (error) {
    if (error.response.status === 403) {
      yield put(AppActions.addAlert({ type: 'error', message: 'Você não possui acesso a este cliente.' }))
    }
  } finally {
    onError()
  }
}

function* editBuyer ({
  id, params, onSuccess = () => {}, onError = () => {}
}) {
  try {
    yield call(putBuyer, id, params)
    yield call(onSuccess)
    yield put(AppActions.addAlert({ type: 'success', message: MSG003 }))
  } catch (error) {
    if (error.response.status === 403) {
      yield put(AppActions.addAlert({ type: 'error', message: 'Você não possui acesso a este cliente.' }))
    }
  } finally {
    onError()
  }
}

function* removeBuyer ({ id }) {
  console.log('tentou chegar aqui')
  try {
    yield call(deleteBuyer, id)
    yield put(AppActions.addAlert({ type: 'success', message: 'Exclusão realizada com sucesso!' }))
  } catch (error) {
    if (error.response.status === 403) {
      yield put(AppActions.addAlert({ type: 'error', message: 'Você não possui acesso a este cliente.' }))
    }
  } finally {
  }
}

export default [
  takeLatest(BuyerTypes.SAVE_BUYER, saveBuyer),
  takeLatest(BuyerTypes.EDIT_BUYER, editBuyer),
  takeLatest(BuyerTypes.REMOVE_BUYER, removeBuyer)
]
