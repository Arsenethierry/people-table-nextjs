import React, { useState } from 'react';
import styles from './styles.module.css';
import TableHeader from './table-header';
import TableBody from './table-body';
import { useGetPeople } from './queries/get-people-data';

function PeopleManagementTable() {
    const { isLoading, isSuccess, data } = useGetPeople();
console.log(data)
    const [sorting, setSorting] = useState({
        columns: "id",
        order: "asc"
    })

    const headerColumns = ['id', 'Avatar', 'first Name', 'last Name', 'gender', 'Age', 'Contact',]
    const columns = ['id', 'image', 'firstname', 'lastname', 'gender', 'birthday', 'phone',]
    return (
        <div className={styles.root}>
            {JSON.stringify(data)}
            {/* <table className={styles.table}>
                <TableHeader columns={headerColumns} sorting={sorting} />
                <TableBody data={data} columns={columns} />
            </table> */}
        </div>
    );
}

export default PeopleManagementTable;