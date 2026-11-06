<?php include  "header.php"; ?>
    <main>
        <h1>Contacto</h1>
        <form action="enviar.php" method="POST" class="formulario" >
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="correo">Email:</label>
            <input type="email" id="correo" name="correo"  required>

            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje"  rows="5" required></textarea>

            <button type="submit">Enviar</button>
        </form>

       <p id="mensajes"></p>
   

    </main> 



    <?php include  "footer.php"; ?>