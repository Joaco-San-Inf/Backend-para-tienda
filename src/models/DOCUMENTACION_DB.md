
# Documentación de la Base de Datos y sus Relaciones

Este documento explica la estructura y las relaciones entre las tablas (modelos) de la base de datos. El objetivo es guiar al desarrollador frontend sobre cómo deben enviarse los datos al API para crear nuevos registros en cada tabla, prestando especial atención a las claves foráneas (Foreign Keys).

## Modelos Principales

A continuación se detalla cada modelo, sus campos y las dependencias que tiene con otros modelos.

---

### 1. `User` (Usuario)

- **Propósito**: Almacena la información de los usuarios que pueden registrarse en el sistema.
- **Claves Foráneas Requeridas**: Ninguna.
- **Ejemplo de Petición `POST` para crear un `User`**:
  ```json
  {
    "user_name": "nombre_de_usuario",
    "email": "usuario@example.com",
    "password": "una_contraseña_segura"
  }
  ```

---

### 2. `Rol` (Rol)

- **Propósito**: Define los diferentes roles que un usuario puede tener (ej: "Administrador", "Vendedor", "Cliente").
- **Claves Foráneas Requeridas**: Ninguna.
- **Ejemplo de Petición `POST` para crear un `Rol`**:
  ```json
  {
    "rol_name": "Administrador"
  }
  ```

---

### 3. `Tienda`

- **Propósito**: Representa una tienda o negocio dentro de la plataforma. Es el contenedor principal para categorías y productos.
- **Claves Foráneas Requeridas**:
  - `id_propietario`: El `id` del `User` que es dueño de la tienda.
- **Ejemplo de Petición `POST` para crear una `Tienda`**:
  ```json
  {
    "tienda_name": "Mi Tienda de Electrónica",
    "description": "Los mejores gadgets y componentes.",
    "id_propietario": 1
  }
  ```

---

### 4. `Categoria`

- **Propósito**: Agrupa productos dentro de una tienda (ej: "Smartphones", "Laptops", "Accesorios").
- **Claves Foráneas Requeridas**:
  - `id_tienda_fk`: El `id` de la `Tienda` a la que pertenece esta categoría.
- **Ejemplo de Petición `POST` para crear una `Categoria`**:
  ```json
  {
    "categoria_name": "Smartphones",
    "description": "Teléfonos inteligentes de última generación.",
    "id_tienda_fk": 1
  }
  ```

---

### 5. `Producto`

- **Propósito**: Representa un artículo individual que se vende en una tienda.
- **Claves Foráneas Requeridas**:
  - `id_tienda_fk`: El `id` de la `Tienda` a la que pertenece el producto.
  - `id_categoria`: El `id` de la `Categoria` a la que pertenece el producto.
- **Ejemplo de Petición `POST` para crear un `Producto`**:
  ```json
  {
    "product_name": "Laptop Gamer XYZ",
    "product_image": "url_de_la_imagen.jpg",
    "stock": 15,
    "product_price": 1250.99,
    "id_tienda_fk": 1,
    "id_categoria": 3
  }
  ```

---

### 6. `UserRol` (Tabla de Unión)

- **Propósito**: Asigna un `Rol` a un `User` dentro de una `Tienda` específica. Permite que un usuario sea administrador de una tienda pero solo cliente en otra.
- **Claves Foráneas Requeridas**:
  - `user_id`: El `id` del `User`.
  - `rol_idfk`: El `id` del `Rol`.
  - `id_tienda_fk`: El `id` de la `Tienda` donde se aplica ese rol.
- **Ejemplo de Petición `POST` para asignar un rol**:
  ```json
  {
    "user_id": 2,
    "rol_idfk": 1,
    "id_tienda_fk": 1
  }
  ```

---

### 7. `Pedido`

- **Propósito**: Representa la cabecera de una orden de compra realizada por un usuario en una tienda.
- **Claves Foráneas Requeridas**:
  - `user_id`: El `id` del `User` que realiza el pedido.
  - `id_tienda_fk`: El `id` de la `Tienda` donde se realiza la compra.
- **Ejemplo de Petición `POST` para crear un `Pedido`**:
  ```json
  {
    "total": 540.50,
    "status": "pendiente",
    "user_id": 5,
    "id_tienda_fk": 1
  }
  ```

---

### 8. `PedidoDetalle`

- **Propósito**: Almacena cada línea de producto dentro de un `Pedido`.
- **Claves Foráneas Requeridas**:
  - `pedido_id`: El `id` del `Pedido` al que pertenece este detalle.
  - `product_id`: El `id` del `Producto` que se está comprando.
- **Nota**: Generalmente, se crean varios `PedidoDetalle` después de haber creado un `Pedido`.
- **Ejemplo de Petición `POST` para crear un `PedidoDetalle`**:
  ```json
  {
    "cantidad": 2,
    "precio": 25.00,
    "pedido_id": 123,
    "product_id": 45
  }
  ```

---

### 9. `Banner`

- **Propósito**: Almacena información para banners promocionales que se pueden mostrar en la tienda.
- **Claves Foráneas Requeridas**: Ninguna según el modelo, pero lógicamente debería asociarse a una tienda. Es posible que la relación falte en `index.js`.
- **Ejemplo de Petición `POST` para crear un `Banner`**:
  ```json
  {
    "title": "¡Oferta de Verano!",
    "image_url": "http://example.com/banner_verano.jpg",
    "link_url": "http://example.com/ofertas",
    "is_active": true
  }
  ```
