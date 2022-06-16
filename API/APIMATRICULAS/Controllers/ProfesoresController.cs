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
    public class ProfesoresController : ControllerBase
    {
        // creaamos el objeto que apiunta a la clase profesorContexto para poder tener acceso a todos los campos de la tabla
        //
        private readonly ConjuntoDeDatosContexto _context;

        public ProfesoresController(ConjuntoDeDatosContexto contexto)
        {
            //Cargamos la variable objeto con los campos de la tabla
            //
            _context = contexto;
        }
        [HttpGet]
        public async Task <ActionResult<IEnumerable<Profesor>>> GetProfesorItems()
        {
            return await _context.ProfesorItems.ToListAsync();
        }
       
    }
}
