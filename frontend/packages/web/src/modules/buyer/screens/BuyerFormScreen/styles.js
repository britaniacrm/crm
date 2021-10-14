import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

import colors from '@britania-crm/styles/colors'
import fonts from '@britania-crm/styles/fonts'

export const useStyles = makeStyles(() => ({
  container: {
    padding: 30,
    backgroundColor: colors.white
  },
  title: {
    color: colors.primary.main,
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: fonts.fontSize.XLS,
    fontStyle: 'normal',
    fontFamily: fonts.fontFaceMavenPro[0].fontFamily,
    fontWeight: fonts.fontWeight.bold,
    color: '#1F2D3D'
  },
  mainData: {
    fontSize: fonts.fontSize.M,
    fontWeight: fonts.fontWeight.bold
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 24
  },
  resetBtn: {
    borderColor: 'transparent',
    color: colors.britPrimary2.base
  },
  btnSave: {
    marginLeft: 10,
    width: 190
  },
  containerFather: { borderRadius: 0 },
  containerMain: { margin: 10 },
  containerRadio: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    color: colors.white,
    backgroundColor: colors.britSecondary.base
  },
  containerTable: {
    borderRadius: 15,
    padding: 15,
    backgroundColor: colors.britPrimary2.lightest,
    marginBottom: 15
  },
  table: {
    background: colors.white,
    padding: 10,
    borderRadius: 15
  },
  labelStatus: { fontSize: '0.75em' },
  status: {
    alignItems: 'center',
    display: 'flex'
  },
  checkbox: { width: '20%' },
  flexContainer: { display: 'flex' },
  upload: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    marginRight: 16,
    width: '100%',
    height: '100%',
    marginBottom: 10,
    textAlign: 'center',
    border: `${colors.britPrimary2.lightest} solid 2px`,
    borderStyle: 'dashed'
  },
  lgpdTitle: {
    fontSize: fonts.fontSize.S,
    fontWeight: fonts.fontWeight.regular
  },
  lgpdText: {
    fontSize: fonts.fontSize.SSB,
    fontWeight: fonts.fontWeight.regular
  }
}))

export const ShadowBox = styled.div`
  display: flex;
  background-color: ${colors.white5};
  margin: 32;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 32px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  box-shadow: none;
`

export const ContentBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
