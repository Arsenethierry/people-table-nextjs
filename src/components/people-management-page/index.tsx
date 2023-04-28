import React from 'react';
import styles from './styles.module.css';
import TableHeader from './table-header';
import TableBody from './table-body';

function PeopleManagementTable({ data }: any) {
    const headerColumns = ['id', 'Avatar', 'first Name', 'last Name', 'gender', 'Age', 'Contact',]
    const columns = ['id', 'image', 'firstname', 'lastname', 'gender', 'birthday', 'phone',]
    return (
        <div className={styles.root}>
            <table className={styles.table}>
                <TableHeader columns={headerColumns} />
                <TableBody data={data} columns={columns} />
            </table>
        </div>
    );
}

export default PeopleManagementTable;