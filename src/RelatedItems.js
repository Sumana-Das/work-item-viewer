import React, { useState } from 'react';
import './RelatedItems.css';

const RelatedItems = (props) => {
    const workDetails = props.workDetails;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    
    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = workDetails.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (workDetails.length === 0) {
        return <></>;
      }
    return (
        <div>
            {workDetails.Length !== 0 ? (
                <div className="related-items">
                    <h3>Related Items</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Work Item ID</th>
                            <th>Relation</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.relation}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {/* Pagination */}
                    <div className="pagination">
                        {Array.from({ length: Math.ceil(workDetails?.length / itemsPerPage) }, (_, i) => (
                        <button key={i} onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </button>
                        ))}
                    </div>
                </div>
            ) : (<div>No Items to display</div>)}
        </div>
        
    );
};

export default RelatedItems;