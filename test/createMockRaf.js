/* @flow */

type Callback = (now: number) => void;

export default function (): Object {
  let allCallbacks = [];
  let prevTime = 0;
  let id = 0;

  const now = () => prevTime;

  const raf = (cb: Callback) => {
    id++;
    allCallbacks.push({id, cb});
    return id;
  };

  const caf = id2 => {
    allCallbacks = allCallbacks.filter(item => item.id !== id2);
  };

  const defaultTimeInterval = 1000 / 60;
  const singleStep = ms => {
    const allCallbacksBefore = allCallbacks;
    allCallbacks = [];

    prevTime += ms;
    allCallbacksBefore.forEach(({cb}) => cb(prevTime));
  };

  const step = (howMany = 1, ms = defaultTimeInterval) => {
    for (let i = 0; i < howMany; i++) {
      singleStep(ms);
    }
  };

  spyOn(window, 'requestAnimationFrame').and.callFake(raf);
  spyOn(window, 'cancelAnimationFrame').and.callFake(caf);
  spyOn(performance, 'now').and.callFake(now);

  return {step};
}
