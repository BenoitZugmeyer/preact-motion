import { render } from 'preact';

export default function renderIntoDocument(element) {
  const div = document.createElement('div');
  render(element, div);
}
