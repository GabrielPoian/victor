import React from 'react';

const Acompanhamento = ({ pacientes, medicamentos, onExcluirPaciente, onExcluirMedicamento }) => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-300 p-8 rounded-md shadow-lg text-white mb-6 float-right w-1/3 h-screen">
      <h2 className="text-2xl font-bold mb-4">Acompanhamento dos Pacientes</h2>
      <ul className="space-y-4 overflow-y-auto">
        {pacientes.map((paciente, index) => (
          <li key={paciente.nome} className="bg-purple-400 text-white px-4 py-2 rounded">
            <strong className="text-lg">{`Nome do Paciente: ${paciente.nome}, Idade: ${paciente.idade}`}</strong>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => onExcluirPaciente(paciente.nome)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300"
              >
                Remover Paciente
              </button>
            </div>
            {medicamentos
              .filter(m => m.paciente === paciente.nome)
              .map((medicamento, medIndex) => (
                <div key={medIndex} className="mt-2 ml-4">
                  <strong className="text-lg">{`Medicação para ${paciente.nome}: ${medicamento.medicamento}`}</strong>
                  <ul className="list-disc ml-4">
                    <li>{`Horário de Administração: ${medicamento.horario}, Dosagem: ${medicamento.dosagem}`}</li>
                    <button
                      onClick={() => onExcluirMedicamento(paciente.nome, medicamento.medicamento)}
                      className="mt-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300"
                    >
                      Remover Medicação
                    </button>
                  </ul>
                </div>
              ))
            }
            {index < pacientes.length - 1 && <hr className="my-4 border-gray-300" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Acompanhamento;
