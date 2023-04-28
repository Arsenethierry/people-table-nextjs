import React, { FC } from 'react';
import styles from './styles.module.css';

interface TableBodyProps {
    data: Array<any>,
    columns: Array<string>
}

const TableBody: FC<TableBodyProps> = ({
    data,
    columns
}) => {
    console.log(data)
    return (
        <React.Fragment>
            <tbody>
                {data.map((person: string) => 
                    <tr key={person.id}>
                        {columns.map((column: string) => (
                            <td key={column} className={styles.tablecell}>
                                {column == 'image' ? (
                                    <img src={person.image} className={styles.avatar} alt="avatar" />
                                ) : person[column]}
                            </td>
                        ))}
                    </tr>
                )}
            </tbody>
        </React.Fragment>
    );
}

export default TableBody;