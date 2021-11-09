import React, { useMemo, memo } from 'react'

import PropTypes from 'prop-types'

import { isEmpty, map } from 'lodash'

import { Controller } from 'react-hook-form'
import {
  CircularProgress,
  InputAdornment,
  MenuItem,
  InputLabel
} from '@material-ui/core'

import { areEqual } from '@britania-crm/utils/memo'

import useStyles, { TextFieldStyled } from './styles'

const InputSelectStyled = ({
  name,
  control,
  label,
  idKey,
  valueKey,
  options,
  variant,
  loading,
  clearable,
  value,
  customChange,
  placeholder
}) => {
  const classes = useStyles()

  const renderedOptions = useMemo(() => {
    const optsArray = []

    optsArray.push(
      <MenuItem value={0} key={0} style={{ display: 'none' }}>
        {placeholder}
      </MenuItem>
    )

    if (isEmpty(options)) {
      optsArray.push(
        <MenuItem selected key='none' disabled>
          <em>Nenhum valor</em>
        </MenuItem>
      )
      return optsArray
    }

    map(options, (option) => {
      const id = option[idKey]
      const name = option[valueKey]

      optsArray.push(
        <MenuItem
          classes={{ root: classes.menuItem }}
          value={id}
          key={id}
          style={{ fontSize: 14 }}
        >
          {name}
        </MenuItem>
      )
    })

    return optsArray
  }, [options, idKey, valueKey, classes])

  const EndAdornment = useMemo(
    () =>
      (loading || clearable) && (
        <>
          <InputAdornment style={{ marginRight: 12 }} position='end'>
            {clearable && value && <CloseIconButton size='small' />}
            {loading && (
              <CircularProgress disableShrink color='inherit' size={20} />
            )}
          </InputAdornment>
        </>
      ),
    [clearable, loading, value]
  )

  return (
    <>
      <InputLabel style={{ margin: '5px auto', color: '#1F2D3D' }}>
        {label}
      </InputLabel>
      <Controller
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState
        }) => (
          <TextFieldStyled
            className={value === 0 ? classes.placeholder : ''}
            onChange={customChange || onChange}
            value={value ?? 0}
            variant={variant}
            select
            disabled={loading}
            helperText={error ? error.message : null}
            error={!!error}
            InputProps={{
              endAdornment: EndAdornment
            }}
            SelectProps={{
              MenuProps: {
                style: { height: 300 },
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left'
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left'
                },
                getContentAnchorEl: null
              }
            }}
          >
            {renderedOptions}
          </TextFieldStyled>
        )}
        control={control}
        name={name}
      />
    </>
  )
}

InputSelectStyled.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any,
  label: PropTypes.string,
  idKey: PropTypes.string,
  valueKey: PropTypes.string,
  options: PropTypes.array,
  variant: PropTypes.string,
  setValue: PropTypes.any,
  loading: PropTypes.bool,
  clearable: PropTypes.bool,
  customChange: PropTypes.func
}

InputSelectStyled.defaultProps = {
  name: '',
  label: '',
  idKey: '',
  valueKey: '',
  options: [],
  variant: 'outlined',
  loading: false,
  clearable: false,
  customChange: null
}

export default memo(InputSelectStyled, areEqual)
