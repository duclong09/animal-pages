import React from 'react';
import PropTypes from 'prop-types';

PaginationList.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange : PropTypes.func,
};

PaginationList.defaultProps = {
    onPageChange: null,
}

function PaginationList(props) {
    const {pagination, onPageChange} = props
    const {_page,_limit,_totalRows} = pagination
    const totalPages = Math.ceil(_totalRows / _limit)


    function handlePageChange(newPage){
        if(onPageChange){
            onPageChange(newPage)
        }
    }
    return (
        <div>
             <button 
            disabled={_page <= 1}
            onClick={()=> handlePageChange(_page - 1)}
            >Prev
            </button>

            <button 
            disabled={_page >= totalPages}
            onClick={()=> handlePageChange(_page + 1)}
            >Next
            </button>
        </div>
    );
}

export default PaginationList;