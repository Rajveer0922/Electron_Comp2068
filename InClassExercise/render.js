window.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('saveButton');
    const loadButton = document.getElementById('loadButton');
    const input = document.getElementById('input');
    const output = document.getElementById('output');
  
    saveButton.addEventListener('click', () => {
      const inputValue = input.value;
      localStorage.setItem('data', inputValue);
    });
  
    loadButton.addEventListener('click', () => {
      output.textContent = localStorage.getItem('data') || 'No data found';
    });
  });
  