import React, { forwardRef } from 'react'

import { useT } from '@britania-crm/i18n'
import { AppActions } from '@britania-crm/stores/app'
import useCrmApi from '@britania-crm/services/hooks/useCrmApi'
import { useLinesBuyers } from '@britania-crm/services/hooks/useLinesBuyers'

import { lines as linesCrmRoutes } from '@britania-crm/services/apis/crmApi/resources/routes'

import ConfirmModal from '@britania-crm/web-components/Modal/ConfirmModal'
import InputSelect from '@britania-crm/web-components/InputSelect'

const FamilyInput = forwardRef((props, ref) => {
  const { index, matrixCode } = props
  const t = useT()
  const { linesBuyers, handleLineChange } = useLinesBuyers()
  const line = linesBuyers[index].line

  const { data: familiesFromApi, loading: familiesFromApiLoading } = useCrmApi(
    matrixCode && !!line ? [linesCrmRoutes.getFamilies] : null,
    {
      params: {
        clientTotvsCode: matrixCode,
        lines: line
      }
    },
    {
      onErrorRetry(error, key, config, revalidate, { retryCount }) {
        if (error.response.status === 500 && retryCount < 5 && !isView) {
          createDialog({
            id: 'new-request-family-modal',
            Component: ConfirmModal,
            props: {
              onConfirm() {
                revalidate({ retryCount })
              },
              text: t('search error family')
            }
          })
        } else {
          dispatch(
            AppActions.addAlert({
              type: 'error',
              message: t('maximum number of attempts reached')
            })
          )
        }
      },
      revalidateOnFocus: false
    }
  )

  return (
    <InputSelect
      ref={ref}
      detached
      valueKey='familyDescription'
      idKey='familyCode'
      disabled={!line}
      value={linesBuyers[index].family}
      onChange={(e) => handleLineChange(index, e)}
      name='family'
      label={t('family', { howMany: 1 })}
      id='select-family'
      loading={familiesFromApiLoading}
      required
      options={familiesFromApi}
    />
  )
})

export default FamilyInput
