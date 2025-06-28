namespace OTroco.TrocoContext
{
    public class Vendedor
    {
        public long Id { get; set; }
        public required string Nome { get; set; }
        public required decimal Comissao { get; set; }
        public List<Produto> ProdutosComissionados { get; set; } = new List<Produto>();

        public decimal ValorAbatimento(List<Produto> produtos)
        {
            var produtosPermitidos = produtos
                .Where(p => ProdutosComissionados.Any(pc => pc.Id == p.Id))
                .ToList();

            if(produtosPermitidos.Count == 0)
                return 0;

            return produtosPermitidos.Sum(p => p.Preco) * Comissao;
        }
    }
}
