import React, { useState } from 'react';

const PacienteForm = ({ onPacienteSubmit }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPaciente = { nome, idade };
    const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    localStorage.setItem('pacientes', JSON.stringify([...pacientes, newPaciente]));
    onPacienteSubmit(newPaciente);
    setNome('');
    setIdade('');
  };

  return (
    <div className="bg-gradient-to-r from-yellow-600 to-yellow-300 p-8 rounded-md shadow-lg text-white mb-6 float-left w-1/3 h-screen">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Novo Paciente</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-300">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-1 p-3 w-full border border-yellow-300 rounded-md text-gray-800 focus:outline-none focus:ring focus:border-yellow-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="idade" className="block text-sm font-medium text-gray-300">Idade:</label>
          <input
            type="number"
            id="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            className="mt-1 p-3 w-full border border-yellow-300 rounded-md text-gray-800 focus:outline-none focus:ring focus:border-yellow-500"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
          >
            Cadastrar Paciente
          </button>
        </div>
      </form>
    </div>
  );
};

export default PacienteForm;
