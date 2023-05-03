import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.css';
import TableHeader from './table-header';
import TableBody from './table-body';
import { useGetPeople } from './queries/get-people-data';
import { sampleData } from './sample-data';

function PeopleManagementTable() {
    const [pageLimit, setPageLimit] = useState<number>(10);
    const [sortColumn, setSortColumn] = useState<string>("id");
    const [solteddata, setSampleData] = useState(sampleData);
    const [sorting, setSorting] = useState({
        field: sortColumn,
        order: "asc"
    });
    const queryConfig = useMemo(
        () => ({ pageSize: pageLimit }),
        [pageLimit]
    );

    const { isLoading, isSuccess, data, refetch, isRefetching } = useGetPeople(queryConfig);

    useEffect(() => {
        refetch();
    }, [pageLimit, queryConfig])

    const headerColumns = ['id', 'Avatar', 'first Name', 'last Name', 'gender', 'Age', 'Contact',]
    const columns = ['id', 'image', 'firstname', 'lastname', 'gender', 'birthday', 'phone',]

    const sortTable = (sorting: { field: string, order: 'asc' | 'desc' }) => {
        setSorting(sorting);
        console.log(sorting);
        const sortedData = [...solteddata].sort((a, b) => {
          if (sorting.field === 'id' || sorting.field === 'Age') {
            return sorting.order === 'asc' ? a.id - b.id : b.id - a.id;
          } else {
            const valueA = a[sorting.field.replace(/\s+/g, '').toLowerCase()].toUpperCase();
            const valueB = b[sorting.field.replace(/\s+/g, '').toLowerCase()].toUpperCase();
            if (valueA < valueB) {
              return sorting.order === 'asc' ? -1 : 1;
            }
            if (valueA > valueB) {
              return sorting.order === 'asc' ? 1 : -1;
            }
            return 0;
          }
        });
        setSampleData(sortedData);
      }
    return (
        <div className={styles.root}>
            <table className={styles.table}>
                {/* {isLoading && <div>Loading...</div>}
                {isSuccess && (
                    <>
                        <TableHeader
                            columns={headerColumns}
                            pageLimit={pageLimit}
                            setPageLimit={setPageLimit}
                        />
                        <TableBody data={data?.data} columns={columns} />
                    </>
                )} */}
                <>

                    {/* for Sorting functionality, I am using sample data because api doesn't support sorting */}
                    <TableHeader
                        columns={headerColumns}
                        pageLimit={pageLimit}
                        setPageLimit={setPageLimit}
                        sorting={sorting}
                        sortTable={sortTable}
                    />
                    <TableBody data={solteddata} columns={columns} />
                </>
            </table>
        </div>
    );
}

export default PeopleManagementTable;