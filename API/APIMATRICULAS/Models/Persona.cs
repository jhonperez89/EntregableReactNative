using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace APIMATRICULAS.Models
{
    public class Persona
    {
        [Required]
        [Key]
        public int id { get; set; }
        [Required]
        public string nif { get; set; }
        [Required]
        public string nombre { get; set; }
        [Required]
        public string apellido1 { get; set; }
        [Required]
        public string apellido2 { get; set; }
        [Required]
        public string ciudad { get; set; }
        [Required]
        public string direccion { get; set; }
        public string telefono { get; set; }
       public DateTime fecha_nacimiento { get; set; }
        [Required]
        public string sexo { get; set; }
        [Required]
        public string tipo { get; set; }
        public string Clave { get; set; }
    }
}
