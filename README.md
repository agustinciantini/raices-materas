# 🌿 **mateShop** 🍃
 

![mateShop Logo]()

**mateShop** es una tienda en línea construida con **Angular**. Esta aplicación permite a los usuarios explorar una variedad de mates, agregar productos a su carrito, realizar compras, y consultar consejos sobre la mejor manera de preparar su mate.

---

## 🌟 **Características** ✨

- 🛍️ **Explora productos**: Visualiza productos en la tienda y conoce sus características.
- 🛒 **Carrito de compras**: Añade productos al carrito, elimina productos y calcula el total.
- 💥 **Ofertas**: Filtra los productos en oferta directamente desde la página principal.
- 📚 **Consejos**: Accede a consejos útiles sobre los distintos tipos de mate y cómo afectan el sabor del mate.
- ✅ **Proceso de compra**: Completa un formulario con tus datos y confirma la compra.

---

## 🛠️ **Tecnologías utilizadas** 🚀

- 🔹 **Angular**: Framework principal para el desarrollo de la aplicación.
- 🔸 **RxJS**: Para manejar la reactividad y el flujo de datos.
- 🔹 **Bootstrap**: Framework CSS utilizado para el diseño responsivo y la interfaz de usuario.
- 🔸 **HttpClient**: Para realizar peticiones HTTP y obtener datos de una API externa.

---

## 🖥️ **Desarrollo** 🧑‍💻

### **Componentes Principales** 🔑

- 🏠 **HomeComponent**: Página principal con los productos en oferta.
- 📋 **mateListadoComponent**: Muestra la lista de productos de mate.
- 📦 **mateDetalleComponent**: Muestra los detalles de un producto específico.
- 🛒 **mateCarritoComponent**: Gestiona el carrito de compras.
- ✅ **mateComprarComponent**: Finaliza la compra del carrito.
- 🧑‍🏫 **ConsejosComponent**: Muestra consejos sobre mate y su preparación.

---

### **Servicios** 💻

- 🔹 **mateDatoService**: Servicio para obtener los productos desde la API.
- 🔸 **mateCarritoService**: Servicio para manejar el carrito de compras.

---

### **Manejo de Estado** 💡

- Utiliza **BehaviorSubject** de RxJS para manejar el estado de la lista de productos y la cantidad total del carrito en tiempo real.

---

## 🌍 **Rutas** 🛣️

- **/home**: Página de inicio con productos en oferta.
- **/listado**: Página con todos los productos disponibles.
- **/detalle/:id**: Página con los detalles de un producto específico.
- **/carrito**: Página para ver el carrito de compras.
- **/comprar**: Página para confirmar la compra.

---

## 🤝 **Contribuciones** 🙌

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. 🍴 Haz un **fork** del repositorio.
2. 🌱 Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. ✏️ Realiza tus cambios.
4. 💾 Haz un **commit** de tus cambios (`git commit -am 'Añadir nueva funcionalidad'`).
5. 📤 **Sube** tus cambios a tu repositorio (`git push origin feature/nueva-funcionalidad`).
6. 📝 Crea un **Pull Request**.

---

## 📝 **Licencia** 📄

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 💬 **Contacta con nosotros** 📧

Si tienes alguna duda o sugerencia, no dudes en [contactarnos](mailto:soporte@mateshop.com). ¡Estamos aquí para ayudarte! 😊
