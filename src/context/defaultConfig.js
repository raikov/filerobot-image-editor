/** Internal Dependencies */
import { MIN_CROP, TABS_IDS, TOOLS_IDS } from 'utils/constants';

export default {
  annotationsCommon: {
    fill: '#000000', // or should be no color? === undefined
    stroke: '#000000', // or should be no color? === undefined
    strokeWidth: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowBlur: 0,
    shadowColor: '#000000', // or should be no color? === undefined
    shadowOpacity: 1,
    opacity: 1,
  },
  [TOOLS_IDS.TEXT]: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet tortor quis odio facilisis, id aliquet nulla facilisis. Etiam tincidunt tempor odio nec placerat.',
    fontFamily: 'Arial',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 1,
    align: 'left', // left, center, right
    fontStyle: '', // 'bold', 'italic', 'bold italic'
  },
  [TOOLS_IDS.IMAGE]: {
    fill: undefined,
  },
  [TOOLS_IDS.RECT]: {
    cornerRadius: 0,
  },
  [TOOLS_IDS.ELLIPSE]: {},
  [TOOLS_IDS.POLYGON]: {
    sides: 3,
  },
  [TOOLS_IDS.PEN]: {
    strokeWidth: 1,
  },
  [TOOLS_IDS.LINE]: {
    lineCap: 'butt', // butt/round/square
    strokeWidth: 1,
  },
  [TOOLS_IDS.ARROW]: {
    strokeWidth: 6,
    lineCap: 'butt',
    pointerLength: undefined,
    pointerWidth: undefined,
  },
  [TOOLS_IDS.WATERMARK]: {
    gallery: [],
  },
  [TOOLS_IDS.CROP]: {
    minWidth: MIN_CROP.WIDTH,
    minHeight: MIN_CROP.HEIGHT,
    width: null,
    height: null,
    maxWidth: null,
    maxHeight: null,
    ratio: 'original',
    noPresets: false,
  },
  tabsIds: [],
  defaultTabId: TABS_IDS.ADJUST,
  defaultToolId: TOOLS_IDS.CROP,
  onClose: null,
  closeAfterSaving: false,
  savedImageType: null,
  forceToPngInEllipticalCrop: false,
  useBackendTranslations: true,
  translations: null,
  language: 'en',
};