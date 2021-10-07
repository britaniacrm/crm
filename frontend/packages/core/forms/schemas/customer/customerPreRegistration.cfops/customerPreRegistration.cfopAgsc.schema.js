import * as Yup from 'yup'

import mapValues from 'lodash/mapValues'

export const INITIAL_VALUES = {
  agScTvCode: {},
  agScTvDescription: {},
  agScTvStCode: {},
  agScTvStDescription: {},
  agScTvVpcCode: {},
  agScTvVpcDescription: {},
  agcScTvVpcStCode: {},
  agcScTvVpcStDescription: {},
  agcScNotebookCode: {},
  agcScNotebookDescription: {},
  agcScNotebookStCode: {},
  agcScNotebookStDescription: {},
  agScNotebookVpcCode: {},
  agScNotebookVpcDescription: {},
  agcScNotebookVpcStCode: {},
  agcScNotebookVpcStDescription: {},
  agScMicrowavesCode: {},
  agScMicrowavesDescription: {},
  agScMicrowavesStCode: {},
  agScMicrowavesStDescription: {},
  agScMicrowavesVpcCode: {},
  agScMicrowavesVpcDescription: {},
  agScMicrowavesVpcStCode: {},
  agScMicrowavesVpcStDescription: {},
  agScMinisystemCode: {},
  agScMinisystemDescription: {},
  agScMinisystemStCode: {},
  agScMinisystemStDescription: {},
  agScMinisystemVpcCode: {},
  agScMinisystemVpcDescription: {},
  agScMinisystemVpcStCode: {},
  agScMinisystemVpcStDescription: {},
  agScArconCode: {},
  agScArconDescription: {},
  agScArconStCode: {},
  agScArconStDescription: {},
  agScArconVpcCode: {},
  agScArconVpcDescription: {},
  agScArconVpcStCode: {},
  agScArconVpcStDescription: {},
  agScMonitorCode: {},
  agScMonitorDescription: {},
  agScMonitorStCode: {},
  agScMonitorStDescription: {},
  agScVpcMonitorCode: {},
  agScVpcMonitorDescription: {},
  agScMonitorVpcStCode: {},
  agScMonitorVpcStDescription: {},
  agScSmartCode: {},
  agScSmartDescription: {},
  agScSmartStCode: {},
  agScSmartStDescription: {},
  agScSmartVpcCode: {},
  agScSmartVpcDescription: {},
  agScSmartVpcStCode: {},
  agScSmartVpcStDescription: {},
  agScTableCode: {},
  agScTableDescription: {},
  agScTableStCode: {},
  agScTableStDescription: {},
  agScTableVpcCode: {},
  agScTableVpcDescription: {},
  agScTableVpcStCode: {},
  agScTableVpcStDescription: {},
  agScDesktopCode: {},
  agScDesktopDescription: {},
  agScDesktopVpcCode: {},
  agScDesktopVpcDescription: {},
  agScDesktopStCode: {},
  agScDesktopStDescription: {},
  agScDesktopVpcStCode: {},
  agScDesktopVpcStDescription: {}
}

export default () => Yup.object().shape({ ...mapValues(INITIAL_VALUES, () => Yup.object()) })