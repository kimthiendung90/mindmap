import React, { Component } from 'react';

import CalcTopicShape from '../calcpath/topicshape';

// Topic Shape
class TopicShape extends Component {
  render () {
    const { d } = this.props;

    return <path d = { d } fill = "none" stroke="#000"></path>;
  }
}

// Topic Fill
class TopicFill extends Component {
  render () {
    const { d, fillColor} = this.props;

    return <path d = { d } fill = { fillColor } stroke = "none"></path>;
  }
}

// Topic Select Box
class TopicSelectBox extends Component {
  render () {
    const { d, display } = this.props;
    
    const style = {
      display : display ? 'block' : 'none'
    };
    
    return <path d = { d } fill = "none" stroke="#000" style = { style }></path>;
  }
}

// Topic Text
class TopicText extends Component {
  
  render () {
    const { text, fontSize } = this.props;

    const style = { fontSize };
    
    return  <text textAnchor = "middle"  dominantBaseline = "central"   style = { style }>{ text }</text>;
  }
  
}

const textSizeDiv = (() => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.style.position = 'fixed';
  div.style.visibility = 'hidden';
  
  body.appendChild(div);
  
  return div;
})();

class Topic extends Component {

  constructor () {
    super();
    
    this.state = {
      selected : false
    };
    
  }
  
  render () {
    
    const props = this.props;
    
    const state = this.state;

    const boxSize = {};
    
    const textSize = this.getTextSize();
    
    const paddingH = 30, paddingV = 20;
    
    boxSize.width = textSize.width + paddingH * 2;
    boxSize.height = textSize.height + paddingV * 2;
    
    const { topicShapePath, topicSelectBoxPath } = this.getTopicShapePath(boxSize);
    
    return (
      <g transform = { this.getTranslatePosition() } onClick = { props.onClick }>
        <TopicShape d = { topicShapePath } />
        <TopicFill d = { topicShapePath } fillColor = { props.fillColor } />
        <TopicSelectBox display = { state.selected } d = { topicSelectBoxPath } />
        <TopicText text = { props.text  } fontSize = { props.fontSize } />
      </g>
    );
  }

  getTextSize () {
    
    textSizeDiv.style.fontSize = this.props.fontSize;
    textSizeDiv.innerText = this.props.text;
    
    return {
      width : textSizeDiv.clientWidth,
      height : textSizeDiv.clientHeight
    };
    
  }

  getTopicShapePath (boxSize) {
    return CalcTopicShape[this.props.shapeClass](boxSize);
  }

  // todo
  getTranslatePosition () {
    return 'translate(300 300)'
  }
  
}

export default Topic;