<h1 class="nombre-pagina">Crear Cuenta</h1>
<p class="descripcion-pagina">LLena el siguiente formulario para crear una cuenta</p>

<form class="formulario" method="POST" action="/crear-cuenta">
    <div class="campo">
        <label for="nombre">Nombre</label>
        <input 
            type="text"
            id="nombre"
            placeholder="Tu Nombre"
            name="nombre"
            >
    </div>

    <div class="campo">
        <label for="apellido">Apellido</label>
            <input 
                type="apellido"
                id="apellido"
                placeholder="Tu Apellido"
                name="apellido"
             >
    </div>

    <div class="campo">
        <label for="telefono">Teléfono</label>
            <input 
                type="tel"
                id="telefono"
                placeholder="Tu Teléfono"
                name="telefono"
             >
    </div>

    <div class="campo">
        <label for="email">Email</label>
        <input 
            type="email"
            id="email"
            placeholder="Tu Email"
            name="email"
            >
    </div>

    <div class="campo">
        <label for="password">Password</label>
            <input 
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
             >
    </div>

    <input type="submit" class="boton" value="Crear Cuenta">
</form>


<div class="acciones">
    <a href="/">¿Ya tienes una cuenta? Inicia Sesión</a>
    <a href="/olvide">¿Olvidaste tu password?</a>
</div>