import React from 'react';
import styles from './styles.module.css';
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs';

type sorts = {
    columns: string;
    order: string;
}

interface headerProps {
    columns: Array<string>
    sorting: sorts
    pageLimit: number
    setPageLimit: (page: number) => void
}

type HeaderCellProps = {
    column: string;
    sorting: sorts;
}

const HeaderCell = ({ column, sorting }: HeaderCellProps) => {
        return (
        <th key={column} className={styles.tablecell}>
            {column}
            <span><BsArrowDownSquareFill /></span>
            {/* <span><BsArrowUpSquareFill /></span> */}
        </th>
    )
}

function TableHeader({ columns, sorting, pageLimit, setPageLimit }: headerProps) {
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPageLimit(parseInt(e.target.value));
    }
    return (
        <React.Fragment>
            <thead>
                <tr>
                    <th className={styles.tablecell} colSpan={columns.length - 1}></th>
                    <th className={styles.tablecell}>
                        <select value={pageLimit} onChange={handleOptionChange}>
                            <option value="">{pageLimit}</option>
                            <option value={15}>15</option>
                            <option value={30}>30</option>
                            <option value={50}>50</option>
                        </select>
                    </th>
                </tr>
            </thead>
            <thead>
                <tr>
                    {columns.map((column: string) => (
                        <HeaderCell
                            column={column}
                            sorting={sorting}
                            key={column}
                        />
                    ))}
                </tr>
            </thead>
        </React.Fragment>
    );
}

export default TableHeader;