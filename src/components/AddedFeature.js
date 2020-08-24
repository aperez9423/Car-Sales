import React from 'react';

import { removeFeature } from '../actions/index';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onclick={() => props.removeFeature(props.feature)}>Remove</button>
      {props.feature.name}
    </li>
  );
};

export default connect (null, {removeFeature}) (AddedFeature);
