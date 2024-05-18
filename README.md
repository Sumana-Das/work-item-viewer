## Work Item Viewer Application

This is an web application where we can enter project name and work item ID to check the work item details from Azure DevOps.
To run this application we have to run the backend API application first and then the frontend application to see the work item details successfully.

## Azure DevOps API and work items hierarchy

The API is used here is as below:

https://dev.azure.com/{orgName}/{project}/_apis/wit/workitems/{id}?api-version=7.1-preview.3&$expand=relations

This API will fetch the workItem details based on the work item ID.

In Azure DevOps I have created a dummy organization with dummy project with minimal details.

*URL:* https://dev.azure.com/dassumanaOrg/FabrikamFiber/
*Organization Name:* dassumanaOrg
*Project Name:* FabrikamFiber
*Access Level:* public

For testing purpose developer can feel free to change his/ her own organization name under *orgName* variable in the backend API *GetWorkItems()* to check their own organization level work items. However, Developer/Tester need to enter their own PAT (personal Access Token) under *personalAccessToken* variable in that case.

## Backend Application Run

### `dotnet run`

Builds and runs the app in the development mode.\
Open [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html) to view the API in the swagger. 
The authentication to fetch the Azure DevOps API is used here in PAT.

To test the API below are the steps to follow:

- expand WorkItem 
- click on 'Try it out' button 
- enter project and id parameters
- click on Execute
- this will give Curl URL to run, Request URL and get the data in Response body with 200 status for Success and valid input scenario
- for invalid input the response body will give error message with 400 status

## Frontend Application Run

In the project directory, we can run:

### `npm install`

Installs all the dependencies which is needed to run the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.