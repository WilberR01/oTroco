using AutoMapper;
using OTroco.TrocoContext;
using Troco.TrocoContext;
using Troco.ViewModels;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<CategoriaVM, Categoria>().ReverseMap();
        CreateMap<VendedorVM, Vendedor>().ReverseMap();
        CreateMap<ProdutoVM, Produto>().ReverseMap();
        CreateMap<SubComandaVM, SubComanda>().ReverseMap();
        CreateMap<TrocaVM, Troca>().ReverseMap();
        CreateMap<ComandaVM, Comanda>().ReverseMap();
        CreateMap<ProdutoVendedorVM, ProdutoVendedor>().ReverseMap();
    }
}