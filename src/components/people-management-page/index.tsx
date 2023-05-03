import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.css';
import TableHeader from './table-header';
import TableBody from './table-body';
import { useGetPeople } from './queries/get-people-data';

function PeopleManagementTable() {
    const [pageLimit, setPageLimit] = useState<number>(10);
    const [sortedPeople, setSortedPeople] = useState([])
    const [sortType, setSortType] = useState<'asc' | 'desc'>('asc')

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

    const sortTypeHandler = () => {
        if (sortType == "asc") {
            setSortType("desc")
        } else {
            setSortType("asc")
        }
        // setSortType(sortType => sortType == "asc" ? setSortType = "desc" : setSortType = "asc");
    }

    return (
        <div className={styles.root}>
            <table className={styles.table}>
                {isLoading && <div>Loading...</div>}
                {isSuccess && (
                    <>
                        <TableHeader
                            columns={headerColumns}
                            pageLimit={pageLimit}
                            setPageLimit={setPageLimit}
                            sortType={sortType}
                            sortTypeHandler={sortTypeHandler}
                        />
                        <TableBody data={data?.data} columns={columns} />
                    </>
                )}
            </table>
        </div>
    );
}

export default PeopleManagementTable;