import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/WorkItem';
const apiName = 'GetWorkItems';

export const fetchWorkItemDetails = (
    projectName,
    workItemId
) => axios.get(`${baseUrl}/${apiName}/${projectName}/${workItemId}`);

export const getWorkItemsByWIQL = async (projectName, workItemId) => {
    try {
      const response = await axios.get(`${baseUrl}/QueryWorkItemsByType/${projectName}/${workItemId}`); // Adjust the endpoint as needed
      return response.data;
    } catch (error) {
      console.error('Error fetching work items:', error);
      return null;
    }
  };