import React from 'react';
import './RelatedItems.css';

const WorkItemTree = ({ workItem }) => {
    return (
        <div>
        <h3>Related Work Items</h3>
          <div className="related-items">
              <table>
                  <thead>
                  <tr>
                      <th>Work Item ID</th>
                      <th>Title</th>
                      <th>Work Item Type</th>
                      <th>State</th>
                  </tr>
                  </thead>
                  <tbody>
                  {workItem.map((item) => (
                      <tr key={item.id}>
                        <td>{item.fields['System.Id']}</td>
                        <td>{item.fields['System.Title']}</td>
                        <td>{item.fields['System.WorkItemType']}</td>
                        <td>{item.fields['System.State']}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </div>
    );
  };
  export default WorkItemTree;