import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow } from 'enzyme';
import App from '~/App';

const feature = loadFeature('./features/render-app.feature');

defineFeature(feature, test => {
  test('Application run without broken', ({ given, when, then }) => {
    given("app don't have problem", () => {
      expect(shallow(<App />).contains('div')).toBe(false);
    });

    when('run app', () => {
      expect(shallow(<App />).contains('div')).toBe(false);
    });

    then('application not break', () => {
      expect(shallow(<App />).contains('div')).toBe(false);
    });
  });
});
