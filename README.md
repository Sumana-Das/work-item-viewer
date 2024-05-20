## Work Item Viewer Application

This is an web application where we can enter project name and work item ID to check the work item details from Azure DevOps.
To run this application we have to run the backend API application first and then the frontend application to see the work item details successfully.

### Overview
Users can open the application in local and provide the **project name and work item ID which are mandatory fields** and user can able to **filter thye work items based on work state and work item type** which are **optional fields**. If the project name or the item id is not present in the organization then it will give an error message. **Project name is case insensitive field and work item ID is an integer field**.

By clicking on submit button the application **will show the work item details like title, description, status and assigned to fields** along with another datatable having all the child item details associated with that work item.

## Azure DevOps API and WIQL and work items hierarchy

The API is used here is as below:

https://dev.azure.com/{orgName}/{project}/_apis/wit/workitems/{id}?api-version=7.1-preview.3&$expand=relations

This API will fetch the workItem details based on the work item ID.
In Azure DevOps I have created a dummy organization with dummy project with minimal details.

Apart from that WIQL has been used to fetch the parent-child relation

**URL:** https://dev.azure.com/dassumanaOrg/FabrikamFiber/
**Organization Name:** *dassumanaOrg*
**Project Name:** *FabrikamFiber*
**Access Level:** *public*

For testing purpose developer can feel free to change his/ her own organization name under **orgName** variable in the backend API **GetWorkItems()** to check their own organization level work items. However, Developer/Tester need to enter their own PAT (personal Access Token) under **personalAccessToken** variable in that case.

## Backend Application Run

- Clone the repo [WorkItemService](https://github.com/Sumana-Das/WorkItemService)
- This is a private repo as we are using PAT for authentication
- Open terminal and navigate to the folder location where the repo is cloned
- Run `dotnet run` command
- when the application is in running mode run the front end application

### `dotnet run`

Builds and runs the app in the development mode.\
Open [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html) to view the API in the swagger. 
The authentication to fetch the Azure DevOps API is used here in PAT.

To test the API below are the steps to follow:

- expand WorkItem APIs
- click on 'Try it out' button 
- enter required parameters
- click on Execute
- this will give Curl URL to run, Request URL and get the data in Response body with 200 status for Success and valid input scenario
- for invalid input the response body will give error message with 400 status

## Frontend Application Run

In the project directory, we can run:

### `npm install`

Installs all the dependencies which is needed to run the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
**Basic test cases are written however need to modify and mock the api response to run test cases successfully**

## Application View

**Initial View:**

<img width="785" alt="image" src="https://github.com/Sumana-Das/work-item-viewer/assets/76615241/bd1634c0-8057-4e50-9461-654d4ce0359f">

**Work Item Details View (without filter):**

<img width="785" alt="image" src="https://github.com/Sumana-Das/work-item-viewer/assets/76615241/109f64fb-fb73-4f50-a73d-06658112c410">

**Work Item Details View (with filter):**

<img width="746" alt="image" src="https://github.com/Sumana-Das/work-item-viewer/assets/76615241/492bdb9a-c503-4dba-97c2-a1f97abb700b">

**Responsive View:**

<img width="364" alt="image" src="https://github.com/Sumana-Das/work-item-viewer/assets/76615241/42ec640f-50f1-44f9-a33c-7d8604b06189">


