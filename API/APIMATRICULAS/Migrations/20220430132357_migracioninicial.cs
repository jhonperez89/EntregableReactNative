using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace APIMATRICULAS.Migrations
{
    public partial class migracioninicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Alumno_se_matricula_asignaturaItems",
                columns: table => new
                {
                    id_alumno = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    id_asignatura = table.Column<int>(nullable: false),
                    id_curso_escolar = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alumno_se_matricula_asignaturaItems", x => x.id_alumno);
                });

            migrationBuilder.CreateTable(
                name: "AsignaturaItems",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(nullable: false),
                    creditos = table.Column<int>(nullable: false),
                    tipo = table.Column<string>(nullable: false),
                    curso = table.Column<int>(nullable: false),
                    cuatrimestre = table.Column<int>(nullable: false),
                    id_profesor = table.Column<int>(nullable: false),
                    id_grado = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AsignaturaItems", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Curso_escolarItems",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ano_inicio = table.Column<int>(nullable: false),
                    ano_fin = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Curso_escolarItems", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "DepartamentoItems",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartamentoItems", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "GradoItems",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GradoItems", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "PersonaItems",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nif = table.Column<string>(nullable: false),
                    nombre = table.Column<string>(nullable: false),
                    apellido1 = table.Column<string>(nullable: false),
                    apellido2 = table.Column<string>(nullable: false),
                    ciudad = table.Column<string>(nullable: false),
                    direccion = table.Column<string>(nullable: false),
                    telefono = table.Column<string>(nullable: true),
                    fecha_nacimiento = table.Column<DateTime>(nullable: false),
                    sexo = table.Column<string>(nullable: false),
                    tipo = table.Column<string>(nullable: false),
                    Clave = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonaItems", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ProfesorItems",
                columns: table => new
                {
                    id_profesor = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    id_departamento = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProfesorItems", x => x.id_profesor);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Alumno_se_matricula_asignaturaItems");

            migrationBuilder.DropTable(
                name: "AsignaturaItems");

            migrationBuilder.DropTable(
                name: "Curso_escolarItems");

            migrationBuilder.DropTable(
                name: "DepartamentoItems");

            migrationBuilder.DropTable(
                name: "GradoItems");

            migrationBuilder.DropTable(
                name: "PersonaItems");

            migrationBuilder.DropTable(
                name: "ProfesorItems");
        }
    }
}
