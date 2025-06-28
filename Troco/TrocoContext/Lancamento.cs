namespace OTroco.TrocoContext
{
    public class Lancamento
    {
        public long Id { get; set; }
        public required DateTime Data { get; set; }
        public required decimal Valor { get; set; }
    }
}
