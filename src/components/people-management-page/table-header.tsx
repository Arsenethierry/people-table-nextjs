import React from 'react';
import styles from './styles.module.css';
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs';
import { HeaderCellProps, headerProps } from '@/utils/types';


const HeaderCell = ({ column, sortTypeHandler, sortType }: HeaderCellProps) => {


    return (
        <th key={column} className={styles.tablecell}>
            {column}
            <span>
                {sortType == 'asc' ?
                    <BsArrowDownSquareFill onClick={sortTypeHandler} /> : <BsArrowUpSquareFill onClick={sortTypeHandler} />}
            </span>
        </th>
    )
}

function TableHeader({ columns, pageLimit, setPageLimit, sortType, sortTypeHandler }: headerProps) {
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
                            sortType={sortType}
                            column={column}
                            key={column}
                            sortTypeHandler={sortTypeHandler}
                        />
                    ))}
                </tr>
            </thead>
        </React.Fragment>
    );
}

export default TableHeader;