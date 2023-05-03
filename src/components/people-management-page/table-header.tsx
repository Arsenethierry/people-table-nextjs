import React from 'react';
import styles from './styles.module.css';
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs';
import { HeaderCellProps, headerProps } from '@/utils/types';


const HeaderCell = ({ column, sorting, sortTable }: HeaderCellProps) => {
    const isDesc = sorting.order === 'desc';
    const except = (col: string) => {
        if (col === 'Avatar' || col === 'Contact') {
            return true;
        }
        return false;
    }

    return (
        <th key={column} className={styles.tablecell} onClick={() => sortTable({
            field: column,
            order: isDesc ? 'asc' : 'desc',
        })}>
            {column}
            {sorting.field == column && !except(column) ? (

                isDesc ? <span><BsArrowDownSquareFill /></span> : <span><BsArrowUpSquareFill /></span>
            ) : !except(column) && <span><BsArrowDownSquareFill /></span>}
        </th>
    )
}

function TableHeader({ columns, pageLimit, setPageLimit, sorting, sortTable }: headerProps) {
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPageLimit(parseInt(e.target.value));
    }
    return (
        <React.Fragment>
            <thead className={styles.tablehead}>
                <tr>
                    <th className={styles.tablecell} colSpan={columns.length - 1}></th>
                    <th className={styles.tablecell}>
                        <select value={pageLimit} onChange={handleOptionChange} className={styles.select}>
                            <option value={pageLimit}>{pageLimit}</option>
                            <option value={15}>15</option>
                            <option value={30}>30</option>
                            <option value={50}>50</option>
                        </select>
                    </th>
                </tr>
            </thead>
            <thead className={styles.tablehead} style={{ top: "50px" }}>
                <tr>
                    {columns.map((column: string) => (
                        <HeaderCell
                            sorting={sorting}
                            column={column}
                            key={column}
                            sortTable={sortTable}
                        />
                    ))}
                </tr>
            </thead>
        </React.Fragment>
    );
}

export default TableHeader;