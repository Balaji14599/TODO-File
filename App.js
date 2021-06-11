import React from 'react';
import {useSelector,useDispatch}from 'react-redux';
import {VadiveluComedy,GoundamaniComedy,SubcribeAction} from './index'

const App = () =>
{
  const Comedies = useSelector(state => state);
  const Dispatch = useDispatch();
  return (
    <div>
         <img src = {Comedies.img} />
        <button type="button" onClick = { () => Dispatch(VadiveluComedy())}>VadiveluComedy</button> &nbsp;
        <button type="button" onClick = { () => Dispatch(GoundamaniComedy())}>GoundamaniComedy</button> &nbsp;
        <button type="button" onClick = { () => Dispatch(SubcribeAction())}>SUBSCRIBE</button>

    </div>
  )
}

export default App;
