import React, { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
} from 'lucide-react';

export default function UserHierarchyNodeTable({
  data,
  searchTerm,
  currentPage,
  rowsPerPage,
  onPageChange,
}) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });

  const normalizedSearch = String(searchTerm || '')
    .trim()
    .toLowerCase();

  // Search/filter records
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const searchableValues = [
        item.mappingId,
        item.externalUserId,
        item.hierarchyNodeId,
        item.roleCode,
        item.isPrimary ? 'yes' : 'no',
        item.effectiveFrom,
        item.effectiveTo || '',
      ];

      return searchableValues.some((value) =>
        String(value).toLowerCase().includes(normalizedSearch)
      );
    });
  }, [data, normalizedSearch]);

  // Sort the filtered records
  const sortedData = useMemo(() => {
    const copiedData = [...filteredData];

    if (!sortConfig.key) {
      return copiedData;
    }

    copiedData.sort((firstItem, secondItem) => {
      let firstValue = firstItem[sortConfig.key];
      let secondValue = secondItem[sortConfig.key];

      if (typeof firstValue === 'string') {
        firstValue = firstValue.toLowerCase();
      }

      if (typeof secondValue === 'string') {
        secondValue = secondValue.toLowerCase();
      }

      if (firstValue < secondValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }

      if (firstValue > secondValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }

      return 0;
    });

    return copiedData;
  }, [filteredData, sortConfig]);

  // Pagination calculations
  const totalPages = Math.max(
    1,
    Math.ceil(sortedData.length / rowsPerPage)
  );

  const safeCurrentPage = Math.min(
    Math.max(currentPage, 1),
    totalPages
  );

  const firstRecordIndex =
    (safeCurrentPage - 1) * rowsPerPage;

  const lastRecordIndex =
    firstRecordIndex + rowsPerPage;

  const pageData = sortedData.slice(
    firstRecordIndex,
    lastRecordIndex
  );

  const firstShown =
    sortedData.length === 0 ? 0 : firstRecordIndex + 1;

  const lastShown = Math.min(
    lastRecordIndex,
    sortedData.length
  );

  // Sorting click
  const handleSort = (key) => {
    setSortConfig((previousSort) => {
      if (
        previousSort.key === key &&
        previousSort.direction === 'ascending'
      ) {
        return {
          key,
          direction: 'descending',
        };
      }

      return {
        key,
        direction: 'ascending',
      };
    });

    onPageChange(1);
  };

  // Sorting icon
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return (
        <ArrowUpDown
          size={13}
          strokeWidth={2}
          className="shrink-0 text-slate-400"
        />
      );
    }

    if (sortConfig.direction === 'ascending') {
      return (
        <ArrowUp
          size={13}
          strokeWidth={2}
          className="shrink-0 text-blue-600"
        />
      );
    }

    return (
      <ArrowDown
        size={13}
        strokeWidth={2}
        className="shrink-0 text-blue-600"
      />
    );
  };

  const SortableHeading = ({
    columnKey,
    children,
  }) => {
    return (
      <th className="px-2 py-4 text-center">
        <button
          type="button"
          onClick={() => handleSort(columnKey)}
          className="mx-auto flex min-h-[32px] items-center justify-center gap-1 text-center text-inherit"
        >
          <span className="leading-tight">
            {children}
          </span>

          {getSortIcon(columnKey)}
        </button>
      </th>
    );
  };

  return (
    <div className="space-y-5 font-sans">
      {/* Table */}
      <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full table-auto border-collapse bg-white text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-bold uppercase tracking-wide text-slate-500">
              <th className="px-2 py-4 text-center">
                S.No
              </th>

              <SortableHeading columnKey="mappingId">
                Mapping ID
              </SortableHeading>

              <SortableHeading columnKey="externalUserId">
                External User ID
              </SortableHeading>

              <SortableHeading columnKey="hierarchyNodeId">
                Hierarchy Node ID
              </SortableHeading>

              <SortableHeading columnKey="roleCode">
                Role Code
              </SortableHeading>

              <SortableHeading columnKey="isPrimary">
                Is Primary
              </SortableHeading>

              <SortableHeading columnKey="effectiveFrom">
                Effective From
              </SortableHeading>

              <SortableHeading columnKey="effectiveTo">
                Effective To
              </SortableHeading>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            {pageData.length > 0 ? (
              pageData.map((item, index) => (
                <tr
                  key={item.mappingId}
                  className="transition-colors hover:bg-slate-50/50"
                >
                  <td className="px-2 py-4 text-center font-medium text-slate-400">
                    {firstRecordIndex + index + 1}
                  </td>

                  <td className="px-2 py-4 text-center font-semibold text-slate-700">
                    {item.mappingId}
                  </td>

                  <td className="px-2 py-4 text-center">
                    <span className="inline-block rounded-md border border-slate-200 bg-slate-100 px-2 py-1 font-mono text-xs font-bold text-slate-800">
                      {item.externalUserId}
                    </span>
                  </td>

                  <td className="px-2 py-4 text-center font-medium text-slate-600">
                    {item.hierarchyNodeId}
                  </td>

                  <td className="px-2 py-4 text-center">
                    <span className="inline-block rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">
                      {item.roleCode}
                    </span>
                  </td>

                  <td className="px-2 py-4 text-center">
                    <span
                      className={`inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-xs font-bold ${
                        item.isPrimary
                          ? 'border-green-200 bg-green-50 text-green-700'
                          : 'border-red-200 bg-red-50 text-red-600'
                      }`}
                    >
                      {item.isPrimary ? '✓ Yes' : '✕ No'}
                    </span>
                  </td>

                  <td className="px-2 py-4 text-center font-medium text-slate-600">
                    {item.effectiveFrom}
                  </td>

                  <td className="px-2 py-4 text-center font-medium text-slate-600">
                    {item.effectiveTo || '—'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={8}
                  className="px-5 py-12 text-center text-sm text-slate-400"
                >
                  No user hierarchy mappings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col gap-3 px-1 pt-1 text-xs font-medium text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>
          Showing {firstShown} to {lastShown} of{' '}
          {sortedData.length} entries
        </span>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={safeCurrentPage === 1}
            onClick={() =>
              onPageChange(
                Math.max(1, safeCurrentPage - 1)
              )
            }
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-600 shadow-sm hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ‹
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => {
              const pageNumber = index + 1;

              return (
                <button
                  type="button"
                  key={pageNumber}
                  onClick={() =>
                    onPageChange(pageNumber)
                  }
                  className={
                    pageNumber === safeCurrentPage
                      ? 'rounded-lg bg-blue-600 px-3.5 py-1.5 font-bold text-white shadow-md shadow-blue-500/20'
                      : 'rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-slate-600 shadow-sm hover:bg-slate-50'
                  }
                >
                  {pageNumber}
                </button>
              );
            }
          )}

          <button
            type="button"
            disabled={
              safeCurrentPage === totalPages
            }
            onClick={() =>
              onPageChange(
                Math.min(
                  totalPages,
                  safeCurrentPage + 1
                )
              )
            }
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-600 shadow-sm hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}