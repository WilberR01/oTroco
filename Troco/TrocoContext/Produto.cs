namespace OTroco.TrocoContext
{
    public class Produto
    {
        public long Id { get; set; }
        public required string Nome { get; set; }
        public required decimal Preco { get; set; }
        public Categoria? Categoria { get; set; }
    }
}
