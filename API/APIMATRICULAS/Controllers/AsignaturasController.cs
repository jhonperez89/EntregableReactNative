using APIMATRICULAS.Data;
using APIMATRICULAS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace APIMATRICULAS.Controllers
{



    [Route("api/[Controler]")]
    [ApiController]
    public class AsignaturasController : ControllerBase
    {
       
        private readonly ConjuntoDeDatosContexto _context;

        public AsignaturasController(ConjuntoDeDatosContexto contexto)
        {
            _context = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Asignatura>>> GetAsignaturaItems()
        {
            return await _context.AsignaturaItems.ToListAsync();
        }
    }
}
