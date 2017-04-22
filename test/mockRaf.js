export default function raf(fn) {
  return window.requestAnimationFrame(fn);
}
raf.cancel = (id) => {
  window.cancelAnimationFrame(id);
};
