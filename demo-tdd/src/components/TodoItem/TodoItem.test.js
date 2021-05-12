import Reach from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import TodoList from '../TodoList/TodoList';
import TodoItem from './TodoItem';
import mockData from '../../mockData';

it('should show title of todos', () => {
    render(<TodoList todos={mockData} />);
    screen.debug();
});

it('should render todo item with checkbox.', () => {
    render(<TodoItem todo={mockData[0]} />);
    expect(screen.getByTestId('checkbox-1')).toBeInTheDocument();
    expect(screen.queryByText(/eat breakfast/i)).toBeInTheDocument();
});

describe('<TodoItem /> tests', () => {
    it('should render todo item properly', () => {
        render(<TodoItem todo={mockData[0]} />);
        expect(screen.queryByText(/eat breakfast/i)).toBeInTheDocument();
        expect(screen.getByTestId('close-btn-1')).toBeInTheDocument();
    });
});
