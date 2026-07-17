import React, { useState } from 'react';

import AddButton from '../components/userhierarchynodemapping/addbutton';
import SearchBar from '../components/userhierarchynodemapping/searchbar';
import UserHierarchyNodeTable from '../components/userhierarchynodemapping/userhierarchynodetable';
import AddUserHierarchyNode from '../components/userhierarchynodemapping/adduserhierarchynode';

const initialMappings = [
  {
    mappingId: 1,
    externalUserId: 101,
    hierarchyNodeId: 2,
    roleCode: 'DEO',
    isPrimary: true,
    effectiveFrom: '2026-01-01',
    effectiveTo: '',
  },
  {
    mappingId: 2,
    externalUserId: 101,
    hierarchyNodeId: 3,
    roleCode: 'RO',
    isPrimary: false,
    effectiveFrom: '2026-01-01',
    effectiveTo: '',
  },
  {
    mappingId: 3,
    externalUserId: 102,
    hierarchyNodeId: 4,
    roleCode: 'AO',
    isPrimary: true,
    effectiveFrom: '2026-01-03',
    effectiveTo: '',
  },
  {
    mappingId: 4,
    externalUserId: 103,
    hierarchyNodeId: 5,
    roleCode: 'SO',
    isPrimary: false,
    effectiveFrom: '2026-01-05',
    effectiveTo: '2026-12-31',
  },
  {
    mappingId: 5,
    externalUserId: 104,
    hierarchyNodeId: 6,
    roleCode: 'DEO',
    isPrimary: true,
    effectiveFrom: '2026-01-07',
    effectiveTo: '',
  },
  {
    mappingId: 6,
    externalUserId: 105,
    hierarchyNodeId: 7,
    roleCode: 'RO',
    isPrimary: false,
    effectiveFrom: '2026-01-09',
    effectiveTo: '',
  },
  {
    mappingId: 7,
    externalUserId: 106,
    hierarchyNodeId: 8,
    roleCode: 'AO',
    isPrimary: true,
    effectiveFrom: '2026-01-11',
    effectiveTo: '',
  },
  {
    mappingId: 8,
    externalUserId: 107,
    hierarchyNodeId: 9,
    roleCode: 'SO',
    isPrimary: false,
    effectiveFrom: '2026-01-13',
    effectiveTo: '2026-09-30',
  },
  {
    mappingId: 9,
    externalUserId: 108,
    hierarchyNodeId: 10,
    roleCode: 'DEO',
    isPrimary: true,
    effectiveFrom: '2026-01-15',
    effectiveTo: '',
  },
  {
    mappingId: 10,
    externalUserId: 109,
    hierarchyNodeId: 11,
    roleCode: 'RO',
    isPrimary: false,
    effectiveFrom: '2026-01-17',
    effectiveTo: '',
  },
  {
    mappingId: 11,
    externalUserId: 110,
    hierarchyNodeId: 12,
    roleCode: 'AO',
    isPrimary: true,
    effectiveFrom: '2026-01-19',
    effectiveTo: '',
  },
  {
    mappingId: 12,
    externalUserId: 111,
    hierarchyNodeId: 13,
    roleCode: 'SO',
    isPrimary: false,
    effectiveFrom: '2026-01-21',
    effectiveTo: '2026-10-31',
  },
  {
    mappingId: 13,
    externalUserId: 112,
    hierarchyNodeId: 14,
    roleCode: 'DEO',
    isPrimary: true,
    effectiveFrom: '2026-01-23',
    effectiveTo: '',
  },
  {
    mappingId: 14,
    externalUserId: 113,
    hierarchyNodeId: 15,
    roleCode: 'RO',
    isPrimary: false,
    effectiveFrom: '2026-01-25',
    effectiveTo: '',
  },
  {
    mappingId: 15,
    externalUserId: 114,
    hierarchyNodeId: 16,
    roleCode: 'AO',
    isPrimary: true,
    effectiveFrom: '2026-01-27',
    effectiveTo: '',
  },
  {
    mappingId: 16,
    externalUserId: 115,
    hierarchyNodeId: 17,
    roleCode: 'SO',
    isPrimary: false,
    effectiveFrom: '2026-01-29',
    effectiveTo: '2026-11-30',
  },
  {
    mappingId: 17,
    externalUserId: 116,
    hierarchyNodeId: 18,
    roleCode: 'DEO',
    isPrimary: true,
    effectiveFrom: '2026-02-01',
    effectiveTo: '',
  },
  {
    mappingId: 18,
    externalUserId: 117,
    hierarchyNodeId: 19,
    roleCode: 'RO',
    isPrimary: false,
    effectiveFrom: '2026-02-03',
    effectiveTo: '',
  },
  {
    mappingId: 19,
    externalUserId: 118,
    hierarchyNodeId: 20,
    roleCode: 'AO',
    isPrimary: true,
    effectiveFrom: '2026-02-05',
    effectiveTo: '',
  },
  {
    mappingId: 20,
    externalUserId: 119,
    hierarchyNodeId: 21,
    roleCode: 'SO',
    isPrimary: false,
    effectiveFrom: '2026-02-07',
    effectiveTo: '2026-12-31',
  },
  {
    mappingId: 21,
    externalUserId: 120,
    hierarchyNodeId: 22,
    roleCode: 'DEO',
    isPrimary: true,
    effectiveFrom: '2026-02-09',
    effectiveTo: '',
  },
  {
    mappingId: 22,
    externalUserId: 121,
    hierarchyNodeId: 23,
    roleCode: 'RO',
    isPrimary: false,
    effectiveFrom: '2026-02-11',
    effectiveTo: '',
  },
  {
    mappingId: 23,
    externalUserId: 122,
    hierarchyNodeId: 24,
    roleCode: 'AO',
    isPrimary: true,
    effectiveFrom: '2026-02-13',
    effectiveTo: '',
  },
  {
    mappingId: 24,
    externalUserId: 123,
    hierarchyNodeId: 25,
    roleCode: 'SO',
    isPrimary: false,
    effectiveFrom: '2026-02-15',
    effectiveTo: '2026-08-31',
  },
  {
    mappingId: 25,
    externalUserId: 124,
    hierarchyNodeId: 26,
    roleCode: 'DEO',
    isPrimary: true,
    effectiveFrom: '2026-02-17',
    effectiveTo: '',
  },
];

export default function UserHierarchyNodeMappingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mappings, setMappings] = useState(initialMappings);
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleRowsChange = (value) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handleSaveMapping = (newMapping) => {
    const nextMappingId =
      mappings.length > 0
        ? Math.max(...mappings.map((item) => item.mappingId)) + 1
        : 1;

    setMappings((previousMappings) => [
      ...previousMappings,
      {
        mappingId: nextMappingId,
        ...newMapping,
      },
    ]);
  };

  return (
    <>
    <div className="max-w-[1180px] mx-auto px-6 space-y-5 ">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              User Hierarchy Node Mapping
            </h1>

            <p className="text-xs text-slate-400 mt-1">
              Dashboard &gt; Configuration &gt;{' '}
              <span className="text-blue-600 font-semibold">
                User Hierarchy Node Mapping
              </span>
            </p>
          </div>

          <AddButton onOpen={() => setModalOpen(true)} />
        </div>

        {/* Main Data Container */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            rowsPerPage={rowsPerPage}
            onRowsChange={handleRowsChange}
          />

          <UserHierarchyNodeTable
            data={mappings}
            searchTerm={searchTerm}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {/* Add Mapping Popup */}
      <AddUserHierarchyNode
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveMapping}
    />
    </>
  );
}