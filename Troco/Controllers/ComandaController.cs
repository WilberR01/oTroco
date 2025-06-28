using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OTroco.TrocoContext;
using Troco.Interfaces;
using Troco.ViewModels;

namespace Troco.Controllers
{
    [ApiController]
    [Route("comanda")]
    public class ComandaController : CadastroController<Comanda, ComandaVM>
    {
        private readonly IMapper _mapper;
        private readonly IServicoDeCadastro<Comanda> _servico;
        public ComandaController(IServicoDeCadastro<Comanda> servico, IMapper mapper) : base(servico, mapper)
        {
            _mapper = mapper;
            _servico = servico;
        }
    }
}
