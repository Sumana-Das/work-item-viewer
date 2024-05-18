import React, { useState } from 'react';
import axios from 'axios';
import './WorkItemViewer.css';
import RelatedItems from './RelatedItems';

const WorkItemViewer = () => {
  const [projectName, setProjectName] = useState('');
  const [workItemId, setWorkItemId] = useState('');
  const [workItemData, setWorkItemData] = useState(null);
  const [relatedItems, setRelatedItemsDetails] = useState([]);
  const [error, setError] = useState(null);
  const fetchRelatedItems = async () => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/WorkItem/GetRelatedWorkItems/${projectName}/${workItemId}`
        );
        const relations = response.data.relations || [];
        const relatedIds = relations
            .filter((rel) => rel.rel === 'System.LinkTypes.Hierarchy-Forward')
            .map((rel) => ({
            id: rel.url.split('/').pop(),
            relation: rel.attributes.name,
            }));
            setRelatedItemsDetails(relatedIds);
    } catch (error) {
        console.error('Error fetching related items:', error);
    }
};
  const fetchWorkItemData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/WorkItem/GetWorkItems/${projectName}/${workItemId}`);

      if (response.statusText === 'OK') {
        const data = response.data;
        setWorkItemData(data?.fields);
        setError(null);
      } else {
        setWorkItemData(null);
        setError('Error fetching Work Item data. Check your input or authentication.');
      }
    } catch (error) {
      setWorkItemData(null);
      setError('An error occurred. Please try again later.');
    }
  };
  const onhandleClick = () => {
    fetchWorkItemData();
    fetchRelatedItems();
  }

  return (
    <div className="container">
      <h1>Azure DevOps Work Item Viewer</h1>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Work Item ID"
        value={workItemId}
        onChange={(e) => setWorkItemId(e.target.value)}
      />
      <button type="submit" onClick={onhandleClick}>
        Fetch Work Item
      </button>

      {error && <p className="error">{error}</p>}
      {workItemData && (
          <div className="work-item-details">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Assigned To</th>
                </tr>
              </thead>
              <tbody>
                <tr key={workItemData['System.Title']}>
                  <td>{workItemData['System.Title']}</td>
                  <td>{workItemData['System.Description'].replace(/(<([^>]+)>)/ig, '')}</td>
                  <td>{workItemData['System.State']}</td>
                  <td>{workItemData['System.AssignedTo']?.displayName}</td>
                </tr>
              </tbody>
            </table>
          
            <RelatedItems projectName={projectName} workItemId={workItemId} workDetails={relatedItems} />
          </div>
      )}
      
    </div>
  );
};

export default WorkItemViewer;