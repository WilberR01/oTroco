using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OTroco.TrocoContext;
using Troco.Interfaces;
using Troco.ViewModels;

namespace Troco.Controllers
{
    [ApiController]
    [Route("categoria")]
    public class CategoriaController : CadastroController<Categoria, CategoriaVM>
    {
        private readonly IMapper _mapper;
        private readonly IServicoDeCadastro<Categoria> _servico;
        public CategoriaController(IServicoDeCadastro<Categoria> servico, IMapper mapper) : base(servico, mapper)
        {
            _mapper = mapper;
            _servico = servico;
        }
    }
}
