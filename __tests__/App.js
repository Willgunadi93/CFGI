import 'react-native';//Beginning
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />); //Return statement, how it renders out what it updates
});
