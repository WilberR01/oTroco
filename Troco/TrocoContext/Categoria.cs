﻿namespace OTroco.TrocoContext
{
    public class Categoria
    {
        public long Id { get; set; }
        public required string Nome { get; set; }
        public string? Descricao { get; set; }
    }
}
