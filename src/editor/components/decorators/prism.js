// code taken from https://gist.github.com/SamyPesse/0690602631c19aedcfa0a28feabb9d2b

import Prism from 'prismjs';
import React from 'react'
/*import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-haml';
import 'prismjs/components/prism-jsx';*/
import PrismDecorator from 'draft-js-prism'


const defaultFilter =(block)=> {
  return block.getType() === 'code-block';
}

const defaultGetSyntax = (block)=> {
  if (block.getData) {
      return block.getData().get('syntax');
  }

  return null;
}

const defaultRender =(props)=> {
  return React.createElement(
    "span",
    { className: 'prism-token token ' + props.type },
    props.children
  );
}

const PrismOptions = {
  // Default language to use
  defaultSyntax:      null,
  // Filter block before highlighting
  filter:             defaultFilter,
  // Function to get syntax for a block
  getSyntax:          defaultGetSyntax,
  // Render a decorated text for a token
  render:             defaultRender,
  // Prism module
  prism:              Prism
}

export const PrismDraftDecorator = ()=> ( new PrismDecorator( PrismOptions ) )



