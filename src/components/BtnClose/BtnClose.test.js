import React from 'react';
import renderer, { act } from 'react-test-renderer';
import BtnClose from './BtnClose';

test('работа BtnClose', () => {

  const component = renderer.create(
    <BtnClose onClose={() => console.log("close")}/>
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();


  const buttonElem = component.root.find( el => el.type=='button' ); 
  // и "нажмём" на неё

  buttonElem.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});
