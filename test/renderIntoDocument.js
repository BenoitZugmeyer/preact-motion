import ReactDOM from 'react-dom';

export default function renderIntoDocument(element) {
  const div = document.createElement('div');
  ReactDOM.render(element, div);
}
