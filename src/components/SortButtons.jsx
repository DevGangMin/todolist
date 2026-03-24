import React from 'react';

function SortButtons({ sortOrder, onSortChange }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <button 
        onClick={() => onSortChange('newest')}
        style={{ 
          backgroundColor: sortOrder === 'newest' ? '#333' : '#eee',
          color: sortOrder === 'newest' ? 'white' : 'black',
          marginRight: '8px'
        }}
      >
        최신순
      </button>
      <button 
        onClick={() => onSortChange('oldest')}
        style={{ 
          backgroundColor: sortOrder === 'oldest' ? '#333' : '#eee',
          color: sortOrder === 'oldest' ? 'white' : 'black'
        }}
      >
        오래된순
      </button>
    </div>
  );
}

export default SortButtons;