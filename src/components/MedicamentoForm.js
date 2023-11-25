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
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-8 rounded-md shadow-lg text-white mb-6 float-left w-1/3 h-screen">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Nova Medicação</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="pacienteSelecionado" className="block text-sm font-medium text-gray-300">Selecione o Paciente:</label>
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

        <div className="mb-4">
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

        <div className="mb-4">
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

        <div className="mb-4">
          <label htmlFor="dosagem" className="block text-sm font-medium text-gray-300">Dosagem:</label>
          <input
            type="text"
            id="dosagem"
            value={dosagem}
            onChange={(e) => setDosagem(e.target.value)}
            
            className="mt-1 p-3 w-full border border-gray-500 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Cadastrar Medicação
          </button>
        </div>
      </form>
    </div>
  );
};

export default MedicamentoForm;
