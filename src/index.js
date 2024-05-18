import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WorkItemViewer from './WorkItemViewer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkItemViewer />
  </React.StrictMode>
);

