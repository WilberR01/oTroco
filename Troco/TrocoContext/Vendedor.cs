using Troco.TrocoContext;

namespace OTroco.TrocoContext
{
    public class Vendedor
    {
        public long Id { get; set; }
        public required string Nome { get; set; }
        public required decimal Comissao { get; set; }
        public List<ProdutoVendedor> ProdutosComissionados { get; set; } = new List<ProdutoVendedor>();

        public decimal ValorAbatimento(List<Produto> produtos)
        {
            var produtosPermitidos = produtos
                .Where(p => ProdutosComissionados.Any(pc => pc.Produto.Id == p.Id))
                .ToList();

            if(produtosPermitidos.Count == 0)
                return 0;

            return produtosPermitidos.Sum(p => p.Preco) * Comissao;
        }
    }
}
