import { useState } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsius = (valor) => {
    setCelsius(valor);
    if (valor === '') {
      setFahrenheit('');
    } else {
      setFahrenheit((Number(valor) * 1.8 + 32).toFixed(2));
    }
  };

  const handleFahrenheit = (valor) => {
    setFahrenheit(valor);
    if (valor === '') {
      setCelsius('');
    } else {
      setCelsius(((Number(valor) - 32) / 1.8).toFixed(2));
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <input 
        type="number" 
        placeholder="Celsius" 
        value={celsius} 
        onChange={(e) => handleCelsius(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Fahrenheit" 
        value={fahrenheit} 
        onChange={(e) => handleFahrenheit(e.target.value)} 
      />
    </div>
  );
}