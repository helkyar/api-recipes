# Api-Recipes

### Guía enrutación de recetas custom API

**Para meal por id:**  
- /meals/:id

**Para meals por primera(s) letra(s):**  
- /meals/?f={letter}
 
**Para el título de cada categoría:**  
- /categories

**Para meals filtrados por categoría:**  
- /meals/?c={Dessert}

**Para meals filtrados por área:**  
- /meals/?a={American}

**Para meals filtrados por área y por categoría:**  
- /meals/?a={American}&c={Pasta}

**Para meals por nombre:**  
Devuelve cualquier meal que incluya el query param en el nombre de la receta. Por ejemplo, la ruta de abajo devuelve la receta para ‘Gołąbki (cabbage roll)’.
- /meals/?s={cabbage}
