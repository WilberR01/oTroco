using OTroco.TrocoContext;

namespace Troco.TrocoContext
{
    public class ProdutoVendedor
    {
        public long Id { get; set; }
        public required Vendedor Vendedor { get; set; }
        public required Produto Produto { get; set; }
    }
}
