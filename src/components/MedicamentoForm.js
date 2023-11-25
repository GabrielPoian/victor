// src/components/MedicamentoForm.js
import React, { useState } from 'react';

const MedicamentoForm = ({ pacientes, onMedicamentoSubmit }) => {
  const [pacienteSelecionado, setPacienteSelecionado] = useState('');
  const [medicamento, setMedicamento] = useState('');
  const [horario, setHorario] = useState('');
  const [dosagem, setDosagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedicamento = {
      paciente: pacienteSelecionado,
      medicamento,
      horario,
      dosagem,
    };
    onMedicamentoSubmit(newMedicamento);
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    localStorage.setItem('medicamentos', JSON.stringify([...medicamentos, newMedicamento]));
    setPacienteSelecionado('');
    setMedicamento('');
    setHorario('');
    setDosagem('');
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 rounded-md shadow-lg text-white mb-6">
      <h2 className="text-3xl font-semibold mb-6">Novo Cadastro de Medicamento</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="pacienteSelecionado" className="block text-sm font-medium text-gray-300">Paciente:</label>
          <select
            id="pacienteSelecionado"
            value={pacienteSelecionado}
            onChange={(e) => setPacienteSelecionado(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-500 rounded text-white bg-gray-700"
            required
          >
            <option value="" disabled>Escolha o Paciente</option>
            {pacientes.map(paciente => (
              <option key={paciente.nome} value={paciente.nome}>{paciente.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="medicamento" className="block text-sm font-medium text-gray-300">Nome do Medicamento:</label>
          <input
            type="text"
            id="medicamento"
            value={medicamento}
            onChange={(e) => setMedicamento(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-500 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="horario" className="block text-sm font-medium text-gray-300">Horário de Administração:</label>
          <input
            type="time"
            id="horario"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-500 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="dosagem" className="block text-sm font-medium text-gray-300">Dosagem:</label>
          <input
            type="text"
            id="dosagem"
            value={dosagem}
            onChange={(e) => setDosagem(e.target.value)}
            placeholder="Ex: 200ml, 2 comprimidos"
            className="mt-1 p-3 w-full border border-gray-500 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Cadastrar Medicamento
        </button>
      </form>
    </div>
  );
};

export default MedicamentoForm;
