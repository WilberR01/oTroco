using AutoMapper;
using OTroco.TrocoContext;
using Troco.ViewModels;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<CategoriaVM, Categoria>().ReverseMap();
        CreateMap<VendedorVM, Vendedor>().ReverseMap();
        CreateMap<ProdutoVM, Produto>().ReverseMap();
    }
}