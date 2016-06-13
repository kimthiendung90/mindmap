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
      text : 'Central Topic',
      fontSize : '16px',
      shapeClass : 'react',
      fillColor : 'rgb(203, 222, 253)'
    };
    
  }
  
  render () {
    const state = this.state;

    const boxSize = {};
    
    const textSize = this.getTextSize();
    
    const padding = 20;
    
    boxSize.width = textSize.width + padding * 2;
    boxSize.height = textSize.height + padding * 2;
    
    const topicShapePath = this.getTopicShapePath(boxSize);
    
    return (
      <g transform = { this.getTranslatePosition() }>
        <TopicShape d = { topicShapePath } />
        <TopicFill d = { topicShapePath } fillColor = { state.fillColor } />
        <TopicText text = { state.text  } fontSize = { state.fontSize } />
      </g>
    );
  }

  getTextSize () {
    
    textSizeDiv.style.fontSize = this.state.fontSize;
    textSizeDiv.innerText = this.state.text;
    
    return {
      width : textSizeDiv.clientWidth,
      height : textSizeDiv.clientHeight
    };
    
  }

  getTopicShapePath (boxSize) {
    return CalcTopicShape[this.state.shapeClass](boxSize);
  }

  // todo
  getTranslatePosition () {
    return 'translate(300 300)'
  }
}

export default Topic;