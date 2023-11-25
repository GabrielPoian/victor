// src/components/Acompanhamento.js
import React from 'react';

const Acompanhamento = ({ pacientes, medicamentos, onExcluirPaciente, onExcluirMedicamento }) => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-300 p-6 rounded-md shadow-lg text-white mb-6">
      <h2 className="text-3xl font-semibold mb-6">Acompanhamento de Pacientes</h2>
      <ul>
        {pacientes.map((paciente, index) => (
          <div key={paciente.nome} className="mb-4">
            <li className="flex items-center justify-between bg-green-400 text-white px-4 py-2 rounded">
              <strong className="text-lg">{`Paciente: ${paciente.nome}, Idade: ${paciente.idade}`}</strong>
              <button
                onClick={() => onExcluirPaciente(paciente.nome)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              >
                Excluir Paciente
              </button>
            </li>
            {medicamentos
              .filter(m => m.paciente === paciente.nome)
              .map((medicamento, medIndex) => (
                <div key={medIndex} className="mt-2">
                  <ul className="list-disc ml-4">
                    <strong className="text-lg">{`Medicamento para ${paciente.nome}: ${medicamento.medicamento}`}</strong>
                    <li>{`Horário: ${medicamento.horario}, Dosagem: ${medicamento.dosagem}`}</li>
                    <button
                      onClick={() => onExcluirMedicamento(paciente.nome, medicamento.medicamento)}
                      className="mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                    >
                      Excluir Medicamento
                    </button>
                  </ul>
                </div>
              ))
            }
            {index < pacientes.length - 1 && <hr className="my-4 border-gray-300" />}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Acompanhamento;
