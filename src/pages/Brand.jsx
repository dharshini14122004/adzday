'use client'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialPeople = [
  {
    name: 'Create a Brand',
    title: 'Click here to add an actionable brand that can',
    role: '',
    email: '',
    telephone: '',
    imageUrl: '',
  },
  {
    name: 'AppXcess',
    title: '4 Projects Created',
    role: '',
    email: '',
    telephone: '',
    imageUrl: '',
  },
  {
    name: 'NextGen Solutions',
    title: '3 Projects Created',
    role: '',
    email: '',
    telephone: '',
    imageUrl: '',
  },
  {
    name: 'ProFusion Labs',
    title: '5 Projects Created',
    role: '',
    email: '',
    telephone: '',
    imageUrl: '',
  },
  {
    name: 'Creative Minds',
    title: '2 Projects Created',
    role: '',
    email: '',
    telephone: '',
    imageUrl: '',
  },
  {
    name: 'TechSphere',
    title: '6 Projects Created',
    role: '',
    email: '',
    telephone: '',
    imageUrl: '',
  },
  {
    name: 'InnoWorks',
    title: '1 Project Created',
    role: '',
    email: '',
    telephone: '',
    imageUrl: '',
  },
];

export default function Brand() {
  const [people, setPeople] = useState(initialPeople);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const navigate = useNavigate();
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleSearchBlur = () => {
    setIsExpanded(false);
  };

  const handleDelete = (name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${name}"?`);
    if (confirmDelete) {
      setPeople((prevPeople) => prevPeople.filter((person) => person.name !== name));
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(filteredPeople[index].name);
  };

  const handleSaveEdit = (index) => {
    const confirmEdit = window.confirm(`Are you sure you want to change the project name to "${editName}"?`);
    if (confirmEdit) {
      setPeople((prevPeople) => {
        const updatedPeople = [...prevPeople];
        updatedPeople[index].name = editName; // Update the project name
        return updatedPeople;
      });
      setEditIndex(null);
      setEditName('');
    }
  };

  const totalProjects = people.length - 1; // Exclude the "Create a Brand" item

  return (
    <main className="main-content py-3 lg:pl-0">
      <div className="content-container px-4 sm:px-6 lg:px-3">
        <div className="header-container md:flex md:items-center md:justify-between bg-gray-500 p-4 rounded-lg">
          <div className="header-title-container flex-1 min-w-0">
            <h3 className="header-title text-2xl font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
              Brands
            </h3>
            <div className="header-description text-sm text-gray-300 mt-1">
              Select the project and create your brand
            </div>
          </div>
          <div className="search-bar-container mt-4 flex md:mt-0 md:ml-4">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={handleSearchClick}
              onBlur={handleSearchBlur}
              className={`search-input w-48 px-4 py-2 text-sm rounded-md border border-gray-300 shadow-xs bg-white/10 text-white placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out ${
                isExpanded ? 'w-170' : 'h-12'
              }`}
            />
          </div>
        </div>

        {/* Display the total number of projects below the header container */}
        <div className="mt-8 text-gray-500  bold text-sm">
          Total number of projects created: {totalProjects}/6
        </div>

        {/* Filtered People List Section */}
        <div className="people-list-section mt-6">
          <ul role="list" className="people-grid grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 mt-4">
            {filteredPeople.slice(0, 4).map((person, index) => (
              <li
                key={person.name}
                className={`people-item col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-sm cursor-pointer ${person.name === 'Create a Brand' ? 'create-brand-item border-4 border-dotted border-gray-400' : ''}`}
                onClick={() => person.name === 'Create a Brand' && navigate('/brand/create')}
              >
                <div className="people-content flex flex-1 flex-col p-8 h-full group">
                  {person.name === 'Create a Brand' && (
                    <div className="flex justify-center mb-2">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  )}
                  <h3 className="people-name mt-2 text-base font-medium text-gray-900">{person.name}</h3>
                  <dl className="people-details mt-1 flex grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="people-title text-sm text-gray-500">{person.title}</dd>
                  </dl>
                  {/* Show labels only for the top 3 boxes (excluding the first) */}
                  {index > 0 && (
                    <div className="label-container mt-4 flex justify-center gap-2 opacity-0 transform translate-y-12 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                      <span
                        className="edit-label text-sm text-blue-600 cursor-pointer hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white rounded-md w-24 h-10 flex items-center justify-center transition duration-300"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </span>
                      <span
                        className="delete-label text-sm text-red-600 cursor-pointer hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white rounded-md w-24 h-10 flex items-center justify-center transition duration-300"
                        onClick={() => handleDelete(person.name)}
                      >
                        Delete
                      </span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <ul role="list" className="people-grid grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-4">
            {filteredPeople.slice(0,4).map((person, index) => (
              <li
                key={person.name}
                className="people-item col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-sm group"
              >
                <div className="people-content flex flex-1 flex-col p-8 h-full group">
                  {editIndex === index + 4 ? (
                    <>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="edit-input w-full px-2 py-1 rounded-md border border-gray-300"
                      />
                      <button
                        onClick={() => handleSaveEdit(index + 4)}
                        className="save-button mt-2 text-sm text-blue-600"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <h3 className="people-name mt-6 text-base font-medium text-gray-900">{person.name}</h3>
                      <dl className="people-details mt-1 flex grow flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="people-title text-sm text-gray-500">{person.title}</dd>
                      </dl>
                      <div className="label-container mt-4 flex justify-center gap-2 opacity-0 transform translate-y-12 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                        <span
                          className="edit-label text-sm text-blue-600 cursor-pointer hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white rounded-md w-24 h-10 flex items-center justify-center transition duration-300"
                          onClick={() => handleEdit(index + 4)}
                        >
                          Edit
                        </span>
                        <span
                          className="delete-label text-sm text-red-600 cursor-pointer hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white rounded-md w-24 h-10 flex items-center justify-center transition duration-300"
                          onClick={() => handleDelete(person.name)}
                        >
                          Delete
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
