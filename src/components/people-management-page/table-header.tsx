import React from 'react';
import styles from './styles.module.css';

type headerProps  = {
 columns: Array<string>
}

function TableHeader({ columns }: headerProps) {
    return (
        <React.Fragment>
            <thead>
                <tr>
                    <th className={styles.tablecell} colSpan={columns.length -1}></th>
                    <th className={styles.tablecell}>icon</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    {columns.map((column: string) => (
                        <th className={styles.tablecell} key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
        </React.Fragment>
    );
}

export default TableHeader;