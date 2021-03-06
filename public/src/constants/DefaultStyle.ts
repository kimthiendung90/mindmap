import * as CommonConstant from '../constants/Common';

export default {
  [CommonConstant.TOPIC_ROOT]: {
    "fontSize": "24px",
    "fontColor": "#4c4c4c",
    "isFontBold": true,
    "shapeClass": CommonConstant.SHAPE_ROUNDED_RECT,
    "strokeWidth": '1px',
    "strokeColor": "#000000",
    "lineClass": CommonConstant.LINE_ROUNDED,
    "lineWidth": "1px",
    "lineColor": "#7f7f7f",
    "fillColor": "#cbdefd"
  },
  [CommonConstant.TOPIC_MAIN]: {
    "fontSize": "18px",
    "fontColor": "#4c4c4c",
    "shapeClass": CommonConstant.SHAPE_ROUNDED_RECT,
    "strokeWidth": '1px',
    "strokeColor": "#000000",
    "lineClass": CommonConstant.LINE_RIGHT_ANGLE,
    "lineWidth": "1px",
    "lineColor": "#7f7f7f",
    "fillColor": "#fef4ec"
  },
  [CommonConstant.TOPIC_SUB]: {
    "fontSize": "16px",
    "fontColor": "#4c4c4c", 
    "shapeClass": CommonConstant.SHAPE_ROUNDED_RECT,
    "strokeWidth": '1px',
    "strokeColor": "#000000",
    "lineClass": CommonConstant.LINE_RIGHT_ANGLE,
    "lineWidth": "1px",
    "lineColor": "#7f7f7f",
    "fillColor": "#fef4ec"
  },
  
  label: {
    "fontSize": "12px",
    "fillColor": "#edf9cc"
  },
  
  connectLine: {
    "stroke": "#7f7f7f"
  },

  editReceiver: {
    minWidth: 100,
    minHeight: 20
  },
  
  topicShapeStyle: {
    parallelogramSlope: 2.5,
    roundedRectR: 5
  },
  
  selectBoxSpace: 5
}