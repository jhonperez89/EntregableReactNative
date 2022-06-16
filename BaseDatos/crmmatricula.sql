--CRUD CREO PROCEDIMIENTO ALMACENADO PARA INSERTAR DEPARTAMENT

Create Procedure pa_Departamento_Insert
@id numeric,
@nombre varchar(50)

As
	INSERT INTO departamento (id, nombre)
		Values(@id, @nombre)

--
Create Procedure pa_Departamento_Update
@id numeric,
@nombre varchar(50)

As
	Update departamento 
		Set nombre = @nombre where id=@id
	

Create Procedure pa_Departamento_Select
@id numeric
As
	Select * from departamento  where id=@id


Create Procedure pa_Departamento_Delete
@id numeric
As
	Delete From departamento where id=@id
	