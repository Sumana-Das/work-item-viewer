import React, { useState } from 'react';
import './RelatedItems.css';

const WorkItemTree = ({ workItem }) => {

    const columns = ["Work Item ID", "Title", "Work Item Type", "State"];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = workItem.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
        <h3>Related Work Items</h3>
          <div className="related-items">
              <table>
                  <thead>
                    <tr>
                        {columns.map((column) => (
                            <th>{column}</th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                        <td>{item.fields['System.Id']}</td>
                        <td>{item.fields['System.Title']}</td>
                        <td>{item.fields['System.WorkItemType']}</td>
                        <td>{item.fields['System.State']}</td>
                        </tr>
                    ))}
                  </tbody>
              </table>
              <div className="pagination">
                {Array.from({ length: Math.ceil(workItem?.length / itemsPerPage) }, (_, i) => (
                <button key={i} onClick={() => paginate(i + 1)}>
                    {i + 1}
                </button>
                ))}
             </div>
          </div>
      </div>
    );
  };
  export default WorkItemTree;