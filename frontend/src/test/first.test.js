import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

// Mock dos componentes Botao e Input
jest.mock('../../componentes/Botao', () => ({ Icone }) => (
  <button>{Icone && <Icone />}</button>
));
jest.mock('../../componentes/Input', () => ({ textoInput }) => (
  <input placeholder={textoInput} />
));

// Mock do lucide-react
jest.mock('lucide-react', () => ({
  Search: () => <svg>Search Icon Mock</svg>,
}));

describe('Home Component', () => {
  const renderWithRouter = (component) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  test('renderiza o logo pequena no header', () => {
    renderWithRouter(<Home />);
    const logoPequena = screen.getByAltText(/logo/i);
    expect(logoPequena).toBeInTheDocument();
    expect(logoPequena).toHaveAttribute('src', '/imagens/logo_pequena.png');
  });

  test('renderiza os links de navegação corretamente', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/agendar consulta/i)).toBeInTheDocument();
    expect(screen.getByText(/calendário médico/i)).toBeInTheDocument();
    expect(screen.getByText(/cadastrar-se/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/sobre/i)).toBeInTheDocument();
  });
});