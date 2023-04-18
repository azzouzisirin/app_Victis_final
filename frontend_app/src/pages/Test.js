import { useEffect, useMemo, useState } from 'react';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

import { grey } from '@mui/material/colors';


export default function Test( ) {
  const [rowId, setRowId] = useState(null);
  const [pageSize, setPageSize] = useState(5);

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' }
  ];
  
  const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
  ];
return(
<>
<DataGrid
        columns={columns}
        rows={rows}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? grey[200] : grey[900],
          },
        }}
        onCellEditCommit={(params) => setRowId(params.id)}
      />
</>)

}