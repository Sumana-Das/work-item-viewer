import axios from 'axios';

const pathURL = 'http://localhost:5000/api/WorkItem';
const apiName = 'GetWorkItems';

export const fetchWorkItemDetails = (
    projectName,
    workItemId
) => axios.get(`${pathURL}/${apiName}/${projectName}/${workItemId}`);