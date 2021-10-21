import * as Yup from 'yup'

import mapValues from 'lodash/mapValues'

export const INITIAL_VALUES = {
  manausTvCode: {},
  manausTvDescription: {},
  manausTvStCode: {},
  manausTvStDescription: {},
  manausTvVpcCode: {},
  manausTvVpcDescription: {},
  manausTvVpcStCode: {},
  manausTvVpcStDescription: {},
  manausNotebookCode: {},
  manausNotebookDescription: {},
  manausNotebookStCode: {},
  manausNotebookStDescription: {},
  manausNotebookVpcCode: {},
  manausNotebookVpcDescription: {},
  manausNotebookVpcStCode: {},
  manausNotebookVpcStDescription: {},
  manausMicrowaveCode: {},
  manausMicrowaveDescription: {},
  manausMicrowaveStCode: {},
  manausMicrowaveStDescription: {},
  manausMicrowaveVpcCode: {},
  manausMicrowaveVpcDescription: {},
  manausMicrowaveVpcStCode: {},
  manausMicrowaveVpcStDescription: {},
  manausMinisystemCode: {},
  manausMinisystemDescription: {},
  manausMinisystemStCode: {},
  manausMinisystemStDescription: {},
  manausMinisystemVpcCode: {},
  manausMinisystemVpcDescription: {},
  manausMinisystemVpcStCode: {},
  manausMinisystemVpcStDescription: {},
  manausArconCode: {},
  manausArconDescription: {},
  manausArconStCode: {},
  manausArconStDescription: {},
  manausArconVpcCode: {},
  manausArconVpcDescription: {},
  manausArconVpcStCode: {},
  manausArconVpcStDescription: {},
  manausMonitorCode: {},
  manausMonitorDescription: {},
  manausMonitorStCode: {},
  manausMonitorStDescription: {},
  manausMonitorVpcCode: {},
  manausMonitorVpcDescription: {},
  manausMonitorVpcStCode: {},
  manausMonitorVpcStDescription: {},
  manausSmartCode: {},
  manausSmartDescription: {},
  manausSmartStCode: {},
  manausSmartStDescription: {},
  manausSmartVpcCode: {},
  manausSmartVpcDescription: {},
  manausSmartVpcStCode: {},
  manausSmartVpcStDescription: {},
  manausTabletCode: {},
  manausTabletDescription: {},
  manausTabletStCode: {},
  manausTabletStDescription: {},
  manausTabletVpcCode: {},
  manausTabletVpcDescription: {},
  manausTabletVpcStCode: {},
  manausTabletVpcStDescription: {},
  manausDesktopCode: {},
  manausDesktopDescription: {},
  manausDesktopStCode: {},
  manausDesktopStDescription: {},
  manausDesktopVpcCode: {},
  manausDesktopVpcDescription: {},
  manausDesktopVpcStCode: {},
  manausDesktopVpcStDescription: {},
  manausFreeManausCode: {},
  manausFreeManausDescription: {}
}

export default () => Yup.object().shape({ ...mapValues(INITIAL_VALUES, () => Yup.object()) })
