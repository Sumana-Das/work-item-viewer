import React, { useState } from 'react';
import './WorkItemViewer.css';
import WorkItemTree from '../relatedItem/RelatedItems';
import { fetchWorkItemDetails, getWorkItemsByWIQL } from '../apis/WorkItemAPI';

const WorkItemViewer = () => {
  const [projectName, setProjectName] = useState('');
  const [workItemId, setWorkItemId] = useState('');
  const [workItemData, setWorkItemData] = useState(null);
  const [workItemWithRelations, setWorkItemWithRelations] = useState([]);
  const [error, setError] = useState(null);

  const fetchWorkItemData = async () => {
    try {
      const response = await fetchWorkItemDetails(projectName, workItemId);

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
  const fetchRelatedItems = async () => {
    const response = await getWorkItemsByWIQL(projectName, workItemId);
    if (response.length > 0) {
      setWorkItemWithRelations(response);
      setError(null);
    } else {
      setWorkItemWithRelations(null);
      setError('No data found');
    }
  };

  const onhandleClick = () => {
    fetchWorkItemData();
    fetchRelatedItems();
  }

  return (
    <div className="container">
      <div>
        <h1>Azure DevOps Work Item Viewer</h1>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Work Item ID"
          value={workItemId}
          onChange={(e) => setWorkItemId(e.target.value)}
        />
        <button type="submit" onClick={onhandleClick}>
          Fetch Work Item
        </button>
      </div>
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
                  <td>{workItemData['System.Description']?.replace(/(<([^>]+)>)/ig, '')}</td>
                  <td>{workItemData['System.State']}</td>
                  <td>{workItemData['System.AssignedTo']?.displayName}</td>
                </tr>
              </tbody>
            </table>
          </div>
      )}
      {workItemWithRelations.length > 0 && (
        <div>
            <WorkItemTree workItem={workItemWithRelations} workItemId={workItemId} />
        </div>
      )}
    </div>
  );
};

export default WorkItemViewer;