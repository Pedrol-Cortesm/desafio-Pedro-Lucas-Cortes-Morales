class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const descontoDinheiro = 0.05;
        const acrescimoCredito = 0.03;
        const cardapio = {
            'cafe': 3.00,
            'chantily': 1.50,
            'suco': 6.20,
            'sanduiche': 6.50,
            'queijo': 2.00,
            'salgado': 7.25,
            'combo1': 9.50,
            'combo2': 7.50,
        };

        let valorTotal = 0;
        let hasPrincipal = false;

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            const precoItem = cardapio[codigo];

            if (!precoItem) {
                return "Item inválido!";
            }

            if (quantidade === '0') {
                return "Quantidade inválida!";
            }

            valorTotal += precoItem * parseInt(quantidade);

            if (codigo === 'cafe' || codigo === 'sanduiche') {
                hasPrincipal = true;
            } else if (hasPrincipal === false) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= (1 - descontoDinheiro);
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= (1 + acrescimoCredito);
        } else if (metodoDePagamento !== 'debito') {
            return "Forma de pagamento inválida!";
        }

        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };