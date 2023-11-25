// src/components/PacienteForm.js
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
    <div className="bg-gradient-to-r from-blue-800 to-blue-500 p-8 rounded-md shadow-lg text-white mb-6">
    <h2 className="text-3xl font-semibold mb-6">Novo Cadastro de Paciente</h2>
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-300">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="mt-1 p-3 w-full border border-blue-300 rounded-md text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>
  
      <div>
        <label htmlFor="idade" className="block text-sm font-medium text-gray-300">Idade:</label>
        <input
          type="number"
          id="idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          className="mt-1 p-3 w-full border border-blue-300 rounded-md text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>
  
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
      >
        Cadastrar Paciente
      </button>
    </form>
  </div>
  
  

  
  );
};

export default PacienteForm;
