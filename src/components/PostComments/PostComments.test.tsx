import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir a inserção de dois comentários e renderizá-los na tela', () => {
        render(<Post />);

        const commentInput = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('comment-submit-button');

        // comentário 1
        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        // comentário 2
        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        // Verificação
        const comments = screen.getAllByTestId('comment-item');
        expect(comments).toHaveLength(2);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
