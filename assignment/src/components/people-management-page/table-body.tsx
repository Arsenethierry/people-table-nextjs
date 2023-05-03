import React, { FC, useState } from 'react';
import styles from './styles.module.css';
import PersonAddress from './render-person-address';
import { Person, TableBodyProps } from '@/utils/types';


const TableBody: FC<TableBodyProps> = ({
    data,
    columns
}) => {
    const [expandedRows, setExpandedRows] = useState<Person | any>([]);

    const handleRowClick = (id: number) => {
        if (expandedRows.includes(id)) {
            setExpandedRows(expandedRows.filter((rowId: number) => rowId !== id));
        } else {
            setExpandedRows([...expandedRows, id]);
        }
    };
    return (
        <React.Fragment>
            <tbody>
                {data.map((person: Person) => (
                    <React.Fragment key={person.id}>
                        <tr
                            style={{ backgroundColor: person.id % 2 === 0 ? '#F5F5F5' : '', cursor: 'pointer' }}
                            onClick={() => handleRowClick(person.id)}
                        >
                            {columns.map((column) => (
                                <td key={column} className={styles.tablecell}>
                                    {column === 'image' ? (
                                        <img src={person.image} className={styles.avatar} alt="avatar" />
                                    ) : (
                                        person[column]
                                    )}
                                </td>
                            ))}
                        </tr>
                        {expandedRows.includes(person.id) && (
                            <tr>
                                <td colSpan={columns.length} className={styles.tablecell}>
                                    <PersonAddress adress={person?.address}  />
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </React.Fragment>
    );
}

export default TableBody;