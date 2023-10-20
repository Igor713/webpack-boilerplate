import GenerateCPF from './modules/GenerateCPF';

import './assets/css/style.css';

(function () {
  const generator = new GenerateCPF();
  const generatedCPF = document.querySelector('.generated-cpf');
  generatedCPF.innerHTML = generator.generateNewCPF();
})();
